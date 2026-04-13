
export type IconKey = 'Compass' | 'Target' | 'BrainCircuit' | 'Layers' | 'Zap' | 'ClipboardCheck' | 'Heart' | 'Sparkles' | 'Users' | 'DollarSign' | 'Briefcase' | 'Calendar' | 'GraduationCap' | 'FileText' | 'Flag' | 'PencilRuler' | 'Search' | 'FileSignature' | 'Rocket' | 'BarChart3';

export interface SlideData {
  id: string;
  type: 'cover' | 'objectives' | 'info' | 'timeline' | 'grid' | 'table-granos' | 'table-capital' | 'mentoring-split' | 'academy-split' | 'closing' | 'tutor-content' | 'candidate';
  title?: string;
  subtitle?: string;
  content?: any;
}

export interface CandidateData {
  name: string;
  age: number;
  study: string;
  courses: string[];
  experience: string[];
  notable: string;
  toConsider: string;
  image?: string;
}

export const SLIDES: SlideData[] = [
  {
    id: 'cover',
    type: 'cover',
    title: 'Candidatos JP 25-26',
    subtitle: 'Informe de candidatos para Assessment Center',
    content: {
      highlight: 'Estrategia de Crecimiento fyo',
      tags: ['Talento joven', 'Proceso de selección', 'Mesa comercial']
    }
  },
  {
    id: 'valentin-luzi',
    type: 'candidate',
    content: {
      name: 'Valentín Luzi',
      age: 26,
      study: 'Lic. en Comercialización (Universidad Siglo 21).',
      courses: ['Manejo avanzado de Office', 'Inglés intermedio.'],
      experience: [
        'Analista Comercial en AL2 (Billetera virtual de ACA) (2025-Actualidad).',
        'Sector TACI en ACA (2023-2025).',
        'Operaciones en Sahilices.'
      ],
      notable: 'Conocimiento del ecosistema agro y experiencia en comercialización.',
      toConsider: 'Manejo de ansiedades y proyeccion dentro de la compañía, acompañamiento en su desarrollo profesional.',
      image: ''
    } as CandidateData
  },
  {
    id: 'lucca-sorrentino',
    type: 'candidate',
    content: {
      name: 'Lucca Sorrentino',
      age: 22,
      study: 'Estudiante avanzado de Lic. en Administración de Empresas (UNR) - 85% aprobado.',
      courses: ['SAP', 'Análisis de estados de resultados', 'Inglés.'],
      experience: [
        'Analista de Compras en Milicic S.A. (2025-Actualidad).',
        'Analista Comercial en Maineri y Asociados (2025).'
      ],
      notable: 'Perfil analítico, confiable y orientado a resultados. Capacidad para proyectar escenarios futuros y toma de decisiones.',
      toConsider: 'No posee conocimiento en la comercializacion de granos',
      image: ''
    } as CandidateData
  },
  {
    id: 'nicolas-valdettaro',
    type: 'candidate',
    content: {
      name: 'Nicolás Valdettaro',
      age: 22,
      study: 'Licenciado en Economía Empresarial (Austral). Estudiante de Lic. en Administración (Austral).',
      courses: ['CFA Research Challenge', 'Formación Bolsa de Comercio Rosario.'],
      experience: [
        'Pasante de Finanzas Operativas en Maincal S.A. (2025).',
        'Facturación y cobranzas.'
      ],
      notable: 'Formación académica orientada a finanzas. Finalista del CFA Research Challenge. Perfil con interés en el análisis de mercados.',
      toConsider: 'Desarrollo de habilidades específicas para la negociación de granos.',
      image: ''
    } as CandidateData
  },
  {
    id: 'erika-mellano',
    type: 'candidate',
    content: {
      name: 'Erika Mellano',
      age: 24,
      study: 'Estudiante avanzada de Relaciones Internacionales (UNR) - 4 materias restantes.',
      courses: ['Programa de Formación comercial (BCR).'],
      experience: [
        'Responsable de ventas ecommerce en Forza Ferretería Integral (2022-Actualidad).',
        'Pasantía como Coordinadora logística de granos en Prince Cereales (2019).'
      ],
      notable: 'Perfil con muchas ganas de aprender y desarrollarse profesionalmente. Disfruta de entornos dinámicos y valora la posibilidad de seguir incorporando conocimientos.',
      toConsider: 'Profundizar su perfil tecnico y comercial.',
      image: ''
    } as CandidateData
  },
  {
    id: 'jose-nannini',
    type: 'candidate',
    content: {
      name: 'José Nannini',
      age: 22,
      study: 'Licenciado en Negocios Digitales (UCA).',
      courses: ['Inglés (B2).'],
      experience: [
        'Pasante de Finanzas en Grupo Sancor Seguros (2025). Mantenía diálogo con clientes y proveedores para la resolución de cobros y pagos y elaboraba reportes diarios de saldo de caja al cierre de la jornada.'
      ],
      notable: 'Perfil híbrido con capacidad para integrar visión estratégica de negocios con soluciones tecnológicas.',
      toConsider: 'Experiencia laboral incipiente; requiere mentoría en negociación tradicional.',
      image: ''
    } as CandidateData
  },
  {
    id: 'lucas-petrolo',
    type: 'candidate',
    content: {
      name: 'Lucas Rubén Petrolo',
      age: 24,
      study: 'Licenciatura en Relaciones Internacionales (UNR) - 30/36 materias.',
      courses: ['Inglés (B1).'],
      experience: [
        'Auxiliar Comercial en MetalGrill (2025-2026).',
        'Analista de Mercados en F.M Metalúrgica.',
        'Gestión de vínculos comerciales en Metalúrgica J.S.'
      ],
      notable: 'Experiencia comercial en apertura de mercados internacionales. Perfil con autonomía y visión global.',
      toConsider: 'Regular su desarrollo profesional y la ansiedad de crecimiento.',
      image: ''
    } as CandidateData
  },
  {
    id: 'lucas-ragno',
    type: 'candidate',
    content: {
      name: 'Lucas Ragno',
      age: 24,
      study: 'Estudiante de Ingeniería Industrial (UCA) - Cursando 5to año.',
      courses: ['SAP (Nivel usuario)', 'Power BI', 'AutoCAD', 'Inglés (B1).'],
      experience: [
        'Pasantía en Comercio Exterior y Compras en Marcopolo SA (2025-Actualidad).',
        'Analista Técnico y Logístico en Selecsa SRL (2020-2024).'
      ],
      notable: 'Perfil con interés en la comercialización de granos, considera su carrera como un abanico de posibilidades.',
      toConsider: 'No posee experiencia directa en la comercialización.',
      image: ''
    } as CandidateData
  },
  {
    id: 'sofia-carignano',
    type: 'candidate',
    content: {
      name: 'Sofía Carignano',
      age: 23,
      study: 'Estudiante avanzada de Contador Público (UNR).',
      courses: [],
      experience: [
        'Auxiliar contable en Estudio contable A.M. Rodeni y Asoc. (2024-Actualidad). Gran parte de los clientes del estudio pertenecen al sector agropecuario'
      ],
      notable: 'Perfil metódico con organización y compromiso. Menciona que el hecho de trabajar actualmente con clientes del agro dentro del estudio reforzó ese interés.',
      toConsider: 'Desarrollar su perfil técnico comercial de granos.',
      image: ''
    } as CandidateData
  },
  {
    id: 'edgardo-kaial',
    type: 'candidate',
    content: {
      name: 'Edgardo Antonio Kaial',
      age: 23,
      study: 'Lic. en Economía Empresarial y Lic. en Administración de Empresas (Austral).',
      courses: ['CFA Institute Research Challenge 2024', 'Excel Avanzado.'],
      experience: [
        'Pasantía Profesional en Administración y Finanzas en Maincal S.A. (2025).',
        'Rotación por Tesorería, Pagos y Cobranzas.'
      ],
      notable: 'Perfil orientado a la resolución de tareas. Busca resolver desafíos de manera autónoma utilizando diversos recursos.',
      toConsider: 'Desarrollar exposición comercial directa y habilidades de persuasión.',
      image: ''
    } as CandidateData
  },
  {
    id: 'juan-rosselli',
    type: 'candidate',
    content: {
      name: 'Juan Ignacio Rosselli',
      age: 22,
      study: 'Licenciado en Marketing (UCA). Técnico Superior en Administración Bancaria (ISET 58).',
      courses: ['Habilidades comerciales', 'Inglés intermedio.'],
      experience: [
        'Asesor comercial en Giorgi Concesionario Oficial Ford (2025).',
        'Panelista y Productor en Vive TV (2024).',
        'Auxiliar administrativo contable.'
      ],
      notable: 'Perfil comercial con experiencia en ventas y comunicación.',
      toConsider: 'Desarrollar conocimiento específico del mercado de granos y sus tecnicismos.',
      image: ''
    } as CandidateData
  },
  {
    id: 'juan-vinderola',
    type: 'candidate',
    content: {
      name: 'Juan Cruz Vinderola Breppe',
      age: 23,
      study: 'Estudiante avanzado de Lic. en Economía (UNR) - Cursada finalizada.',
      courses: ['Mercado de Capitales (BCR)', 'Programación para finanzas (Python, R).'],
      experience: [
        'Atención al Cliente y Caja en Librerías Lader (2024).',
        'Técnico electrónico en ASM-electrónica (2021-2022).'
      ],
      notable: 'Fuerte base analítica con gran interés en volcar sus conocimientos al mercado de granos. Proactivo en la búsqueda de soluciones basadas en datos.',
      toConsider: 'Desarrollo de experiencia específica en el sector agropecuario y negociación comercial.',
      image: ''
    } as CandidateData
  },
  {
    id: 'nicolas-baccin',
    type: 'candidate',
    content: {
      name: 'Nicolás Baccin',
      age: 27,
      study: 'Estudiante avanzado de Ingeniería Industrial (UCA).',
      courses: [],
      experience: [
        'Analista de Energía & Utilidades en BASF SA Argentina (2025-Actualidad).',
        'Pasante de Energía & Utilidades en BASF SA Argentina (2024-2025).',
        'Asistente de Operaciones en Metalúrgica Baccin (2020-2021).'
      ],
      notable: 'Perfil con formación en Ingeniería que permite una visión global de los procesos y un enfoque analítico. Posee facilidad para integrar datos complejos.',
      toConsider: 'Busca reorientar su carrera hacia el área comercial y un nuevo rubro, alejándose del enfoque estrictamente técnico de procesos para incursionar en el desarrollo de negocios.',
      image: ''
    } as CandidateData
  },
  {
    id: 'mirko-viscovich',
    type: 'candidate',
    content: {
      name: 'Mirko Viscovich',
      age: 21,
      study: 'Técnico en Gestión de Agronegocios (Instituto Superior Parque España).',
      courses: ['Operador del mercado de granos (Bolsa de Comercio de Rosario).'],
      experience: [
        'Administración comercial en Turbom Argentina I.C.S.A. (2023-Actualidad).',
        'Gestión integral en empresa familiar de equipos de riego.'
      ],
      notable: 'Perfil proactivo con actitud comercial. Posee facilidad para generar relaciones interpersonales e interés por el dinamismo del agro.',
      toConsider: 'Busca especializarse en el mercado de granos en una organización de mayor envergadura.',
      image: ''
    } as CandidateData
  },
  {
    id: 'guadalupe-aliau',
    type: 'candidate',
    content: {
      name: 'Guadalupe Aliau',
      age: 21,
      study: 'Estudiante de la Licenciatura en Gestión de Negocios Digitales (UCA Rosario, 2023-Actualidad).',
      courses: ['IA y Productividad (Google)', 'Excel Básico e Intermedio', 'E-commerce y Gestión Comercial', 'Italiano B2'],
      experience: [
        'Talabartería El Pingo Fe - Atención al Cliente y Ventas (2021-Actualidad).',
        'Gestión de stock y control de mercadería.',
        'Apoyo en redes sociales y e-commerce.'
      ],
      notable: 'Perfil organizado, proactivo y orientado a resultados. Interés en gestión de proyectos, metodologías ágiles e IA aplicada a la productividad.',
      toConsider: 'Experiencia comercial en rubro retail; requiere adaptación al mercado de granos y formación técnica específica.',
      image: ''
    } as CandidateData
  },
  {
    id: 'matias-caceres',
    type: 'candidate',
    content: {
      name: 'Matías Cáceres',
      age: 22,
      study: 'Estudiante Avanzado Lic. en Economía (UCEL, Finalización estimada Jul 2026).',
      courses: ['Inglés C1', 'SAP (TC1-TC2)', 'JDE (E1)', 'Salesforce', 'Programa NOR X & XI (Matba-Rofex School)'],
      experience: [
        'Analista de Créditos en Cargill (Feb 2024 - Nov 2024).',
        'Programa de Pasantías en Cargill (Aug 2022 - Feb 2024): Cobranzas, Cash Application, Disputas impositivas.'
      ],
      notable: 'Experiencia sólida en el rubro agropecuario y financiero en una multinacional líder (Cargill). Representante de carrera.',
      toConsider: 'Finalizando estudios; perfil con alta exposición previa a procesos corporativos del agro.',
      image: ''
    } as CandidateData
  },
  {
    id: 'juan-de-gasperi',
    type: 'candidate',
    content: {
      name: 'Juan De Gasperi',
      age: 23,
      study: 'Contador Público (UNR, 2020-2025).',
      courses: ['Excel avanzado (Macros)', 'Odoo', 'Aqua ERP', 'GLM', 'Inglés Intermedio', 'Idoneidad CNV 2026'],
      experience: [
        'Analista de contabilidad y finanzas en Casagrande Rosario (Sep 2025 - Actualidad).',
        'Analista de compras en Altomonte Outsourcing Partners (Dic 2024 - Jul 2025).'
      ],
      notable: 'Enfocado en la mejora operativa y financiera. Experiencia en reportes financieros, flujos de caja y conciliaciones bancarias.',
      toConsider: 'Perfil contable/financiero con fuerte base técnica; requiere desarrollo en negociación comercial.',
      image: ''
    } as CandidateData
  },
  {
    id: 'rocio-del-pazo',
    type: 'candidate',
    content: {
      name: 'Rocío del Pazo',
      age: 22,
      study: 'Estudiante avanzada en Licenciatura de Administración de Empresas (Austral, 4to año). Intercambio en Universidad Jean Moulin 3, Lyon.',
      courses: ['Inglés B2', 'Francés B1', 'Excel avanzado', 'Oratoria'],
      experience: [
        'Colaboradora en Endeavor Rosario.',
        'Asistente administrativa en NEA S.A (Junio 2023).',
        'Ayudante de cátedra en Sociedades (Austral).'
      ],
      notable: 'Persona emprendedora con interés en innovación y consultoría. Experiencia en ventas mediante gestión de emprendimientos propios (Bleu Clair).',
      toConsider: 'Perfil con visión internacional y fuertes habilidades de comunicación; interés en derecho societario y RRHH.',
      image: ''
    } as CandidateData
  },
  {
    id: 'juan-foix',
    type: 'candidate',
    content: {
      name: 'Juan Foix',
      age: 23,
      study: 'Estudiante avanzado de Licenciatura en Economía (UNR, 2021-2025).',
      courses: ['Inglés C1 (CAE)', 'Italiano', 'Japonés', 'Idoneidad CNV', 'Análisis técnico y fundamental de acciones'],
      experience: [
        'Asesor comercial en Global Focus Investments (Sep 2024 - Oct 2025).',
        'Experiencia en el ámbito de las finanzas y portfolio management.'
      ],
      notable: 'Fuerte orientación a mercados de capitales y finanzas. Cuenta con certificación de Idoneidad (CNV).',
      toConsider: 'Perfil técnico con experiencia comercial en inversiones; requiere adaptación al mercado físico de granos.',
      image: ''
    } as CandidateData
  },
  {
    id: 'matilde-gallino',
    type: 'candidate',
    content: {
      name: 'Matilde Pilar Gallino',
      age: 22,
      study: 'Estudiante avanzada de Licenciatura en Economía (UNR, 2021-Actualidad).',
      courses: ['Formación en Mercado de Capitales (BCR, 2025)', 'Excel intermedio', 'Inglés avanzado (CAE)'],
      experience: [
        'Administración, gestión y control en RAAVU (Dic 2022 - Actualidad).',
        'Atención al Cliente en Breck Sports (Vail Resorts, Inc.) (Dic 2021 - Abr 2022).'
      ],
      notable: 'Interés en finanzas y mercado de capitales. Experiencia en entornos de alta demanda y atención a clientes internacionales.',
      toConsider: 'Perfil organizado con capacidad de adaptación y manejo de herramientas analíticas (R).',
      image: ''
    } as CandidateData
  },
  {
    id: 'guido-guaragna',
    type: 'candidate',
    content: {
      name: 'Guido Marco Guaragna',
      age: 21,
      study: 'Estudiante avanzado de Contador Público (UCA, 2022-Cursando).',
      courses: ['Idoneidad de Mercado de Capitales (BCR, 2021)', 'Análisis de Instrumentos de Inversión (BCR, 2019)', 'Inglés B2', 'Francés B1'],
      experience: [
        'Sólida formación académica en finanzas, inversión y gestión administrativa.'
      ],
      notable: 'Habilidades analíticas y compromiso con el aprendizaje. Manejo avanzado de Microsoft 365 y análisis de datos.',
      toConsider: 'Perfil académico sólido con certificaciones tempranas; requiere su primera experiencia laboral formal en el sector.',
      image: ''
    } as CandidateData
  },
  {
    id: 'tomas-martino',
    type: 'candidate',
    content: {
      name: 'Tomás Martino',
      age: 23,
      study: 'Estudiante avanzado en Relaciones Internacionales (UNR, 2020-2026). Intercambio en Universidad La Gran Colombia (2025).',
      courses: ['Programa de Formación (BCR)', 'Inglés', 'Francés'],
      experience: [
        'Asesor comercial en Global Focus Investments (Dic 2025 - Presente).',
        'Becario en Centro de Estudios Comparados (CEC-UNR) (Mar 2024 - Dic 2025).',
        'Auxiliar alumno en Política Comparada (UNR).'
      ],
      notable: 'Joven investigador con enfoque en análisis de mercado y seguridad internacional. Actitud proactiva frente a desafíos complejos.',
      toConsider: 'Perfil analítico con interés en los ámbitos financiero, comercial y político.',
      image: ''
    } as CandidateData
  },
  {
    id: 'ignacio-otero',
    type: 'candidate',
    content: {
      name: 'Ignacio Otero',
      age: 25,
      study: 'Licenciatura en Economía (85% de la carrera completada).',
      courses: ['Excel avanzado', 'Inglés Intermedio', 'Portugués Básico'],
      experience: [
        'Trader en Ripio (Mar 2025 - Feb 2026).',
        'Middle Office en Ripio (Ene 2024 - Mar 2025).',
        'Liquidador de Valores en Mercado Argentino de Valores (Abr 2023 - Nov 2023).',
        'Analista de Datos en EGND (Dic 2021 - Abr 2023).'
      ],
      notable: 'Experiencia avanzada en trading de FX y cripto, tokenización de activos (RWA) y gestión de riesgos/liquidez.',
      toConsider: 'Perfil técnico senior en mercados financieros; gran potencial para el área de fyoCapital o trading de granos.',
      image: ''
    } as CandidateData
  },
  {
    id: 'sofia-poggia',
    type: 'candidate',
    content: {
      name: 'Sofia Poggia',
      age: 23,
      study: 'Estudiante avanzada de Lic. en Economía (UNR, 5 materias pendientes, 2021-2026). Diplomatura en Mercado de Capitales (Austral).',
      courses: ['Inglés Avanzado', 'Portugués Básico', 'R y Python (básico)', 'Programa de Idoneidad (BCR)'],
      experience: [
        'Analista Financiera (Pasantía) en LB Finanzas (Feb 2025 - Jul 2025).',
        'Ayudante de Cátedra Finanzas Corporativas y Aplicadas (UNR).'
      ],
      notable: 'Perfil analítico orientado a la toma de decisiones basada en datos. Conocimiento en evaluación de proyectos y análisis de estados financieros.',
      toConsider: 'Sólida formación extracurricular en finanzas y riesgos; interés en entornos dinámicos.',
      image: ''
    } as CandidateData
  },
  {
    id: 'joaquin-romero',
    type: 'candidate',
    content: {
      name: 'Joaquín Romero',
      age: 22,
      study: 'Estudiante avanzado de Economía (UNR, 80% aprobado, 2022-En curso).',
      courses: ['Programa de Mercado de Capitales (BYMA)', 'Excel Avanzado', 'IBUR', 'Ecosistema Cripto'],
      experience: [
        'Analista financiero en proyectos académicos (Havanna S.A.).',
        'Evaluación de políticas económicas y su impacto en producción.',
        'Análisis econométrico con microdatos oficiales.'
      ],
      notable: 'Formación en finanzas corporativas y modelado financiero (DCF). Perfil analítico orientado a fintech y crédito privado.',
      toConsider: 'Experiencia en investigación económica y modelado de escenarios; requiere transición a la práctica comercial.',
      image: ''
    } as CandidateData
  },
  {
    id: 'closing',
    type: 'closing',
    title: 'MUCHAS GRACIAS',
    subtitle: 'Programa JP 25-26 | Candidatos granos',
    content: {
      description: 'En fyo, creemos en el poder de las personas para transformar el agro. La cultura de fyo se basa en la confianza, la colaboracion y la innovación.',
      contacts: [
        { role: 'TBP', email: 'mbarrull@fyo.com' },
        { role: 'Talento', email: 'talentos@fyo.com' }
      ]
    }
  }
];
