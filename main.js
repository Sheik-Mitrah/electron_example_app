const { log } = require('console')
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.loadFile('index.html')
}
function createWindow1() {
    const win = new BrowserWindow({
        width: 400,
        height: 600,
    })

    win.loadFile('index.html')
}
// app.quit()//imidiately terminate the app
// app.exit([exitCode])
app.whenReady().then(() => {
    createWindow()
    createWindow1()

    const SystemLocale = app.getSystemLocale();
    console.log(SystemLocale, 'SystemLocale');

    const locale = app.getLocale();
    console.log(locale, 'locale');

    const LocaleCountryCode = app.getLocaleCountryCode();
    console.log(LocaleCountryCode, 'LocaleCountryCode');

    //   app.focus([])

    app.on('activate', () => {//mac
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

setTimeout(() => {
    // app.quit()//it terminate the app but it execute before and after quit event
    // app.exit([])//it terminate without ansking any thing to user does't execute event
    //   app.focus([1])// it focused the first window created by the app
    // app.hide()//it shows error on linux ,but in mac it Hides all application windows without minimizing them.
    // app.show()//it shows error on linux ,but in mac it Shows application windows after they were hidden. Does not automatically focus them. 
    // app.relaunch([])//it relaunch the app even if the app is closed ,we can sedule the autostart  

}, 1000);

app.on('window-all-closed', () => {
    console.log("window-all-closed");
    // if (process.platform !== 'darwin') {
    //     app.quit()
    // }
})
app.on('before-quit', (event) => {
    console.log("before-quit");
    // event.preventDefault();
});
app.on('will-quit', (event) => {
    console.log("will-quit");
    // app.relaunch([])
})
app.on('browser-window-blur', (a, b) => {
    // console.log(a,'++',b,'blur');
    console.log("browser-window-blur");
});
app.on('browser-window-focus', (a, b) => {
    // console.log(a,'++',b,'focus');
    console.log("browser-window-focus");
});
app.on('browser-window-created', () => {
    console.log("browser-window-created");
});
app.on('web-contents-created', () => {
    console.log("web-contents-created");
});
const apppath = app.getAppPath();
console.log(apppath, ' app.getAppPath()');
// app.setAppLogsPath('/home/mitrah159/Project/ CF0374/electron_basic_app');
// const arr = ['home', 'appData', 'userData', 'sessionData', 'temp', 'exe', 'module', 'desktop', 'documents', 'downloads', 'music', 'pictures', 'videos', 'recent', 'logs', 'crashDumps']
// arr.forEach((val) => {
//     try {
//         console.log(val, ':', app.getPath(val));
//     } catch (error) {
//         console.log('error', error.message);
//     }
// })
const version = app.getVersion()
console.log(version, 'version');
// app.setName('electron_example_app')
const Name = app.getName()
console.log(Name, 'Name');




