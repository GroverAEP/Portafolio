// ============================================================================
// ARCHIVO DE DATOS DEL PORTAFOLIO
// ----------------------------------------------------------------------------
// Edita únicamente los valores de este archivo para actualizar tu portafolio.
// No necesitas tocar ningún componente. Guarda y vuelve a desplegar (o Vercel
// lo hará automáticamente si está conectado a tu repositorio de Git).
// ============================================================================

export interface Profile {
  name: string;
  role: string;
  location: string;
  status: string; // ej: "Disponible para nuevos proyectos"
  summary: string;
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  website?: string;
  cvUrl?: string; // enlace a tu CV en PDF (opcional)
}

export interface Metric {
  label: string;
  value: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  period: string;
  description: string;
  stack: string[];
  role: string;
  status: "en producción" | "en desarrollo" | "finalizado" | "archivado";
  repoUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface CourseOrCertification {
  name: string;
  institution: string;
  year: string;
  type: "certificación" | "curso";
  credentialUrl?: string;
  hours?: string;
}

export const profile: Profile = {
  name: "Tu Nombre Apellido",
  role: "Ingeniero de Sistemas",
  location: "Lima, Perú",
  status: "Disponible para nuevos proyectos",
  summary:
    "Ingeniero de Sistemas con experiencia en infraestructura, redes, administración de servidores y desarrollo de soluciones de software. Enfocado en construir sistemas confiables, automatizar procesos y resolver problemas técnicos complejos con soluciones simples y mantenibles.",
  email: "tucorreo@ejemplo.com",
  phone: "+51 900 000 000",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-usuario",
  website: "https://tu-dominio.com",
  cvUrl: "",
};

export const metrics: Metric[] = [
  { label: "años_experiencia", value: "3+" },
  { label: "proyectos_desplegados", value: "12" },
  { label: "certificaciones", value: "6" },
  { label: "uptime_promedio", value: "99.9%" },
];

export const skills: SkillGroup[] = [
  {
    category: "Sistemas y Redes",
    items: ["Linux (Ubuntu/CentOS)", "Windows Server", "TCP/IP", "DNS/DHCP", "VPN", "Firewalls"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "CI/CD", "Nginx", "Bash/Shell scripting", "Monitoreo (Grafana/Zabbix)"],
  },
  {
    category: "Bases de datos",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Desarrollo",
    items: ["JavaScript/TypeScript", "Python", "Node.js", "React/Next.js", "APIs REST"],
  },
];

export const projects: Project[] = [
  {
    name: "Sistema de Monitoreo de Infraestructura",
    period: "2025",
    description:
      "Plataforma de monitoreo en tiempo real para servidores y servicios críticos, con alertas automáticas por correo y Slack ante caídas o uso anormal de recursos.",
    stack: ["Python", "Grafana", "Prometheus", "Docker"],
    role: "Desarrollador principal",
    status: "en producción",
    repoUrl: "https://github.com/tu-usuario/monitoreo-infra",
    liveUrl: "",
  },
  {
    name: "Automatización de Despliegues (CI/CD)",
    period: "2024",
    description:
      "Pipeline de integración y despliegue continuo para reducir el tiempo de entrega de nuevas versiones y estandarizar los ambientes de desarrollo, staging y producción.",
    stack: ["GitHub Actions", "Docker", "Nginx", "Bash"],
    role: "Ingeniero DevOps",
    status: "en producción",
    repoUrl: "https://github.com/tu-usuario/cicd-pipeline",
  },
  {
    name: "Sistema de Gestión Interna (Intranet)",
    period: "2023 - 2024",
    description:
      "Aplicación web para la gestión de inventario, usuarios y reportes internos de una empresa mediana, con control de roles y permisos.",
    stack: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    role: "Desarrollador full-stack",
    status: "finalizado",
    repoUrl: "https://github.com/tu-usuario/intranet-sistema",
  },
];

export const experience: Experience[] = [
  {
    company: "Nombre de la Empresa",
    role: "Ingeniero de Sistemas / Soporte de Infraestructura",
    period: "Ene. 2024 — Presente",
    location: "Lima, Perú",
    description:
      "Responsable de la administración de servidores, redes internas y soporte técnico de segundo nivel para más de 150 usuarios.",
    achievements: [
      "Reduje el tiempo promedio de resolución de incidencias en un 35% mediante la implementación de un sistema de tickets.",
      "Migré la infraestructura on-premise a servicios en la nube, disminuyendo costos operativos en un 20%.",
      "Documenté procesos de red y políticas de seguridad, estandarizando la gestión del equipo de TI.",
    ],
  },
  {
    company: "Nombre de la Empresa Anterior",
    role: "Practicante de Sistemas",
    period: "Jun. 2023 — Dic. 2023",
    location: "Lima, Perú",
    description:
      "Soporte en el mantenimiento de equipos, configuración de redes y desarrollo de pequeñas herramientas internas.",
    achievements: [
      "Desarrollé un script de respaldo automático que eliminó la pérdida de información en incidentes de hardware.",
      "Colaboré en la configuración de más de 40 estaciones de trabajo bajo un mismo estándar corporativo.",
    ],
  },
];

export const coursesAndCertifications: CourseOrCertification[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    institution: "Amazon Web Services",
    year: "2025",
    type: "certificación",
    credentialUrl: "",
  },
  {
    name: "Google IT Support Professional Certificate",
    institution: "Google / Coursera",
    year: "2024",
    type: "certificación",
    credentialUrl: "",
  },
  {
    name: "CCNA: Introduction to Networks",
    institution: "Cisco Networking Academy",
    year: "2023",
    type: "curso",
    hours: "70 horas",
  },
  {
    name: "Docker y Kubernetes de cero a experto",
    institution: "Udemy",
    year: "2024",
    type: "curso",
    hours: "40 horas",
  },
];
