import GetAvatar from "./GetAvatar";

const Form = ({data, handleInput, url, handleClickCreateCard, isCard,isError, updateAvatar, updateProjectImg}) => {

    return   <section className="form">
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
                onInput={handleInput}
                required

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

        <GetAvatar 
        value={"Subir foto de proyecto"} 
        className={"btn"} 
        updateAvatar={updateAvatar}/>

        <GetAvatar 
        value={"Subir foto de autora"} 
        className={"btn"}  
        updateAvatar={updateProjectImg}/>
          <section className="buttons-img">
           <button className="btn-large"  onClick={handleClickCreateCard}>
              Crear Tarjeta
            </button>
          </section>

          <section className="card">
            <p className={isCard ? 'linkCard' : 'hidden'}> {isError ? `La tarjeta ha sido creada:` : 'Faltan datos por rellenar'}</p>
            <a href={url} className="" target="_blank" rel="noreferrer">
              {url}
            </a>
          </section>
        </section>
}

export default Form;



// if (!data.linkedin.includes ('https://www.')) {
//     previewLinkedin.href = `https://www.${data.linkedin}`;
//   } else {
//     previewLinkedin.href = `${data.linkedin}`;
//   }
//   if (!data.github.includes ('https://github.com/')) {
//     previewGithub.href = `https://github.com/${data.github}`;
//   } else {
//     previewGithub.href = `${data.github}`;
//   }



