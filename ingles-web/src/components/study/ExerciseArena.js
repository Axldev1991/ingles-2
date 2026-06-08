export function renderExerciseArena(containerElement, store, activeTopic) {
  const { activeExerciseIndex, selectedOption, userAnswerText, hasSubmitted, isCorrect } = store.state;
  const totalExercises = activeTopic.exercises.length;

  if (activeExerciseIndex >= totalExercises) {
    // Case: Topic Complete View
    const nextTopicIndex = store.state.activeTopicIndex + 1;
    const hasMoreTopics = nextTopicIndex < store.state.loadedUnit.topics.length;
    containerElement.innerHTML = `
      <div class="mastery-complete-card" style="text-align: center; padding: 32px 16px;">
        <span style="font-size: 3.5rem;" role="img" aria-label="Party Popper">🎉</span>
        <h3>¡Tema Completado!</h3>
        <p style="margin-bottom: 24px;">Revisaste toda la teoría y los ejercicios prácticos de <strong>${activeTopic.title}</strong>.</p>
        
        <button class="start-btn" id="finish-topic-btn">
          ${hasMoreTopics ? 'Ir al Siguiente Tema' : 'Finalizar Unidad'}
        </button>
      </div>
    `;

    containerElement.querySelector('#finish-topic-btn').addEventListener('click', () => {
      store.dispatch('FINISH_TOPIC');
    });
    return;
  }

  // Case: Active Exercise View
  const exercise = activeTopic.exercises[activeExerciseIndex];
  containerElement.innerHTML = `
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
    
    <div class="exercise-actions" style="display: flex; gap: 12px; justify-content: space-between;">
      <button class="prev-btn" id="prev-exercise-btn" ${activeExerciseIndex === 0 ? 'disabled' : ''}>
        ⬅ Anterior
      </button>
      
      <div style="display: flex; gap: 12px; flex-grow: 1; justify-content: flex-end;">
        <button class="submit-btn" id="submit-answer-btn" disabled style="width: auto; min-width: 160px;">
          Verificar Respuesta
        </button>
        <button class="next-btn" id="next-exercise-btn" style="display: none; width: auto; min-width: 160px;">
          ${activeExerciseIndex + 1 === totalExercises ? 'Completar Tema' : 'Siguiente Ejercicio'}
        </button>
      </div>
    </div>
  `;

  const interactionArea = containerElement.querySelector('#interaction-area');
  const submitBtn = containerElement.querySelector('#submit-answer-btn');
  const prevBtn = containerElement.querySelector('#prev-exercise-btn');
  const nextBtn = containerElement.querySelector('#next-exercise-btn');
  const feedbackArea = containerElement.querySelector('#feedback-area');

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
        submitBtn.disabled = e.target.value.trim() === '';
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

  prevBtn.addEventListener('click', () => {
    store.dispatch('PREV_EXERCISE');
  });

  nextBtn.addEventListener('click', () => {
    store.dispatch('NEXT_EXERCISE');
  });
}

export default renderExerciseArena;
