import { mockExamData } from '../../../data/units/mock_exam.js';

export function renderPassiveStep(containerElement, store) {
  const { examAnswers } = store.state;
  const answers = examAnswers || {};
  const data = mockExamData.passive;

  containerElement.innerHTML = `
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

  // Setup Event Listeners
  const textareas = containerElement.querySelectorAll('.passive-textarea');
  textareas.forEach(textarea => {
    textarea.addEventListener('input', (e) => {
      const key = e.target.dataset.key;
      store.dispatch('SET_EXAM_ANSWER', { key, value: e.target.value });
    });
  });
}

export default renderPassiveStep;
