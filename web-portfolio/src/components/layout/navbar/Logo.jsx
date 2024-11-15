import NavLink from "../../helpers/Navigation";
import logoPequeno from "/LOGO ANTONIO-BLANCO.svg";

const Logo = () => (
  <NavLink to="home" href="/home">
    <div>
      <img src={logoPequeno} alt="Logo" width="300" height="67" className="w-full h-auto" />
    </div>
  </NavLink>
);

export default Logo;