#!/usr/bin/env node
/*
 * Launches Electron with ELECTRON_RUN_AS_NODE forcibly disabled.
 *
 * That env var is set globally on this machine (probably by another tool)
 * and turns Electron into plain Node — no GUI, no main process. We strip
 * it before spawning so `npm run electron:dev` always boots the window.
 */
'use strict';

const { spawn } = require('child_process');
const path = require('path');

const electron = require('electron'); // resolves to the binary path
const env = Object.assign({}, process.env);
delete env.ELECTRON_RUN_AS_NODE;

const child = spawn(electron, [path.resolve(__dirname, '..')], {
  stdio: 'inherit',
  env,
});

child.on('close', code => process.exit(code == null ? 1 : code));
