import PropTypes from "prop-types";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileMenuToggle = ({ isOpen, toggleMenu }) => (
  <button
    onClick={toggleMenu}
    aria-label="Toggle menu"
    className="hover:text-gray-900 px-2 py-2 text-gray-50"
  >
    {isOpen ? <FaTimes /> : <FaBars />}
  </button>
);

MobileMenuToggle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MobileMenuToggle;
