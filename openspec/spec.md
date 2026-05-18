# SDD Spec: Exam Simulator Requirements

## 1. Step-by-Step Functional Specifications

### Step 1: Reading Comprehension ("Block-Based vs. Text-Based Programming")
- **Paragraph Fill-in-the-Blanks**: 10 blanks integrated directly into the text body.
  - Each blank contains a dropdown `<select>` containing all 12 options (visual, workspace, feedback, creativity, control, textual, syntax, flexibility, error, career, programming, beginner).
  - Validation: Answers matched against exact keys.
- **Reading Questions**: 5 multiple-choice questions corresponding directly to the text.
  - Feedback: Immediate correct/incorrect status with explanation.

### Step 2: Grammar & Verb Tenses
- **10 Sentence Inputs**: Each sentence contains a text blank.
  - Students must conjugate the base verb into the correct tense (Past Simple, Present Perfect, Future Perfect, Past Perfect Simple, or Present Perfect Continuous).
  - Matches the answer keys from the model exam (used, has been working, opened, had never played, will have included, had not logged, did... use, will have integrated, have been learning, have used).
  - Soft matching (case-insensitive, trimmed whitespaces).

### Step 3: Modal Verbs
- **6 Selection Exercises**:
  - Each sentence has a `<select>` dropdown with options: must, mustn't, should, shouldn't, might, can, don't have to, have to.
  - Answers validated on click.

### Step 4: Passive Voice Rewriter
- **3 Passive Rewrites**:
  - Sentence A: "The government created the Universidad Obrera Nacional." -> Output textbox. Correct: `The Universidad Obrera Nacional was created by the government.` (also accept without 'by' or minor punctuation variance).
  - Sentence B: "The students will complete the test tomorrow." -> Output textbox. Correct: `The test will be completed by the students tomorrow.`
  - Sentence C: "The technician sets up the router." -> Output textbox. Correct: `The router is set up by the technician.`

### Step 5: Listening Simulator (5G & Autonomous Vehicles)
- **Visual Listening Interface**: Simulated play, pause, progress bar, and speaker animation representing the audio file "5G 6G autonomous vehicles".
- **5 Multiple-Choice Questions**: Validated dynamically.
- **Transcript Completion**: 4 blanks inside a visual dialogue box (autonomous, drive, communication, 5G, backbone).

### Step 6: Echo Dot Writing Assistant
- **Task Description**: Write a paragraph describing an Echo Dot and its functions.
- **Real-Time Regex Validations**:
  - **Infinitive of purpose** indicator: Detects `to \w+` (e.g., "to connect", "to play").
  - **Relative clause** indicator: Detects `which|who|that` (e.g., "which is used to", "that performs").
  - **Modal verb** indicator: Detects `can|could|must|should|might|may|have to` (e.g., "You can", "You should").
- **UI State**: Visual checkboxes that glow green as soon as the student includes each structure, giving real-time feedback on writing correctness.

### Step 7: Results Arena
- Full summary of scores per section.
- **"El Lado Humano" (Agile Coach Retrospectives)**: An overall retro showing how their test answers map to real developer communication (e.g. daily standups, root cause reports, explaining free public education to foreigners, writing clear tickets).

## 2. Technical Constraints
- Must match the reactive Pub-Sub store patterns (actions/mutations in `appStore.js`).
- Complete vertical compactness to fit within the `StudyPanel` area without double scrollbars.
