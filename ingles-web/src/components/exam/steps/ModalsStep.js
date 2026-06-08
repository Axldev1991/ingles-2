import { mockExamData } from '../../../data/units/mock_exam.js';

export function renderModalsStep(containerElement, store) {
  const { examAnswers } = store.state;
  const answers = examAnswers || {};
  const data = mockExamData.modals;

  containerElement.innerHTML = `
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

  // Setup Event Listeners
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

export default renderModalsStep;
