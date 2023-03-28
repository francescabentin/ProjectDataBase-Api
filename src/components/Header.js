import logo from "../images/logo-adalab.png";
import boca from "../images/boca2.png"
import nombre from "../images/nombre2.png"
const Header = () => {
  return (
    <header className="header">
      <div className="header__project">
        <img src={boca} alt="" className="header__boca" />
        {/* <i className="header__project--icon fa-solid fa-laptop-code"></i> */}
        {/* <p className="header__project--name">Proyectos Molones</p> */}
      </div>
      <img
        className="header__logo"
        src={nombre}
        title="Adalab"
        alt="Logo de Adalab"
      />
    </header>
  );
};

export default Header;
