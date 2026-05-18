import './style.css';
import { studyData } from './data.js';

// Application State
let state = {
  activeUnitId: null,
  activeTopicIndex: 0,
  activeExerciseIndex: 0,
  activeMode: 'theory', // 'theory' or 'practice'
  selectedOption: null,
  userAnswerText: '',
  hasSubmitted: false,
  isCorrect: false,
  
  // Persistence Data (backed by localStorage)
  stats: {
    streak: 1,
    masteryScores: {}, // Format: { unitId: percent }
    completedExercises: [] // Format: ["exerciseId"]
  }
};

// Initialize Application
function init() {
  loadSavedProgress();
  renderSidebar();
  updateAnalytics();
  showWelcomeScreen();
  setupGlobalEvents();
}

// Load from LocalStorage
function loadSavedProgress() {
  const saved = localStorage.getItem('utn_ingles_2_progress');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state.stats = { ...state.stats, ...parsed };
    } catch (e) {
      console.error("Error loading localStorage progress:", e);
    }
  } else {
    // Scaffold initial mastery scores
    studyData.forEach(unit => {
      state.stats.masteryScores[unit.id] = 0;
    });
    saveProgress();
  }
}

// Save to LocalStorage
function saveProgress() {
  localStorage.setItem('utn_ingles_2_progress', JSON.stringify(state.stats));
}

// Update Header stats in DOM
function updateAnalytics() {
  document.getElementById('streak-value').textContent = state.stats.streak;
  
  // Calculate average mastery
  const scores = Object.values(state.stats.masteryScores);
  const avgMastery = scores.length > 0 
    ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) 
    : 0;
    
  document.getElementById('mastery-value').textContent = `${avgMastery}%`;
}

// Render Sidebar Units
function renderSidebar() {
  const unitList = document.getElementById('unit-list');
  unitList.innerHTML = '';
  
  studyData.forEach(unit => {
    const li = document.createElement('li');
    const mastery = state.stats.masteryScores[unit.id] || 0;
    const isActive = state.activeUnitId === unit.id;
    
    li.innerHTML = `
      <button class="unit-btn ${isActive ? 'active' : ''}" id="btn-${unit.id}">
        <span class="unit-icon">${unit.icon}</span>
        <div class="unit-info">
          <h3>${unit.title}</h3>
          <p>${unit.topics.length} temas • Dominio: ${mastery}%</p>
          <div class="progress-container">
            <div class="progress-bar" style="width: ${mastery}%"></div>
          </div>
        </div>
      </button>
    `;
    
    // Add Click listener
    li.querySelector('button').addEventListener('click', () => {
      selectUnit(unit.id);
    });
    
    unitList.appendChild(li);
  });
}

// Welcome/Dashboard view
function showWelcomeScreen() {
  state.activeUnitId = null;
  renderSidebar();
  
  const mainContent = document.getElementById('app-view');
  mainContent.innerHTML = `
    <article class="welcome-screen">
      <span style="font-size: 4rem;">🎓</span>
      <h2>¡Te damos la bienvenida al UTN Inglés II Study Hub!</h2>
      <p>Diseñamos este panel interactivo para ayudarte a triturar el examen técnico. 
      Podés estudiar la teoría de cada unidad directamente del booklet extraído, hacer ejercicios con corrección inteligente y hacer un seguimiento real de tu dominio de la materia.</p>
      
      <div style="display: flex; gap: 16px; margin-top: 10px;">
        <button class="start-btn" id="start-btn">Comenzar a Estudiar</button>
      </div>
    </article>
  `;
  
  document.getElementById('start-btn').addEventListener('click', () => {
    selectUnit(studyData[0].id);
  });
}

// Handle Select Unit
function selectUnit(unitId) {
  state.activeUnitId = unitId;
  state.activeTopicIndex = 0;
  state.activeExerciseIndex = 0;
  state.activeMode = 'theory';
  resetAnswerState();
  
  renderSidebar();
  renderUnitDashboard();
}

// Render tabs and current topic content inside a unit
function renderUnitDashboard() {
  const unit = studyData.find(u => u.id === state.activeUnitId);
  const mainContent = document.getElementById('app-view');
  
  mainContent.innerHTML = `
    <nav class="topic-nav-tabs" id="topic-tabs" aria-label="Temas de la unidad"></nav>
    <div class="study-panel" id="study-panel"></div>
  `;
  
  renderTopicTabs(unit);
  renderTopicView();
}

