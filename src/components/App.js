import '../styles/App.scss';
import cover from '../images/cover_2.jpeg';
import user from '../images/user.jpeg';
import logo from "../images/logo-adalab.png";
import { useState } from 'react';
import dataApi from '../services/Api.js';

function App() {
const [url, setUrl]= useState ('');
const [data, setData] = useState ({
  name:'',
  slogan:'',
  repo:'',
  demo: '',
  technologies:'',
  desc:'',
  autor:'',
  job:'',
  image: 'https://via.placeholder.com/140x130',
  photo: 'https://via.placeholder.com/140x130',
});
  
const handleInput = (ev) => {
  const inputValue=ev.target.value;
  const inputName=ev.target.name;
  const textValidation = /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜïÏç.,-_\s]*$/;
  const linkValidation = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  console.log(inputValue)
  if (inputName === "name") {
    setData ({...data,name:inputValue});
  }
  else if (inputName === "slogan") {
    setData({...data,slogan:inputValue});
  } else if (inputName === "repo" && textValidation.test(inputValue)) {
    setData({...data,repo:inputValue});
  } else if (inputName === "demo" && textValidation.test(inputValue)) {
    setData({...data,demo:inputValue});
  } else if (inputName === "technologies") {
    setData({...data,technologies:inputValue});
  } else if (inputName === "desc") {
    setData({...data,desc:inputValue});
  } else if (inputName === "autor" && textValidation.test(inputValue)) {
    setData({...data,autor:inputValue});
  } else if (inputName === "job" && textValidation.test(inputValue)) {
   setData({...data,job:inputValue});
  }
}

const handleClickCreateCard = (ev) => {
  ev.preventDefault();
  console.log(data);
  dataApi(data)
  .then(info => {
        console.log (info);
        setUrl(info.url);
  })
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

              <h2 className="title">{data.name || "Elegant Workspace"}</h2>
              <p className="slogan">{data.slogan || "Diseños Exclusivos"}</p>
              <p className="desc">
                {" "}
                {data.desc ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet faucibus commodo tellus lectus lobortis."}
              </p>
              <section className="technologies">
                <p className="text">
                  {" "}
                  {data.technologies || "React - JS - MongoDB"}
                </p>
              <i className='fa-solid fa-globe info--project__technologies-icon1'></i>
              <i className='fa-brands fa-github info--project__technologies-icon1'></i>
              </section>
            </section>

            <section className="info-autor">
              <img className="image-card" src={user} alt="" />
              <p className="job">{data.job || "Full Stack Developer"}</p>
              <p className="name">{data.autor || "Emmelie Björklund"}</p>
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
              value={data.name}
              onInput={handleInput}
              required
            />
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              value={data.slogan}
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
                value={data.repo}
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
                value={data.demo}
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
              value={data.technologies}
              onChange={handleInput}
              pattern="/^[A - ZÁ - üñÑ]+$/i"
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción *"
              name="desc"
              id="desc"
              value={data.desc}
              onChange={handleInput}
              required
             
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
              value={data.autor}
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
              value={data.job}
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
           <button className="btn-large"  onClick={handleClickCreateCard}>
              Crear Tarjeta
            </button>
          </section>

          <section className="card">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href="" className="" target="_blank" rel="noreferrer">
              {url}
            </a>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;

