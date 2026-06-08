import { renderUnitDashboard } from './study/UnitDashboard.js';
import { renderFocusMode } from './study/FocusMode.js';

export function renderStudyPanel(containerElement, store) {
  const { isLoading, loadedUnit, activeMode, activeUnitId, stats } = store.state;

  if (isLoading) {
    containerElement.innerHTML = `
      <div class="loading-container" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 300px; gap: 16px;">
        <div class="spinner" style="width: 50px; height: 50px; border: 4px solid var(--accent-light); border-top-color: var(--primary); border-radius: 50%; animation: spin 1s linear infinite;"></div>
        <p style="color: var(--text-muted);">Cargando unidad de estudio...</p>
      </div>
      <style>
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      </style>
    `;
    return;
  }

  if (!loadedUnit) return;

  // Case: Unit Complete Screen
  if (activeMode === 'unit-complete') {
    const score = stats.masteryScores[activeUnitId] || 0;
    containerElement.innerHTML = `
      <article class="welcome-screen mastery-complete-card">
        <span style="font-size: 4rem;" role="img" aria-label="Trophy">🏆</span>
        <h2>¡Unidad Finalizada Exitosamente!</h2>
        <p>Completaste todos los temas y ejercicios en <strong>${loadedUnit.title}</strong>.</p>
        
        <div class="mastery-score" style="font-size: 4rem; font-weight: 800; color: var(--primary); margin: 20px 0;">${score}%</div>
        <p style="color: var(--text-muted); margin-bottom: 24px;">Tu nivel de dominio de la unidad quedó registrado en el hub.</p>
        
        <button class="start-btn" id="back-home-btn">Volver al Inicio</button>
      </article>
    `;

    containerElement.querySelector('#back-home-btn').addEventListener('click', () => {
      store.dispatch('SHOW_WELCOME');
    });
    return;
  }

  // Case: Unit Dashboard View
  if (activeMode === 'dashboard') {
    renderUnitDashboard(containerElement, store);
    return;
  }

  // Case: Study Focus Mode (Theory + Exercises)
  renderFocusMode(containerElement, store);
}

export default renderStudyPanel;
