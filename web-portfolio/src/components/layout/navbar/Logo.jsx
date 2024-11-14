import NavLink from "../../helpers/Navigation";
import logoPequeno from "/LOGO ANTONIO-BLANCO.svg";

const Logo = () => (
  <NavLink to="home">
    <div>
      <img src={logoPequeno} alt="Logo" className="w-full h-auto "/>
      
    </div>
  </NavLink>
);

export default Logo;
