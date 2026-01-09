const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadURL("https://dropcart-webapp.vercel.app");
}

app.whenReady().then(createWindow);
