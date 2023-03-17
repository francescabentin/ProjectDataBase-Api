import {Link} from 'react-router-dom';
const Landing =()=>{
    return (
    <main className='landingPage'>
      <h1 className='landingPage__title'>Proyectos Canelo</h1>
      <h2 className='landingPage__subtitle'>Escaparate en línea para recoger ideas a través de la tecnología</h2>
      <Link to="/CreateCard"><button className='landingPage__newBtn'>NUEVO PROYECTO</button> </Link>

      <button>VER PROYECTOS</button>  
      {/* <div className="preview">{cards.map((card, index) => <Card data={card} key={index}/>)}</div>
      {cards.length === 0 && <p>No hay tarjetas que mostrar</p>} */}
    </main>
    )
}

export default Landing;