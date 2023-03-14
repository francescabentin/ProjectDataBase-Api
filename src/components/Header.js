import logo from "../images/logo-adalab.png";

const Header = () => {
    return (
        <header className="header">
            <div className="project-name">
                <i className="fa-solid fa-laptop-code"></i>
                <p className="text">Proyectos Molones</p>
            </div>
            <img className="logo" src={logo} title="Adalab" alt="Logo de Adalab" />
        </header>
    )
};

export default Header;

