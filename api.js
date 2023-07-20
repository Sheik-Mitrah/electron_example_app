const { app, BrowserWindow, BrowserView, clipboard, dialog, Notification, screen } = require('electron')

const appApi = () => {

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
    // const version = app.getVersion()
    // console.log(version, 'version');
    // app.setName('electron_example_app')
    // const Name = app.getName()
    // console.log(Name, 'Name');

    // const list=app.getJumpListSettings()
    // console.log(list,'list');
    // hasLock = app.hasSingleInstanceLock()
    // console.log(hasLock,'hasLock');


    // app.quit()//imidiately terminate the app
    // app.exit([exitCode])

    // const SystemLocale = app.getSystemLocale();
    // console.log(SystemLocale, 'SystemLocale');

    // const locale = app.getLocale();
    // console.log(locale, 'locale');

    // const LocaleCountryCode = app.getLocaleCountryCode();
    // console.log(LocaleCountryCode, 'LocaleCountryCode');

    // const promatric=app.getAppMetrics()
    // console.log(promatric,'promatric');

    // const gpu=app.getGPUFeatureStatus()
    // console.log(gpu,'gpu');

    // const getBadgeCount=app.getBadgeCount()
    // console.log(getBadgeCount,'getBadgeCount');

    // const Accessibility=app.isAccessibilitySupportEnabled()
    // console.log(Accessibility,'Accessibility');
    // // app.showEmojiPanel()
    // app.showAboutPanel()
    // console.log(app.userAgentFallback,'userAgentFallback')

    setTimeout(() => {
        // app.quit()//it terminate the app but it execute before and after quit event
        // app.exit([])//it terminate without ansking any thing to user does't execute event
        //   app.focus([1])// it focused the first window created by the app
        // app.hide()//it shows error on linux ,but in mac it Hides all application windows without minimizing them.
        // app.show()//it shows error on linux ,but in mac it Shows application windows after they were hidden. Does not automatically focus them. 
        // app.relaunch([])//it relaunch the app even if the app is closed ,we can sedule the autostart  

    }, 1000);
}

const screenApi = () => {
    screen.on('display-added', (event, display) => {
        console.log('screen', event, display);
    });

    setInterval(() => {
        const point = screen.getCursorScreenPoint();
        console.log(point, 'point');
    }, 3000);
    console.log(screen.getPrimaryDisplay(), 'PrimaryDisplay');
    console.log(screen.getAllDisplays(), 'getAllDisplays');
    console.log(screen.getDisplayNearestPoint({ x: 0, y: 0 }), 'getDisplayNearestPoint');
}

const dialogApi = () => {
    //  try {
    //     dialog.showCertificateTrustDialog(win, {
    //         certificate : {
    //             data: 'PEM encoded data',
    //             issuer: {
    //                 commonName: 'Common Name.',
    //                 organizations: ['Organization names'],
    //                 organizationUnits: [' Organization Unit names'],
    //                 locality: 'Locality',
    //                 state: 'State or province.',
    //                 country: 'Country or region.'
    //             },
    //             issuerName: 'Issuers Common Name',
    //             issuerCert: 'Issuer certificate (if not self-signed)',
    //             subject:  {
    //                 commonName: 'Common Name.',
    //                 organizations: ['Organization names'],
    //                 organizationUnits: [' Organization Unit names'],
    //                 locality: 'Locality',
    //                 state: 'State or province.',
    //                 country: 'Country or region.'
    //             },
    //             subjectName: 'Subjects Common Name',
    //             serialNumber: 'Hex value represented string',
    //             validStart: 11111,
    //             validExpiry: 22222,
    //             fingerprint: 'Fingerprint of the certificate'
    //         }
    //         , message: 'The message to display to the user.'
    //     })
    //  } catch (error) {
    //     console.log(error,'error');
    //  }

    const option = {
        message: "string - Content of the message box.",
        type: 'error',
        buttons: ['ok', 'cancel'],
        title: 'alert frend app has an message',
        detail: 'pls check up the system moniter click ok to open the app now,pls check up the system moniter click ok to open the app now,pls check up the system moniter click ok to open the app now',
        checkboxLabel: 'checkbox label.',
        checkboxChecked: true,
    }
    dialog.showMessageBox('', option)
    // dialog.showSaveDialog('', {
    //     message: "string - Content of the message box.",
    //     title: 'The dialog title. Cannot be displayed on some Linux desktop environments',
    //     defaultPath :'/',
    //     buttonLabel :'getIt',
    //     filters : [
    //         { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
    //         { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
    //         { name: 'Custom File Type', extensions: ['as'] },
    //         { name: 'All Files', extensions: ['*'] }
    //       ],
    //       properties: ['openFile', 'openDirectory'],
    // })
    // dialog.showErrorBox('title of the error box', 'content of the error box');
    // dialog.showCertificateTrustDialog(createWindow(), {
    //     certificate: {
    //         data: 'PEM encoded data',
    //         issuer: {
    //             commonName: 'Common Name.',
    //             organizations: ['Organization names'],
    //             organizationUnits: [' Organization Unit names'],
    //             locality: 'Locality',
    //             state: 'State or province.',
    //             country: 'Country or region.'
    //         },
    //         issuerName: 'Issuers Common Name',
    //         issuerCert: 'Issuer certificate (if not self-signed)',
    //         subject:  {
    //             commonName: 'Common Name.',
    //             organizations: ['Organization names'],
    //             organizationUnits: [' Organization Unit names'],
    //             locality: 'Locality',
    //             state: 'State or province.',
    //             country: 'Country or region.'
    //         },
    //         subjectName: 'Subjects Common Name',
    //         serialNumber: 'Hex value represented string',
    //         validStart: 1111,
    //         validExpiry: 2222,
    //         fingerprint: 'Fingerprint of the certificate'
    //     }, message: 'The message to display to the user.'
    // })
    // console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))


}

const notificationApi = () => {
    const notifications = (global['notifications'] = global['notifications'] || []);
    console.log(notifications, 'notifications');
    // const support = Notification.isSupported()
    // console.log(support, 'support');
    const notification = new Notification({
        title: 'A title for the notification',
        body: 'The body text of the notification',
        silent: false,
        icon: '',
        hasReply: true,
        timeoutType: 'never',
        urgency: 'critical',
    });
    notification.on('show', () => {
        console.log('show');
    });
    notification.on('click', () => {
        console.log('click');
    });
    notification.on('close', () => {
        console.log('close');
    });
    notification.on('reply', (event, value) => {
        console.log('reply', event, value);
    });
    notification.on('action', (event, value) => {
        console.log('action', event, value);
    });
    notification.show();

}

const clipboardApi = () => {
    //   app.focus([])
    // clipboard.write({
    //     text: 'test',
    //     html: '<b>Hi</b>',
    //     rtf: '{\\rtf1\\utf8 text}',
    //     bookmark: 'a title'
    //   })
    // const itext = '<b>Hi</b>'
    // // clipboard.writeHTML(itext)
    // const text = clipboard.readText()
    // const htmltext = clipboard.readHTML()
    // // clipboard.writeBookmark('Electron_Homepage', 'https://electronjs.org')
    // const bookmark=clipboard.readBookmark()
    // const formats = clipboard.availableFormats()
    // console.log(text,'+',htmltext,'+',bookmark,'+',formats,'text')
}

module.exports={dialogApi,notificationApi,appApi}