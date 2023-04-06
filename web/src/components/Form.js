import GetAvatar from "./GetAvatar";

const Form = ({
  data,
  handleInput,
  url,
  handleClickCreateCard,
  isError,
  updateAvatar,
  updateProjectImg,
  handleResetEvent,
  message
}) => {
  console.log(url);
  return (
    <section className="form">
      <h2 className="form__title">Información</h2>
      <p className="form__subtitle">Cuéntanos sobre el proyecto</p>

      <fieldset className="form__project">
        <label className="form__label" htmlFor="name">
          Nombre del proyecto<span className="span"> *</span>
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
        <p className="form__message">
        {" "}
        {message.name}
        </p>
        <input
          className="form__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Ej: Diseños Exclusivos"
          value={data.slogan}
          onChange={handleInput}
          pattern="/^[A - ZÁ - üñÑ]+$/i"
        />
        <p className="form__message">
        {" "}
        {message.slogan}
        </p>
        <div className="form__project--links">
          <label className="form__label" htmlFor="repo">
            Repositorio<span className="span"> *</span>
          </label>
          <input
            className="form__inputLinks"
            type="text"
            name="repo"
            id="repo"
            placeholder="Ej: https://github.com/Adalab/project-promo-s-module-3-team-1"
            value={data.repo}
            onInput={handleInput}
            required
          />
          <p className="form__message">
          {" "}
          {message.repo}
          </p>
          <label className="form__label" htmlFor="demo">
            Demo<span className="span"> *</span>
          </label>
          <input
            className="form__inputLinks"
            type="text"
            placeholder="http://beta.adalab.es/project-promo-s-module-3-team-1/"
            name="demo"
            id="demo"
            value={data.demo}
            onChange={handleInput}
            required
            pattern="/^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/"
          />
          <p className="form__message">
        {" "}
        {message.demo}
        </p>
        </div>
        <label className="form__label" htmlFor="technologies">
          Tecnologías<span className="span"> *</span>
        </label>
        <input
          className="form__input"
          type="text"
          placeholder="Ej: Reackt - JS - MongoDB"
          name="technologies"
          id="technologies"
          value={data.technologies}
          onChange={handleInput}
          pattern="/^[A - ZÁ - üñÑ]+$/i"
        />
        <p className="form__message">
        {" "}
        {message.slogan}
        </p>
        <textarea
          className="form__textarea"
          type="text"
          placeholder="Ej: Consigue tus propios diseños exclusivos con tan
sólo un par de clicks."
          name="desc"
          id="desc"
          value={data.desc}
          onChange={handleInput}
          required
        ></textarea>
        <p className="form__message">
        {" "}
        {message.slogan}
        </p>
      </fieldset>

      <hr className="form__line" />
      <p className="form__subtitle">Cuéntanos sobre la autora</p>

      <fieldset className="form__autor">
        <label className="form__label" htmlFor="autor">
          Nombre autora<span className="span"> *</span>
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
        <p className="form__message">
        {" "}
        {message.slogan}
        </p>
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
        <p className="form__message">
        {" "}
        {message.slogan}
        </p>
        <section className="form__autor--buttons">
          <GetAvatar
            value={"Subir foto de proyecto"}
            className={"form__btn"}
            updateAvatar={updateProjectImg}
          />
          <GetAvatar
            value={"Subir foto de autora"}
            className={"form__btn"}
            updateAvatar={updateAvatar}
          />

          <button className="form__btn--card" onClick={handleClickCreateCard}>
            Crear Tarjeta
          </button>
        </section>
      </fieldset>

      <section className="form__create-card">
        <p className>
          {isError}
        </p>
        <a href={url} className="" target="_blank" rel="noreferrer">
          {url}
        </a>
        <button className="form__btn--reset" onClick={handleResetEvent}> <i class="fa-regular fa-trash-can"></i> Reset</button>
      </section>
    </section>
  );
};

export default Form;
