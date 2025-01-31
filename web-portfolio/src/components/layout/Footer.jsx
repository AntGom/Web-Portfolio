import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f4069] pt-4 pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://github.com/AntGom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-50 "
              aria-label="Visitar perfil de GitHub de Antonio Gómez"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/antonio-g%C3%B3mez-dom%C3%ADnguez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-50 "
              aria-label="Visitar perfil de LinkedIn de Antonio Gómez"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
          <p className="text-gray-50 text-center">
             {new Date().getFullYear()}© Antonio Gómez Domínguez. Con ❤ desde Andalucía.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
