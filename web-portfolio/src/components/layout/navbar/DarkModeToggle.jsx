import PropTypes from "prop-types";
import { lazy, Suspense } from "react";

const FaMoon = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaMoon })));
const FaSun = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaSun })));

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <Suspense fallback={<span>...</span>}>
    <button
      onClick={() => setDarkMode((prevMode) => !prevMode)}
      aria-label="Toggle dark mode"
      className="hover:text-gray-900 px-3 py-2 text-gray-50"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  </Suspense>
);

DarkModeToggle.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default DarkModeToggle;
