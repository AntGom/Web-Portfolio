import NavLink from "../../helpers/Navigation";
import logoPequeno from "/public/logoPequeno.png";

const Logo = () => (
  <NavLink to="home">
    <div className="flex flex-row gap-1 items-center">
      <img src={logoPequeno} alt="Logo" />
      <h3 className="font-semibold">ANTGOM-DEV</h3>
    </div>
  </NavLink>
);

export default Logo;
