//problenmas con data y user (dos formas de arreglarlo: import o props)
import iconweb from '../../images/iconoweb.png';
import icongithub from '../../images/iconogithub.png';

function Card({data,user}) {
  return (
    //la sección me pedía un padre para englobarlo todo
    //<section className="cardAutor">
    <section className="cardAutor">
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
          <p className="text"> {data.technologies || "React - JS - MongoDB"}</p>
          <div className="div_icon">
            <a href="" target="_blank">
            <img
            src={icongithub}
            title="enlace a repositorio"
            alt="icono repositorio"
            className="icon"
            />
            </a>
            <a href="" target="_blank">
            <img
            src={iconweb}
            title="enlace a web"
            alt="icono web"
            className="icon"
            />
            </a>
          </div>
        </section>
      </section>

      <section className="info-autor">
        <img className="image-card" src={user} alt="" />
        <p className="job">{data.job || "Full Stack Developer"}</p>
        <p className="name">{data.autor || "Emmelie Björklund"}</p>
      </section>
    </section>
  );
}

export default Card;
