import { motion } from "framer-motion";
import SkillCard from "./cards/SkillsCard";
import ToolCard from "./cards/ToolsCard";

const About = () => {
  return (
    <section id="about" className="py-10 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-8 mb-8 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="relative w-48 h-48 ">
                <div className="z-40">
                  <img
                    src="../../public/lince.jpg"
                    alt="lince"
                    className="absolute top-0 left-0 z-10 rounded-lg w-3/4 h-full object-cover border-4 border-blue-600 dark:border-gray-700"
                  />
                </div>
                <div className="z-30">
                  <img
                    src="../../public/meler.jpg"
                    alt="placa"
                    className="absolute top-10 left-32 z-30 rounded-lg w-3/4 h-full object-cover border-4 border-blue-600 dark:border-gray-700"
                  />
                </div>
                <div className="z-20">
                  <img
                    src="../../public/piscina.jpg"
                    alt="piscina"
                    className="absolute top-0 left-60 z-20 rounded-lg w-3/4 h-full object-cover border-4 border-blue-600 dark:border-gray-700"
                  />
                </div>
              </div>
            </div>

            <div className="text-gray-600 dark:text-gray-300 md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Sobre mí.
              </h2>
              <p>
                ¡Hola Mundo! Soy Antonio, natural de Trigueros y sevillano de
                adopción.
              </p>
              <p>
                {" "}
                Mi aventura en el desarrollo web comenzó en 2024 y, desde
                entonces, he trabajado en proyectos que me han permitido crecer
                y aprender de forma constante. Como desarrollador web full
                stack, mi objetivo es crear aplicaciones modernas, escalables y
                fáciles de mantener.
              </p>
              <p>
                Si estás buscando a un desarrollador apasionado, comprometido y
                siempre dispuesto a aprender, ¡hablemos! Estoy listo para
                colaborar y contribuir al éxito de tu equipo.
              </p>
            </div>
          </div>
          {/* Div para las tarjetas */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-8 justify-center md:justify-around ">
            <SkillCard />
            <ToolCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
