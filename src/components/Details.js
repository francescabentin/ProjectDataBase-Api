import cover from "../images/cover.jpeg";
import user from "../images/user.jpeg";
import Card from "./Preview/Card";
import ImgCard from "../components/Preview/ImgCard";

function Details({ data}) {
  return (
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
  );
}

export default Details;
