import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiVite,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import PuntoComaIcon from "/public/img/puntoComa.svg";

const SkillsCard = () => {
  const skillIcons = {
    HTML: {
      icon: <FaHtml5 className="text-4xl text-orange-600" />,
      name: "HTML",
    },
    CSS: {
      icon: <FaCss3Alt className="text-4xl text-blue-600" />,
      name: "CSS",
    },
    Tailwindcss: {
      icon: <SiTailwindcss size={40} color="#38B2AC" />,
      name: "TailwindCSS",
    },
    JavaScript: {
      icon: <FaJsSquare className="text-4xl text-yellow-500" />,
      name: "JavaScript",
    },
    MongoDB: {
      icon: <SiMongodb size={40} color="#47A248" />,
      name: "MongoDB",
    },
    MySQL: {
      icon: <SiMysql size={45} color="#00758F" />,
      name: "MySQL",
    },
    "Node.js": {
      icon: <FaNodeJs className="text-4xl text-green-600" />,
      name: "Node.js",
    },
    Express: {
      icon: <SiExpress size={40} color="#000000" />,
      name: "Express",
    },
    React: {
      icon: <FaReact className="text-4xl text-blue-400" />,
      name: "React",
    },
    Vite: {
      icon: <SiVite size={40} color="#646CFF" />,
      name: "Vite",
    },
  };

  const skills = Object.keys(skillIcons);

  return (
    <motion.div className="bg-[#f3f4f6] dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-[#0f406a] dark:text-white  text-start">
          Stack tecnológico
        </h2>
        <img src={PuntoComaIcon} alt="Icono" className="h-10 w-14" />
      </div>

      <div className="grid grid-cols-4  md:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center justify-center gap-2 bg-white dark:bg-gray-700 rounded-lg p-3 md:p-4 text-gray-900 dark:text-gray-200"
          >
            {skillIcons[skill].icon}
            <span className="text-lg hidden md:block">
              {skillIcons[skill].name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsCard;
