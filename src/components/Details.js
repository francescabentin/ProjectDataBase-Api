import cover from "../images/cover.jpeg";
import user from "../images/user.jpeg";

function Details() {
  return (
<<<<<<< HEAD
    <p>hola</p>
    /*
    <section>
      <ImgCard
        className={"preview__cover-img"}
        data={data}
        defaultAvatar={cover}
      />
      <Card
        className={"preview__card--autor--img"}
        data={data}
        defaultAvatar={user}
      />
    </section>*/
=======
    <section className="detailsPage">
      <img className="detailsPage__cover" src={cover} alt="" />

      <section className="detailsPage__card">
        <section className="detailsPage__card--info">
          <div className="detailsPage__card--info--intro">
            <p className="detailsPage__card--info--subtitle">
              Personal Project Card
            </p>
            <hr className="detailsPage__card--info--line" />
          </div>
          <h2 className="detailsPage__card--info--title">
            {"Elegant Workspace"}
          </h2>
          <p className="detailsPage__card--info--slogan">
            {"Diseños Exclusivos"}
          </p>
          <p className="detailsPage__card--info--desc">
            {" "}
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet faucibus commodo tellus lectus lobortis."}
          </p>
          <section className="detailsPage__card--info--technologies">
            <p className="text">
              {" "}
              {"React - JS - MongoDB"}
            </p>
          </section>
          <div className="detailsPage__card--info--icons">
            <a href="#" target="_blank" rel="noreferrer">
              <i class="detailsPage__card--info--icons--i fa-brands fa-github"></i>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <i class="detailsPage__card--info--icons--i fa-solid fa-globe"></i>
            </a>
          </div>
        </section>

        <section className="detailsPage__card--autor">
          <img className="detailsPage__card--autor--img" src={user} alt="" />
          <p className="detailsPage__card--autor--job">
            {"Full Stack Developer"}
          </p>
          <p className="detailsPage__card--autor--name">
            {"Emmelie Björklund"}
          </p>
        </section>
      </section>
    </section>
>>>>>>> design
  );
}

export default Details;
