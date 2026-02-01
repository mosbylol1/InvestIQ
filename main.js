// Main Entry Point
import './index.css'
import { initUI } from './src/ui.js'
import { loadConfig } from './src/config.js'

document.addEventListener('DOMContentLoaded', async () => {
    console.log('InvestIQ Initializing...');

    // Load User Configuration
    loadConfig();

    // Initialize UI Components & Event Listeners
    initUI();

});
