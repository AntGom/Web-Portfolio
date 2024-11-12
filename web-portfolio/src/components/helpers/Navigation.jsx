import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    smooth={false}
    duration={500}
    offset={-40} 
    className="text-gray-50  hover:text-gray-900 px-3 py-2 cursor-pointer"
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavLink;