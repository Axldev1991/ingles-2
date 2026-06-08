import { mockExamData } from '../../../data/units/mock_exam.js';

export function renderWritingStep(containerElement, store) {
  const { examAnswers } = store.state;
  const answers = examAnswers || {};
  const data = mockExamData.writing;
  const currentText = answers['writing_paragraph'] || '';
  
  containerElement.innerHTML = `
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

  // Setup Event Listeners
  const textarea = containerElement.querySelector('#writing-textarea');
  const wordCounter = containerElement.querySelector('#word-counter');

  const updateWritingChecklist = (text) => {
    // Word count
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    if (wordCounter) wordCounter.innerText = `Words: ${words}`;

    // Check each requirement pattern
    data.requirements.forEach(req => {
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

export default renderWritingStep;
