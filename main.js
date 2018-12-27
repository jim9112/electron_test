const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
    // create browser windo
    win = new BrowserWindow({width:800, height:600});
    
    // load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

// open devtools
win.webContents.openDevTools();

// resets window on close
win.on('closed', () => {
    min = null;
});
}

// launches window when app is loaded
app.on('ready', createWindow);

// quit when all windows closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});