// Render Top Topic Tabs
function renderTopicTabs(unit) {
  const tabsContainer = document.getElementById('topic-tabs');
  tabsContainer.innerHTML = '';
  
  unit.topics.forEach((topic, index) => {
    const btn = document.createElement('button');
    btn.className = `topic-tab-btn ${state.activeTopicIndex === index ? 'active' : ''}`;
    btn.textContent = topic.title;
    btn.addEventListener('click', () => {
      state.activeTopicIndex = index;
      state.activeExerciseIndex = 0;
      state.activeMode = 'theory';
      resetAnswerState();
      
      // Update tabs active state
      document.querySelectorAll('.topic-tab-btn').forEach((b, i) => {
        b.classList.toggle('active', i === index);
      });
      renderTopicView();
    });
    tabsContainer.appendChild(btn);
  });
}

// Render active topic's theory and practice cards
function renderTopicView() {
  const unit = studyData.find(u => u.id === state.activeUnitId);
  const topic = unit.topics[state.activeTopicIndex];
  const studyPanel = document.getElementById('study-panel');
  
  // Set layout style to block for full-width components
  studyPanel.className = 'study-panel single-column';
  
  // Render Mode Selector and Card Containers
  studyPanel.innerHTML = `
    <div class="mode-selector-container">
      <div class="mode-selector">
        <button class="mode-btn ${state.activeMode === 'theory' ? 'active' : ''}" id="mode-theory-btn">
          📖 Estudiar Teoría
        </button>
        <button class="mode-btn ${state.activeMode === 'practice' ? 'active' : ''}" id="mode-practice-btn">
          ⚡ Práctica Arena
        </button>
      </div>
    </div>
    
    <div class="mode-content-view" id="mode-content-view">
      <!-- Dynamic view based on mode will render here -->
    </div>
  `;
  
  // Hook Mode Toggle Click Handlers
  document.getElementById('mode-theory-btn').addEventListener('click', () => {
    state.activeMode = 'theory';
    renderModeContent(topic);
    document.getElementById('mode-theory-btn').classList.add('active');
    document.getElementById('mode-practice-btn').classList.remove('active');
  });
  
  document.getElementById('mode-practice-btn').addEventListener('click', () => {
    state.activeMode = 'practice';
    renderModeContent(topic);
    document.getElementById('mode-practice-btn').classList.add('active');
    document.getElementById('mode-theory-btn').classList.remove('active');
  });
  
  renderModeContent(topic);
}

// Render dynamic content inside selected mode
function renderModeContent(topic) {
  const container = document.getElementById('mode-content-view');
  
  if (state.activeMode === 'theory') {
    container.innerHTML = `
      <section class="theory-card full-width-card" aria-labelledby="theory-title">
        <div class="theory-card-header">
          <h3 id="theory-title">${topic.title}</h3>
          <span class="badge theory-badge">Módulo de Lectura</span>
        </div>
        <div class="theory-content">
          ${topic.explanation}
        </div>
        ${topic.gotcha ? `
          <div class="gotcha-alert" role="alert">
            <strong>⚠️ TRAMPA DE EXAMEN (GOTCHA):</strong> ${topic.gotcha}
          </div>
        ` : ''}
        
        <div class="theory-footer-actions">
          <button class="start-btn start-practice-cta" id="start-practice-cta-btn">
            💪 ¡Entendido! Ir a los ejercicios
          </button>
        </div>
      </section>
    `;
    
    document.getElementById('start-practice-cta-btn').addEventListener('click', () => {
      state.activeMode = 'practice';
      renderTopicView();
    });
    
  } else {
    container.innerHTML = `
      <section class="practice-card full-width-card" id="practice-card" aria-labelledby="practice-title">
        <!-- Exercise container will load here dynamically -->
      </section>
    `;
    renderPracticeCard(topic);
  }
}

