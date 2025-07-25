import {
  FaGitAlt,
  FaSyncAlt,
  FaGithub,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiPostman,
  SiMongodb,
  SiMysql,
  SiFigma,
  SiNotion,
} from "@icons-pack/react-simple-icons";
import { SiVisualstudiocode } from "react-icons/si";
import { motion } from "framer-motion";
import PuntoComaIcon from "/public/img/puntoComa.svg";

const ToolCard = () => {
  const toolsIcons = {
    VSCode: {
      icon: <SiVisualstudiocode size={40} color="#007ACC" />,
      name: "VSCode",
    },
    Git: {
      icon: <FaGitAlt className="text-4xl" />,
      name: "Git",
    },
    GitHub: {
      icon: <FaGithub className="text-4xl" />,
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
      icon: <SiMysql size={45} color="#00758F" />,
      name: " Workbench",
    },
    Figma: {
      icon: <SiFigma size={45} color="#F24E1E" />,
      name: "Figma",
    },
    Notion: {
      icon: <SiNotion size={45} />,
      name: "Notion",
    },
    Agile: {
      icon: <FaSyncAlt className="text-4xl text-blue-600" />,
      name: "Agile",
    },
    Scrum: {
      icon: <FaProjectDiagram className="text-4xl text-purple-600" />,
      name: "Scrum",
    },
  };

  const tools = Object.keys(toolsIcons);

  return (
    <motion.div className="bg-[#f3f4f6] dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full ">
      <div>
        <h2 className="text-3xl md:text-3xl font-bold text-[#0f406a] dark:text-white  text-start">
          Herramientas
        </h2>
        <img src={PuntoComaIcon} alt="Icono" className="h-10 w-14" />
      </div>

      <div className="grid grid-cols-4  md:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <div
            key={tool}
            className="flex items-center justify-center gap-2 bg-white dark:bg-gray-700 rounded-lg p-3 md:p-4 text-gray-900 dark:text-gray-200"
          >
            {toolsIcons[tool].icon}
            <span className="text-lg hidden md:block">
              {toolsIcons[tool].name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ToolCard;
