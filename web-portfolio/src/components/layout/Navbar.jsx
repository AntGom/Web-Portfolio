import PropTypes from 'prop-types';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useCallback } from 'react';
import NavLink from '../helpers/Navigation';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Inicio', to: 'home' },
    { name: 'Sobre mí', to: 'about' },
    { name: 'Proyectos', to: 'projects' },
    { name: 'Contacto', to: 'contact' },
  ];

  const toggleDarkMode = useCallback(() => setDarkMode(!darkMode), [darkMode, setDarkMode]);
  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <nav className="fixed w-full bg-[#0f4069] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center m-0">
          <NavLink to="home">
            <div className="flex flex-col items-center ">
              <h1 className="text-gray-50 hover:text-gray-900">&lt;AG/&gt; ANTONIO GÓMEZ</h1>
              <p className="ml-12 ext-gray-50 text-gray-50 hover:text-gray-900">Desarrollador Web</p>
            </div>
          </NavLink>
         
          {/* Menú en pantallas medianas o grandes */}
          <div className="hidden lg:flex items-center space-x-4">
            {links.map(link => (
              <NavLink key={link.to} to={link.to}>
                {link.name}
              </NavLink>
            ))}
            {/* Botón de modo oscuro, visible solo en pantallas grandes */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="text-gray-50  hover:text-gray-900  px-3 py-2"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Botones en pantallas pequeñas (modo oscuro y menú hamburguesa)  */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="text-gray-50  hover:text-gray-900 e px-2 py-2"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            {/* Botón de menú hamburguesa, visible solo en pantallas pequeñas */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-gray-50  hover:text-gray-900  px-2 py-2"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú para móviles */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(link => (
              <NavLink key={link.to} to={link.to} onClick={() => setIsOpen(false)}>
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
