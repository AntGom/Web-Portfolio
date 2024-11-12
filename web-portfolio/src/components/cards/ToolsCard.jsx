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
      name: " Compass",
    },
    "MySQL Workbench": {
      icon: <SiMysql size={40} color="#00758F" />,
      name: " Workbench",
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
    className="bg-[#f3f4f6] dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full ">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        Herramientas y Programas
      </h2>
      <div className="grid grid-cols-4  md:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <div
            key={tool}
            className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 rounded-lg p-3 md:p-4 text-gray-900 dark:text-gray-200"
          >
            {toolsIcons[tool].icon}
            <span className="text-lg hidden md:block">{toolsIcons[tool].name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ToolCard;
