import '../styles/App.scss';
import cover from '../images/cover_2.jpeg';
import user from '../images/user.jpeg';
import logo from "../images/logo-adalab.png";
import { useState } from 'react';
import dataApi from '../services/Api.js';

//importo lo componentes
import ImgCard from '../components/Preview/ImgCard';
import Card from '../components/Preview/Card';
import Header from './Header';
import Form from './Form';

function App() {
  const [url, setUrl] = useState('');
const [data, setData] = useState ({
  name:'',
  slogan:'',
  repo:'',
  demo: '',
  technologies:'',
  desc:'',
  autor:'',
  job:'',
  image: 'https://via.placeholder.com/140x130',
  photo: 'https://via.placeholder.com/140x130',
});

const [isCard, setIsCard] = useState(false);
const [isError, setIsError] = useState(false);

const handleInput = (ev) => {
  const inputValue=ev.target.value;
  const inputName=ev.target.name;
  const textValidation = /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜïÏç.,-_\s]*$/;
  const linkValidation = /^((https?|ftp|file):\/\/)?([\da-z.-]+).([a-z.]{2,6})([/\w .-]*)*\/?$/;
  if (inputName === "name") {
    setData ({...data,name:inputValue});
  }
  else if (inputName === "slogan") {
    setData({...data,slogan:inputValue});
  } else if (inputName === "repo") {
    setData({...data,repo:inputValue});
    if(!linkValidation.test(inputValue)){
    }
  } else if (inputName === "demo") {
    setData({...data,demo:inputValue});
    if (!linkValidation.test(inputValue)){
      
    }
  } else if (inputName === "technologies") {
    setData({...data,technologies:inputValue});
  } else if (inputName === "desc") {
    setData({...data,desc:inputValue});
  } else if (inputName === "autor" && textValidation.test(inputValue)) {
    setData({...data,autor:inputValue});
  } else if (inputName === "job" && textValidation.test(inputValue)) {
   setData({...data,job:inputValue});
  }
}

const handleClickCreateCard = (ev) => {
  ev.preventDefault();
  console.log(data);
  dataApi(data)
  .then(info => {
        console.log (info);
    setUrl(info.cardURL);
    setIsCard(true);
    if (info.success) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  })
}

  return (
    <div className="container">
      <Header/>
      <main className="main">
        {/* component preview */}
        <section className="preview">
          { /* component image*/}
          <ImgCard
          cover={cover}
          />
          <Card
          data={data}
          user={user}
          />
         </section>
          {/*inicio component card* selecciono <section className="autor"> porque el componente me pide un padre para el chiquillo  */} 
        {/*inicio component form*/}         
        <Form
        data={data}
        handleInput={handleInput}
        handleClickCreateCard={handleClickCreateCard}
        url={url}
        isCard={isCard}
        isError={isError}
        />
          {/*fin component form*/} 
        {/* </section> */}
      </main>
    </div>
  );
}

export default App;



