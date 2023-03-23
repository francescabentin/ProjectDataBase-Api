import GetAvatar from "./GetAvatar";

const Form = ({
  data,
  handleInput,
  url,
  handleClickCreateCard,
  isCard,
  isError,
  updateAvatar,
  updateProjectImg,
}) => {
  return (
    <section className="form">
      <h2 className="form__title">Información</h2>
      <p className="form__subtitle">Cuéntanos sobre el proyecto</p>
      {/*   <hr className="form__line" /> */}

      <fieldset className="form__project">
        <label className="form__label" htmlFor="name">
          Nombre del proyecto *
        </label>
        <input
          className="form__input"
          type="text"
          placeholder="Ej: Elegant Workspace"
          name="name"
          id="name"
          value={data.name}
          onInput={handleInput}
          required
        />
        <p className="form__error-msg"></p>

        <label className="form__label" htmlFor="slogan">
          Slogan *
        </label>
        <input
          className="form__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Diseños Exclusivos"
          value={data.slogan}
          onChange={handleInput}
          pattern="/^[A - ZÁ - üñÑ]+$/i"
        />
        <p className="form__error-msg"></p>

        <div className="form__project--links">
          <label className="form__label" htmlFor="repo">
            Repositorio *
          </label>
          <input
            className="form__input"
            type="text"
            name="repo"
            id="repo"
            placeholder="Ej: https://github.com/Adalab/project-promo-s-module-3-team-1"
            value={data.repo}
            onInput={handleInput}
            required
          />
          <p className="form__error-msg"></p>
          <label className="form__label" htmlFor="demo">
            Demo *
          </label>
          <input
            className="form__input"
            type="text"
            placeholder="http://beta.adalab.es/project-promo-s-module-3-team-1/"
            name="demo"
            id="demo"
            value={data.demo}
            onChange={handleInput}
            required
            pattern="/^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/"
          />
          <p className="form__error-msg"></p>
        </div>
        <label className="form__label" htmlFor="technologies">
          Tecnologías *
        </label>
        <input
          className="form__input"
          type="text"
          placeholder="Reackt - JS - MongoDB"
          name="technologies"
          id="technologies"
          value={data.technologies}
          onChange={handleInput}
          pattern="/^[A - ZÁ - üñÑ]+$/i"
        />
        <p className="form__error-msg"></p>

        <label className="form__label" htmlFor="desc">
          Descripción *
        </label>
        <textarea
          className="form__input--textarea"
          type="text"
          placeholder="Ej: Consigue tus propios diseños exclusivos con tan
sólo un par de clicks."
          name="desc"
          id="desc"
          value={data.desc}
          onChange={handleInput}
          required
        ></textarea>
        <p className="form__error-msg"></p>
      </fieldset>

      <hr className="form__line" />
      <p className="form__subtitle">Cuéntanos sobre la autora</p>

      <fieldset className="form__autor">
        <label className="form__label" htmlFor="autor">
          Nombre autora *
        </label>
        <input
          className="form__input"
          type="text"
          placeholder="Ej: Emmelie Björklund"
          name="autor"
          id="autor"
          value={data.autor}
          onChange={handleInput}
          required
          pattern="/^[A - ZÁ - üñÑ]+$/i"
        />
        <p className="form__error-msg"></p>
        <label className="form__label" htmlFor="autor">
          Puesto de trabajo *
        </label>
        <input
          className="form__input"
          type="text"
          placeholder="Ej: Full Stack Developer"
          name="job"
          id="job"
          value={data.job}
          onChange={handleInput}
          required
          pattern="/^[A - ZÁ - üñÑ]+$/i"
        />
        <p className="form__error-msg"></p>

        <section className="form__autor--buttons">
          <GetAvatar
            value={"Subir foto de proyecto"}
            className={"form__btn"}
            updateAvatar={updateAvatar}
          />

          <GetAvatar
            value={"Subir foto de autora"}
            className={"form__btn"}
            updateAvatar={updateProjectImg}
          />

          <button className="form__btn--card" onClick={handleClickCreateCard}>
            Crear Tarjeta
          </button>
        </section>
      </fieldset>

      <section className="form__create-card">
        <p className={isCard ? "linkCard" : "hidden"}>
          {" "}
          {isError ? `La tarjeta ha sido creada:` : "Faltan datos por rellenar"}
        </p>
        <a href={url} className="" target="_blank" rel="noreferrer">
          {url}
        </a>
      </section>
    </section>
  );
};

export default Form;
