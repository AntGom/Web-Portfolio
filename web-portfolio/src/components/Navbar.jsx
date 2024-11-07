import { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Inicio', to: 'home' },
    { name: 'Sobre mí', to: 'about' },
    { name: 'Proyectos', to: 'projects' },
    { name: 'Contacto', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">SALTADOR</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          <div className="flex md:hidden items-center space-x-0"> 
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú tamaño móvil */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;