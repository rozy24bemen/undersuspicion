#!/usr/bin/env node
/*
 * Wrapper around electron-builder that ensures ELECTRON_RUN_AS_NODE is
 * not propagated to child processes. See scripts/run-electron.js for why.
 */
'use strict';

const { spawn } = require('child_process');
const path = require('path');

const env = Object.assign({}, process.env);
delete env.ELECTRON_RUN_AS_NODE;

const builder = path.join(__dirname, '..', 'node_modules', '.bin',
  process.platform === 'win32' ? 'electron-builder.cmd' : 'electron-builder');

const args = process.argv.slice(2);
const child = spawn(builder, args, { stdio: 'inherit', env, shell: process.platform === 'win32' });
child.on('close', code => process.exit(code == null ? 1 : code));
