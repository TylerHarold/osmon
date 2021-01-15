const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 480,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      webviewTag: true,
    },
    icon: __dirname + "/resources/img/icon.png",
  });

  win.setMenu(null);
  win.setMaximizable(false);
  win.setResizable(false);

  win.loadFile(path.join(__dirname, 'html/index.html'));

  win.webContents.openDevTools()
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


