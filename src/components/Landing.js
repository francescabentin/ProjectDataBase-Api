import {Link} from 'react-router-dom';
import ls from '../services/LocalStorage';
import user from '../images/user.jpeg';
import Card from './Preview/Card';
import '../styles/layout/_preview.scss'
import '../styles/layout/_landing.scss'

const Landing =()=>{
  const savedCards = ls.get('cards');

  const renderCards = () => {
    if (savedCards) {
      return savedCards.map((data) => {
        return (
          <Card
          className={"preview__card--autor--img"}
          data={data}
          defaultAvatar={user}
          />
        )
      })
    }
  }
    return (
      <main className="landingPage">
        <h1 className="landingPage__title">Proyectos Canelo</h1>
        <h2 className="landingPage__subtitle">
          Escaparate en línea para recoger ideas a través de la tecnología
        </h2>

        <section className="landingPage__btns">
          <Link to="/CreateCard">
            <button className="landingPage__btn">NUEVO PROYECTO</button>
          </Link>
          <Link to="/Details">
            <button className="landingPage__btn">VER PROYECTOS</button>{" "}
          </Link>
        </section>

        <section className="landingPage__projects-list">
          {renderCards()}
        </section>
      </main>
    );
}

export default Landing;