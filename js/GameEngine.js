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
    this.discoveredPhoneNumbers = new Set();
    // { 'uv-light': Set(['ev-foto1', ...]), 'desk-phone': Set([...]) }
    this.toolDiscoveries = {};
    // Tabla de argumentación (caso 7): Set de pares correctamente conectados
    this.matchedArguments = new Set();
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
    this.discoveredPhoneNumbers = new Set();
    this.notebook = [];
    this._caseStartedAt = Date.now();

    this.suspectState = {};
    this.presentedEvidence = {};
    this.toolDiscoveries = {};
    this.matchedArguments = new Set();
    src.suspects.forEach(s => {
      this.suspectState[s.id] = { pressure: 0, suspicion: 0 };
      this.presentedEvidence[s.id] = new Set();
    });

    // Briefing inicial fijado en la libreta
    this._addNote('briefing', src.title,
      'Víctima: ' + src.victim.name + ' · ' + src.scene.location,
      src.intro);

    if (US.Telemetry) {
      US.Telemetry.log('case-start', { caseId: caseId });
      if (US.MetaStore) {
        const m = US.MetaStore.get();
        US.Telemetry.log('meta-snapshot', {
          caseId:     caseId,
          phase:      'case-start',
          sinceridad: m.sinceridad,
          integridad: m.integridad,
          lucidez:    m.lucidez,
          memoria:    Object.keys(m.memoria || {}).filter(k => m.memoria[k])
        });
      }
    }

    this.emit('caseLoaded', this.caseData);
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

    const pressureBefore = state.pressure;
    this.askedQuestions.add(questionId);
    state.pressure = Math.min(100, state.pressure + question.pressureCost);

    this._addNote('question', suspect.name, question.text, question.response);

    if (US.Telemetry) {
      US.Telemetry.log('ask', {
        caseId:         this.caseData.id,
        suspectId:      suspect.id,
        questionId:     questionId,
        pressureBefore: pressureBefore,
        pressureAfter:  state.pressure
      });
    }

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

    const pressureBefore = state.pressure;
    this.presentedEvidence[suspect.id].add(evidenceId);
    state.pressure = Math.min(100, state.pressure + evResp.pressureCost);

    this._addNote('evidence', suspect.name, evidence.title, evResp.response);

    if (US.Telemetry) {
      US.Telemetry.log('present', {
        caseId:         this.caseData.id,
        suspectId:      suspect.id,
        evidenceId:     evidenceId,
        pressureBefore: pressureBefore,
        pressureAfter:  state.pressure
      });
    }

    const contradiction = this._checkContradictions(suspect.id);

    return {
      blocked: false,
      response: evResp.response,
      evidenceTitle: evidence.title,
      pressure: state.pressure,
      contradiction: contradiction
    };
  }

  resolveCase(who, how, why, who2) {
    const sol = this.caseData.solution;

    const correct = {
      who: who === sol.who,
      how: how === sol.how,
      why: why === sol.why,
      // Para mecánica de cómplice/doble culpable
      who2: sol.who2 ? (who2 === sol.who2) : true
    };
    const allCorrect = correct.who && correct.how && correct.why && correct.who2;

    let score = 0;
    // Reparto según si hay doble culpable o no
    if (sol.who2) {
      if (correct.who)  score += 25;
      if (correct.who2) score += 25;
      if (correct.how)  score += 25;
      if (correct.why)  score += 25;
    } else {
      if (correct.who) score += 40;
      if (correct.how) score += 30;
      if (correct.why) score += 30;
    }

    const totalC = this.caseData.contradictions.length;
    const foundC = this.detectedContradictions.size;
    score = Math.min(100, score + Math.round((foundC / Math.max(totalC, 1)) * 20));

    const rating = score >= 90 ? 'S' : score >= 70 ? 'A' : score >= 50 ? 'B' : score >= 30 ? 'C' : 'F';
    const ratingLabel = {
      S: 'Detective Maestro',
      A: 'Investigador Experto',
      B: 'Agente Competente',
      C: 'Novato con Potencial',
      F: 'El Culpable Ha Escapado'
    }[rating];

    if (US.Telemetry) {
      US.Telemetry.log('accuse', {
        caseId:              this.caseData.id,
        who:                 who,
        who2:                who2 || null,
        how:                 how,
        why:                 why,
        actualWho:           sol.who,
        actualWho2:          sol.who2 || null,
        correct:             allCorrect,
        score:               score,
        rating:              rating,
        contradictionsFound: foundC,
        totalContradictions: totalC
      });
      US.Telemetry.log('case-end', {
        caseId:     this.caseData.id,
        durationMs: this._caseStartedAt ? (Date.now() - this._caseStartedAt) : null
      });
    }

    return {
      correct,
      allCorrect,
      score,
      rating,
      ratingLabel,
      accusedWho:  who,
      accusedWho2: who2 || null,
      actualWho:   sol.who,
      actualWho2:  sol.who2 || null,
      contradictionsFound: foundC,
      totalContradictions: totalC,
      explanation: allCorrect ? this.caseData.correctExplanation : this.caseData.wrongExplanation
    };
  }

  // ── Herramientas ─────────────────────────────────

  useToolOnEvidence(toolId, evidenceId) {
    const evidence = this.caseData.evidence.find(e => e.id === evidenceId);
    const toolEntry = evidence && evidence.toolData && evidence.toolData[toolId];

    if (!toolEntry) return { blocked: true, reason: 'nothingToFind' };

    if (!this.toolDiscoveries[toolId]) this.toolDiscoveries[toolId] = new Set();
    if (this.toolDiscoveries[toolId].has(evidenceId)) {
      return { blocked: true, reason: 'alreadyDiscovered' };
    }

    this.toolDiscoveries[toolId].add(evidenceId);
    this._addNote('tool', toolId === 'uv-light' ? 'Luz UV' : toolId, evidence.title, toolEntry.reveals);

    if (US.Telemetry) {
      US.Telemetry.log('tool-used', {
        caseId:     this.caseData.id,
        toolId:     toolId,
        evidenceId: evidenceId
      });
    }

    // Comprobar contradicción ligada al hallazgo
    const contradiction = toolEntry.contradictionId
      ? this._checkContradictionById(toolEntry.contradictionId, toolEntry.suspectId || null)
      : null;

    this.emit('toolDiscovery', { toolId, evidenceId, reveals: toolEntry.reveals });

    return { blocked: false, reveals: toolEntry.reveals, contradiction };
  }

  isToolDiscovered(toolId, evidenceId) {
    return !!(this.toolDiscoveries[toolId] && this.toolDiscoveries[toolId].has(evidenceId));
  }

  // Tabla de argumentación (caso 7)
  matchArgument(statementId, evidenceId) {
    const argTable = this.caseData.argumentationTable;
    if (!argTable) return { valid: false };

    const entry = argTable.find(a => a.statementId === statementId && a.evidenceId === evidenceId);
    const key = statementId + '::' + evidenceId;

    if (!entry) return { valid: false, alreadyMatched: false };
    if (this.matchedArguments.has(key)) return { valid: true, alreadyMatched: true };

    this.matchedArguments.add(key);
    this._addNote('argumentation', entry.suspectId, entry.statement, entry.proof);

    if (US.Telemetry) {
      US.Telemetry.log('argument-matched', {
        caseId:      this.caseData.id,
        statementId: statementId,
        evidenceId:  evidenceId
      });
    }

    return { valid: true, alreadyMatched: false, entry };
  }

  getMatchedArguments() {
    return this.matchedArguments.size;
  }

  getRequiredArguments() {
    return this.caseData.argumentationTable ? this.caseData.argumentationTable.length : 0;
  }

  _checkContradictionById(contradictionId, suspectId) {
    const c = this.caseData.contradictions.find(x => x.id === contradictionId);
    if (!c || this.detectedContradictions.has(c.id)) return null;

    const sid = suspectId || c.suspectId;
    this.detectedContradictions.add(c.id);
    if (this.suspectState[sid]) this.suspectState[sid].suspicion += c.suspicionBonus;

    const suspectName = (this.caseData.suspects.find(s => s.id === sid) || {}).name || sid;
    this._addNote('contradiction', suspectName, c.statement, c.proof);

    if (US.Telemetry) {
      US.Telemetry.log('contradiction-detected', {
        caseId:          this.caseData.id,
        suspectId:       sid,
        contradictionId: c.id,
        isRedHerring:    !!c.isRedHerring
      });
    }

    return c;
  }

  // ── Phone Tools ──────────────────────────────────

  discoverPhoneNumber(phoneId) {
    if (!this.caseData.phoneNumbers) return false;
    if (this.discoveredPhoneNumbers.has(phoneId)) return false;
    this.discoveredPhoneNumbers.add(phoneId);
    this.emit('phoneNumberDiscovered', { phoneId });
    return true;
  }

  getDiscoveredPhoneNumbers() {
    return Array.from(this.discoveredPhoneNumbers);
  }

  getPhoneNumbers() {
    return this.caseData.phoneNumbers || [];
  }

  // ── Persistencia (snapshot del caso en curso) ─────

  /**
   * Devuelve un snapshot serializable del estado del caso en curso. No
   * incluye caseData (eso vive en US.CASES por id). Sets convertidos a
   * arrays para que JSON.stringify funcione. Incluye los hallazgos de
   * herramientas y la tabla de argumentación introducidos en Acto 2.
   */
  serialize() {
    if (!this.caseData) return null;

    const presentedPlain = {};
    Object.keys(this.presentedEvidence).forEach(suspectId => {
      presentedPlain[suspectId] = Array.from(this.presentedEvidence[suspectId]);
    });

    const toolDiscoveriesPlain = {};
    Object.keys(this.toolDiscoveries || {}).forEach(toolId => {
      toolDiscoveriesPlain[toolId] = Array.from(this.toolDiscoveries[toolId]);
    });

    return {
      caseId:                 this.caseData.id,
      activeSuspectIdx:       this.activeSuspectIdx,
      caseStartedAt:          this._caseStartedAt || null,
      suspectState:           JSON.parse(JSON.stringify(this.suspectState)),
      askedQuestions:         Array.from(this.askedQuestions),
      presentedEvidence:      presentedPlain,
      detectedContradictions: Array.from(this.detectedContradictions),
      discoveredPhoneNumbers: Array.from(this.discoveredPhoneNumbers),
      toolDiscoveries:        toolDiscoveriesPlain,
      matchedArguments:       Array.from(this.matchedArguments || []),
      notebook:               this.notebook.slice()
    };
  }

  /**
   * Rehidrata el motor desde un snapshot generado por serialize().
   * Devuelve true si el caso al que se refiere el snapshot existe en
   * US.CASES y la restauración fue posible.
   */
  restore(snapshot) {
    if (!snapshot || !snapshot.caseId) return false;
    const src = US.CASES && US.CASES[snapshot.caseId];
    if (!src) return false;

    this.caseData         = src;
    this.activeSuspectIdx = typeof snapshot.activeSuspectIdx === 'number' ? snapshot.activeSuspectIdx : 0;
    this._caseStartedAt   = snapshot.caseStartedAt || Date.now();

    // suspectState debe contener TODOS los sospechosos del caso. Si en el
    // snapshot falta alguno (caso modificado entre versiones) lo inicializamos.
    this.suspectState = {};
    src.suspects.forEach(s => {
      const saved = snapshot.suspectState && snapshot.suspectState[s.id];
      this.suspectState[s.id] = saved
        ? { pressure: saved.pressure || 0, suspicion: saved.suspicion || 0 }
        : { pressure: 0, suspicion: 0 };
    });

    this.askedQuestions = new Set(Array.isArray(snapshot.askedQuestions) ? snapshot.askedQuestions : []);

    this.presentedEvidence = {};
    src.suspects.forEach(s => {
      const saved = snapshot.presentedEvidence && snapshot.presentedEvidence[s.id];
      this.presentedEvidence[s.id] = new Set(Array.isArray(saved) ? saved : []);
    });

    this.detectedContradictions = new Set(Array.isArray(snapshot.detectedContradictions) ? snapshot.detectedContradictions : []);
    this.discoveredPhoneNumbers = new Set(Array.isArray(snapshot.discoveredPhoneNumbers) ? snapshot.discoveredPhoneNumbers : []);

    // Hallazgos por herramienta: { 'uv-light': Set([...]), ... }
    this.toolDiscoveries = {};
    if (snapshot.toolDiscoveries && typeof snapshot.toolDiscoveries === 'object') {
      Object.keys(snapshot.toolDiscoveries).forEach(toolId => {
        this.toolDiscoveries[toolId] = new Set(snapshot.toolDiscoveries[toolId] || []);
      });
    }

    this.matchedArguments = new Set(Array.isArray(snapshot.matchedArguments) ? snapshot.matchedArguments : []);
    this.notebook         = Array.isArray(snapshot.notebook) ? snapshot.notebook.slice() : [];

    this.emit('caseLoaded', this.caseData);
    this.emit('notebookUpdated', this.notebook);
    return true;
  }

  // ── Internal ──────────────────────────────────────

  _checkContradictions(suspectId) {
    for (const c of this.caseData.contradictions) {
      if (c.suspectId !== suspectId) continue;
      if (this.detectedContradictions.has(c.id)) continue;

      const questionMet = c.questionIds.some(qId => this.askedQuestions.has(qId));
      const evidenceMet = this.presentedEvidence[suspectId].has(c.evidenceId);

      // Mecánica de contradicciones cruzadas (introducida en caso 4): para
      // disparar la contradicción es necesario haber preguntado al menos una
      // cosa a CADA uno de los sospechosos listados en requiredFromSuspects.
      // Si el campo no existe, el comportamiento es el de siempre (caso 1-3).
      const crossMet = !c.requiredFromSuspects
        || c.requiredFromSuspects.every(id => this._hasAskedAnyQuestion(id));

      if (questionMet && evidenceMet && crossMet) {
        this.detectedContradictions.add(c.id);
        this.suspectState[suspectId].suspicion += c.suspicionBonus;

        const suspectName = this.caseData.suspects.find(s => s.id === suspectId).name;
        this._addNote('contradiction', suspectName, c.statement, c.proof);

        if (US.Telemetry) {
          US.Telemetry.log('contradiction-detected', {
            caseId:          this.caseData.id,
            suspectId:       suspectId,
            contradictionId: c.id,
            isRedHerring:    !!c.isRedHerring
          });
        }

        return c;
      }
    }
    return null;
  }

  _hasAskedAnyQuestion(suspectId) {
    const suspect = this.caseData.suspects.find(s => s.id === suspectId);
    if (!suspect) return false;
    for (const cat of ['vinculo', 'coartada']) {
      const list = suspect.questions[cat] || [];
      for (const q of list) {
        if (this.askedQuestions.has(q.id)) return true;
      }
    }
    return false;
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
