import { mockExamData } from '../../../data/units/mock_exam.js';

let audioTimer = null;
let playProgressVal = 0;

export function renderListeningStep(containerElement, store) {
  const { examAnswers } = store.state;
  const answers = examAnswers || {};
  const data = mockExamData.listening;
  
  // Format audio transcript with gaps
  const transcriptHtml = data.transcriptBlanks.map(tb => {
    const val = answers[tb.gapKey] || '';
    const inputHtml = `<input type="text" class="exam-input listening-gap-input" data-key="${tb.gapKey}" value="${val}" placeholder="...">`;
    return `${tb.text} ${inputHtml} ${tb.afterText}`;
  }).join('');

  containerElement.innerHTML = `
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

  // Setup Event Listeners
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

  // Set initial timeline width if playProgressVal is > 0
  if (progressBar && playProgressVal > 0) {
    progressBar.style.width = `${playProgressVal}%`;
    const elapsedSecs = Math.round((playProgressVal / 100) * 150);
    const minutes = Math.floor(elapsedSecs / 60);
    const seconds = elapsedSecs % 60;
    if (timeDisplay) {
      timeDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} / 02:30`;
    }
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

// Cleanup function to clear running timer when leaving this step
export function cleanupListening() {
  if (audioTimer) {
    clearInterval(audioTimer);
    audioTimer = null;
  }
}

export default renderListeningStep;
