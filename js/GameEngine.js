/**
 * GameEngine — Estado y lógica central del juego.
 * No toca el DOM. Datos inmutables consultados desde US.CASES.
 */
var US = US || {};

US.GameEngine = class GameEngine {

  constructor() {
    this.caseData = null;
    this.activeSuspectIdx = 0;

    // Runtime state (reset per case)
    this.suspectState = {};
    this.askedQuestions = new Set();
    this.presentedEvidence = {};
    this.detectedContradictions = new Set();
    this.notebook = [];

    // Simple event emitter
    this._listeners = {};
  }

  // ── Events ────────────────────────────────────────

  on(evt, fn) {
    (this._listeners[evt] = this._listeners[evt] || []).push(fn);
  }

  emit(evt, data) {
    (this._listeners[evt] || []).forEach(fn => fn(data));
  }

  // ── Case lifecycle ────────────────────────────────

  loadCase(caseId) {
    const src = US.CASES[caseId];
    if (!src) throw new Error('Case not found: ' + caseId);

    this.caseData = src;
    this.activeSuspectIdx = 0;
    this.askedQuestions = new Set();
    this.detectedContradictions = new Set();
    this.notebook = [];

    this.suspectState = {};
    this.presentedEvidence = {};
    src.suspects.forEach(s => {
      this.suspectState[s.id] = { pressure: 0, suspicion: 0 };
      this.presentedEvidence[s.id] = new Set();
    });

    // Briefing inicial fijado en la libreta
    this._addNote('briefing', src.title,
      'Víctima: ' + src.victim.name + ' · ' + src.scene.location,
      src.intro);
  }

  // ── Getters ───────────────────────────────────────

  getCase()            { return this.caseData; }
  getEvidence()        { return this.caseData.evidence; }
  getSuspects()        { return this.caseData.suspects; }
  getNotebook()        { return this.notebook; }

  getActiveSuspect() {
    return this.caseData.suspects[this.activeSuspectIdx];
  }

  getActiveSuspectState() {
    return this.suspectState[this.getActiveSuspect().id];
  }

  getSuspectState(id)                    { return this.suspectState[id]; }
  isQuestionAsked(qId)                   { return this.askedQuestions.has(qId); }
  isEvidencePresented(suspectId, evId)   { return this.presentedEvidence[suspectId].has(evId); }
  isContradictionDetected(cId)           { return this.detectedContradictions.has(cId); }

  getDetectedContradictions() {
    return this.caseData.contradictions.filter(c => this.detectedContradictions.has(c.id));
  }

  // ── Actions ───────────────────────────────────────

  switchSuspect(index) {
    if (index < 0 || index >= this.caseData.suspects.length) return;
    this.activeSuspectIdx = index;
    this.emit('suspectChanged', this.getActiveSuspect());
  }

  askQuestion(questionId) {
    const suspect = this.getActiveSuspect();
    const state = this.getActiveSuspectState();

    if (state.pressure >= 100) {
      return { blocked: true, reason: 'maxPressure' };
    }
    if (this.askedQuestions.has(questionId)) {
      return { blocked: true, reason: 'alreadyAsked' };
    }

    // Find question in suspect data
    let question = null;
    for (const cat of ['vinculo', 'coartada']) {
      question = suspect.questions[cat].find(q => q.id === questionId);
      if (question) break;
    }
    if (!question) return { blocked: true, reason: 'notFound' };

    this.askedQuestions.add(questionId);
    state.pressure = Math.min(100, state.pressure + question.pressureCost);

    this._addNote('question', suspect.name, question.text, question.response);

    const contradiction = this._checkContradictions(suspect.id);

    return {
      blocked: false,
      response: question.response,
      pressure: state.pressure,
      contradiction: contradiction
    };
  }

  presentEvidence(evidenceId) {
    const suspect = this.getActiveSuspect();
    const state = this.getActiveSuspectState();

    if (state.pressure >= 100) {
      return { blocked: true, reason: 'maxPressure' };
    }
    if (this.presentedEvidence[suspect.id].has(evidenceId)) {
      return { blocked: true, reason: 'alreadyPresented' };
    }

    const evidence = this.caseData.evidence.find(e => e.id === evidenceId);
    const evResp = suspect.evidenceResponses[evidenceId];
    if (!evidence || !evResp) return { blocked: true, reason: 'notFound' };

    this.presentedEvidence[suspect.id].add(evidenceId);
    state.pressure = Math.min(100, state.pressure + evResp.pressureCost);

    this._addNote('evidence', suspect.name, evidence.title, evResp.response);

    const contradiction = this._checkContradictions(suspect.id);

    return {
      blocked: false,
      response: evResp.response,
      evidenceTitle: evidence.title,
      pressure: state.pressure,
      contradiction: contradiction
    };
  }

  resolveCase(who, how, why) {
    const sol = this.caseData.solution;
    const correct = {
      who: who === sol.who,
      how: how === sol.how,
      why: why === sol.why
    };
    const allCorrect = correct.who && correct.how && correct.why;

    let score = 0;
    if (correct.who) score += 40;
    if (correct.how) score += 30;
    if (correct.why) score += 30;

    const totalC = this.caseData.contradictions.length;
    const foundC = this.detectedContradictions.size;
    score = Math.min(100, score + Math.round((foundC / totalC) * 20));

    const rating = score >= 90 ? 'S' : score >= 70 ? 'A' : score >= 50 ? 'B' : score >= 30 ? 'C' : 'F';
    const ratingLabel = {
      S: 'Detective Maestro',
      A: 'Investigador Experto',
      B: 'Agente Competente',
      C: 'Novato con Potencial',
      F: 'El Culpable Ha Escapado'
    }[rating];

    return {
      correct,
      allCorrect,
      score,
      rating,
      ratingLabel,
      accusedWho: who,
      actualWho: sol.who,
      contradictionsFound: foundC,
      totalContradictions: totalC,
      explanation: allCorrect ? this.caseData.correctExplanation : this.caseData.wrongExplanation
    };
  }

  // ── Internal ──────────────────────────────────────

  _checkContradictions(suspectId) {
    for (const c of this.caseData.contradictions) {
      if (c.suspectId !== suspectId) continue;
      if (this.detectedContradictions.has(c.id)) continue;

      const questionMet = c.questionIds.some(qId => this.askedQuestions.has(qId));
      const evidenceMet = this.presentedEvidence[suspectId].has(c.evidenceId);

      if (questionMet && evidenceMet) {
        this.detectedContradictions.add(c.id);
        this.suspectState[suspectId].suspicion += c.suspicionBonus;

        const suspectName = this.caseData.suspects.find(s => s.id === suspectId).name;
        this._addNote('contradiction', suspectName, c.statement, c.proof);

        return c;
      }
    }
    return null;
  }

  _addNote(type, suspectName, detail1, detail2) {
    this.notebook.push({
      type,
      suspectName,
      detail1,
      detail2,
      time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    });
    this.emit('notebookUpdated', this.notebook);
  }
};
