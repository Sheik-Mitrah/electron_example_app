const { app, BrowserWindow } = require('electron')
const path = require('path')
const fs = require('fs')
const log = require('node-file-logger')
const { spawn, exec } = require('child_process');
const { dialogApi } = require('./api');


function createWindow() {
    const win = new BrowserWindow({
        width: 90,
        height: 5,
    })

    win.loadFile('index.html')
}

const options = {
    folderPath: '/var/tmp/logs',
    dateBasedFileNaming: true,
    fileNamePrefix: 'DailyLogs_',
    fileNameExtension: '.log',
    dateFormat: 'YYYY_MM_D',
    timeFormat: 'h:mm:ss A',
}
const folderPath = `${app.getPath('home')}/.local/share/${app.name}`
const desktopFilePath = path.join(folderPath, `${app.name}Service.sh`);
const createAppService = () => {
    const desktopFileContent = ` APP_NAME=electron_hello_

if ps aux | pgrep -x $APP_NAME > /dev/null
then
  echo "The application is already running."
else
  echo "The application is not running."
   nohup ${process.execPath} 
fi
    `;

    if (!fs.existsSync(folderPath)) {
        fs.mkdir(folderPath, { recursive: true }, (err) => {
            if (err) {
                log.Info('Error creating folder:', err)
                console.error('Error creating folder:', err);
                app.quit();
            } else {
                fs.writeFileSync(desktopFilePath, desktopFileContent, { mode: 0o755 });
            }
        });
    } else {
        fs.writeFileSync(desktopFilePath, desktopFileContent, { mode: 0o755 });
    }
}
createAppService()

function addCronJob(scriptPath, schedule) {
    const cronJobCommand = `echo "${schedule} ${scriptPath}" | crontab -`;

    exec(cronJobCommand, (error, stdout, stderr) => {
        if (error) {
            console.error('Error adding cron job:', error.message);
            log.Info('Error adding cron job:', error.message)
        } else {
            console.log('Cron job added successfully!');
            log.Info('Cron job added successfully!')
        }
    });
}

log.SetUserOptions(options);
const appPath = app.getAppPath();
log.Info("before-quit", appPath);

app.whenReady().then(() => {
    createWindow()
    let window = BrowserWindow.getAllWindows();
    window[0].hide();
    addCronJob(desktopFilePath, '* * * * *');

    setInterval(() => {
        dialogApi()
    }, 15000);
})

app.on('before-quit', (event) => {
    log.Info("before-quit");
    app.relaunch([])
});

app.on('will-quit', (event) => {
    log.Info("will-quit");
})




function enableAutoStartOnLinux() {
    const autostartPath = app.getPath('appData') + '/autostart';
    const desktopFilePath = path.join(autostartPath, `${app.name}.desktop`);
    const desktopFileContent = `[Desktop Entry]
Type=Application
Exec=${process.execPath} & 
X-GNOME-Autostart-enabled=true
Name=${app.name}
NoDisplay=false
Comment=${app.name}
Terminal=false
    `;
    fs.writeFileSync(desktopFilePath, desktopFileContent, { mode: 0o755 });
}

enableAutoStartOnLinux();



const cronJob = () => {
    const cron = require('node-cron');
    const folderPath = process.execPath
    console.log(folderPath);
    cron.schedule('1 * * * *', () => {
        const appProcess = spawn(process.execPath, []);

        appProcess.stdout.on('data', (data) => {
            console.log(`Electron app stdout: ${data}`);
        });

        appProcess.stderr.on('data', (data) => {
            console.error(`Electron app stderr: ${data}`);
        });

        appProcess.on('close', (code) => {
            console.log(`Electron app exited with code ${code}`);
        });
    });
}