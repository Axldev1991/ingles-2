export const passiveVoiceData = {
  id: "u3_passive_voice",
  title: "Passive Voice in Technical Reports",
  explanation: `
    <h3>Voz Pasiva: El Estilo Formal de Ingeniería</h3>
    <p>En manuales y reportes de historia o ciencia, no importa <em>quién</em> hace la acción, sino <strong>el objeto que la recibe y la acción en sí</strong>. Para eso usamos la Voz Pasiva.</p>
    
    <div class="formula-box">
      <strong>Fórmula:</strong> Objeto Recibidor + Verbo TO BE (conjugado) + Verbo Principal en Participio Pasado (3ra columna)
    </div>

    <h4>Ejemplos de conversión temporal:</h4>
    <ul>
      <li><strong>Present Simple Passive:</strong>
        <br>Active: <em>"The browser requests the files."</em>
        <br>Passive: <em>"The files <strong>are requested</strong> by the browser."</em>
      </li>
      <li><strong>Past Simple Passive:</strong>
        <br>Active: <em>"Perón signed the UON decree in 1948."</em>
        <br>Passive: <em>"The UON decree <strong>was signed</strong> by Perón in 1948."</em>
      </li>
      <li><strong>Future Simple Passive:</strong>
        <br>Active: <em>"The university will build a new laboratory."</em>
        <br>Passive: <em>"A new laboratory <strong>will be built</strong> by the university."</em>
      </li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Incident Reports & Blameless Post-Mortems)</h4>
    <p>En las culturas de ingeniería de alto rendimiento (como Google, Netflix o startups ágiles), la voz pasiva es una herramienta de comunicación clave en los reportes de incidentes y autopsias de caídas (<strong>Post-Mortems</strong>). Promueve lo que se conoce como <strong>Cultura Sin Culpas (Blameless Culture)</strong>:</p>
    <blockquote>
      <strong>Toxic Dev (Slack):</strong> <em>"Juan broke the main branch with his buggy code! We can't deploy!"</em>
      <br><strong>Senior Architect (Slack):</strong> <em>"Let's focus on the problem. The main branch <strong>was broken</strong> by a missing check in the pre-commit hook. Fortunately, the bug <strong>has been resolved</strong> already. A new deployment pipeline <strong>will be established</strong> tomorrow to prevent this."</em>
    </blockquote>
    <p><strong>💡 Hack de Liderazgo Técnico:</strong>
      <ul>
        <li>En lugar de apuntar con el dedo (<em>"Juan broke..."</em>), usás la voz pasiva (<em>"The main branch was broken..."</em>) para **despersonalizar el error** y centrar los esfuerzos del equipo puramente en la solución técnica y en mejorar los sistemas.</li>
      </ul>
    </p>
  `,
  gotcha: "Al pasar a pasiva, el verbo <code>to be</code> debe coincidir en número (singular/plural) y en tiempo con la oración activa original. Ej: <code>Active: wrote (past)</code> -> <code>Passive: was written / were written</code>.",
  exercises: [
    {
      id: "u3_pass_1",
      type: "fill-in-the-blank",
      question: "Rewrite in Passive Voice: 'Braidwood founded the regional school in 1955.' -> The regional school ______________ by Braidwood in 1955.",
      correctAnswer: "was founded",
      explanation: "Dado que 'founded' está en Pasado Simple activo y el sujeto receptor 'The regional school' es singular, el pasivo requiere 'was' + participio 'founded'."
    },
    {
      id: "u3_pass_2",
      type: "fill-in-the-blank",
      question: "Rewrite in Passive Voice: 'Vite compiles files into static bundles.' -> Files ______________ into static bundles by Vite.",
      correctAnswer: "are compiled",
      explanation: "'compiles' es presente simple, y 'Files' es plural. La estructura pasiva correspondiente es 'are compiled'."
    }
  ]
};
