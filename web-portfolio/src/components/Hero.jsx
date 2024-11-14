import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center min-h-screen bg-[url('/Web-Portfolio/imagenFondoNo.jpeg')] bg-cover bg-center bg-no-repeat bg-blend-multiply bg-sky-800 bg-opacity-95 "
    >
      <div className="w-full mx-auto  mt-24  text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="mb-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-50 drop-shadow-lg mb-4 md:mb-6">
              Antonio Gómez Domínguez
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-50 drop-shadow-lg">
              &lt; DESARROLLADOR FULL STACK JR. /&gt;
            </h2>
          </div>

          <div className="mb-6">
            <p className="text-lg text-gray-50 max-w-2xl mx-auto drop-shadow-lg">
            Creo sitios web optimizados, adaptados para ofrecer una experiencia fluida y atractiva en cualquier dispositivo.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 justify-center mt-4 mb-4">
            <motion.a
              href="#contact"
              className="bg-transparent border-2 text-gray-50 px-8 py-2 text-md rounded-full hover:bg-[#ffa53b] hover:border-[#ffa53b] transition-colors flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span>Contacto</span>
            </motion.a>
            <motion.a
              href="#projects"
              className="bg-[#ffa53b] text-gray-50 px-8 py-2 text-md rounded-full hover:bg-[#0f406a] transition-colors flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span>Ver Trabajos</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
