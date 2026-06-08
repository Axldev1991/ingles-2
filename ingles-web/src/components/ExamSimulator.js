import { mockExamData } from '../data/units/mock_exam.js';
import { renderReadingStep } from './exam/steps/ReadingStep.js';
import { renderTensesStep } from './exam/steps/TensesStep.js';
import { renderModalsStep } from './exam/steps/ModalsStep.js';
import { renderPassiveStep } from './exam/steps/PassiveStep.js';
import { renderListeningStep, cleanupListening } from './exam/steps/ListeningStep.js';
import { renderWritingStep } from './exam/steps/WritingStep.js';
import { renderResultsStep } from './exam/steps/ResultsStep.js';

export function renderExamSimulator(containerElement, store) {
  const state = store.state;
  const step = state.examStepIndex;

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
        <!-- Subcomponent loads here -->
      </main>

      <!-- Step Actions Footer -->
      <footer class="exam-footer">
        ${step < 7 ? `<button class="primary-btn" id="next-step-btn">Enviar y Siguiente Step ➔</button>` : ''}
      </footer>
    </div>
  `;

  // Exit Button Event Listener
  const exitBtn = containerElement.querySelector('#exit-exam-btn');
  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      cleanupListening();
      store.dispatch('RESET_EXAM');
    });
  }

  // Next Step Button Event Listener
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
      
      // Cleanup listening timer if we are leaving the listening step
      if (step === 5) {
        cleanupListening();
      }

      store.dispatch('SUBMIT_EXAM_STEP');
    });
  }

  // Route rendering to subcomponent
  const stepContentArea = containerElement.querySelector('#exam-step-content');
  if (stepContentArea) {
    switch (step) {
      case 1:
        renderReadingStep(stepContentArea, store);
        break;
      case 2:
        renderTensesStep(stepContentArea, store);
        break;
      case 3:
        renderModalsStep(stepContentArea, store);
        break;
      case 4:
        renderPassiveStep(stepContentArea, store);
        break;
      case 5:
        renderListeningStep(stepContentArea, store);
        break;
      case 6:
        renderWritingStep(stepContentArea, store);
        break;
      case 7:
        renderResultsStep(stepContentArea, store);
        break;
      default:
        stepContentArea.innerHTML = `<p>Error cargando step.</p>`;
    }
  }
}

export default renderExamSimulator;
