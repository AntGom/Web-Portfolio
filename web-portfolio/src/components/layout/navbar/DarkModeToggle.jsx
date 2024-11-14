import PropTypes from "prop-types";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <button
    onClick={() => setDarkMode((prevMode) => !prevMode)}
    aria-label="Toggle dark mode"
    className="hover:text-gray-900 px-3 py-2 text-gray-50"
  >
    {darkMode ? <FaSun /> : <FaMoon />}
  </button>
);

DarkModeToggle.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default DarkModeToggle;
