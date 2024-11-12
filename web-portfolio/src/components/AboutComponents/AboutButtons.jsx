import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutButtons = () => (
  <div className="flex flex-col md:flex-row items-center mt-4 gap-2">
    <a href="/Web-Portfolio/CV_Antonio_gomez_dmgz.pdf" download>
      <button className="bg-[#ffa53b] text-gray-50 px-8 py-2 text-md rounded-full hover:bg-[#0f406a] transition-colors flex items-center gap-x-2 border-2 border-[#ffa53b] hover:border-[#0f406a]">
        Descargar CV
      </button>
    </a>
    <a
      href="https://github.com/AntGom"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-transparent text-[#0f406a] px-4 py-2 text-md rounded-full hover:text-[#ffa53b] hover:border-[#ffa53b] transition-colors flex items-center gap-x-2 border-2 border-[#0f406a]"
    >
      <FaGithub className="text-2xl" />
      <span>GitHub</span>
    </a>
    <a
      href="https://www.linkedin.com/in/antonio-g%C3%B3mez-dom%C3%ADnguez/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-transparent text-[#0f406a] px-4 py-2 text-md rounded-full hover:text-[#ffa53b] hover:border-[#ffa53b] transition-colors flex items-center gap-x-2 border-2 border-[#0f406a]"
    >
      <FaLinkedin className="text-2xl" />
      <span>LinkedIn</span>
    </a>
  </div>
);

export default AboutButtons;