import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative bg-[#f3f4f6] dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg ">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-contain mt-4 "
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-16">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm "
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
            className="bg-[#ffa53b] text-gray-50 px-8 py-2 text-md rounded-full hover:bg-[#0f406a] transition-colors flex items-center gap-x-2 border-2 border-[#ffa53b] hover:border-[#0f406a]"          >
            Ver Proyecto
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-[#0f406a] px-4 py-2 text-md rounded-full hover:text-[#ffa53b] hover:border-[#ffa53b] transition-colors flex items-center gap-x-2 border-2 border-[#0f406a]"
            >
            Ver Repositorio
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
