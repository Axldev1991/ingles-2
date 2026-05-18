export const wordBuildingData = {
  id: "u2_word_building",
  title: "Word Building: Noun, Verb, Adjective, Adverb",
  explanation: `
    <h3>Word Building (Formación de Palabras)</h3>
    <p>Este tema es un pilar fundamental en los exámenes de Inglés Técnico. Debés ser capaz de transformar una palabra base en su sustantivo, verbo, adjetivo o adverbio usando los sufijos y prefijos correspondientes:</p>
    
    <table class="vocab-table">
      <thead>
        <tr>
          <th>Base/Significado</th>
          <th>Noun (Sustantivo)</th>
          <th>Verb (Verbo)</th>
          <th>Adjective (Adjetivo)</th>
          <th>Adverb (Adverbio)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Crear</strong></td>
          <td>Creation / Creator</td>
          <td>Create</td>
          <td>Creative</td>
          <td>Creatively</td>
        </tr>
        <tr>
          <td><strong>Diferir</strong></td>
          <td>Difference</td>
          <td>Differ</td>
          <td>Different</td>
          <td>Differently</td>
        </tr>
        <tr>
          <td><strong>Empatía</strong></td>
          <td>Empathy</td>
          <td>Empathize</td>
          <td>Empathetic</td>
          <td>Empathetically</td>
        </tr>
        <tr>
          <td><strong>Conectar</strong></td>
          <td>Connection</td>
          <td>Connect</td>
          <td>Connected / Connective</td>
          <td>—</td>
        </tr>
        <tr>
          <td><strong>Tecnología</strong></td>
          <td>Technology</td>
          <td>—</td>
          <td>Technological</td>
          <td>Technologically</td>
        </tr>
      </tbody>
    </table>

    <hr>
    <h4>💬 El Lado Humano (Technical Discussions & System Demos)</h4>
    <p>Dominar la formación de palabras (word building) es lo que distingue a un desarrollador junior de un **arquitecto de software**. Cuando tenés que dar una demo de arquitectura ante un cliente o convencer a tu equipo de un cambio de diseño, usar la categoría gramatical exacta te da una fluidez espectacular:</p>
    <blockquote>
      <strong>Junior:</strong> <em>"This service differs... it is different from that... because they do diff things."</em> (Repetitivo, limitado).
      <br><strong>Senior Architect:</strong> <em>"While both services aim to <strong>create</strong> database connections, the key <strong>difference</strong> lies in how they manage the pool size. They behave <strong>differently</strong> under high loads. We must choose a highly <strong>connective</strong> infrastructure to support this <strong>technological</strong> migration smoothly."</em> (Fluido, preciso, profesional).
    </blockquote>
    <p><strong>💡 Hack para conversar:</strong>
      <ul>
        <li>Si querés describir una acción, usás el verbo: <em>"We need to <strong>empathize</strong> with the client's pain points."</em></li>
        <li>Si querés describir una cualidad o propiedad de un sistema, usás el adjetivo: <em>"We need a highly <strong>creative</strong> solution."</em></li>
        <li>Si querés describir CÓMO se ejecuta un proceso o comportamiento de un software, usás el adverbio: <em>"The caching system works <strong>differently</strong> now."</em></li>
      </ul>
    </p>
  `,
  gotcha: "Identificá la posición en la oración: antes de un sustantivo suele ir un adjetivo; después de un verbo de acción suele ir un adverbio; como sujeto o después de un artículo/preposición suele ir un sustantivo.",
  exercises: [
    {
      id: "u2_wb_1",
      type: "multiple-choice",
      question: "Identify the correct category: The word 'Empathy' is a(n) _________.",
      options: ["Noun", "Verb", "Adjective", "Adverb"],
      correctAnswer: 0,
      explanation: "'Empathy' (Empatía) es un Sustantivo (Noun). Su adjetivo es 'Empathetic' y su verbo es 'Empathize'."
    },
    {
      id: "u2_wb_2",
      type: "multiple-choice",
      question: "Identify the correct category: The word 'Technological' in 'technological advancements' is a(n) _________.",
      options: ["Noun", "Verb", "Adjective", "Adverb"],
      correctAnswer: 2,
      explanation: "'Technological' describe a 'advancements', por lo que funciona como Adjetivo (Adjective)."
    },
    {
      id: "u2_wb_3",
      type: "multiple-choice",
      question: "Choose the correct form to complete: 'The agent listened __________ (empathy) to the customer's issues.'",
      options: ["empathize", "empathetic", "empathetically"],
      correctAnswer: 2,
      explanation: "Buscamos modificar al verbo 'listened' (¿cómo escuchó?). Por ende, requerimos el Adverbio: 'empathetically' (empáticamente)."
    },
    {
      id: "u2_wb_4",
      type: "fill-in-the-blank",
      question: "Fill in the blank: 'We must understand the __________ (differ) between an interpreter and a compiler.'",
      correctAnswer: "difference",
      explanation: "El artículo 'the' nos indica que requerimos un sustantivo (Noun). El sustantivo de 'differ' es 'difference'."
    }
  ]
};
