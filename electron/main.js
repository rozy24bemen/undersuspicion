/*
 * Electron main process — Under Suspicion desktop wrapper.
 *
 * Loads the same index.html the web build uses. No code changes to the
 * game itself — Storage.js / SaveManager continue to use localStorage
 * (which Chromium persists per-app in Electron's userData folder).
 */
'use strict';

const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: '#0a0a0a',
    title: 'Under Suspicion',
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  // Game expects to be served from the file root (relative paths in
  // index.html: css/…, js/…, assets/…). Load it as a file:// URL.
  win.loadFile(path.join(__dirname, '..', 'index.html'));

  // External links (if any get added later) should open in the system
  // browser, not inside the app window.
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  if (isDev) win.webContents.openDevTools({ mode: 'detach' });
}

// Tell the game it is running natively. Read by app.js to skip the
// browser-only anti-copy/devtools blockers — they are pointless once
// the user already has the .exe and only get in the way of debugging.
app.on('ready', () => {
  // Strip default menu so users don't get File/Edit/View/etc.
  Menu.setApplicationMenu(null);
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
