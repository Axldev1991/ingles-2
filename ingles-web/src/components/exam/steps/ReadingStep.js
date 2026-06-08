import { mockExamData } from '../../../data/units/mock_exam.js';

export function renderReadingStep(containerElement, store) {
  const { examAnswers } = store.state;
  const answers = examAnswers || {};
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

  containerElement.innerHTML = `
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

  // Setup Event Listeners
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
      
      const block = e.target.closest('.question-block');
      block.querySelectorAll('.option-label').forEach(lbl => lbl.classList.remove('selected'));
      e.target.closest('.option-label').classList.add('selected');
    });
  });
}

export default renderReadingStep;
