import { motion } from "framer-motion";
import PropTypes from "prop-types";

const InputField = ({ name, value, handleChange, placeholder }) => (
  <motion.input
    type={name === "email" ? "email" : "text"}
    name={name}
    id={name}
    value={value}
    onChange={handleChange}
    placeholder={placeholder}
    className="mt-1 block w-full px-3 py-2 bg-transparent border-b-2 border-gray-50 shadow-sm focus:outline-none focus:ring-0 focus:border-[#ffa53b] sm:text-sm transition-all duration-300 transform focus:scale-105"
    required
  />
);

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

const TextAreaField = ({ value, handleChange, placeholder }) => (
  <motion.textarea
    name="message"
    id="message"
    value={value}
    onChange={handleChange}
    placeholder={placeholder}
    rows="4"
    className="mt-1 block w-full px-3 py-2 bg-transparent border-b-2 border-gray-50 shadow-sm focus:outline-none focus:ring-0 focus:border-[#ffa53b] sm:text-sm transition-all duration-300 transform focus:scale-105 resize-none"
    required
  />
);

TextAreaField.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

// Botón de envío con animación de carga
const SubmitButton = ({ loading }) => (
  <button
    type="submit"
    className={`bg-[#ffa53b] text-gray-50 px-8 py-2 text-md rounded-full hover:bg-[#0f406a] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading && "cursor-wait"}`}
    disabled={loading}
  >
    {loading ? (
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        Enviando...
      </motion.span>
    ) : (
      "Enviar Mensaje"
    )}
  </button>
);

SubmitButton.propTypes = {
  loading: PropTypes.bool.isRequired,
};

// Componente principal que contiene los campos del formulario
const FormFields = ({ formData, handleChange, loading }) => (
  <>
    {["name", "email", "subject"].map((field) => (
      <InputField
        key={field}
        name={field}
        value={formData[field]}
        handleChange={handleChange}
        placeholder={
          field === "name"
            ? "Nombre*"
            : field === "email"
            ? "E-mail*"
            : "Asunto*"
        }
      />
    ))}
    <TextAreaField
      value={formData.message}
      handleChange={handleChange}
      placeholder="Escribe tu mensaje aquí*"
    />
    <div className="flex justify-center">
      <SubmitButton loading={loading} />
    </div>
  </>
);

FormFields.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    subject: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default FormFields;
