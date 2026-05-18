import { mockExamData } from '../data/units/mock_exam.js';

export function renderExamSimulator(containerElement, store) {
  const state = store.state;
  const step = state.examStepIndex;
  const answers = state.examAnswers || {};
  const isSubmitted = state.examSubmitted;

  // Render main layout
  containerElement.innerHTML = `
    <div class="exam-container">
      <header class="exam-header">
        <button class="exit-exam-btn" id="exit-exam-btn">◀ Volver al Panel</button>
        <h2>${mockExamData.title}</h2>
        <p class="exam-subtitle">${mockExamData.description}</p>
      </header>

      <!-- Stepper Progress Tracker -->
      <nav class="exam-stepper">
        <div class="step-indicator ${step === 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}">1. Reading</div>
        <div class="step-indicator ${step === 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}">2. Tenses</div>
        <div class="step-indicator ${step === 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}">3. Modals</div>
        <div class="step-indicator ${step === 4 ? 'active' : ''} ${step > 4 ? 'completed' : ''}">4. Passive</div>
        <div class="step-indicator ${step === 5 ? 'active' : ''} ${step > 5 ? 'completed' : ''}">5. Listening</div>
        <div class="step-indicator ${step === 6 ? 'active' : ''} ${step > 6 ? 'completed' : ''}">6. Writing</div>
        <div class="step-indicator ${step === 7 ? 'active' : ''}">7. Results</div>
      </nav>

      <!-- Step Content Area -->
      <main class="exam-step-content" id="exam-step-content">
        ${renderStepContent(step, answers, state)}
      </main>

      <!-- Step Actions Footer -->
      <footer class="exam-footer">
        ${step < 7 ? `<button class="primary-btn" id="next-step-btn">Enviar y Siguiente Step ➔</button>` : ''}
      </footer>
    </div>
  `;

  // Setup Event Listeners
  setupEventListeners(containerElement, store, step, answers);
}

function renderStepContent(step, answers, state) {
  switch (step) {
    case 1:
      return renderReading(answers);
    case 2:
      return renderGrammar(answers);
    case 3:
      return renderModals(answers);
    case 4:
      return renderPassive(answers);
    case 5:
      return renderListening(answers);
    case 6:
      return renderWriting(answers);
    case 7:
      return renderResults(state);
    default:
      return `<p>Error cargando step.</p>`;
  }
}

// ----------------- STEP RENDERING FUNCTIONS -----------------

