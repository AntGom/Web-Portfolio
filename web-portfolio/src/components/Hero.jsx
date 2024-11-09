import { motion } from 'framer-motion';

const Hero = () => {
  return (
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-blue-600 dark:text-white mb-4">
                Antonio Gómez Domínguez
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                &lt; Desarrollador Full Stack Jr. /&gt;
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Creo sitios web responsivos y optimizados para ofrecer experiencias fluidas y atractivas en cualquier dispositivo.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contacto
                </a>
                <a
                  href="#projects"
                  className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
                >
                  Ver Trabajos
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Hero;