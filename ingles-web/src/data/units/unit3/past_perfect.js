export const pastPerfectData = {
  id: "u3_past_perfect",
  title: "Past Perfect Simple",
  explanation: `
    <h3>Past Perfect: El Pasado del Pasado</h3>
    <p>Cuando estamos relatando hechos del pasado (como la historia de la UTN) y queremos referirnos a <strong>una acción que ocurrió ANTES que otra acción también pasada</strong>, usamos el Past Perfect.</p>
    
    <div class="formula-box">
      <strong>Estructura:</strong> <code>had + Past Participle</code> (igual para todas las personas)
    </div>

    <p>Imaginá esta línea de tiempo pasada:</p>
    <ol>
      <li>Acción 1 (Ocurrió primero): Los estudiantes lucharon por la autonomía (Past Perfect).</li>
      <li>Acción 2 (Ocurrió después): El congreso aprobó la ley en 1959 (Past Simple).</li>
    </ol>
    <p><em>"Students <strong>had fought</strong> for autonomy before the congress finally <strong>passed</strong> Law 14.855 in 1959."</em></p>

    <hr>
    <h4>💬 El Lado Humano (Debugging Timelines & Git Archaeology)</h4>
    <p>En el trabajo de desarrollo diario, el Past Perfect es tu mejor aliado al hacer "arqueología de código" o analizar el timeline de un incidente grave en producción. Sirve para aclarar la cronología exacta y evitar discusiones:</p>
    <blockquote>
      <strong>CTO:</strong> <em>"Why did the database crash yesterday afternoon during Axel's deployment?"</em>
      <br><strong>SRE Lead:</strong> <em>"Actually, it wasn't Axel's fault. Before he deployed his branch (Past Simple: Acción posterior), a rogue worker <strong>had already consumed</strong> 99% of the server memory (Past Perfect: Acción previa). The server <strong>had run</strong> out of resources before his code even executed."</em>
    </blockquote>
    <p><strong>💡 Clave del Lado Humano:</strong>
      <ul>
        <li>Usar el <strong>Past Perfect</strong> (<code>had consumed</code>, <code>had run</code>) para situar la causa raíz inicial de un bug.</li>
        <li>Usar el <strong>Past Simple</strong> (<code>deployed</code>, <code>executed</code>) para situar el evento desencadenante secundario que ocurrió después. ¡Te salva de culpas injustas!</li>
      </ul>
    </p>
  `,
  gotcha: "Recordá que el Past Perfect <code>had + p.p.</code> casi siempre va acompañado en el contexto por un Past Simple para marcar la segunda acción cronológica más reciente.",
  exercises: [
    {
      id: "u3_pastp_1",
      type: "multiple-choice",
      question: "Identify the correct sequence: 'By the time the FRA regional committee moved classes to the new Alsina building, the academic board _________ (already approve) the syllabus changes.'",
      options: [
        "has already approved",
        "had already approved",
        "already approved"
      ],
      correctAnswer: 1,
      explanation: "La acción de aprobar el temario ocurrió antes del traslado de clases en el pasado, por lo tanto requiere Past Perfect: 'had already approved'."
    },
    {
      id: "u3_pastp_2",
      type: "multiple-choice",
      question: "Choose the correct sentence representing past sequencing:",
      options: [
        "Before the coup interrupted university life, classes had run smoothly.",
        "Before the coup had interrupted university life, classes run smoothly.",
        "Before the coup interrupt university life, classes had ran smoothly."
      ],
      correctAnswer: 0,
      explanation: "La acción de que las clases corrieran bien es el pasado más antiguo (had run), antes de que el golpe de estado interrumpiera (interrupted - past simple)."
    }
  ]
};
