export const connectorsData = {
  id: "u5_connectors",
  title: "Connectors & Discursive Flow",
  explanation: `
    <h3>Conectores Lógicos en IT</h3>
    <p>Los conectores (conjunctions) estructuran el discurso técnico, dándole orden lógico al reporte:</p>
    <ul>
      <li><strong>Contrast (Contraste):</strong> Although (aunque), In spite of / Despite (a pesar de), However (sin embargo), On the other hand (por otro lado).</li>
      <li><strong>Addition (Adición):</strong> Furthermore / Moreover (además), In addition to (además de), Also (también).</li>
      <li><strong>Cause and Effect (Causa y Efecto):</strong> Therefore / Thus (por lo tanto / de este modo), Because (porque), That is why (por eso), So (entonces).</li>
      <li><strong>Example (Ejemplo):</strong> For instance / For example (por ejemplo), Such as (tal como).</li>
      <li><strong>Sequence (Secuencia):</strong> First(ly) (en primer lugar), Next / Then (luego), Finally (finalmente).</li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Writing Technical Specifications)</h4>
    <p>Al escribir documentación técnica para APIs o arquitecturas, el uso de conectores correctos previene malentendidos entre desarrolladores y directores de proyecto:</p>
    <blockquote>
      <strong>Spec Doc:</strong> <em>"The service will cache queries to improve performance. <strong>However</strong>, we must implement a cache invalidation mechanism in order to avoid stale data."</em>
    </blockquote>
  `,
  gotcha: "¡Atención a la puntuación! Conectores como 'However', 'Therefore' y 'Additionally' suelen ir seguidos de una coma cuando inician una oración.",
  exercises: [
    {
      id: "u5_conn_ex1",
      type: "multiple-choice",
      question: "Which connector indicates contrast and is followed by a comma at the beginning of a sentence?",
      options: ["Furthermore", "However", "Because"],
      correctAnswer: 1,
      explanation: "However indica contraste y se separa con coma al comenzar una cláusula."
    },
    {
      id: "u5_conn_ex2",
      type: "multiple-choice",
      question: "Choose the correct connector: The system went down __________ the database connection pool was exhausted.",
      options: ["because", "although", "therefore"],
      correctAnswer: 0,
      explanation: "Usa 'because' para introducir la causa del fallo del sistema."
    },
    {
      id: "u5_conn_ex3",
      type: "fill-in-the-blank",
      question: "Write the connector: We want to optimize our API __________ (in order to) minimize response times.",
      correctAnswer: "in order to",
      explanation: "In order to expresa propósito o finalidad de una acción."
    }
  ]
};
