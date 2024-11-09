import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiVite } from "@icons-pack/react-simple-icons";

const SkillCard = () => {
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
    React: {
      icon: <FaReact className="text-4xl text-blue-400" />,
      name: "React",
    },
    Vite: {
      icon: <SiVite size={40} color="#646CFF" />,
      name: "Vite",
    },
    "Node.js": {
      icon: <FaNodeJs className="text-4xl text-green-600" />,
      name: "Node.js",
    },
    Express: {
      icon: <SiExpress size={40} color="#000000" />,
      name: "Express",
    },
    MongoDB: {
      icon: <SiMongodb size={40} color="#47A248" />,
      name: "MongoDB",
    },
    MySQL: {
      icon: <SiMysql size={45} color="#00758F" />,
      name: "MySQL",
    },
  };

  const skills = Object.keys(skillIcons);

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-8 w-full md:w-2/5 lg:w-2/4">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
      Stack tecnológico
    </h2>
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill) => (
        <div
          key={skill}
          className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-gray-900 dark:text-gray-200"
        >
          {skillIcons[skill].icon}
          <span className="text-lg">{skillIcons[skill].name}</span>
        </div>
      ))}
    </div>
  </div>
  );
};

export default SkillCard;
