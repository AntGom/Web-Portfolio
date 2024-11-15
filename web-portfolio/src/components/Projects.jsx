import { motion } from "framer-motion";
import ProjectCard from "./cards/ProjectsCard";
import PuntoComaIcon from "/public/img/puntoComa.svg";

const Projects = () => {
  const projects = [
    {
      title: "Coworking Spaces",
      description:
        "Gestión integral de espacios. Calendario, reservas, incidencias y chat en tiempo real.",
      images: [
        "/Web-Portfolio/coworking.webp",
        "/Web-Portfolio/coworkingPc.webp",
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
        "NodeJS",
        "React+Vite",
        "Tailwind",
      ],
      link: "#",
      repo: "https://github.com/AntGom/Coworking_Space",
    },
    {
      title: "Web-Portfolio",
      description: "Web personal para mostrar mis proyectos y habilidades.",
      images: [
        "/Web-Portfolio/portfolio.webp",
        "/Web-Portfolio/portfolioMovil.webp",
        "/Web-Portfolio/portfolioPc.webp",
      ],
      tech: ["HTML", "CSS", "JavaScript", "React + Vite", "Tailwind"],
      link: "https://antgom.github.io/Web-Portfolio/",
      repo: "https://github.com/AntGom/Web-Portfolio",
    },
    {
      title: "Juego Colores",
      description:
        "Proyecto grupal con Vanilla JavaScript. ¡Pon a prueba tu daltonismo!",
      images: [
        "/Web-Portfolio/colores.webp",
        "/Web-Portfolio/colorMovil.webp",
        "/Web-Portfolio/colorPc.webp",
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://antgom.github.io/JuegosColores",
      repo: "https://github.com/antgom/JuegosColores",
    },
    {
      title: "To Do List",
      description:
        'Primer proyecto con Vanilla JavaScript. Lista de tareas clásica con "modo oscuro".',
      images: [
        "/Web-Portfolio/todoClaro.PNG",
        "/Web-Portfolio/todoPc.PNG",
        "/Web-Portfolio/todoMovil.PNG",
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://antgom.github.io/todolist/",
      repo: "https://github.com/AntGom/todolist",
    },
  ];

  return (
    <section
      id="projects"
      className="py-10 bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-3xl font-bold  dark:text-white  text-[#0f406a]">
              Proyectos
            </h2>
            <img src={PuntoComaIcon} alt="Icono" className="h-10 w-14  -ml-20" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[40%_40%] lg:grid-cols-[40%_40%] justify-center">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