// Render active exercise or topic completion screen
function renderPracticeCard(topic) {
  const practiceCard = document.getElementById('practice-card');
  const totalExercises = topic.exercises.length;
  
  if (state.activeExerciseIndex >= totalExercises) {
    // Topic complete screen
    renderTopicCompleteScreen(topic);
    return;
  }
  
  const exercise = topic.exercises[state.activeExerciseIndex];
  
  practiceCard.innerHTML = `
    <div class="practice-header">
      <h3 id="practice-title">Arena de Práctica</h3>
      <span class="exercise-stepper">Ejercicio ${state.activeExerciseIndex + 1} de ${totalExercises}</span>
    </div>
    
    <div class="exercise-body">
      <div class="question-box">
        <p>${exercise.question}</p>
      </div>
      
      <div id="interaction-area">
        <!-- Input field or options will load here -->
      </div>
      
      <div id="feedback-area"></div>
    </div>
    
    <div class="exercise-actions">
      <button class="submit-btn" id="submit-answer-btn" ${!state.hasSubmitted && exercise.type === 'multiple-choice' && state.selectedOption === null ? 'disabled' : ''}>
        Verificar Respuesta
      </button>
      <button class="next-btn" id="next-exercise-btn" style="display: none;">
        ${state.activeExerciseIndex + 1 === totalExercises ? 'Completar Tema' : 'Siguiente Ejercicio'}
      </button>
    </div>
  `;
  
  renderInteractionArea(exercise);
  
  // Hook actions
  document.getElementById('submit-answer-btn').addEventListener('click', () => {
    submitAnswer(exercise);
  });
  
  document.getElementById('next-exercise-btn').addEventListener('click', () => {
    nextExercise(topic);
  });
}

// Render options for multiple choice or input for fill-in-the-blank
function renderInteractionArea(exercise) {
  const container = document.getElementById('interaction-area');
  
  if (exercise.type === 'multiple-choice') {
    const list = document.createElement('div');
    list.className = 'options-list';
    
    exercise.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = `option-btn ${state.selectedOption === index ? 'selected' : ''}`;
      btn.textContent = option;
      btn.id = `opt-${index}`;
      
      btn.addEventListener('click', () => {
        if (state.hasSubmitted) return; // Prevent selection changes after submit
        
        state.selectedOption = index;
        
        // Visual toggle selected
        document.querySelectorAll('.option-btn').forEach((b, idx) => {
          b.classList.toggle('selected', idx === index);
        });
        
        document.getElementById('submit-answer-btn').disabled = false;
      });
      list.appendChild(btn);
    });
    container.appendChild(list);
    
  } else if (exercise.type === 'fill-in-the-blank') {
    container.innerHTML = `
      <div class="input-box">
        <input 
          type="text" 
          id="blank-input" 
          class="text-answer-input" 
          placeholder="Escribí tu respuesta acá..." 
          autocomplete="off" 
          value="${state.userAnswerText}"
        />
      </div>
    `;
    
    const input = document.getElementById('blank-input');
    input.focus();
    
    input.addEventListener('input', (e) => {
      state.userAnswerText = e.target.value;
      document.getElementById('submit-answer-btn').disabled = e.target.value.trim() === '';
    });
    
    // Allow enter key to submit
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !document.getElementById('submit-answer-btn').disabled) {
        submitAnswer(exercise);
      }
    });
  }
}

// Process submit answer
function submitAnswer(exercise) {
  if (state.hasSubmitted) return;
  state.hasSubmitted = true;
  
  // Disable inputs/selections
  document.getElementById('submit-answer-btn').style.display = 'none';
  const nextBtn = document.getElementById('next-exercise-btn');
  nextBtn.style.display = 'block';
  nextBtn.focus();
  
  if (exercise.type === 'multiple-choice') {
    state.isCorrect = state.selectedOption === exercise.correctAnswer;
    
    // Apply styling to option buttons
    exercise.options.forEach((_, index) => {
      const btn = document.getElementById(`opt-${index}`);
      if (index === exercise.correctAnswer) {
        btn.classList.add('correct');
      } else if (index === state.selectedOption) {
        btn.classList.add('incorrect');
      }
    });
  } else if (exercise.type === 'fill-in-the-blank') {
    const cleanAnswer = state.userAnswerText.trim().toLowerCase();
    const correctClean = exercise.correctAnswer.toLowerCase();
    state.isCorrect = cleanAnswer === correctClean;
    
    const input = document.getElementById('blank-input');
    input.disabled = true;
    if (state.isCorrect) {
      input.classList.add('correct');
    } else {
      input.classList.add('incorrect');
      // Show correct answer inside input
      input.value = `${state.userAnswerText} (Correcto: ${exercise.correctAnswer})`;
    }
  }
  
  // Track completed exercise if correct
  if (state.isCorrect) {
    if (!state.stats.completedExercises.includes(exercise.id)) {
      state.stats.completedExercises.push(exercise.id);
    }
  }
  
  // Recalculate Mastery Score for Active Unit
  recalculateUnitMastery();
  updateAnalytics();
  renderSidebar();
  
  // Render feedback area
  renderFeedback(exercise);
}

