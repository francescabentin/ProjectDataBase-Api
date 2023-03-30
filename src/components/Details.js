import Card from "./Preview/Card";
import Profile from "../Profile";

function Details() {
  return (
    <section className="detailsPage">
        <Profile
            className={className}
            defaultAvatar={defaultAvatar}
            avatar={data.image} />
        <Card
          className={"preview__card--autor--img"}
          data={data}
          defaultAvatar={user}
        />
    </section>
  );
}

export default Details;
