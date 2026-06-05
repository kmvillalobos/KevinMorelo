/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * Structured content for Kevin Morelo's portfolio.
 */

export const site = {
  url: 'https://kevinmorelo.vercel.app',
  meta: {
    title: 'Kevin Morelo | Software Engineer, Full Stack, Cloud & DevOps',
    description:
      'Portafolio profesional de Kevin Andres Morelo Villalobos: Software Engineer, Full Stack Developer con experiencia en AWS, Azure DevOps, Java, Angular, Astro y SQL.',
  },
  hero: {
    name: 'Kevin Andres Morelo',
    role: 'Software Engineer | Full Stack Developer | Cloud & DevOps',
    tagline:
      'Construyo soluciones empresariales escalables integrando desarrollo full stack, servicios cloud, bases de datos y automatización CI/CD.',
    contact:
      'Ingeniero de Sistemas en Montería, Colombia. Abierto a oportunidades remotas, fintech, cloud, DevOps y desarrollo de software.',
    avatarSrc: '/yo.png',
    avatarAlt: 'Kevin Andres Morelo Villalobos',
  },
  about: {
    paragraphs: [
      'Ingeniero de Sistemas con más de 4 años de experiencia en desarrollo de software, automatización de procesos y servicios cloud, con foco en el sector financiero. Trabajo con Java, Angular, SQL, AWS y Azure DevOps para construir soluciones empresariales, reportes regulatorios, integraciones backend y procesos de entrega continua.',
      'He creado aproximadamente 5 pipelines y administrado más de 20 pipelines en Azure DevOps. También he trabajado con servicios AWS como RDS, S3, EC2, CloudWatch, Glue, Step Functions, Batch, DynamoDB, Lambda, CloudFormation y Route 53.',
      {
        heading: 'Propuesta de valor',
        bullets: [
          'Desarrollo full stack con enfoque práctico en negocio, mantenibilidad y escalabilidad.',
          'Experiencia real en sector financiero, reportes regulatorios, SQL y sistemas empresariales.',
          'Capacidad para llevar proyectos de extremo a extremo: análisis, desarrollo, despliegue, integraciones y mejora continua.',
        ],
      },
      {
        heading: 'Stack principal',
        techItems: [
          'Java',
          'Angular',
          'Astro',
          'TypeScript',
          'SQL',
          'AWS',
          'Azure DevOps',
          'Docker',
          'Tailwind CSS',
          'PayU',
          'Resend',
        ],
      },
    ],
  },
  experiences: [
    {
      period: 'Mar 2022 - Actualidad',
      title: 'Developer',
      company: 'Cobis Topaz',
      summary:
        'Desarrollo, mantenimiento y optimización de soluciones tecnológicas para clientes del sector financiero, con foco en estabilidad, automatización y cumplimiento de requerimientos del negocio.',
      highlights: [
        'Creación de aproximadamente 5 pipelines en Azure DevOps para automatizar procesos de integración y despliegue continuo.',
        'Administración y seguimiento de más de 20 pipelines activos en Azure DevOps, apoyando entregas confiables y oportunas.',
        'Desarrollo de procedimientos almacenados SQL / SP SQL para generación de reportes regulatorios dirigidos a entidades de supervisión bancaria.',
        'Gestión, consulta y optimización de bases de datos MySQL y SQL Server en entornos empresariales.',
        'Implementación y soporte de servicios AWS: RDS, S3, EC2, Lambda, CloudWatch, Glue, Step Functions, Batch, DynamoDB, CloudFormation y Route 53.',
        'Desarrollo de funcionalidades en aplicaciones empresariales usando Java y Angular bajo metodología Scrum.',
        'Generación de reportes dinámicos mediante Jasper Reports e integración con sistemas centrales.',
      ],
      tech: ['Java', 'Angular', 'SQL', 'Azure DevOps', 'AWS', 'Docker', 'Jasper Reports', 'Scrum'],
    },
    {
      period: 'Abr 2020 - Sep 2021',
      title: 'Gerente General',
      company: 'Sociedad Metrológica',
      summary:
        'Liderazgo operativo y comercial en una empresa del sector salud, conectando visión de negocio, tecnología, gestión de proyectos y mejora de procesos internos.',
      highlights: [
        'Coordinación de proyectos de servicio técnico para clientes del sector salud.',
        'Desarrollo y optimización de procesos internos mediante herramientas web para mejorar trazabilidad y eficiencia operativa.',
        'Supervisión de operaciones administrativas, comerciales y cumplimiento de objetivos estratégicos.',
        'Gestión de equipos y proyectos, fortaleciendo liderazgo, análisis de necesidades empresariales y toma de decisiones.',
      ],
      tech: ['Gestión de proyectos', 'Procesos web', 'Sector salud', 'Liderazgo', 'Operaciones'],
    },
  ],
  featuredProjects: [
    {
      title: 'Sociedad Biomédica — Sitio web corporativo',
      period: 'Proyecto destacado',
      url: 'https://www.sociedadbiomedica.com/',
      summary:
        'Desarrollo end-to-end de forma independiente del sitio web corporativo de una empresa real del sector salud y tecnología biomédica.',
      solution:
        'Implementé una interfaz moderna, responsiva y orientada a conversión comercial con Astro y Tailwind CSS. Organicé secciones institucionales, servicios, formación, contacto y soluciones empresariales para comunicar con claridad la propuesta de valor de la compañía.',
      impact:
        'Proyecto publicado y en operación, con integración de pagos mediante PayU, despliegue productivo en Vercel, formularios web y envío automático de correos mediante Resend para captación de leads y soporte comercial.',
      image: 'image.png',
      imageAlt: 'Vista del proyecto web Sociedad Biomédica',
      techCategories: [
        {
          category: 'Frontend',
          items: ['Astro', 'Tailwind CSS', 'Responsive Design', 'UI comercial'],
        },
        {
          category: 'Integraciones y despliegue',
          items: ['Vercel', 'PayU', 'Resend', 'Formularios web'],
        },
      ],
    },
    {
      title: 'Automatización Cloud & DevOps en entorno financiero',
      period: 'Cobis Topaz',
      url: 'https://www.cobistopaz.com/es/home',
      summary:
        'Participación en procesos de automatización, despliegue, datos y soporte cloud para soluciones empresariales del sector financiero.',
      solution:
        'Creación y administración de pipelines CI/CD en Azure DevOps, desarrollo de procedimientos almacenados SQL y soporte de servicios AWS para procesamiento, almacenamiento, observabilidad e infraestructura.',
      impact:
        'Aporte a entregas más controladas, procesos repetibles, reportes regulatorios y operación de sistemas empresariales con tecnologías cloud y bases de datos.',
      image: 'image2.png',
      imageAlt: 'Representación de automatización cloud y DevOps',
      techCategories: [
        {
          category: 'DevOps',
          items: ['Azure DevOps', 'Pipelines CI/CD', 'Git', 'Docker'],
        },
        {
          category: 'Cloud y datos',
          items: ['AWS RDS', 'S3', 'Lambda', 'Glue', 'Step Functions', 'SQL'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'Archivo de proyectos',
    description: 'Resumen de proyectos, roles y tecnologías destacadas de Kevin Morelo.',
    intro:
      'Una vista rápida de proyectos y experiencias representativas en desarrollo full stack, cloud, DevOps e integraciones.',
  },
  projectArchive: [
    {
      date: '2026',
      project: 'Sociedad Biomédica - sitio web corporativo',
      role: 'Full Stack / Integraciones',
      techStack: 'Astro, Tailwind CSS, Vercel, PayU, Resend',
    },
    {
      date: '2022 - Actualidad',
      project: 'Automatización CI/CD en sector financiero',
      role: 'Developer / DevOps',
      techStack: 'Azure DevOps, Pipelines, Git, Docker',
    },
    {
      date: '2022 - Actualidad',
      project: 'Reportes regulatorios y procedimientos almacenados',
      role: 'Backend / SQL',
      techStack: 'SQL, MySQL, SQL Server, Jasper Reports',
    },
    {
      date: '2022 - Actualidad',
      project: 'Servicios Cloud AWS para soluciones empresariales',
      role: 'Cloud Developer',
      techStack: 'RDS, S3, EC2, Lambda, Glue, Step Functions, DynamoDB',
    },
    {
      date: '2020 - 2021',
      project: 'Optimización de procesos operativos en sector salud',
      role: 'Gestión / Procesos web',
      techStack: 'Herramientas web, gestión de proyectos, operaciones',
    },
  ],
  contact: {
    email: 'kevinmorelov@hotmail.com',
    phone: '+57 311 683 6400',
    github: 'https://github.com/kmvillalobos',
    linkedin: 'https://www.linkedin.com/in/kevinmorelo',
    cv: '/cv-kevin-morelo.pdf',
    project: 'https://www.sociedadbiomedica.com/',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
