import { initUI } from './app/ui.js'
import { loadConfig } from './app/config.js'

document.addEventListener('DOMContentLoaded', async () => {
    console.log('InvestIQ Initializing...');

    // Load User Configuration
    loadConfig();

    // Initialize UI Components & Event Listeners
    initUI();

});
