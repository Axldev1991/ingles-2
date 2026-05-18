export const ingFormData = {
  id: "u1_ing_form",
  title: "The -ing Form: Gerund, Participle or Adjective?",
  explanation: `
    <h3>Los Roles de la Forma -ing</h3>
    <p>Una palabra terminada en <strong>-ing</strong> en inglés NO siempre es un verbo en gerundio continuo (andando/endo). Puede cumplir tres funciones sintácticas completamente distintas:</p>
    
    <h4>1. Gerund (Gerundio - actúa como Sustantivo)</h4>
    <p>Es cuando la palabra representa una **actividad o concepto**. Se traduce como un verbo en infinitivo en español. Ocurre:</p>
    <ul>
      <li><strong>Como sujeto de una oración:</strong> <code>"Programming is rewarding."</code> (Programar es gratificante).</li>
      <li><strong>Después de preposiciones (in, of, at, by, for, about):</strong> <code>"Good at solving bugs."</code> (Bueno resolviendo / para resolver errores).</li>
      <li><strong>Detrás de ciertos verbos específicos de preferencia o finalización:</strong> <em>like, enjoy, avoid, stop, finish, keep.</em></li>
    </ul>
    
    <h4>2. Present Participle (Participio Presente - actúa como Verbo)</h4>
    <p>Expresa una **acción en progreso o simultánea**. Se usa en tiempos continuos (Present Continuous, Past Continuous) con el auxiliar <code>to be</code>.</p>
    <ul>
      <li><code>"The processor is executing instructions."</code> (El procesador está ejecutando instrucciones).</li>
      <li>También en cláusulas participiales descriptivas: <code>"The server hosting our web crashed."</code> (El servidor que hospeda nuestra web se cayó).</li>
    </ul>
    
    <h4>3. Adjective (Adjetivo - actúa como calificador)</h4>
    <p>Describe directamente una **característica intrínseca de un sustantivo** (anteponiéndose a él en inglés).</p>
    <ul>
      <li><code>"A translating program."</code> (Un programa traductor).</li>
      <li><code>"An exciting technology."</code> (Una tecnología emocionante).</li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Slack & Daily Standups)</h4>
    <p>En las reuniones diarias (Daily Standups), la forma -ing es la reina indiscutida. La usás tanto para describir la **actividad en progreso** (como verbo) como para nombrar **roles o conceptos** (como sustantivo/gerundio):</p>
    <blockquote>
      <strong>You (Daily Standup):</strong> <em>"I am currently <strong>debugging</strong> the connection pool. <strong>Coding</strong> the solution is taking longer than expected because of a legacy issue."</em>
      <br><strong>Colleague (Slack):</strong> <em>"Do you need help with the <strong>testing</strong> phase?"</em>
    </blockquote>
    <p><strong>💡 Tip:</strong> En <em>"I am debugging..."</em>, la palabra con -ing funciona como <strong>Present Participle</strong> (Verbo continuo). En cambio, <em>"Coding the solution..."</em> y <em>"testing phase"</em> funcionan como <strong>Gerund</strong> y <strong>Adjective</strong> respectivamente.</p>
  `,
  gotcha: "¡Regla de oro para examen! Si la palabra con -ing va **después de una preposición** (como *by*, *for*, *of*, *in*, *without*), su función sintáctica es siempre **GERUND**. Si va **antes de un sustantivo** y lo califica, es **ADJECTIVE**. Si expresa **movimiento con to be**, es **PARTICIPLE**.",
  exercises: [
    {
      id: "u1_ing_1",
      type: "multiple-choice",
      question: "Identify the function of 'programming': 'Programming is the process of writing software.'",
      options: ["Gerund (Noun)", "Present Participle (Verb)", "Adjective"],
      correctAnswer: 0,
      explanation: "Actúa como el SUJETO de la oración, por ende cumple la función sintáctica de Sustantivo (Gerund)."
    },
    {
      id: "u1_ing_2",
      type: "multiple-choice",
      question: "Identify the function of 'executing': 'The CPU is executing a complex mathematical operation.'",
      options: ["Gerund (Noun)", "Present Participle (Verb)", "Adjective"],
      correctAnswer: 1,
      explanation: "Acompaña al auxiliar 'is' forming un tiempo verbal continuo (está ejecutando), actuando como Participio Presente (Verb)."
    },
    {
      id: "u1_ing_3",
      type: "multiple-choice",
      question: "Identify the function of 'translating': 'A compiler is a translating program.'",
      options: ["Gerund (Noun)", "Present Participle (Verb)", "Adjective"],
      correctAnswer: 2,
      explanation: "Está modificando directamente al sustantivo 'program' (nos dice qué tipo de programa es: un programa *traductor*), por lo que actúa como Adjetivo."
    },
    {
      id: "u1_ing_4",
      type: "multiple-choice",
      question: "Identify the function of 'debugging' (note the preposition 'for'): 'We use Chrome DevTools for debugging JavaScript errors.'",
      options: ["Gerund (Noun)", "Present Participle (Verb)", "Adjective"],
      correctAnswer: 0,
      explanation: "Dado que va inmediatamente después de la preposición 'for', su rol sintáctico obligatorio es Gerund (Noun)."
    },
    {
      id: "u1_ing_5",
      type: "fill-in-the-blank",
      question: "Classify 'running' in 'The running processes consume 50% CPU.' (Write Gerund, Participle, or Adjective)",
      correctAnswer: "Adjective",
      explanation: "Describe el estado actual de los procesos ('procesos activos/en ejecución'). Al calificar directamente al sustantivo 'processes', actúa como Adjetivo."
    }
  ]
};
