import { motion } from "framer-motion";
import ProjectCard from './cards/ProjectsCard';

const Projects = () => {
  const projects = [
    {
      title: "Proyecto: Coworking Spaces",
      description:
        "Gestión integral de espacios. Calendario, reservas, incidencias y chat en tiempo real.",
      image: "/Web-Portfolio/coworking.PNG", 
      tech: [ "HTML","CSS","JavaScript","MySQL","NodeJS","React+Vite","Tailwind",],
      link: "#",
      repo: "https://github.com/AntGom/Coworking_Space",
    },
    {
      title: "Web-Portfolio",
      description:
        "Web personal para mostrar mis proyectos y habilidades.",
      image: "/Web-Portfolio/portfolio.PNG", 
      tech: ["HTML", "CSS", "JavaScript", "React + Vite", "Tailwind",],
      link: "https://antgom.github.io/Web-Portfolio/",
      repo: "https://github.com/AntGom/Web-Portfolio",
    },
    {
      title: "To Do List",
      description: 'Primer proyecto con Vanilla JavaScript. Lista de tareas clásica con "modo oscuro".',
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
    <section id="projects" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
       
<h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 bg-blue-500 p-4 shadow-lg rounded">
  Proyectos
</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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