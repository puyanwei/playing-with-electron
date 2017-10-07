const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

// Initializes window
let win;

function createWindow() {
  // Creates browser window
  win = new BrowserWindow({ width: 800, height: 600 });

  // Loads index.html
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // Open devtools
  win.webContents.openDevTools();

  //Sets the window to null when the window is closed
  win.on("closed", () => {
    win = null;
  });
}

// Runs createWindow function
app.on("ready", createWindow);

// Quits when all the windows are closed
// Conditional checks for mac which needs explicit exiting
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
