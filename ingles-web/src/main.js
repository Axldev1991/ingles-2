import './style.css';
import { appStore } from './store/appStore.js';
import { renderHeader } from './components/Header.js';
import { renderSidebar } from './components/Sidebar.js';
import { renderStudyPanel } from './components/StudyPanel.js';
import { renderWelcomeScreen } from './components/WelcomeScreen.js';

function renderApp(state) {
  // 1. Render Header stats
  renderHeader(appStore);

  // 2. Render Sidebar
  const sidebarContainer = document.getElementById('unit-list');
  if (sidebarContainer) {
    renderSidebar(sidebarContainer, appStore);
  }

  // 3. Render Main View based on active state
  const appView = document.getElementById('app-view');
  if (appView) {
    if (state.activeUnitId === null) {
      renderWelcomeScreen(appView, appStore);
    } else {
      renderStudyPanel(appView, appStore);
    }
  }
}

function init() {
  // Subscribe main render routine to store modifications
  appStore.subscribe(renderApp);

  // Setup global event: click on logo container returns to welcome screen
  const logo = document.querySelector('.logo-container');
  if (logo) {
    logo.addEventListener('click', () => {
      appStore.dispatch('SHOW_WELCOME');
    });
  }

  // Trigger initial paint
  renderApp(appStore.state);
}

// Ensure clean bootstrapping
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
