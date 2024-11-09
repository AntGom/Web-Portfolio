import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    smooth={false}
    duration={500}
    offset={-40} 
    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 cursor-pointer"
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavLink;