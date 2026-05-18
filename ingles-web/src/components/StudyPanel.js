export function renderStudyPanel(containerElement, store) {
  const { isLoading, loadedUnit, activeTopicIndex, activeExerciseIndex, activeMode, selectedOption, userAnswerText, hasSubmitted, isCorrect, activeUnitId, stats } = store.state;

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
    const mastery = stats.masteryScores[activeUnitId] || 0;
    
    let topicCardsHTML = '';
    loadedUnit.topics.forEach((topic, index) => {
      const totalEx = topic.exercises.length;
      const completedInTopic = topic.exercises.filter(ex => stats.completedExercises.includes(ex.id)).length;
      const isCompleted = totalEx > 0 && completedInTopic === totalEx;
      
      let badgeText = '📖 Pendiente';
      let badgeClass = 'badge-pending';
      if (isCompleted) {
        badgeText = '✅ Completado';
        badgeClass = 'badge-completed';
      } else if (completedInTopic > 0) {
        badgeText = `⏳ En curso (${completedInTopic}/${totalEx})`;
        badgeClass = 'badge-in-progress';
      } else {
        badgeText = `📖 Pendiente (${totalEx} ej.)`;
      }
      
      const pct = totalEx > 0 ? Math.round((completedInTopic / totalEx) * 100) : 0;
      
      topicCardsHTML += `
        <article class="topic-dashboard-card ${isCompleted ? 'completed' : ''}" id="topic-card-${index}">
          <div class="topic-card-header">
            <span class="badge ${badgeClass}">${badgeText}</span>
            <h3>${topic.title}</h3>
          </div>
          
          <div class="topic-card-progress">
            <div class="progress-info">
              <span>Progreso de Práctica</span>
              <span>${pct}%</span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill" style="width: ${pct}%"></div>
            </div>
          </div>
          
          <div class="topic-card-actions">
            <button class="topic-action-btn theory-btn" data-index="${index}" data-mode="theory">
              📖 Teoría
            </button>
            <button class="topic-action-btn practice-btn" data-index="${index}" data-mode="practice">
              ⚡ Práctica
            </button>
          </div>
        </article>
      `;
    });

    containerElement.innerHTML = `
      <section class="unit-dashboard-view">
        <header class="unit-dashboard-header">
          <div class="header-back-action">
            <button class="text-back-btn" id="dashboard-back-home">
              ⬅ Volver a las Unidades
            </button>
          </div>
          
          <div class="unit-header-main">
            <span class="unit-large-icon">${loadedUnit.icon}</span>
            <div class="unit-header-text">
              <h2>${loadedUnit.title}</h2>
              <p>${loadedUnit.description}</p>
            </div>
          </div>
          
          <div class="unit-mastery-banner">
            <div class="mastery-banner-info">
              <span class="banner-title">Dominio de la Unidad</span>
              <span class="banner-value">${mastery}%</span>
            </div>
            <div class="mastery-progress-track">
              <div class="mastery-progress-bar" style="width: ${mastery}%"></div>
            </div>
          </div>
        </header>
        
        <h3 class="dashboard-section-title">Temas para Aprender</h3>
        <div class="topic-cards-grid">
          ${topicCardsHTML}
        </div>
      </section>
    `;

    containerElement.querySelector('#dashboard-back-home').addEventListener('click', () => {
      store.dispatch('SHOW_WELCOME');
    });

    containerElement.querySelectorAll('.topic-action-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
        const mode = e.currentTarget.getAttribute('data-mode');
        store.dispatch('SELECT_TOPIC', index);
        store.dispatch('SET_MODE', mode);
      });
    });
    return;
  }

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

  // General layout in Focus Mode (Theory or Practice)
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

    <div class="study-panel single-column" id="study-panel-content">
      <div class="mode-selector-container">
        <div class="mode-selector">
          <button class="mode-btn ${activeMode === 'theory' ? 'active' : ''}" id="mode-theory-btn">
            📖 Estudiar Teoría
          </button>
          <button class="mode-btn ${activeMode === 'practice' ? 'active' : ''}" id="mode-practice-btn">
            ⚡ Práctica Arena
          </button>
        </div>
      </div>
      
      <div class="mode-content-view" id="mode-content-view"></div>
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

  // 2. Render Mode Content View
  const modeContentView = containerElement.querySelector('#mode-content-view');

  if (activeMode === 'theory') {
    // Mode: Theory Card
    modeContentView.innerHTML = `
      <section class="theory-card full-width-card" aria-labelledby="theory-title">
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
        
        <div class="theory-footer-actions">
          <button class="start-btn start-practice-cta" id="start-practice-cta-btn">
            💪 ¡Entendido! Ir a los ejercicios
          </button>
        </div>
      </section>
    `;

    modeContentView.querySelector('#start-practice-cta-btn').addEventListener('click', () => {
      store.dispatch('SET_MODE', 'practice');
    });

  } else {
    // Mode: Practice Card View
    modeContentView.innerHTML = `
      <section class="practice-card full-width-card" id="practice-card" aria-labelledby="practice-title">
        <!-- Exercise content loads here -->
      </section>
    `;

    const practiceCard = modeContentView.querySelector('#practice-card');
    const totalExercises = activeTopic.exercises.length;

    if (activeExerciseIndex >= totalExercises) {
      // Case: Topic Complete View
      const hasMoreTopics = (activeTopicIndex + 1) < loadedUnit.topics.length;
      practiceCard.innerHTML = `
        <div class="mastery-complete-card" style="text-align: center; padding: 32px 16px;">
          <span style="font-size: 3.5rem;" role="img" aria-label="Party Popper">🎉</span>
          <h3>¡Tema Completado!</h3>
          <p style="margin-bottom: 24px;">Revisaste toda la teoría y los ejercicios prácticos de <strong>${activeTopic.title}</strong>.</p>
          
          <button class="start-btn" id="finish-topic-btn">
            ${hasMoreTopics ? 'Ir al Siguiente Tema' : 'Finalizar Unidad'}
          </button>
        </div>
      `;

      practiceCard.querySelector('#finish-topic-btn').addEventListener('click', () => {
        store.dispatch('FINISH_TOPIC');
      });

    } else {
      // Case: Active Exercise View
      const exercise = activeTopic.exercises[activeExerciseIndex];
      practiceCard.innerHTML = `
        <div class="practice-header">
          <h3 id="practice-title">Arena de Práctica</h3>
          <span class="exercise-stepper">Ejercicio ${activeExerciseIndex + 1} de ${totalExercises}</span>
        </div>
        
        <div class="exercise-body">
          <div class="question-box">
            <p>${exercise.question}</p>
          </div>
          
          <div id="interaction-area"></div>
          <div id="feedback-area"></div>
        </div>
        
        <div class="exercise-actions">
          <button class="submit-btn" id="submit-answer-btn" disabled>
            Verificar Respuesta
          </button>
          <button class="next-btn" id="next-exercise-btn" style="display: none;">
            ${activeExerciseIndex + 1 === totalExercises ? 'Completar Tema' : 'Siguiente Ejercicio'}
          </button>
        </div>
      `;

      const interactionArea = practiceCard.querySelector('#interaction-area');
      const submitBtn = practiceCard.querySelector('#submit-answer-btn');
      const nextBtn = practiceCard.querySelector('#next-exercise-btn');
      const feedbackArea = practiceCard.querySelector('#feedback-area');

      // Enable/Disable submit button depending on initial answer state
      if (!hasSubmitted) {
        if (exercise.type === 'multiple-choice' && selectedOption !== null) {
          submitBtn.disabled = false;
        } else if (exercise.type === 'fill-in-the-blank' && userAnswerText.trim() !== '') {
          submitBtn.disabled = false;
        }
      }

      // Render interactions (multiple choice options or text input)
      if (exercise.type === 'multiple-choice') {
        const list = document.createElement('div');
        list.className = 'options-list';
        
        exercise.options.forEach((option, idx) => {
          const btn = document.createElement('button');
          btn.className = `option-btn ${selectedOption === idx ? 'selected' : ''}`;
          btn.textContent = option;
          btn.id = `opt-${idx}`;
          
          if (hasSubmitted) {
            // Apply correct/incorrect style classes
            if (idx === exercise.correctAnswer) {
              btn.classList.add('correct');
            } else if (idx === selectedOption) {
              btn.classList.add('incorrect');
            }
          } else {
            btn.addEventListener('click', () => {
              store.dispatch('SELECT_OPTION', idx);
            });
          }
          list.appendChild(btn);
        });
        interactionArea.appendChild(list);

      } else if (exercise.type === 'fill-in-the-blank') {
        interactionArea.innerHTML = `
          <div class="input-box">
            <input 
              type="text" 
              id="blank-input" 
              class="text-answer-input" 
              placeholder="Escribí tu respuesta acá..." 
              autocomplete="off" 
              value="${userAnswerText}"
            />
          </div>
        `;
        const input = interactionArea.querySelector('#blank-input');
        
        if (hasSubmitted) {
          input.disabled = true;
          if (isCorrect) {
            input.classList.add('correct');
          } else {
            input.classList.add('incorrect');
            input.value = `${userAnswerText} (Correcto: ${exercise.correctAnswer})`;
          }
        } else {
          input.focus();
          input.addEventListener('input', (e) => {
            store.dispatch('SET_ANSWER_TEXT', e.target.value);
          });
          
          input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.value.trim() !== '') {
              store.dispatch('SUBMIT_ANSWER');
            }
          });
        }
      }

      // Render feedback if submitted
      if (hasSubmitted) {
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';
        nextBtn.focus();

        feedbackArea.innerHTML = `
          <div class="feedback-box ${isCorrect ? 'correct' : 'incorrect'}">
            <div class="feedback-title">
              <span>${isCorrect ? '✅ ¡Respuesta Correcta!' : '❌ Respuesta Incorrecta'}</span>
            </div>
            <p class="feedback-explanation">${exercise.explanation}</p>
          </div>
        `;
      } else {
        submitBtn.addEventListener('click', () => {
          store.dispatch('SUBMIT_ANSWER');
        });
      }

      nextBtn.addEventListener('click', () => {
        store.dispatch('NEXT_EXERCISE');
      });
    }
  }

  // Hook top-level mode togglers in tabs layout
  containerElement.querySelector('#mode-theory-btn').addEventListener('click', () => {
    store.dispatch('SET_MODE', 'theory');
  });

  containerElement.querySelector('#mode-practice-btn').addEventListener('click', () => {
    store.dispatch('SET_MODE', 'practice');
  });
}

export default renderStudyPanel;
