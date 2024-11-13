import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => (
  <section
    id="contact"
    className="py-10 bg-[url('/Web-Portfolio/imagenFondo.jpeg')] bg-cover bg-center bg-no-repeat bg-blend-multiply bg-sky-800 bg-opacity-95 "
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-4/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-xl mx-auto">
          <div className="bg-gray-500 shadow-md rounded-3xl p-6 bg-opacity-65 ">
            <div className="flex flex-row-reverse justify-center">
              <h2 className="text-3xl font-bold text-center text-gray-50">
                Contacto
              </h2>
              <h2 className="text-3xl font-extrabold text-[#ffa53b] mb-4">
                ⊳⊳ 
              </h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