function renderReading(answers) {
  const data = mockExamData.reading;
  
  // Format paragraphs with embedded select fields
  const formattedParagraphs = data.paragraphs.map(p => {
    let html = p;
    for (let i = 1; i <= 10; i++) {
      const gapKey = `gap_${i}`;
      const selectedValue = answers[gapKey] || '';
      
      const selectHtml = `
        <select class="exam-select" data-gap="${gapKey}">
          <option value="">-- select --</option>
          ${data.options.map(opt => `
            <option value="${opt}" ${selectedValue === opt ? 'selected' : ''}>${opt}</option>
          `).join('')}
        </select>
      `;
      html = html.replace(`[gap_${i}]`, selectHtml);
    }
    return `<p class="reading-p">${html}</p>`;
  }).join('');

  return `
    <section class="step-section">
      <h3>I. Reading Comprehension: Differences in Programming</h3>
      <div class="reading-box card-box">
        ${formattedParagraphs}
      </div>

      <div style="margin-top: 24px;">
        <h3>Follow-up Reading Questions</h3>
        ${data.questions.map((q, idx) => {
          const selected = answers[q.id];
          return `
            <div class="question-block card-box">
              <p class="question-text"><strong>Q${idx + 1}:</strong> ${q.question}</p>
              <div class="options-grid">
                ${q.options.map((opt, optIdx) => `
                  <label class="option-label ${selected !== undefined && parseInt(selected) === optIdx ? 'selected' : ''}">
                    <input type="radio" name="${q.id}" value="${optIdx}" ${selected !== undefined && parseInt(selected) === optIdx ? 'checked' : ''}>
                    <span>${opt}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function renderGrammar(answers) {
  const data = mockExamData.grammar;
  return `
    <section class="step-section">
      <h3>II. Grammar & Verb Tenses Arena</h3>
      <p class="section-instruction">${data.instructions}</p>
      
      <div class="card-box">
        ${data.exercises.map((ex, idx) => {
          const currentVal = answers[ex.id] || '';
          const sentenceHtml = ex.sentence.replace('_________', `
            <input type="text" class="exam-input tense-input" data-key="${ex.id}" value="${currentVal}" placeholder="Verbo aquí...">
          `);
          return `
            <div class="exercise-row">
              <span class="exercise-num">${idx + 1}.</span>
              <span class="exercise-sentence">${sentenceHtml}</span>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function renderModals(answers) {
  const data = mockExamData.modals;
  return `
    <section class="step-section">
      <h3>III. Modal Verbs</h3>
      <p class="section-instruction">${data.instructions}</p>

      <div class="grid-layout">
        ${data.exercises.map((ex, idx) => {
          const selected = answers[ex.id] || '';
          return `
            <div class="card-box modal-exercise-card">
              <p class="question-text"><strong>${idx + 1}.</strong> ${ex.sentence.replace('_________', '______')}</p>
              <div class="options-flex">
                ${ex.options.map(opt => `
                  <button class="modal-opt-btn ${selected === opt ? 'selected' : ''}" data-key="${ex.id}" data-value="${opt}">${opt}</button>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function renderPassive(answers) {
  const data = mockExamData.passive;
  return `
    <section class="step-section">
      <h3>IV. Passive Voice Architecture</h3>
      <p class="section-instruction">${data.instructions}</p>

      <div class="grid-layout">
        ${data.exercises.map((ex, idx) => {
          const currentVal = answers[ex.id] || '';
          return `
            <div class="card-box passive-card">
              <p class="active-sentence"><strong>Active ${idx + 1}:</strong> <em>"${ex.sentence}"</em></p>
              <textarea class="exam-textarea passive-textarea" data-key="${ex.id}" placeholder="Escribí la oración en Voz Pasiva..." rows="2">${currentVal}</textarea>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function renderListening(answers) {
  const data = mockExamData.listening;
  
  // Format audio transcript with gaps
  const transcriptHtml = data.transcriptBlanks.map(tb => {
    const val = answers[tb.gapKey] || '';
    const inputHtml = `<input type="text" class="exam-input listening-gap-input" data-key="${tb.gapKey}" value="${val}" placeholder="...">`;
    return `${tb.text} ${inputHtml} ${tb.afterText}`;
  }).join('');

  return `
    <section class="step-section">
      <h3>V. Listening Corner: 5G & Autonomous Vehicles</h3>
      <p class="section-instruction">Reproducí el audio y completá el diálogo con las palabras que faltan. Luego respondé las preguntas.</p>

      <div class="card-box listening-container">
        <!-- Visual audio simulator player -->
        <div class="listening-player">
          <button class="player-btn" id="play-pause-btn">▶ Play Audio</button>
          <div class="player-timeline" id="player-timeline">
            <div class="player-progress" id="player-progress" style="width: 0%;"></div>
          </div>
          <span class="player-time" id="player-time">00:00 / 02:30</span>
        </div>

        <div class="visualizer-container" id="visualizer-container">
          <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
          <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
          <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
        </div>

        <div class="transcript-box">
          <p><strong>Dialogue Transcript:</strong></p>
          <p class="transcript-p">${transcriptHtml}</p>
        </div>
      </div>

      <div style="margin-top: 24px;">
        <h3>Comprehension Questions</h3>
        ${data.questions.map((q, idx) => {
          const selected = answers[q.id];
          return `
            <div class="question-block card-box">
              <p class="question-text"><strong>Q${idx + 1}:</strong> ${q.question}</p>
              <div class="options-grid">
                ${q.options.map((opt, optIdx) => `
                  <label class="option-label ${selected !== undefined && parseInt(selected) === optIdx ? 'selected' : ''}">
                    <input type="radio" name="${q.id}" value="${optIdx}" ${selected !== undefined && parseInt(selected) === optIdx ? 'checked' : ''}>
                    <span>${opt}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function renderWriting(answers) {
  const data = mockExamData.writing;
  const currentText = answers['writing_paragraph'] || '';
  
  return `
    <section class="step-section">
      <h3>VI. Writing Lab: Smart Device Review</h3>
      <p class="section-instruction">${data.instructions}</p>

      <div class="card-box writing-panel">
        <p class="writing-prompt">✍️ <strong>Topic:</strong> Describe the "Echo Dot" and its key features and functionalities.</p>
        
        <!-- Checklist of Requirements -->
        <div class="writing-requirements">
          ${data.requirements.map(req => `
            <div class="req-item" id="req-${req.id}">
              <span class="status-dot"></span>
              <span>${req.name}</span>
            </div>
          `).join('')}
        </div>

        <textarea class="exam-textarea writing-textarea" id="writing-textarea" placeholder="Escribí tu reseña del dispositivo inteligente acá (mínimo 40 palabras recomendadas)..." rows="6">${currentText}</textarea>
        <p class="word-counter" id="word-counter">Words: 0</p>
      </div>
    </section>
  `;
}

function renderResults(state) {
  const results = state.examStepResults;
  if (!results || results.length === 0) return `<p>No hay resultados guardados.</p>`;

  let totalScore = 0;
  let totalPossible = 0;

  results.forEach(r => {
    totalScore += r.score;
    totalPossible += r.total;
  });

  const percentage = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;
  const isPassed = percentage >= 60;

  return `
    <section class="step-section results-section">
      <div class="results-badge-card ${isPassed ? 'passed' : 'failed'}">
        <span class="badge-emoji">${isPassed ? '🎉' : '❌'}</span>
        <h2>${isPassed ? '¡Examen Aprobado!' : 'Examen No Aprobado'}</h2>
        <p class="percentage-display">${percentage}%</p>
        <p class="score-display">Puntaje Total: <strong>${totalScore}</strong> de ${totalPossible} puntos</p>
        
        <!-- Score Bar -->
        <div class="score-bar-container">
          <div class="score-bar-fill" style="width: ${percentage}%;"></div>
        </div>
      </div>

      <h3 style="margin-top: 32px;">Detalle de cada Sección</h3>
      
      <!-- Stepper review container -->
      <div class="results-breakdown">
        
        <!-- Step 1 Reading -->
        <details class="breakdown-details card-box" open>
          <summary>
            <strong>I. Reading Comprehension:</strong> 
            <span class="results-score">${results[0]?.score} / ${results[0]?.total}</span>
          </summary>
          <div class="details-content">
            <p class="summary-human-tip">${mockExamData.reading.humanSide}</p>
          </div>
        </details>

        <!-- Step 2 Grammar -->
        <details class="breakdown-details card-box">
          <summary>
            <strong>II. Grammar & Verb Tenses:</strong> 
            <span class="results-score">${results[1]?.score} / ${results[1]?.total}</span>
          </summary>
          <div class="details-content">
            <div class="results-table-wrapper">
              <table class="results-table">
                <thead>
                  <tr>
                    <th>Pregunta</th>
                    <th>Tu respuesta</th>
                    <th>Correcta</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  ${mockExamData.grammar.exercises.map((ex, idx) => {
                    const detail = results[1]?.details.find(d => d.id === ex.id) || {};
                    return `
                      <tr class="${detail.isCorrect ? 'row-correct' : 'row-incorrect'}">
                        <td>Oración ${idx + 1}</td>
                        <td><code>${detail.user || '(vacío)'}</code></td>
                        <td><code>${detail.correct}</code></td>
                        <td>${detail.isCorrect ? '✅' : '❌'}</td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
            <p class="summary-human-tip" style="margin-top: 16px;">${mockExamData.grammar.humanSide}</p>
          </div>
        </details>

        <!-- Step 3 Modals -->
        <details class="breakdown-details card-box">
          <summary>
            <strong>III. Modal Verbs:</strong> 
            <span class="results-score">${results[2]?.score} / ${results[2]?.total}</span>
          </summary>
          <div class="details-content">
            <div class="results-table-wrapper">
              <table class="results-table">
                <thead>
                  <tr>
                    <th>Pregunta</th>
                    <th>Tu respuesta</th>
                    <th>Correcta</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  ${mockExamData.modals.exercises.map((ex, idx) => {
                    const detail = results[2]?.details.find(d => d.id === ex.id) || {};
                    return `
                      <tr class="${detail.isCorrect ? 'row-correct' : 'row-incorrect'}">
                        <td>Oración ${idx + 1}</td>
                        <td><code>${detail.user || '(vacío)'}</code></td>
                        <td><code>${detail.correct}</code></td>
                        <td>${detail.isCorrect ? '✅' : '❌'}</td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
            <p class="summary-human-tip" style="margin-top: 16px;">${mockExamData.modals.humanSide}</p>
          </div>
        </details>

        <!-- Step 4 Passive Voice -->
        <details class="breakdown-details card-box">
          <summary>
            <strong>IV. Passive Voice:</strong> 
            <span class="results-score">${results[3]?.score} / ${results[3]?.total}</span>
          </summary>
          <div class="details-content">
            <div class="results-table-wrapper">
              <table class="results-table">
                <thead>
                  <tr>
                    <th>Activa original</th>
                    <th>Tu pasiva</th>
                    <th>Correcta sugerida</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  ${mockExamData.passive.exercises.map((ex, idx) => {
                    const detail = results[3]?.details.find(d => d.id === ex.id) || {};
                    return `
                      <tr class="${detail.isCorrect ? 'row-correct' : 'row-incorrect'}">
                        <td><em>"${ex.sentence}"</em></td>
                        <td><code>${detail.user || '(vacío)'}</code></td>
                        <td><code>${detail.correct}</code></td>
                        <td>${detail.isCorrect ? '✅' : '❌'}</td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
            <p class="summary-human-tip" style="margin-top: 16px;">${mockExamData.passive.humanSide}</p>
          </div>
        </details>

        <!-- Step 5 Listening -->
        <details class="breakdown-details card-box">
          <summary>
            <strong>V. Listening Corner:</strong> 
            <span class="results-score">${results[4]?.score} / ${results[4]?.total}</span>
          </summary>
          <div class="details-content">
            <p class="summary-human-tip">${mockExamData.listening.humanSide}</p>
          </div>
        </details>

        <!-- Step 6 Writing -->
        <details class="breakdown-details card-box">
          <summary>
            <strong>VI. Writing Lab:</strong> 
            <span class="results-score">${results[5]?.score} / ${results[5]?.total}</span>
          </summary>
          <div class="details-content">
            <p><strong>Tu reseña escrita:</strong></p>
            <blockquote class="user-writing-quote">"${state.examAnswers['writing_paragraph'] || '(vacío)'}"</blockquote>
            <p class="summary-human-tip" style="margin-top: 16px;">${mockExamData.writing.humanSide}</p>
          </div>
        </details>
      </div>

      <div style="display: flex; gap: 16px; margin-top: 32px; justify-content: center;">
        <button class="primary-btn" id="retry-exam-btn">Reiniciar Simulación 🔄</button>
        <button class="secondary-btn" id="finish-exam-btn">Finalizar e ir al Dashboard 🏁</button>
      </div>
    </section>
  `;
}

// ----------------- EVENT LISTENERS SETUP -----------------

let audioTimer = null;
let playProgressVal = 0;

function setupEventListeners(containerElement, store, step, answers) {
  // Exit Button
  const exitBtn = containerElement.querySelector('#exit-exam-btn');
  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      store.dispatch('RESET_EXAM');
    });
  }

  // Next Step Button
  const nextBtn = containerElement.querySelector('#next-step-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      // For writing step, make sure to read text area value before submit
      if (step === 6) {
        const textarea = containerElement.querySelector('#writing-textarea');
        if (textarea) {
          store.dispatch('SET_EXAM_ANSWER', { key: 'writing_paragraph', value: textarea.value });
        }
      }
      store.dispatch('SUBMIT_EXAM_STEP');
    });
  }

  // Reset/Retry buttons in results screen
  const retryBtn = containerElement.querySelector('#retry-exam-btn');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      store.dispatch('START_EXAM');
    });
  }

  const finishBtn = containerElement.querySelector('#finish-exam-btn');
  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      store.dispatch('RESET_EXAM');
    });
  }

  // STEP 1: READING Gaps and radios
  if (step === 1) {
    const selects = containerElement.querySelectorAll('.exam-select');
    selects.forEach(select => {
      select.addEventListener('change', (e) => {
        const gap = e.target.dataset.gap;
        store.dispatch('SET_EXAM_ANSWER', { key: gap, value: e.target.value });
      });
    });

    const radios = containerElement.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        const qId = e.target.name;
        store.dispatch('SET_EXAM_ANSWER', { key: qId, value: e.target.value });
        
        // update option visual labels selection
        const block = e.target.closest('.question-block');
        block.querySelectorAll('.option-label').forEach(lbl => lbl.classList.remove('selected'));
        e.target.closest('.option-label').classList.add('selected');
      });
    });
  }

  // STEP 2: GRAMMAR Gaps
  if (step === 2) {
    const inputs = containerElement.querySelectorAll('.tense-input');
    inputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const key = e.target.dataset.key;
        store.dispatch('SET_EXAM_ANSWER', { key, value: e.target.value });
      });
    });
  }

  // STEP 3: MODAL Buttons selection
  if (step === 3) {
    const buttons = containerElement.querySelectorAll('.modal-opt-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const key = e.target.dataset.key;
        const value = e.target.dataset.value;
        store.dispatch('SET_EXAM_ANSWER', { key, value });

        // Visual selection
        const container = e.target.closest('.options-flex');
        container.querySelectorAll('.modal-opt-btn').forEach(b => b.classList.remove('selected'));
        e.target.classList.add('selected');
      });
    });
  }

  // STEP 4: PASSIVE Voice textareas
  if (step === 4) {
    const textareas = containerElement.querySelectorAll('.passive-textarea');
    textareas.forEach(textarea => {
      textarea.addEventListener('input', (e) => {
        const key = e.target.dataset.key;
        store.dispatch('SET_EXAM_ANSWER', { key, value: e.target.value });
      });
    });
  }

  // STEP 5: LISTENING Simulator Audio Player
  if (step === 5) {
    const playPauseBtn = containerElement.querySelector('#play-pause-btn');
    const progressBar = containerElement.querySelector('#player-progress');
    const timeDisplay = containerElement.querySelector('#player-time');
    const visualizerBars = containerElement.querySelectorAll('.bar');

    let isPlaying = false;

    // Reset simulator timer if any existed
    if (audioTimer) {
      clearInterval(audioTimer);
      audioTimer = null;
    }

    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
          playPauseBtn.innerText = '⏸ Pause Audio';
          playPauseBtn.classList.add('playing');
          
          // Animate visualizer
          visualizerBars.forEach(bar => bar.classList.add('animating'));

          audioTimer = setInterval(() => {
            playProgressVal += 0.8;
            if (playProgressVal >= 100) {
              playProgressVal = 0;
              isPlaying = false;
              playPauseBtn.innerText = '▶ Play Audio';
              playPauseBtn.classList.remove('playing');
              visualizerBars.forEach(bar => bar.classList.remove('animating'));
              clearInterval(audioTimer);
            }
            if (progressBar) progressBar.style.width = `${playProgressVal}%`;
            
            // Format time display based on progress
            const elapsedSecs = Math.round((playProgressVal / 100) * 150);
            const minutes = Math.floor(elapsedSecs / 60);
            const seconds = elapsedSecs % 60;
            if (timeDisplay) {
              timeDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} / 02:30`;
            }
          }, 100);
        } else {
          playPauseBtn.innerText = '▶ Play Audio';
          playPauseBtn.classList.remove('playing');
          visualizerBars.forEach(bar => bar.classList.remove('animating'));
          if (audioTimer) {
            clearInterval(audioTimer);
            audioTimer = null;
          }
        }
      });
    }

    // Input gaps
    const gapInputs = containerElement.querySelectorAll('.listening-gap-input');
    gapInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const key = e.target.dataset.key;
        store.dispatch('SET_EXAM_ANSWER', { key, value: e.target.value });
      });
    });

    // MCQ Radios
    const listeningRadios = containerElement.querySelectorAll('input[type="radio"]');
    listeningRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        const qId = e.target.name;
        store.dispatch('SET_EXAM_ANSWER', { key: qId, value: e.target.value });
        
        const block = e.target.closest('.question-block');
        block.querySelectorAll('.option-label').forEach(lbl => lbl.classList.remove('selected'));
        e.target.closest('.option-label').classList.add('selected');
      });
    });
  }

  // STEP 6: WRITING real-time validator
  if (step === 6) {
    const textarea = containerElement.querySelector('#writing-textarea');
    const wordCounter = containerElement.querySelector('#word-counter');

    const updateWritingChecklist = (text) => {
      // Word count
      const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
      if (wordCounter) wordCounter.innerText = `Words: ${words}`;

      // Check each requirement pattern
      mockExamData.writing.requirements.forEach(req => {
        const item = containerElement.querySelector(`#req-${req.id}`);
        if (item) {
          const isMet = req.pattern.test(text);
          if (isMet) {
            item.classList.add('met');
          } else {
            item.classList.remove('met');
          }
        }
      });
    };

    if (textarea) {
      // Trigger initially in case of returned steps
      updateWritingChecklist(textarea.value);

      textarea.addEventListener('keyup', (e) => {
        updateWritingChecklist(e.target.value);
        answers['writing_paragraph'] = e.target.value; // Store transiently
      });
    }
  }
}