// Render Feedback box
function renderFeedback(exercise) {
  const container = document.getElementById('feedback-area');
  
  container.innerHTML = `
    <div class="feedback-box ${state.isCorrect ? 'correct' : 'incorrect'}">
      <div class="feedback-title">
        <span>${state.isCorrect ? '✅ ¡Respuesta Correcta!' : '❌ Respuesta Incorrecta'}</span>
      </div>
      <p class="feedback-explanation">${exercise.explanation}</p>
    </div>
  `;
}

// Advance in topic exercises
function nextExercise(topic) {
  state.activeExerciseIndex++;
  resetAnswerState();
  renderPracticeCard(topic);
}

// Recalculate mastery percentage for active unit based on completed exercises
function recalculateUnitMastery() {
  const unit = studyData.find(u => u.id === state.activeUnitId);
  
  // Gather all exercise IDs in this unit
  const allUnitExerciseIds = [];
  unit.topics.forEach(topic => {
    topic.exercises.forEach(ex => {
      allUnitExerciseIds.push(ex.id);
    });
  });
  
  // Intersect with completed exercises
  const completedInUnit = allUnitExerciseIds.filter(id => 
    state.stats.completedExercises.includes(id)
  );
  
  const percentage = allUnitExerciseIds.length > 0 
    ? Math.round((completedInUnit.length / allUnitExerciseIds.length) * 100)
    : 0;
    
  state.stats.masteryScores[state.activeUnitId] = percentage;
  saveProgress();
}

// Show completed screen for topic
function renderTopicCompleteScreen(topic) {
  const practiceCard = document.getElementById('practice-card');
  const unit = studyData.find(u => u.id === state.activeUnitId);
  const nextTopicIndex = state.activeTopicIndex + 1;
  const hasMoreTopics = nextTopicIndex < unit.topics.length;
  
  practiceCard.innerHTML = `
    <div class="mastery-complete-card">
      <span style="font-size: 3.5rem;">🎉</span>
      <h3>¡Tema Completado!</h3>
      <p>Revisaste toda la teoría y los ejercicios prácticos de <strong>${topic.title}</strong>.</p>
      
      <button class="start-btn" id="finish-topic-btn">
        ${hasMoreTopics ? 'Ir al Siguiente Tema' : 'Finalizar Unidad'}
      </button>
    </div>
  `;
  
  document.getElementById('finish-topic-btn').addEventListener('click', () => {
    if (hasMoreTopics) {
      state.activeTopicIndex = nextTopicIndex;
      state.activeExerciseIndex = 0;
      resetAnswerState();
      renderUnitDashboard();
    } else {
      showUnitCompleteScreen(unit);
    }
  });
}

// Show complete unit dashboard card
function showUnitCompleteScreen(unit) {
  const mainContent = document.getElementById('app-view');
  const score = state.stats.masteryScores[unit.id] || 0;
  
  mainContent.innerHTML = `
    <article class="welcome-screen mastery-complete-card">
      <span style="font-size: 4rem;">🏆</span>
      <h2>¡Unidad Finalizada Exitosamente!</h2>
      <p>Completaste todos los temas y ejercicios en <strong>${unit.title}</strong>.</p>
      
      <div class="mastery-score">${score}%</div>
      <p style="color: var(--text-muted);">Tu nivel de dominio de la unidad quedó registrado en el hub.</p>
      
      <button class="start-btn" id="back-home-btn">Volver al Inicio</button>
    </article>
  `;
  
  document.getElementById('back-home-btn').addEventListener('click', () => {
    showWelcomeScreen();
  });
}

// Reset answer tracking states between questions
function resetAnswerState() {
  state.selectedOption = null;
  state.userAnswerText = '';
  state.hasSubmitted = false;
  state.isCorrect = false;
}

// Setup Global Click listeners or events
function setupGlobalEvents() {
  // Click on logo brings back to welcome screen
  document.querySelector('.logo-container').addEventListener('click', () => {
    showWelcomeScreen();
  });
}

// Run App!
document.addEventListener('DOMContentLoaded', init);
// Handle instant running in environments where DOMContentLoaded might have already fired
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  init();
}
