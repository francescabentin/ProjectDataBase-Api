import ImgCard from '../components/Preview/ImgCard';
import Card from '../components/Preview/Card';
import Form from './Form';
import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';
import { useState } from 'react';
import dataApi from '../services/Api.js';
import '../styles/App.scss';
import ls from '../services/LocalStorage';



const CreateCard =()=>{
    
    const [url, setUrl] = useState('');
    const [data, setData] = useState (ls.get ('card',{
    name:'',
    slogan:'',
    repo:'',
    demo: '',
    technologies:'',
    desc:'',
    autor:'',
    job:'',
    image: '',
    photo: '',
    }));

    const [isCard, setIsCard] = useState(false);
    const [isError, setIsError] = useState(false);

    const updateAvatar = (avatar) => {
        setData({ ...data, photo: avatar });
    }

    const updateProjectImg = (avatar) => {
        setData({ ...data, image: avatar });
    }

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
        ls.set('card', data)
    }
    return (
         <main className="main">
        {/* component preview */}
        <section className="preview">
          { /* component image*/}
          <ImgCard
          className={"image"}
          data={data}
          defaultAvatar={cover}
          />
          <Card
          className={"image-card"}
          data={data}
          defaultAvatar={user}
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
        updateAvatar={updateAvatar}
        updateProjectImg={updateProjectImg}
        />
          {/*fin component form*/} 
        {/* </section> */}
      </main>
    )
}

export default CreateCard;

