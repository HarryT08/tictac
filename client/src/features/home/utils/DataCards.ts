type Carta = {
  titulo: string;
  items: { id: number; descripcion: string }[];
  tipo: string;
};

export const cartas: Carta[] = [
  {
    tipo: "principios",
    titulo: "Principios",
    items: [
      {
        id: 1,
        descripcion:
          "Fomentar la vida y la no violencia a través de la educación, diálogo y cooperación.",
      },
      {
        id: 2,
        descripcion:
          "Promoción de los derechos humanos y valores como la libertad, democracia, tolerancia, solidaridad, diversidad cultural y diálogo, para un desarrollo humano y social con perspectiva de género y cooperación global.",
      },
      {
        id: 3,
        descripcion:
          "Fomentar y respetar el derecho de todas las personas a la libertad de expresión, opinión, comunicación e información.",
      },
      {
        id: 4,
        descripcion:
          "El respeto y la promoción de los derechos sexuales y reproductivos en un marco de diversidad y solidaridad.",
      },
      {
        id: 5,
        descripcion:
          "El compromiso de cuidado y protección del medio ambiente de las generaciones presentes y futuras.",
      },
      {
        id: 6,
        descripcion:
          "El fomento del pensamiento emprendedor para promover un desarrollo económico y social sostenible a través de la innovación y la asociatividad.",
      },
      {
        id: 7,
        descripcion:
          "Las TIC como herramientas educativas para acceder al conocimiento, expresión y creatividad, y contribuir al desarrollo sostenible y la solución de problemas del entorno.",
      },
    ],
  },
  {
    tipo: "ejes",
    titulo: "Relaciones sociales y prácticas cívicas",
    items: [
      {
        id: 1,
        descripcion:
          "Las competencias ciudadanas son habilidades para manejar conflictos pacífica y constructivamente en la interacción social.",
      },
      {
        id: 2,
        descripcion:
          "La seguridad vial escolar se promueve como una cultura que fomenta la movilidad segura y protege la vida de los estudiantes en su desplazamiento.",
      },
      {
        id: 3,
        descripcion:
          "La seguridad vial se basa en el conocimiento de las normas de circulación y la adquisición de valores, hábitos y actitudes para dar respuestas seguras como peatones, pasajeros o conductores en distintas situaciones de tránsito.",
      },
      {
        id: 4,
        descripcion:
          "Se propone el espacio público como un espacio socializador, como un bien común.",
      },
    ],
  },
  {
    tipo: "ejes",
    titulo: "Sexualidad y construcción de ciudadanía",
    items: [
      {
        id: 1,
        descripcion:
          "La educacion, busca fomentar el respeto, la solidaridad y el reconocimiento de la diversidad en el ámbito sexual, para así contribuir a la formación de ciudadanos críticos y responsables en relación con su propia sexualidad y la de los demás, en un marco de igualdad y no discriminación.",
      },
      {
        id: 2,
        descripcion:
          "El proyecto pedagógico de educación para la sexualidad y construcción de ciudadanía busca desarrollar competencias para la vivencia responsable y autónoma de la sexualidad, así como el respeto a la dignidad humana y la valoración de la diversidad, promoviendo relaciones pacíficas, equitativas y democráticas.",
      },
    ],
  },
  {
    tipo: "ejes",
    titulo: "Educación ambiental",
    items: [
      {
        id: 1,
        descripcion:
          "La educación ambiental busca formar una cultura ética en el manejo del medio ambiente y fomentar actitudes de valoración y respeto por éste, mediante la comprensión de las relaciones de interdependencia entre el ser humano y su entorno.",
      },
      {
        id: 2,
        descripcion:
          "Los Proyectos Ambientales Escolares buscan comprender los problemas y potencialidades ambientales y fomentar la participación para implementar soluciones sostenibles a nivel local, regional y nacional, a través de la transversalidad e interdisciplinariedad para la formación integral y transformación de realidades.",
      },
    ],
  },
  {
    tipo: "ejes",
    titulo: "Emprendimiento",
    items: [
      {
        id: 1,
        descripcion:
          "La formación para el emprendimiento busca fomentar una cultura emprendedora a través de la formación en competencias básicas, laborales, ciudadanas y empresariales en el sistema educativo formal y no formal, y su conexión con el sector productivo.",
      },
      {
        id: 2,
        descripcion:
          "La enseñanza del emprendimiento es obligatoria en todos los niveles escolares y tiene como objetivo transmitir conocimiento, formar actitudes favorables y desarrollar competencias para generar empresas, fomentando así la cultura del emprendimiento.",
      },
    ],
  },
  {
    tipo: "ejes",
    titulo: "Tecnologías de la información y la comunicación TIC",
    items: [
      {
        id: 1,
        descripcion:
          "La competencia digital implica usar de manera segura y crítica las tecnologías de la información, con conocimientos amplios sobre la naturaleza y función de las mismas, aplicaciones informáticas y oportunidades y riesgos potenciales para la vida profesional y personal.",
      },
      {
        id: 2,
        descripcion:
          "La competencia digital implica el uso seguro y crítico de tecnologías de la información en trabajo, comunicación y tiempo libre, con habilidades en el uso de la computadora para manejar información, comunicarse y participar en redes de colaboración.",
      },
    ],
  },
  {
    tipo: "competencias",
    titulo: "Relaciones sociales y prácticas cívicas",
    items: [
      {
        id: 1,
        descripcion:
          "Participación activa en los ámbitos sociales e interpersonales, manifestando solidaridad e interés por la comunidad.",
      },
      {
        id: 2,
        descripcion: "Capacidad de comunicarse constructivamente.",
      },
      {
        id: 3,
        descripcion:
          "Conocimiento y aplicación de las normas de tránsito y seguridad.",
      },
    ],
  },
  {
    tipo: "competencias",
    titulo: "Sexualidad y construcción de ciudadanía",
    items: [
      {
        id: 1,
        descripcion:
          "Comprensión de los aspectos de la sexualidad humana, sus transiciones e implicaciones en la vida cotidiana.",
      },
      {
        id: 2,
        descripcion:
          "Identificación de la diversidad que existe entre los seres humanos y sus diversas formas de expresarla.",
      },
      {
        id: 3,
        descripcion:
          "Toma decisiones centradas en el enfoque de derechos sexuales y reproductivos.",
      },
    ],
  },
  {
    tipo: "competencias",
    titulo: "Educación ambiental",
    items: [
      {
        id: 1,
        descripcion:
          "Comprensión de los procesos de cuidado y protección del medio ambiente.",
      },
      {
        id: 2,
        descripcion: "Cuidado y protección el medio ambiente.",
      },
      {
        id: 3,
        descripcion:
          "Promoción, en su comunidad, del cuidado y protección del medio ambiente.",
      },
    ],
  },
  {
    tipo: "competencias",
    titulo: "Emprendimiento",
    items: [
      {
        id: 1,
        descripcion:
          "Desarrollo de pensamiento emprendedor en el ser, sentir, pensar y actuar.",
      },
      {
        id: 2,
        descripcion:
          "Desarrollo de hábitos y valores emprendedores que orienten el comportamiento para el éxito personal.",
      },
      {
        id: 3,
        descripcion:
          "Capacidad de entender el entorno socioeconómico en su contexto.",
      },
    ],
  },
  {
    tipo: "competencias",
    titulo: "Tecnologías de la información y la comunicación TIC",
    items: [
      {
        id: 1,
        descripcion:
          "Comprender que las tic facilitan responder a problemas de su entorno y se deben utilizar de manera responsable.",
      },
      {
        id: 2,
        descripcion:
          "Integrar las tic en el desarrollo de las actividades académicas y cotidianas para facilitar y agilizar los procesos operativos en los diferentes contextos.",
      },
      {
        id: 3,
        descripcion:
          "Construir soluciones a problemas del contexto usando las tic.",
      },
    ],
  },
];
