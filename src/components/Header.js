import logo from "../images/logo-adalab.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__project">
        <i className="header__project--icon fa-solid fa-laptop-code"></i>
        <p className="header__project--name">Proyectos Molones</p>
      </div>
      <img
        className="header__logo"
        src={logo}
        title="Adalab"
        alt="Logo de Adalab"
      />
    </header>
  );
};

export default Header;
