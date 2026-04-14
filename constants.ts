
export type IconKey = 'Compass' | 'Target' | 'BrainCircuit' | 'Layers' | 'Zap' | 'ClipboardCheck' | 'Heart' | 'Sparkles' | 'Users' | 'DollarSign' | 'Briefcase' | 'Calendar' | 'GraduationCap' | 'FileText' | 'Flag' | 'PencilRuler' | 'Search' | 'FileSignature' | 'Rocket' | 'BarChart3';

export interface SlideData {
  id: string;
  type: 'cover' | 'candidate' | 'closing';
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
    title: 'Candidatos | JP 25-26',
    subtitle: 'Informe de candidatos para Assessment Center',
    content: {
      highlight: 'Estrategia de Crecimiento',
      tags: ['Mercado de Capitales', 'Talento joven', 'Proceso de selección']
    }
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
      notable: 'Perfil organizado y proactivo con fuerte interés en la gestión de proyectos y la aplicación de IA para la optimización de procesos.',
      toConsider: 'Sólida base en negocios digitales; su perfil es adaptable a áreas de soporte tecnológico o innovación dentro de fyoCapital.',
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
      notable: 'Experiencia sólida en análisis de créditos y finanzas corporativas en una multinacional líder (Cargill). Representante de carrera con formación en mercados (NOR).',
      toConsider: 'Perfil con alta exposición previa a procesos financieros del agro; gran potencial para el área de créditos o riesgos de fyoCapital.',
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
      notable: 'Enfocado en la mejora operativa y financiera con experiencia en reportes y flujos de caja. Formación técnica sólida y preparación para Idoneidad CNV.',
      toConsider: 'Perfil contable/financiero con capacidad analítica; ideal para áreas de administración financiera o back office en fyoCapital.',
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
      notable: 'Perfil emprendedor con visión internacional y experiencia en gestión administrativa. Interés en consultoría e innovación.',
      toConsider: 'Habilidades de comunicación destacadas y formación en administración; adaptable a áreas de soporte estratégico o relaciones institucionales.',
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
      notable: 'Fuerte orientación a mercados de capitales y finanzas con experiencia en asesoría comercial de inversiones. Cuenta con certificación de Idoneidad (CNV).',
      toConsider: 'Perfil técnico-comercial con experiencia directa en el sector financiero; excelente fit para el equipo comercial de fyoCapital.',
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
      notable: 'Interés marcado en finanzas y mercado de capitales con formación específica en la BCR. Experiencia en atención a clientes internacionales.',
      toConsider: 'Perfil organizado con capacidad analítica y manejo de herramientas de datos (R); potencial para análisis de mercado en fyoCapital.',
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
      notable: 'Sólida formación académica temprana en finanzas e inversión con múltiples certificaciones de la BCR (Idoneidad).',
      toConsider: 'Perfil con alto potencial académico y técnico en mercados de capitales; listo para su primera experiencia formal en el sector.',
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
      notable: 'Enfoque analítico en análisis de mercado y asesoría comercial en inversiones. Actitud proactiva y formación internacional.',
      toConsider: 'Perfil con visión global e interés en el ámbito financiero y comercial; adaptable a roles de análisis o soporte comercial.',
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
      notable: 'Experiencia avanzada en trading de FX, cripto y tokenización de activos (RWA). Gestión de riesgos y liquidez en entornos dinámicos.',
      toConsider: 'Perfil técnico senior con experiencia directa en trading y middle office; excelente candidato para la mesa de operaciones de fyoCapital.',
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
      notable: 'Perfil analítico orientado a finanzas corporativas y toma de decisiones basada en datos. Diplomatura en Mercado de Capitales.',
      toConsider: 'Sólida formación en riesgos y finanzas; ideal para roles de análisis financiero o gestión de riesgos en fyoCapital.',
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
      notable: 'Formación en finanzas corporativas, modelado financiero (DCF) y programas de Mercado de Capitales (BYMA).',
      toConsider: 'Perfil analítico con enfoque en fintech y crédito privado; potencial para el área de estructuración o análisis de fyoCapital.',
      image: ''
    } as CandidateData
  },
  {
    id: 'closing',
    type: 'closing',
    title: 'MUCHAS GRACIAS',
    subtitle: 'Programa JP 25-26 | Candidatos fyoCap',
    content: {
      description: 'En fyoCapital, impulsamos el crecimiento del mercado financiero aplicado al agro. Nuestra cultura se basa en la excelencia, la transparencia y la innovación constante.',
      contacts: [
        { role: 'TBP', email: 'mbarrull@fyo.com' },
        { role: 'Talento', email: 'talentos@fyo.com' }
      ]
    }
  }
];
