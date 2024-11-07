import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "To Do List",
      description: 'Primer proyecto con Vanilla JavaScript. Lista de tareas clásica con "modo oscuro".',
      image: "/toDoList2.PNG",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://listadetareashechas.netlify.app/",
      repo: "https://github.com/antgom/ToDoList",
    },
    {
      title: "Juego Colores",
      description:
        "Proyecto grupal con Vanilla JavaScript. ¡Pon a prueba tu daltonismo!",
      image: "/colores.PNG",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://antgom.github.io/JuegosColores",
      repo: "https://github.com/antgom/JuegosColores",
    },

    {
      title: "Proyecto: Coworking Spaces",
      description:
        "Gestión integral de espacios. Calendario, reservas, incidencias y chat en tiempo real.",
      image: "https://via.placeholder.com/400x300",
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
      repo: "https://github.com/antgom/CoworkingSpaces",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Proyectos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="relative  bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                whileHover={{  scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain mt-4 shadow-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between absolute bottom-4 left-6 right-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Ver Proyecto →
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Ver Repositorio →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
