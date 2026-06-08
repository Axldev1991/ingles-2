export const algorithmsData = {
  id: "u5_algorithms",
  title: "Algorithms: Loops, Counters & Accumulators",
  explanation: `
    <h3>Algoritmos y Estructuras de Repetición</h3>
    <p>Un algoritmo es una secuencia lógica de pasos para resolver un problema. En su diseño, las estructuras repetitivas o bucles (loops) son esenciales:</p>
    <ul>
      <li><strong>Loops (Bucles):</strong> Permiten repetir instrucciones reduciendo redundancia.
        <br><em>Ejemplo:</em> Un bucle 'for' que recorre una lista de registros.
      </li>
      <li><strong>Counters (Contadores):</strong> Variables que se incrementan en un valor constante en cada iteración para controlar la cantidad de repeticiones.
        <br><em>Ejemplo:</em> <code>i = i + 1</code>.
      </li>
      <li><strong>Accumulators (Acumuladores):</strong> Variables que acumulan valores variables en cada ciclo, llevando un total flotante o acumulado.
        <br><em>Ejemplo:</em> <code>sum = sum + price</code>.
      </li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Infinite Loops & Production Outages)</h4>
    <p>Un bucle mal diseñado que nunca termina se llama "Infinite Loop". Esto puede colgar un servidor web en producción al consumir el 100% de la CPU. En retrospectivas de incidentes, podés reportarlo así:</p>
    <blockquote>
      <strong>Incident Lead:</strong> <em>"The service crashed because an infinite loop was triggered by an unhandled edge case in our termination condition."</em>
    </blockquote>
  `,
  gotcha: "¡Cuidado! Un acumulador suma valores variables (ej. precios); un contador solo incrementa un paso constante (generalmente +1). No los confundas en la lógica del código.",
  exercises: [
    {
      id: "u5_alg_ex1",
      type: "multiple-choice",
      question: "Loops repeat instructions __________ they reduce redundancy and improve efficiency.",
      options: ["although", "because", "instead of"],
      correctAnswer: 1,
      explanation: "Los bucles repiten instrucciones 'porque' (because) reducen redundancia."
    },
    {
      id: "u5_alg_ex2",
      type: "multiple-choice",
      question: "A counter keeps track of iterations, __________ it is used to control loop execution.",
      options: ["because", "thus", "until"],
      correctAnswer: 1,
      explanation: "El contador sigue las iteraciones, 'por ende/así' (thus) controla la ejecución."
    },
    {
      id: "u5_alg_ex3",
      type: "multiple-choice",
      question: "A poorly designed loop may run indefinitely __________ a specific condition is met.",
      options: ["besides", "until", "in addition"],
      correctAnswer: 1,
      explanation: "El bucle infinito corre 'hasta' (until) que se cumpla la condición de salida."
    }
  ]
};
