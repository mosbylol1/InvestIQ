import { initUI } from './src_modules/ui.js'
import { loadConfig } from './src_modules/config.js'

document.addEventListener('DOMContentLoaded', async () => {
    console.log('InvestIQ Initializing...');

    // Load User Configuration
    loadConfig();

    // Initialize UI Components & Event Listeners
    initUI();

});
