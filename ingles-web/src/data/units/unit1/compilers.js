export const compilersData = {
  id: "u1_compilers_interpreters",
  title: "Compilers vs. Interpreters",
  explanation: `
    <h3>Traductores de Código</h3>
    <p>Los procesadores de lenguajes o traductores son programas que traducen código fuente (alto nivel) a código máquina o código intermedio. Existen dos tipos principales de traductores:</p>
    
    <ul>
      <li><strong>Compilers (Compiladores):</strong> Traducen todo el código fuente de una vez y generan un archivo ejecutable independiente (standalone binary).
        <br><em>Ejemplos: C, C++, Rust, Go.</em>
        <br><strong>Ventaja:</strong> Mayor velocidad de ejecución.
      </li>
      <li><strong>Interpreters (Intérpretes):</strong> Traducen y ejecutan el código línea por línea en tiempo de ejecución. No generan un binario intermedio.
        <br><em>Ejemplos: JavaScript, Python, Ruby.</em>
        <br><strong>Ventaja:</strong> Mayor facilidad para depurar y portabilidad instantánea.
      </li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Slack & Daily Standups)</h4>
    <p>En el día a día laboral, a veces los programadores se explican cosas de forma extremadamente técnica (como si fueran "código compilado"). Cuando no entiendas una explicación muy densa, podés pedir amablemente que te lo expliquen de forma simple ("in lay terms"):</p>
    <blockquote>
      <strong>Developer A (Slack):</strong> <em>"We need to optimize the abstract syntax tree translation phase because the compiler's intermediate representation generation is bottlenecked by redundant node traversals."</em>
      <br><strong>You (Slack):</strong> <em>"Sorry, I didn't catch that. Could you explain it <strong>in lay terms</strong>? Which part of our build process is actually slow?"</em>
    </blockquote>
    <p><strong>💡 Tip:</strong> Pedir que expliquen algo <em>in lay terms</em> (en palabras sencillas) demuestra madurez profesional y ahorra horas de malentendidos.</p>
  `,
  gotcha: "¡Atención! Un compilador reporta TODOS los errores al final del proceso de compilación; un intérprete se detiene inmediatamente en la primera línea que contenga un error.",
  exercises: [
    {
      id: "u1_comp_1",
      type: "multiple-choice",
      question: "Which type of translator translates the entire source code into a standalone machine code binary before execution?",
      options: ["Interpreter", "Compiler", "Assembler"],
      correctAnswer: 1,
      explanation: "El compilador (Compiler) traduce la totalidad del código fuente de antemano y genera un archivo ejecutable independiente."
    },
    {
      id: "u1_comp_2",
      type: "multiple-choice",
      question: "What is a key operational difference in error reporting between a Compiler and an Interpreter?",
      options: [
        "A compiler stops at the first error, while an interpreter lists all errors.",
        "A compiler lists all errors at the end, while an interpreter stops immediately at the first error.",
        "An interpreter does not report syntax errors."
      ],
      correctAnswer: 1,
      explanation: "Esta es una diferencia fundamental: el compilador procesa todo el archivo y reporta todos los errores juntos; el intérprete ejecuta línea a línea y frena al primer error."
    },
    {
      id: "u1_comp_3",
      type: "fill-in-the-blank",
      question: "A(n) _________ is a translator that processes code line-by-line during runtime without creating a standalone binary.",
      correctAnswer: "interpreter",
      explanation: "El intérprete (interpreter) traduce y ejecuta la lógica línea por línea al momento de correr el software."
    }
  ]
};
