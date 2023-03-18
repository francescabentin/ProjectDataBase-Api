import {Link} from 'react-router-dom';
// las que importe para pintar
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
          className={"image-card"}
          data={data}
          defaultAvatar={user}
          />
        )
      })
    }
    
  }


    return (
    <main className='landingPage'>
      <h1 className='landingPage__title'>Proyectos Canelo</h1>
      <h2 className='landingPage__subtitle'>Escaparate en línea para recoger ideas a través de la tecnología</h2>
      <Link to="/CreateCard"><button className='landingPage__newBtn'>NUEVO PROYECTO</button> </Link>

      <button>VER PROYECTOS</button>  
      <section className="projects-list">
      {/* <div className="preview">{cards.map((card, index) => <Card data={card} key={index}/>)}</div>
      {cards.length === 0 && <p>No hay tarjetas que mostrar</p>} */}
        {renderCards()}
        </section>
    </main>

    )
}

export default Landing;