import PropTypes from "prop-types";
import NavLink from "../../helpers/Navigation";

const links = [
  { name: "Inicio", to: "home" },
  { name: "Sobre mí", to: "about" },
  { name: "Proyectos", to: "projects" },
  { name: "Contacto", to: "contact" },
];

const NavLinks = ({ onClick }) =>
  links.map((link) => (
    <NavLink
      key={link.to}
      to={link.to}
      onClick={onClick}
      className="hover:text-gray-900 px-3 py-2 font-semibold text-gray-50"
      href={`#${link.to}`} 
    >
      {link.name}
    </NavLink>
  ));

NavLinks.propTypes = {
  onClick: PropTypes.func,
};

export default NavLinks;
