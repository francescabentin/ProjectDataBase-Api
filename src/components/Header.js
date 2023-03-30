import { Link } from "react-router-dom";
import equipo from "../images/Equipo_palique.svg"
const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={equipo} alt="" />
      </Link>
      <Link to="/" className="header__team">
        <p>Equipo Palique</p>
      </Link>
    </header>
  );
};

export default Header;
