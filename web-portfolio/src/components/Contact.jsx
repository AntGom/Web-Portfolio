import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_c46iojl",
        "template_9x17f66",
        formData,
        "YGl0MYj_dU2DcuiO1"
      );

      alert("Tu mensaje ha sido enviado con éxito.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error enviando el correo:", error);
      alert("Hubo un problema al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
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

              <form onSubmit={handleSubmit} className="space-y-6 text-gray-50">
                {["name", "email", "subject"].map((field, index) => (
                  <div key={index}>
                    <motion.input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      id={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={
                        field === "name"
                          ? "Nombre"
                          : field === "email"
                          ? "E-mail"
                          : "Asunto"
                      }
                      className="mt-1 block w-full px-3 py-2 bg-transparent border-b-2 border-gray-50 shadow-sm focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm transition-all duration-300 transform focus:scale-105"
                      required
                    />
                  </div>
                ))}
                <div>
                  <motion.textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí"
                    rows="4"
                    className="mt-1 block w-full px-3 py-2 bg-transparent border-b-2 border-gray-50 shadow-sm focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm transition-all duration-300 transform focus:scale-105 resize-none"
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#ffa53b] text-gray-50 px-8 py-2 text-sm rounded-full hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={loading}
                  >
                    {loading ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        Enviando...
                      </motion.span>
                    ) : (
                      "Enviar Mensaje"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
