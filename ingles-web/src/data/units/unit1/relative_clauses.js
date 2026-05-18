export const relativeClausesData = {
  id: "u1_relative_clauses",
  title: "Relative Clauses (who, which, where)",
  explanation: `
    <h3>Pronombres Relativos de Unión</h3>
    <p>Las cláusulas relativas sirven para unir ideas y dar información sobre un sustantivo sin repetir palabras. Usamos pronombres según la naturaleza del sustantivo:</p>
    
    <ul>
      <li><strong>Who (o Whom) / That:</strong> Para personas.
        <br>- <code>"The engineer who maintains the database is away."</code> (El ingeniero *que* mantiene la base de datos está ausente).
      </li>
      <li><strong>Which / That:</strong> Para cosas, conceptos y animales.
        <br>- <code>"The programming language which/that we use is Rust."</code> (El lenguaje de programación *que* usamos es Rust).
      </li>
      <li><strong>Where:</strong> Para lugares físicos o conceptuales.
        <br>- <code>"The directory where we store tests is /src."</code> (El directorio *donde* guardamos las pruebas...).
      </li>
      <li><strong>Whose:</strong> Expresa posesión ("cuyo/cuya").
        <br>- <code>"The student whose computer crashed lost the lab specs."</code> (El estudiante *cuya* computadora falló...).
      </li>
    </ul>
    
    <h4>Diferencia crucial para examen (Defining vs Non-Defining):</h4>
    <p>1. **Defining Clauses (Especificativas):** Dan información ESENCIAL. Si se quita, la frase pierde sentido. Se puede usar **that** en lugar de *who* o *which* y no llevan comas.</p>
    <p>2. **Non-Defining Clauses (Explicativas):** Dan información EXTRA/secundaria. Van separadas por **COMAS**. **¡REGLA DE ORO! Nunca se puede usar "that" dentro de comas** para reemplazar *who* o *which*.</p>
    <ul>
      <li><em>Correct: "C++, which is compiled, is very fast."</em> (C++, el cual es compilado, es veloz).</li>
      <li><em>Incorrect: "C++, that is compiled, is very fast."</em> (¡GRAVE error en examen!).</li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Slack & Daily Standups)</h4>
    <p>Cuando describís bugs, bibliotecas específicas o problemas de infraestructura a tus compañeros, recurrís a las cláusulas relativas para ser quirúrgicamente preciso en tus oraciones:</p>
    <blockquote>
      <strong>You (Slack):</strong> <em>"The third-party library <strong>that</strong> we imported yesterday is causing a memory leak in the module <strong>where</strong> we handle token sessions."</em>
      <br><strong>Colleague (Slack):</strong> <em>"Oh, you mean the one by Vercel, <strong>which</strong> was updated last Tuesday?"</em>
    </blockquote>
    <p><strong>💡 Tip:</strong> La cláusula <em>"that we imported yesterday"</em> es <strong>defining</strong> (esencial para saber cuál biblioteca falla). En cambio, <em>"which was updated last Tuesday"</em> es <strong>non-defining</strong> (agrega un dato extra, va entre comas y no puede llevar <em>that</em>).</p>
  `,
  gotcha: "¡Regla de oro de examen! **Nunca** uses 'that' si la cláusula relativa está entre comas (Non-defining). Usá obligatoriamente **which** para cosas y **who** para personas.",
  exercises: [
    {
      id: "u1_rel_1",
      type: "multiple-choice",
      question: "Choose the correct relative pronoun for a non-defining clause: 'Linux, _________ was created by Linus Torvalds, is an open-source OS.'",
      options: ["that", "which", "who"],
      correctAnswer: 1,
      explanation: "Es una cláusula explicativa (separada por comas, non-defining). En estos casos, está estrictamente prohibido usar 'that'; debemos usar 'which' para cosas."
    },
    {
      id: "u1_rel_2",
      type: "multiple-choice",
      question: "Complete the definition: 'This is the server directory _________ the binary builds are stored.'",
      options: ["where", "which", "whose"],
      correctAnswer: 0,
      explanation: "Nos referimos a un lugar físico o conceptual (el directorio), por lo tanto el pronombre relativo adecuado es 'where' (donde)."
    },
    {
      id: "u1_rel_3",
      type: "multiple-choice",
      question: "Identify the correct relative pronoun: 'The system administrator _________ resolved the memory leak works in Alsina.'",
      options: ["which", "who", "where"],
      correctAnswer: 1,
      explanation: "Dado que el sustantivo precedente es una persona ('The system administrator'), el pronombre correcto es 'who'."
    },
    {
      id: "u1_rel_4",
      type: "fill-in-the-blank",
      question: "Which relative pronoun expresses possession (e.g. 'The developer _________ IDE was customized')?",
      correctAnswer: "whose",
      explanation: "El pronombre relativo posesivo es 'whose' (cuyo/cuya), indicando que el IDE pertenece a la desarrolladora."
    }
  ]
};
