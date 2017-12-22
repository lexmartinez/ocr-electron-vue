const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let screen;

const renderApp = () => {
 // create the browser window
 screen = new BrowserWindow({titleBarStyle: 'hidden', width: 900, height: 600, maximizable: false,backgroundColor: '#343434',})
 // render the required website/entrypoint
 screen.loadURL('http://localhost:8080/')

 // dereference the screen object when the window is closed
 screen.on('closed', () => {
  screen = null;
 });
}

// call the renderApp() method when Electron has finished initializing
app.on('ready', ()=>{
 setTimeout(renderApp, 3000)
});

// when all windows are closed, quit the application on Windows/Linux
app.on('window-all-closed', () => {
 // only quit the application on OS X if the user hits cmd + q
 if (process.platform !== 'darwin') {
  app.quit()
 }
});

app.on('activate', () => {
 // re-create the screen if the dock icon is clicked in OS X and no other
 // windows were open
 if (screen === null) {
  renderApp()
 }
});
