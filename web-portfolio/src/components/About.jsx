import { motion } from "framer-motion";
import SkillCard from "./cards/SkillsCard";
import ToolCard from "./cards/ToolsCard";

const About = () => {
  return (
    <section id="about" className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Tarjeta para el texto */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full lg:w-2/3 text-gray-600 dark:text-gray-300">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Sobre mí.
              </h2>
              <p>
                ¡Hola Mundo! Soy Antonio, natural de Trigueros y sevillano de
                adopción.
              </p>
              <p>
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

            {/* Tarjeta para las imágenes */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full lg:w-1/3 mx-auto">
              <div className="relative w-48 h-48 mx-auto sm:w-40 sm:h-40 md:w-48 md:h-48">
                <div className="z-40">
                  <img
                    src="/Web-Portfolio/lince.JPG"
                    alt="lince"
                    className="absolute top-0 -left-20 z-10 rounded-lg w-3/4 h-full object-cover sm:w-2/3 sm:left-0 md:w-3/4 md:-left-44 lg:-left-20"
                  />
                </div>
                <div className="z-30">
                  <img
                    src="/Web-Portfolio/meler.jpg"
                    alt="placa"
                    className="absolute top-6 left-6 z-30 rounded-lg w-3/4 h-full object-cover border-4 border-white dark:border-gray-800 sm:w-2/3 sm:top-0 sm:left-4 md:w-3/4 md:top- md:left-6 lg:top-6 lg:left-6"
                  />
                </div>
                <div className="z-20">
                  <img
                    src="/Web-Portfolio/piscina.jpg"
                    alt="piscina"
                    className="absolute top-0 left-32 z-10 rounded-lg w-3/4 h-full object-cover sm:w-2/3 sm:top-0 sm:left-20 md:w-3/4 md:top-0 md:left-56 lg:top-0 lg:left-32"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Div para las tarjetas de habilidades y herramientas */}
          <div className="flex flex-col lg:flex-row gap-8 mt-8">
            <div className="w-full lg:w-1/2">
              <SkillCard />
            </div>
            <div className="w-full lg:w-1/2">
              <ToolCard />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
