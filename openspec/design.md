# SDD Design: Exam Simulator UI/UX & Component Details

## 1. Visual Theme & Layout

### Sleek Glassmorphism Container
We will render a highly responsive card for the simulator that seamlessly matches the global Outfit/Inter modern typography and dark slate background theme:
```css
.exam-container {
  display: flex;
  flex-direction: column;
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 850px;
  margin: 0 auto;
  animation: fadeIn 0.4s ease-out;
}
```

### Steps Progress Navigation Tracker
A horizontal progress indicator:
```html
<nav class="exam-stepper">
  <div class="step-indicator active">1. Reading</div>
  <div class="step-indicator">2. Tenses</div>
  <div class="step-indicator">3. Modals</div>
  <div class="step-indicator">4. Passive</div>
  <div class="step-indicator">5. Listening</div>
  <div class="step-indicator">6. Writing</div>
  <div class="step-indicator">7. Results</div>
</nav>
```

---

## 2. Interactive Step Templates

### Step 1: Text Options Selection
Inside paragraph text, we'll embed:
```html
Block-based programming is designed to be
<select class="exam-select" data-index="1">
  <option value="">-- select --</option>
  <!-- 12 options here -->
</select>
```
Which is styled compactly to look like part of the text but slightly elevated (glassmorphic select outline).

### Step 5: Simulated Listening Interface
- Dynamic audio wave visualization.
- Player button bar (`Play / Pause / Progress slider`):
```html
<div class="listening-player">
  <button class="player-btn" id="play-pause-btn">▶ Play</button>
  <div class="player-timeline">
    <div class="player-progress" style="width: 45%;"></div>
  </div>
  <span class="player-time">01:12 / 02:30</span>
</div>
```

### Step 6: AI-Writing Assistant Indicators
- Visual checkboxes displaying glowing state indicators:
```html
<div class="writing-requirements">
  <div class="req-item" id="req-purpose">
    <span class="status-dot"></span> Infinitive of Purpose (e.g. to explain, to connect)
  </div>
  <div class="req-item" id="req-relative">
    <span class="status-dot"></span> Relative Clause (e.g. which, that, who)
  </div>
  <div class="req-item" id="req-modal">
    <span class="status-dot"></span> Modal Verb (e.g. can, should, must)
  </div>
</div>
```
- Reactive keyup listener checks the text content using regular expressions:
  - Purpose: `\bto\s+[a-z]{3,}\b`
  - Relative: `\b(which|who|that)\b`
  - Modal: `\b(can|could|must|should|might|may|have\s+to)\b`
- Adding CSS class `.met` to the requirement item changes the `status-dot` from soft gray to glowing emerald.

---

## 3. State Actions & Mutations
The central store will track active step `examStepIndex`.
- `START_EXAM`: Sets `activeMode = 'exam'`, `examStepIndex = 1`.
- `UPDATE_EXAM_ANSWERS`: Saves local state.
- `SUBMIT_EXAM_STEP`: Verifies user input, calculates correct items, sets feedback modal, and unlocks next step button.
