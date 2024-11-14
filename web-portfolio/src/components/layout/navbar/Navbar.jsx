import PropTypes from "prop-types";
import { useState } from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import MobileMenuToggle from "./MovileMenuToggle";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevOpen) => !prevOpen);

  return (
    <nav className="fixed w-full bg-[#0f4069] z-50">
      <div className="w-full mx-auto pr-2 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo />
          {/* Menú en pantallas grandes */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavLinks onClick={() => setIsOpen(false)} />
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          {/* Botones en pantallas pequeñas */}
          <div className="flex lg:hidden items-center space-x-2">
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <MobileMenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>

      {/* Menú para móviles */}
      {isOpen && (
        <div className="lg:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLinks onClick={() => setIsOpen(false)} />
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
