import { Link } from 'react-router-dom';
import user from '../images/user.jpeg';
import Card from './Preview/Card';
import '../styles/layout/_preview.scss'
import '../styles/layout/_landing.scss'
import canelo from "../images/canelo_logo.svg";
import { useEffect, useState } from "react";
import api from "../services/Api";

const Landing = () => {

  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    api.dataApiBD()
      .then(data => {
        setAllCards(data);
        console.log(data);
      })
  }, []);

  const render = "https://proyecto-canelo.onrender.com"
/*   const render = "//localhost:4000"  */
  const renderCards = () => {
    return allCards.map((data) => {
      return (
        <a href={`${render}/projects/${data.idProjects}`} className="card-links"> <Card
          className={"preview__card--autor--img"}
          data={data}
          defaultAvatar={user}
        /> </a>
      )
    })
  }
  return (
    <main className="landingPage">
      <img className="landingPage__logo" src={canelo} alt="Logo Proyectos Canelo"></img>
      <h1 className="landingPage__title">Proyectos Canelo</h1>
      <h2 className="landingPage__subtitle">
        Escaparate en línea para recoger ideas a través de la tecnología
      </h2>

      <section className="landingPage__btns">
        <Link to="/CreateCard">
          <button className="landingPage__btn">NUEVO PROYECTO</button>
        </Link>
      </section>

      <section className="landingPage__projects-list">
        {renderCards()}
      </section>
    </main>
  );
}

export default Landing;