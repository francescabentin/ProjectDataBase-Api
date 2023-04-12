import Profile from '../Profile';

function Card({data, defaultAvatar, className}) {
  return (
    <section className="preview__card">
      <section className="preview__card--info">
        <div className="preview__card--info--intro">
          <p className="preview__card--info--subtitle">Personal Project Card</p>
          <hr className="preview__card--info--line" />
        </div>
        <h2 className="preview__card--info--title">
          {data.name || "Elegant Workspace"}
        </h2>
        <p className="preview__card--info--slogan">
          {data.slogan || "Diseños Exclusivos"}
        </p>
        <p className="preview__card--info--desc">
          {" "}
          {data.descripcion ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet faucibus commodo tellus lectus lobortis."}
        </p>
        <section className="preview__card--info--technologies">
          <p className="text"> {data.technologies || "React - JS - MongoDB"}</p>
        </section>
        <div className="preview__card--info--icons">
          <a href={data.repo} target="_blank" rel="noreferrer">
            <i class="preview__card--info--icons--i fa-brands fa-github"></i>
          </a>
          <a href={data.demo} target="_blank" rel="noreferrer">
            <i class="preview__card--info--icons--i fa-solid fa-globe"></i>
          </a>
        </div>
      </section>

      <section className="preview__card--autor">
        <Profile
          className={className}
          defaultAvatar={defaultAvatar}
          avatar={data.photo}
        />
        <p className="preview__card--autor--job">
          {data.job || "Full Stack Developer"}
        </p>
        <p className="preview__card--autor--name">
          {data.autor || "Emmelie Björklund"}
        </p>
      </section>
    </section>
  );
}

export default Card;

