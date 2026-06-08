import { mockExamData } from '../../../data/units/mock_exam.js';

export function renderResultsStep(containerElement, store) {
  const state = store.state;
  const results = state.examStepResults;
  if (!results || results.length === 0) {
    containerElement.innerHTML = `<p>No hay resultados guardados.</p>`;
    return;
  }

  let totalScore = 0;
  let totalPossible = 0;

  results.forEach(r => {
    totalScore += r.score;
    totalPossible += r.total;
  });

  const percentage = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;
  const isPassed = percentage >= 60;

  containerElement.innerHTML = `
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

  // Setup Event Listeners
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
}

export default renderResultsStep;
