const { log } = require('console')
const { app, BrowserWindow, BrowserView, powerMonitor} = require('electron')
const path = require('path')
const { dialog, dialogApi, notificationApi, appApi } = require('./api')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.loadFile('index.html')
    return win
}
 function createWindow1() {
    const win = new BrowserWindow({
        width: 400,
        height: 600,
    })
    const view = new BrowserView()
    win.setBrowserView(view)
    view.setBounds({ x: 20, y: 30, width: 300, height: 300 })
    // view.setAutoResize({width:true, height: true,horizontal:true,vertical:true })
    view.setBackgroundColor('red')
    // view.webContents.loadURL('https://electronjs.org')
    view.webContents.loadFile('./index.html')
    // win.loadFile('index.html')
}

app.whenReady().then(() => {
    // createWindow()
    createWindow1()
    // appApi()
    // dialogApi()
    // notificationApi()

    app.on('before-quit', (event) => {
        console.log("before-quit");
        // event.preventDefault();
        app.relaunch([])
    });
    app.setLoginItemSettings({
        openAtLogin: true,
        openAsHidden: false, // Set this to true if you want the app to run in the background
      });
    app.on('will-quit', (event) => {
        console.log("will-quit");
    })
})

