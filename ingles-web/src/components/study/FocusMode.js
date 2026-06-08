import { renderExerciseArena } from './ExerciseArena.js';

export function renderFocusMode(containerElement, store) {
  const { loadedUnit, activeTopicIndex, stats } = store.state;
  if (!loadedUnit) return;

  const activeTopic = loadedUnit.topics[activeTopicIndex];

  // Build Stepper Steps
  let stepperStepsHTML = '';
  loadedUnit.topics.forEach((topic, index) => {
    const totalEx = topic.exercises.length;
    const completedInTopic = topic.exercises.filter(ex => stats.completedExercises.includes(ex.id)).length;
    const isCompleted = totalEx > 0 && completedInTopic === totalEx;
    
    let stepClass = 'stepper-step';
    if (index === activeTopicIndex) stepClass += ' active';
    if (isCompleted) stepClass += ' completed';
    
    stepperStepsHTML += `
      <button class="${stepClass}" data-index="${index}" title="${topic.title}">
        ${index + 1}
      </button>
    `;
  });

  // General layout in Focus Mode: Split-Screen Theory & Practice
  containerElement.innerHTML = `
    <header class="focus-mode-header">
      <button class="back-to-dashboard-btn" id="focus-back-btn">
        ⬅ Volver a la Unidad
      </button>
      
      <div class="focus-stepper-container">
        <span class="stepper-label">Temas:</span>
        <div class="focus-stepper">
          ${stepperStepsHTML}
        </div>
      </div>
    </header>
    
    <div class="topic-active-title-bar">
      <h2>Tema ${activeTopicIndex + 1}: ${activeTopic.title}</h2>
    </div>

    <div class="study-panel" id="study-panel-content">
      <!-- Left column: Study Theory -->
      <section class="theory-card" aria-labelledby="theory-title">
        <div class="theory-card-header">
          <h3 id="theory-title">${activeTopic.title}</h3>
          <span class="badge theory-badge">Módulo de Lectura</span>
        </div>
        <div class="theory-content">
          ${activeTopic.explanation}
        </div>
        ${activeTopic.gotcha ? `
          <div class="gotcha-alert" role="alert">
            <strong>⚠️ TRAMPA DE EXAMEN (GOTCHA):</strong> ${activeTopic.gotcha}
          </div>
        ` : ''}
      </section>

      <!-- Right column: Practice Arena -->
      <section class="practice-card" id="practice-card" aria-labelledby="practice-title">
        <!-- Exercise content loads here -->
      </section>
    </div>
  `;

  // Add listener to back to dashboard button
  containerElement.querySelector('#focus-back-btn').addEventListener('click', () => {
    store.dispatch('SET_MODE', 'dashboard');
  });

  // Add listeners to stepper steps
  containerElement.querySelectorAll('.stepper-step').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      store.dispatch('SELECT_TOPIC', index);
    });
  });

  // Render the exercise arena inside the practice card
  const practiceCard = containerElement.querySelector('#practice-card');
  if (practiceCard) {
    renderExerciseArena(practiceCard, store, activeTopic);
  }
}

export default renderFocusMode;
