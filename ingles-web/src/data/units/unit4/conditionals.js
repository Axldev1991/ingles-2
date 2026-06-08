export const conditionalsData = {
  id: "u4_conditionals",
  title: "Conditionals (Types 0, 1, 2 & 3)",
  explanation: `
    <h3>Oraciones Condicionales en IT</h3>
    <p>Las condicionales se dividen en cuatro tipos según el grado de probabilidad de la condición y su tiempo verbal:</p>
    <ul>
      <li><strong>Type 0 (Verdades generales / Hechos):</strong> Causa y efecto asegurados.
        <br><em>Estructura:</em> If + Present Simple, Present Simple.
        <br><em>Ejemplo:</em> If you heat water, it boils.
      </li>
      <li><strong>Type 1 (Probabilidad real de futuro):</strong> Algo muy probable de ocurrir si se cumple la condición.
        <br><em>Estructura:</em> If + Present Simple, Will/Can/May + Bare Infinitive.
        <br><em>Ejemplo:</em> If Simon finds a cheap flight, he will go to Mendoza.
      </li>
      <li><strong>Type 2 (Situación imaginaria en el presente/futuro):</strong> Hipotético o irreal.
        <br><em>Estructura:</em> If + Past Simple, Would/Could/Might + Bare Infinitive.
        <br><em>Ejemplo:</em> If I had a lot of money, I would travel.
      </li>
      <li><strong>Type 3 (Situación irreal del pasado):</strong> Eventos que ocurrieron en el pasado y no se pueden cambiar (arrepentimiento o alivio).
        <br><em>Estructura:</em> If + Past Perfect, Would/Could/Might + Have + Past Participle.
        <br><em>Ejemplo:</em> If I had known it was going to rain, I would have brought my umbrella.
      </li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Rollback & Incident Plans)</h4>
    <p>Los ingenieros usan condicionales de tipo 1 todo el tiempo para definir flujos de acción y planes de contingencia (Rollback plans) durante las puestas en producción (deploys):</p>
    <blockquote>
      <strong>Lead Developer:</strong> <em>"If the database migration fails during deployment, we will trigger the rollback script immediately."</em>
    </blockquote>
  `,
  gotcha: "En el condicional de Tipo 2, la regla gramatical formal establece que para el verbo 'to be' se utiliza 'were' para todas las personas en la cláusula del 'if' (ej. 'If I were you', no 'If I was you').",
  exercises: [
    {
      id: "u4_cond_ex1",
      type: "fill-in-the-blank",
      question: "If you __________ (mix) yellow and red, you get orange. (Type 0)",
      correctAnswer: "mix",
      explanation: "En condicional tipo 0, la condición va en Presente Simple."
    },
    {
      id: "u4_cond_ex2",
      type: "fill-in-the-blank",
      question: "If I __________ (know) it was going to rain, I would have brought my umbrella. (Type 3)",
      correctAnswer: "had known",
      explanation: "El condicional tipo 3 utiliza el Past Perfect ('had known') en la cláusula con 'If'."
    },
    {
      id: "u4_cond_ex3",
      type: "fill-in-the-blank",
      question: "Simon will go to Mendoza this weekend if he __________ (find) a cheap flight. (Type 1)",
      correctAnswer: "finds",
      explanation: "Para la tercera persona singular (he/she/it) en Presente Simple se añade 's': 'finds'."
    },
    {
      id: "u4_cond_ex4",
      type: "fill-in-the-blank",
      question: "If you do not help endangered species, they __________ (disappear) soon. (Type 1)",
      correctAnswer: "will disappear",
      explanation: "La consecuencia en el Tipo 1 se expresa en futuro con will: 'will disappear'."
    },
    {
      id: "u4_cond_ex5",
      type: "fill-in-the-blank",
      question: "If I __________ (be) you, I would rent a new apartment. (Type 2)",
      correctAnswer: "were",
      explanation: "En condicionales hipotéticos (Tipo 2), se prefiere usar 'were' para primera persona singular en inglés formal."
    }
  ]
};
