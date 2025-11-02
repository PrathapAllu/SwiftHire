const statusIndicator = document.getElementById('statusIndicator');
const statusText = document.getElementById('statusText');
const actionButton = document.getElementById('actionButton');
const homeButton = document.getElementById('homeButton');

const { Desktop } = require('terminator.js');
const desktop = new Desktop();

let currentState = 'idle'; // idle, connected, disconnected

function updateUI(state) {
    statusIndicator.className = 'status-indicator';
    statusText.className = 'status-text';

    switch (state) {
        case 'idle':
            statusIndicator.classList.add('idle');
            statusText.textContent = 'Idle';
            actionButton.textContent = 'Start';
            actionButton.className = 'action-button';
            break;
        case 'connected':
            statusIndicator.classList.add('connected');
            statusText.textContent = 'Connected to SwiftHire';
            statusText.classList.add('connected');
            actionButton.textContent = 'Stop';
            actionButton.className = 'action-button stop';
            break;
        case 'disconnected':
            statusIndicator.classList.add('disconnected');
            statusText.textContent = 'Disconnected';
            statusText.classList.add('disconnected');
            actionButton.textContent = 'Start';
            actionButton.className = 'action-button';
            break;
    }
}

actionButton.addEventListener('click', async () => {
    if (currentState === 'idle') {
        // Start connecting
        try {
            await desktop.openApplication('chrome');
            await desktop.openUrl('https://linkedin.com');
        } catch (error) {
            console.error('Automation failed:', error);
        }
        currentState = 'connected';
        updateUI('connected');
    } else if (currentState === 'connected') {
        // Stop and disconnect
        currentState = 'disconnected';
        updateUI('disconnected');
        // After brief delay, reset to idle
        setTimeout(() => {
            currentState = 'idle';
            updateUI('idle');
        }, 2000);
    }
});

homeButton.addEventListener('click', () => {
    // For now, just show an alert. In a real app, this might navigate to home or settings
    alert('Home button clicked!');
});

// Initialize
updateUI('idle');