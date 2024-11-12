import { motion } from "framer-motion";
import SkillCard from "./cards/SkillsCard";
import ToolCard from "./cards/ToolsCard";
import AboutDescription from "../components/AboutComponents/AboutDescriptions";
import AboutButtons from "../components/AboutComponents/AboutButtons";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col-reverse lg:flex-row gap-8">
            {/* Div para la foto en pantallas grandes */}
            <div className="w-full lg:w-1/3 justify-center lg:justify-center hidden lg:flex">
              <img
                src="/Web-Portfolio/fotoweb.jpeg"
                alt="Foto de Antonio Gómez"
                className="rounded-lg mb-6 lg:mb-0 object-contain h-auto"
              />
            </div>

            {/* Texto y botones */}
            <div className="bg-transparent dark:bg-gray-800 rounded-2xl p-8 w-full lg:w-2/3 text-gray-800 dark:text-gray-300">
              <div className="flex flex-row ">
                <h2 className="text-3xl font-extrabold text-[#ffa53b]">⊳⊳</h2>
                <h2 className="text-3xl font-bold text-[#0f406a] dark:text-white mb-4">
                  Te cuento sobre mí.
                </h2>
              </div>

              <AboutDescription />
              <AboutButtons />
            </div>
          </div>

          {/* Div para las tarjetas de habilidades y herramientas */}
          <div className="flex flex-col lg:flex-row gap-8 mt-4 justify-center">
            <div className="w-full lg:w-[40%]">
              <SkillCard />
            </div>
            <div className="w-full lg:w-[40%]">
              <ToolCard />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
