export const readingData = {
  id: "u3_reading_comprehension",
  title: "Reading: History of UTN",
  explanation: `
    <h3>Texto de comprensión: History of UTN</h3>
    <p>Este tema evalúa tu comprensión del texto histórico del booklet sobre la creación y evolución de la UTN:</p>
    <ul>
      <li><strong>1948</strong>: Creación de la UON (Universidad Obrera Nacional) por Ley 13.229 bajo Perón.</li>
      <li><strong>1955</strong>: Inicio de clases en la FRA (Facultad Regional Avellaneda) con el Ing. Braidwood como primer decano.</li>
      <li><strong>1955 (sept)</strong>: Golpe de estado ("Revolución Libertadora") intenta disolver la UON.</li>
      <li><strong>FAGUT</strong>: Federación Argentina de Graduados de la Universidad Tecnológica — luchó por la autonomía.</li>
      <li><strong>1959</strong>: Ley 14.855 renombra la UON como UTN y le otorga autonomía.</li>
      <li><strong>Villa Domínico</strong>: Campus actual de la FRA (Av. Ramón Franco).</li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Explaining Argentina's unique public university model to foreigners)</h4>
    <p>A los ingenieros extranjeros (de USA o Europa) les suele llamar muchísimo la atención el modelo de educación superior pública, gratuita y de calidad en Argentina. Saber contar la historia de la UTN te permite conectar con ellos a un nivel cultural profundo y explicar de dónde viene tu pasión por la ingeniería y el trabajo:</p>
    <blockquote>
      <strong>Foreign Colleague:</strong> <em>"I heard that in Argentina public college is completely free. Is that true? How does that even work?"</em>
      <br><strong>Dev (You):</strong> <em>"Yes, it is! And my university has a very unique story. It was founded in 1948 as the 'Workers' National University' because the goal was to give the working class access to high-level engineering education. However, after the 1955 military coup, the dictatorship tried to close it down because of its social origin. But the graduates and students formed a union called FAGUT and fought for years until we finally got academic autonomy and our name UTN in 1959. So for us, studying engineering isn't just about a career; it's a legacy of struggle and social mobility."</em>
    </blockquote>
    <p><strong>💡 Conexión cultural:</strong>
      <ul>
        <li>Hacer referencia a palabras como <code>struggle</code> (lucha), <code>academic autonomy</code> (autonomía académica) y <code>social mobility</code> (movilidad social) te da una profundidad oratoria tremenda y destaca tu compromiso con el estudio. ¡Te hace inolvidable!</li>
      </ul>
    </p>
  `,
  gotcha: "Las fechas clave para el examen son: <strong>1948</strong> (UON), <strong>1955</strong> (FRA + golpe), <strong>1959</strong> (UTN autónoma). ¡No las confundas!",
  exercises: [
    {
      id: "u3_read_1",
      type: "multiple-choice",
      question: "READING — What was the original name of UTN when it was created in 1948?",
      options: [
        "Universidad Tecnológica Nacional",
        "Universidad Obrera Nacional (UON)",
        "Facultad Regional Avellaneda"
      ],
      correctAnswer: 1,
      explanation: "La UTN fue creada originalmente como UON (Universidad Obrera Nacional) en 1948 para capacitar profesionalmente a la clase trabajadora."
    },
    {
      id: "u3_read_2",
      type: "multiple-choice",
      question: "READING — Why did the military government after the 1955 coup try to close the UON?",
      options: [
        "Because there were financial problems.",
        "Because they associated it with Peronist political propaganda.",
        "Because there were not enough students enrolled."
      ],
      correctAnswer: 1,
      explanation: "El gobierno de facto consideró a la UON un instrumento de propaganda política peronista y buscó disolverla o reducirla a una escuela de oficios."
    },
    {
      id: "u3_read_3",
      type: "fill-in-the-blank",
      question: "READING — The organization formed by graduates that fought for the university's autonomy was called __________.",
      correctAnswer: "FAGUT",
      explanation: "La FAGUT (Federación Argentina de Graduados de la Universidad Tecnológica) nucleó a los graduados que lucharon por mantener el estatus universitario."
    },
    {
      id: "u3_read_4",
      type: "multiple-choice",
      question: "READING — What did Law 14.855 of 1959 achieve?",
      options: [
        "It created the UON for the first time.",
        "It granted the university academic autonomy and renamed it as UTN.",
        "It moved the campus to Villa Domínico."
      ],
      correctAnswer: 1,
      explanation: "La Ley 14.855 de 1959 otorgó la autonomía académica y renombró oficialmente a la UON como Universidad Tecnológica Nacional (UTN)."
    },
    {
      id: "u3_read_5",
      type: "fill-in-the-blank",
      question: "READING — The FRA originally held classes at the Industrial School located on Av. Mitre in the city of __________.",
      correctAnswer: "Avellaneda",
      explanation: "La FRA comenzó sus clases en la Escuela Industrial de Avellaneda, ubicada sobre la Av. Mitre."
    }
  ]
};
