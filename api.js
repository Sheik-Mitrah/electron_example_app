const { dialog, Notification } = require("electron");

const dialogApi = () => {
    const option = {
        message: "Electron example app is working fine 🤝",
        type: 'info',
        buttons: ['ok', 'cancel'],
        title: 'info about Electron example app',
        detail: '👍👍👍',
        // checkboxLabel: 'checkbox label.',
        // checkboxChecked: true,
    }
    dialog.showMessageBox('', option)
  }

const notificationApi = () => {
    const notification = new Notification({
        title: 'A title for the notification',
        body: 'The body text of the notification',
        silent: false,
        icon: '',
        hasReply: true,
        // timeoutType: 'default',
        urgency: 'critical',
    });
    notification.show();
}

module.exports={dialogApi,notificationApi}