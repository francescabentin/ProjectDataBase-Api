import '../styles/App.scss';
import cover from '../images/cover_2.jpeg';
import user from '../images/user.jpeg';
import logo from "../images/logo-adalab.png";
import { useState } from 'react';

function App() {


  const [name,setName] = useState ("");
  const [slogan, setSlogan] =useState ("");
  const [repo, setRepo] =useState ("");
  const [demo, setDemo] =useState ("");
  const [technologies, setTechnologies] =useState ("");
  const [desc, setDesc] =useState ("");
  const [autor, setAutor] =useState ("");
  const [job, setJob] =useState ("");

const handleInput = (ev) => {
  const inputValue=ev.target.value;
  const inputName=ev.target.name;
  const textValidation = /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜïÏç.,-_\s]*$/;
  const linkValidation = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  console.log(inputValue)
  if (inputName === "name") {
    setName (inputValue);
  }
  else if (inputName === "slogan") {
    setSlogan(inputValue);
  } else if (inputName === "repo" && linkValidation.test(inputValue)) {
    setRepo(inputValue);
  } else if (inputName === "demo" && linkValidation.test(inputValue)) {
    setDemo(inputValue);
  } else if (inputName === "technologies") {
    setTechnologies(inputValue);
  } else if (inputName === "desc") {
    setDesc(inputValue);
  } else if (inputName === "autor" && textValidation.test(inputValue)) {
    setAutor(inputValue);
  } else if (inputName === "job" && textValidation.test(inputValue)) {
    setJob(inputValue);
  }



}

  return (
    <div className="container">
      <header className="header">
        <div className="project-name">
          <i className="fa-solid fa-laptop-code"></i>
          <p className="text">Proyectos Molones</p>
        </div>
        <img className="logo" src={logo} title="Adalab" alt="Logo de Adalab" />
      </header>
      <main className="main">
        <section className="preview">
          <img className="image" src={cover} alt="" />

          <section className="autor">
            <section className="info-project">
              <div className="info-project-intro">
                <p className="subtitle">Personal Project Card</p>
                <hr className="line" />
              </div>

              <h2 className="title">{name || "Elegant Workspace"}</h2>
              <p className="slogan">{slogan || "Diseños Exclusivos"}</p>
              <p className="desc">
                {" "}
                {desc ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet faucibus commodo tellus lectus lobortis."}
              </p>
              <section className="technologies">
                <p className="text">
                  {" "}
                  {technologies || "React - JS - MongoDB"}
                </p>
              </section>
            </section>

            <section className="info-autor">
              <img className="image-card" src={user} alt="" />
              <p className="job">{job || "Full Stack Developer"}</p>
              <p className="name">{autor || "Emmelie Björklund"}</p>
            </section>
          </section>
        </section>

        <section className="form">
          <h2 className="title">Información</h2>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="line" />
          </section>

          <fieldset className="project">
            <input
              className="input"
              type="text"
              placeholder="Nombre del proyecto *"
              name="name"
              id="name"
              value={name}
              onInput={handleInput}
              required
            />
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              value={slogan}
              onChange={handleInput}
              pattern="/^[A - ZÁ - üñÑ]+$/i"
            />
            <div className="project-links">
              <input
                className="input"
                type="text"
                name="repo"
                id="repo"
                placeholder="Repo *"
                value={repo}
                onChange={handleInput}
                required
                pattern="/^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/"
              />
              <input
                className="input"
                type="text"
                placeholder="Demo *"
                name="demo"
                id="demo"
                value={demo}
                onChange={handleInput}
                required
                pattern="/^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/"
              />
            </div>
            <input
              className="input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
              value={technologies}
              onChange={handleInput}
              pattern="/^[A - ZÁ - üñÑ]+$/i"
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción *"
              name="desc"
              id="desc"
              value={desc}
              onChange={handleInput}
              required
              maxlength="8"
            ></textarea>
          </fieldset>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre la autora</p>
            <hr className="line" />
          </section>

          <fieldset className="autor">
            <input
              className="input"
              type="text"
              placeholder="Nombre *"
              name="autor"
              id="autor"
              value={autor}
              onChange={handleInput}
              required
              pattern="/^[A - ZÁ - üñÑ]+$/i"
            />
            <input
              className="input"
              type="text"
              placeholder="Trabajo *"
              name="job"
              id="job"
              value={job}
              onChange={handleInput}
              required
              pattern="/^[A - ZÁ - üñÑ]+$/i"
            />
          </fieldset>

          <section className="buttons-img">
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          <section className="buttons-img">
            <button className="btn-large" onClick="{handleClickCreateCard}">
              Crear Tarjeta
            </button>
          </section>

          <section className="card">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href="" className="" target="_blank" rel="noreferrer">
              {" "}
            </a>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;

