import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiPostman, SiMongodb, SiMysql, SiFigma, SiNotion } from "@icons-pack/react-simple-icons";
import { SiVisualstudiocode } from "react-icons/si";
import { motion } from "framer-motion";

const ToolCard = () => {
  const toolsIcons = {
    VSCode: {
      icon: <SiVisualstudiocode size={40} color="#007ACC" />,
      name: "VSCode",
    },
    Git: {
      icon: <FaGitAlt size={40} color="#F05032" />,
      name: "Git",
    },
    GitHub: {
      icon: <FaGithub size={40} color="#181717" />,
      name: "GitHub",
    },
    Postman: {
      icon: <SiPostman size={40} color="#FF6C37" />,
      name: "Postman",
    },
    "MongoDB Compass": {
      icon: <SiMongodb size={40} color="#47A248" />,
      name: "Mongo Compass",
    },
    "MySQL Workbench": {
      icon: <SiMysql size={40} color="#00758F" />,
      name: "MySQL Workbench",
    },
    Figma: {
      icon: <SiFigma size={40} color="#F24E1E" />,
      name: "Figma",
    },
    Notion: {
      icon: <SiNotion size={40} color="#000000" />,
      name: "Notion",
    },
  };

  const tools = Object.keys(toolsIcons);

  return (
    <motion.div
    className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full sm:full md:w-full lg:w-full"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        Herramientas y Programas
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <div
            key={tool}
            className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-3 md:p-4 text-gray-900 dark:text-gray-200"
          >
            {toolsIcons[tool].icon}
            <span className="text-lg">{toolsIcons[tool].name}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-7 mb-6">
        <a href="../../../public/CV_Antonio_gomez_dmgz.pdf" download>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Descargar CV
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default ToolCard;
