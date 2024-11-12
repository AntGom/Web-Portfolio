import { motion } from "framer-motion";
import ProjectCard from "./cards/ProjectsCard";

const Projects = () => {
  const projects = [
    {
      title: "Proyecto: Coworking Spaces",
      description:
        "Gestión integral de espacios. Calendario, reservas, incidencias y chat en tiempo real.",
      image: "/Web-Portfolio/coworking.PNG",
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
      image: "/Web-Portfolio/portfolio.PNG",
      tech: ["HTML", "CSS", "JavaScript", "React + Vite", "Tailwind"],
      link: "https://antgom.github.io/Web-Portfolio/",
      repo: "https://github.com/AntGom/Web-Portfolio",
    },
    {
      title: "To Do List",
      description:
        'Primer proyecto con Vanilla JavaScript. Lista de tareas clásica con "modo oscuro".',
      image: "/Web-Portfolio/toDoList2.PNG",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://listadetareashechas.netlify.app/",
      repo: "https://github.com/AntGom/todolist34rt",
    },
    {
      title: "Juego Colores",
      description:
        "Proyecto grupal con Vanilla JavaScript. ¡Pon a prueba tu daltonismo!",
      image: "/Web-Portfolio/colores.PNG",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://antgom.github.io/JuegosColores",
      repo: "https://github.com/antgom/JuegosColores",
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
          <div className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2 transparent dark:bg-gray-800 rounded-2xl p-4 md:w-[83%] mx-auto flex justify-center">
            <h2 className=" font-extrabold text-[#ffa53b]">⊳⊳</h2>
            <h2 className=" font-bold text-[#0f406a] dark:text-white mb-4">Proyectos</h2>
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
