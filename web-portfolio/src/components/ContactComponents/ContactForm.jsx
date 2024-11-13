import { useState } from "react";
import emailjs from "emailjs-com";
import FormFields from "./FormFields";

const ContactForm = () => {
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
    <form onSubmit={handleSubmit} className="space-y-6 text-gray-50">
      <FormFields formData={formData} handleChange={handleChange} loading={loading} />
    </form>
  );
};

export default ContactForm;
