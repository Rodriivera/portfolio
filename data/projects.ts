export const gradients = {
  violet: `
   radial-gradient(at 9% 11%, #e6b2b0 0, transparent 46%),radial-gradient(at 10% 86%, hsl(337deg 51% 45%) 0, transparent 50%), radial-gradient(at 80% 0%, #6856d6 0, transparent 50%),radial-gradient(at 0% 50%, hsla(355,85%,93%,1) 0, transparent 50%),radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0, transparent 50%),radial-gradient(at 91% 89%, hsla(8,59%,58%,1) 0, transparent 50%);
  `,
  sunset: `
    radial-gradient(at 62% 39%, hsla(240,38%,23%,1) 0, transparent 48%), radial-gradient(at 9% 11%, hsla(255,63%,55%,1) 0, transparent 46%),radial-gradient(at 80% 0%, hsla(182,59%,48%,1) 0, transparent 50%),radial-gradient(at 7% 89%, hsla(249,45%,32%,1) 0, transparent 50%),radial-gradient(at 0% 100%, hsla(8,59%,58%,1) 0, transparent 50%),radial-gradient(at 91% 89%, hsla(16,26%,55%,1) 0, transparent 50%);
  `,
  cyan: `
    radial-gradient(at 33% 68%, hsla(262,98%,20%,1) 0, transparent 50%),radial-gradient(at 98% 2%, hsla(262,98%,20%,1) 0, transparent 50%),radial-gradient(at 11% 49%, hsla(225,44%,69%,1) 0, transparent 50%),radial-gradient(at 0% 100%, hsla(218,40%,77%,1) 0, transparent 50%),radial-gradient(at 96% 94%, hsla(281,45%,56%,1) 0, transparent 50%),radial-gradient(at 0% 0%, hsla(231,44%,56%,1) 0, transparent 50%);
  `,
  pink: `
    radial-gradient(at 70% 63%, hsla(265,57%,15%,1) 0, transparent 50%),radial-gradient(at 98% 2%, hsla(305,43%,18%,1) 0, transparent 50%),  radial-gradient(at 29% 36%, hsla(7,26%,47%,1) 0, transparent 50%),radial-gradient(at 0% 100%, hsla(267,55%,15%,1) 0, transparent 50%),radial-gradient(at 96% 93%, hsla(1,100%,64%,1) 0, transparent 50%),  radial-gradient(at 0% 0%, hsla(38,68%,72%,1) 0, transparent 50%);
  `,
};

export const projects = [
  {
    id: 1,
    title: "Taskly App",
    description: "Taskly is a full-stack Kanban-based project and task management platform that lets teams create projects, manage tasks by status, collaborate, add notes, and track progress in real time with secure authentication and role-based access.",
    description_es: "Taskly es una plataforma full-stack de gestión de proyectos y tareas basada en Kanban que permite crear proyectos, gestionar tareas por estado, colaborar, añadir notas y seguir el progreso en tiempo real con autenticación segura y control de roles.",
    image: "/taskly.png",
    year: "2026",
    slug: "taskly-app",
    github: "https://github.com/Rodriivera/taskly_frontend",
    website: "https://taskly-frontend-rodrivera111-gmailcoms-projects.vercel.app/",
    gradient: gradients.violet,
    technologies: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Express.js", icon: "/icons/express.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { name: "Vercel", icon: "/icons/vercel.svg" },
      { name: "Git", icon: "/icons/git.svg" },
    ],
  },
  {
    id: 2,
    title: "Ordenes App",
    description: "Ordenes App helps businesses automate order workflows, reduce manual processes, and manage products and availability, offering an intuitive customer experience and a centralized admin panel for real-time order control.",
    description_es: "Ordenes App ayuda a las empresas a automatizar flujos de órdenes, reducir procesos manuales y gestionar productos y disponibilidad, ofreciendo una experiencia intuitiva al cliente y un panel de administración centralizado para el control de órdenes en tiempo real.",
    image: "/ordenes.png",
    year: "2026",
    slug: "ordenes-app",
    github: "https://github.com/Rodriivera/ordenes-next",
    website: "https://ordenes-next.vercel.app/order/cafe",
    gradient: gradients.cyan,
    technologies: [
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { name: "Prisma", icon: "/icons/prisma.svg" },
      { name: "Vercel", icon: "/icons/vercel.svg" },
      { name: "Git", icon: "/icons/git.svg" },
    ],
  },
  {
    id: 3,
    title: "Bolsa de trabajo",
    description: "Bolsa de Trabajo is a job board platform that connects students with job opportunities, allowing users to build profiles, upload résumés, save and apply to offers, while administrators manage postings and export applicant data for companies.",
    description_es: "Bolsa de Trabajo es una plataforma de empleo que conecta a estudiantes con oportunidades laborales, permitiendo crear perfiles, subir currículums, guardar y postular a ofertas, mientras los administradores gestionan publicaciones y exportan datos de postulantes para las empresas.",
    image: "/bolsadetrabajo.png",
    year: "2025",
    slug: "bolsa-de-trabajo",
    github: "https://github.com/Rodriivera/Bolsadetrabajo",
    website: null, // no tiene web
    gradient: gradients.pink,
    technologies: [
      { name: "Laravel", icon: "/icons/laravel.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "PHP", icon: "/icons/php.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "Git", icon: "/icons/git.svg" },
    ],
  },
  {
    id: 4,
    title: "Aromas Ecommerce",
    description:
      "Aromas is an e-commerce platform for fragrances and lifestyle products where users can browse, add items to cart or favorites, make purchases, and administrators manage products and view statistics through a dashboard.",
    description_es:
      "Aromas es una plataforma e-commerce de fragancias y productos de lifestyle donde los usuarios pueden navegar, añadir artículos al carrito o favoritos, realizar compras, y los administradores gestionan productos y ven estadísticas desde un dashboard.",
    image: "/aromas.png",
    year: "2024",
    slug: "aromas",
    github: "https://github.com/Rodriivera/ProyectoPP2024",
    website: null, // no tiene web
    gradient: gradients.sunset,
    technologies: [
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "PHP", icon: "/icons/php.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "Git", icon: "/icons/git.svg" },
    ],
  },
];
