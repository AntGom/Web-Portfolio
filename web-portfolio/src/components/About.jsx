import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'HTML',
    'CSS',
    'Tailwindcss',
    'JavaScript (ES8+)',
    'React',
    'Node.js',
    'Express',
    'SQL',
    'MySQL',
    'Git',
    
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Un poco de información sobre mí.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              ¡Hola! Soy Antonio Gómez, también conocido como Saltador.<br/>
              Soy un desarrollador web full stack, enfocado en crear aplicaciones modernas y eficientes. <br/>
              ras completar recientemente mi formación, busco integrarme en un equipo donde pueda seguir creciendo como desarrollador junior y aportar mis conocimientos.<br/>
              Mi enfoque siempre está en construir soluciones escalables, bien estructuradas y fáciles de mantener.<br/>
              Si necesitas un desarrollador apasionado y comprometido, no dudes en contactarme. ¡Estoy listo para colaborar y contribuir al éxito de tu equipo!
              </p>
              <p className="text-gray-600 dark:text-gray-300">
              Cuando no estoy programando, puedes encontrarme aprendiendo nuevas tecnologías y reforzando los conocimientos adquiridos.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Stack tecnológico
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white dark:bg-gray-700 rounded-lg p-2 text-center text-gray-800 dark:text-gray-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;