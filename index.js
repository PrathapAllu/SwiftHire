function showAlert() {
    alert('Welcome to SwiftHire Desktop! Ready to start hiring efficiently.');
}

function openDevTools() {
    const { remote } = require('electron');
    if (remote) {
        remote.getCurrentWindow().webContents.openDevTools();
    }
}

// Log app info when loaded
console.log('SwiftHire Desktop App Loaded Successfully!');
console.log('Electron Version:', process.versions.electron);
console.log('Node Version:', process.versions.node);
console.log('Chrome Version:', process.versions.chrome);