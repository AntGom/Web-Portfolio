import PropTypes from 'prop-types';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import NavLink from '../helpers/Navigation';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Inicio', to: 'home' },
    { name: 'Sobre mí', to: 'about' },
    { name: 'Proyectos', to: 'projects' },
    { name: 'Contacto', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-gray-100 dark:bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center m">
            <NavLink to="home">
              <h1 className='text-gray-600 dark:text-gray-300 '>ANTONIO GÓMEZ DEV.</h1>
            </NavLink>
          </div>
          
          {/* Menú en pantallas medianas o grandes */}
          <div className="hidden lg:flex items-center space-x-4">
            {links.map(link => (
              <NavLink key={link.to} to={link.to}>
                {link.name}
              </NavLink>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Menú en pantallas pequeñas */}
          <div className="flex lg:hidden items-center space-x-2">
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
