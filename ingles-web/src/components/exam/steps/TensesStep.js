import { mockExamData } from '../../../data/units/mock_exam.js';

export function renderTensesStep(containerElement, store) {
  const { examAnswers } = store.state;
  const answers = examAnswers || {};
  const data = mockExamData.grammar;

  containerElement.innerHTML = `
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

  // Setup Event Listeners
  const inputs = containerElement.querySelectorAll('.tense-input');
  inputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const key = e.target.dataset.key;
      store.dispatch('SET_EXAM_ANSWER', { key, value: e.target.value });
    });
  });
}

export default renderTensesStep;
