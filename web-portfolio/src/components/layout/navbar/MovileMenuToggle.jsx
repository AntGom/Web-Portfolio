import PropTypes from "prop-types";
import { lazy, Suspense } from "react";

const FaBars = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaBars })));
const FaTimes = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaTimes })));

const MobileMenuToggle = ({ isOpen, toggleMenu }) => (
  <Suspense fallback={<span>...</span>}>
    <button
      onClick={toggleMenu}
      aria-label="Toggle menu"
      className="hover:text-gray-900 px-2 py-2 text-gray-50"
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
  </Suspense>
);

MobileMenuToggle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MobileMenuToggle;
