export const phrasalVerbsData = {
  id: "u4_phrasal_verbs",
  title: "Setting Up a Network & Phrasal Verbs",
  explanation: `
    <h3>Phrasal Verbs en IT</h3>
    <p>Los phrasal verbs (verbos frasales) consisten en un verbo y una partícula (adverbio o preposición) que juntos crean un nuevo significado idiomático.</p>
    <ul>
      <li><strong>Set up:</strong> Establecer / Configurar (ej. configurar un servidor).</li>
      <li><strong>Plug into:</strong> Enchufar / Conectar (ej. conectar a la toma de corriente).</li>
      <li><strong>Carry out:</strong> Ejecutar / Realizar (ej. ejecutar pruebas de seguridad).</li>
      <li><strong>Sign up:</strong> Registrarse (ej. registrarse en una plataforma).</li>
      <li><strong>Log in / Log out:</strong> Iniciar / Cerrar sesión.</li>
      <li><strong>Find out:</strong> Averiguar / Descubrir.</li>
      <li><strong>Take up:</strong> Ocupar (ej. espacio en disco o ancho de banda).</li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Technical Onboarding)</h4>
    <p>En tu primer día en una empresa tecnológica, vas a escuchar muchos phrasal verbs en el onboarding. Es normal que te digan cosas como:</p>
    <blockquote>
      <strong>Senior Dev:</strong> <em>"Once you <strong>sign up</strong> for our GitHub organization, you need to <strong>set up</strong> your local environment and <strong>plug into</strong> the development database."</em>
    </blockquote>
  `,
  gotcha: "¡Regla clave! Si el objeto de un phrasal verb separable es un pronombre (it, them, him, etc.), el pronombre DEBE colocarse obligatoriamente en medio del verbo y la partícula (ej. 'type it in', no 'type in it').",
  exercises: [
    {
      id: "u4_pv_ex1",
      type: "multiple-choice",
      question: "Which phrasal verb means 'to execute or perform a task/test'?",
      options: ["Carry out", "Set up", "Switch off"],
      correctAnswer: 0,
      explanation: "Carry out se traduce como realizar o ejecutar tareas/procesos."
    },
    {
      id: "u4_pv_ex2",
      type: "multiple-choice",
      question: "What is the meaning of the phrasal verb 'take up' in a sentence like 'multiple devices are taking up bandwidth'?",
      options: ["To release or free", "To occupy space or resources", "To repair or fix"],
      correctAnswer: 1,
      explanation: "Take up significa ocupar, ya sea espacio físico, virtual o recursos de red (bandwidth)."
    },
    {
      id: "u4_pv_ex3",
      type: "fill-in-the-blank",
      question: "Fill in the blank: To use the app, you need to type your password _________.",
      correctAnswer: "in",
      explanation: "Type in significa escribir o ingresar información mediante el teclado."
    },
    {
      id: "u4_pv_ex4",
      type: "multiple-choice",
      question: "Which of the following is grammatically correct when using a pronoun with a separable phrasal verb?",
      options: [
        "You need to type in it.",
        "You need to type it in.",
        "You need to typing in it."
      ],
      correctAnswer: 1,
      explanation: "Cuando se usa un pronombre objeto (it), este debe ir entre el verbo y la partícula: 'type it in'."
    }
  ]
};
