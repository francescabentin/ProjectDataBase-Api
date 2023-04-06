import ImgCard from "./Preview/ImgCard";
import Card from "./Preview/Card";
import Form from "./Form";
import cover from "../images/cover.jpeg";
import user from "../images/user.jpeg";
import { useState } from "react";
import api from "../services/Api.js";
import "../styles/App.scss";
import ls from "../services/LocalStorage";

const CreateCard = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(
    ls.get("card", {
      name: "",
      slogan: "",
      repo: "",
      demo: "",
      technologies: "",
      desc: "",
      autor: "",
      job: "",
      image: "",
      photo: "",
    })
  );

  const defaultCard = {
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  }

  const [isError, setIsError] = useState('');
  const [message, setMessage] = useState({})

  const updateAvatar = (avatar) => {
    setData({ ...data, photo: avatar });
  };

  const updateProjectImg = (avatar) => {
    setData({ ...data, image: avatar });
  };

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    const textValidation = /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜïÏç.,-_\s]*$/;
    const linkValidation =
      /^((https?|ftp|file):\/\/)?([\da-z.-]+).([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (inputName === "name") {
      setData({ ...data, name: inputValue });
      if (inputValue === '') {
        setMessage({
          ...message,
          [inputName]: `Rellena este campo`,
        });
      } else {
        setMessage({
          ...message,
          [inputName]: ``,
        });
      }
    } else if (inputName === "slogan") {
      setData({ ...data, slogan: inputValue });
      if (inputValue === '') {
        setMessage({
          ...message,
          [inputName]: `Rellena este campo`,
        });
      } else {
        setMessage({
          ...message,
          [inputName]: ``,
        });
      }
    } else if (inputName === "repo") {
      setData({ ...data, repo: inputValue });
      if (!linkValidation.test(inputValue)) {
        setMessage({
          ...message,
          [inputName]: `Rellena este campo con un enlace HTTP: o HTTPS:`,
        });
      } else {
        setMessage({
          ...message,
          [inputName]: ``,
        });
      }
    } else if (inputName === "demo") {
      setData({ ...data, demo: inputValue });
      if (!linkValidation.test(inputValue)) {
        setMessage({
          ...message,
          [inputName]: `Rellena este campo con un enlace HTTP: o HTTPS:`,
        });
      } else {
        setMessage({
          ...message,
          [inputName]: ``,
        });
      }
    } else if (inputName === "technologies") {
      setData({ ...data, technologies: inputValue });
      if (inputValue === '') {
        setMessage({
          ...message,
          [inputName]: `Rellena este campo`,
        });
      } else {
        setMessage({
          ...message,
          [inputName]: ``,
        });
      }
    } else if (inputName === "desc") {
      setData({ ...data, desc: inputValue });
      if (inputValue === '') {
        setMessage({
          ...message,
          [inputName]: `Rellena este campo`,
        });
      } else {
        setMessage({
          ...message,
          [inputName]: ``,
        });
      }
    } else if (inputName === "autor" && textValidation.test(inputValue)) {
      setData({ ...data, autor: inputValue });
      if (inputValue === '') {
        setMessage({
          ...message,
          [inputName]: `Rellena este campo`,
        });
      } else {
        setMessage({
          ...message,
          [inputName]: ``,
        });
      }
    } else if (inputName === "job" && textValidation.test(inputValue)) {
      setData({ ...data, job: inputValue });
      if (inputValue === '') {
        setMessage({
          ...message,
          [inputName]: `Rellena este campo`,
        });
      } else {
        setMessage({
          ...message,
          [inputName]: ``,
        });
      }
    }
  };


  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    console.log(data);
    api.dataApi(data).then((info) => {
      console.log(info);
      if (info === undefined) {
        setIsError("❌ Faltan datos por rellenar");
      }
      else {
        setUrl(info);
        setIsError('La tarjeta ha sido creada');
      }
    });
  };

  const handleResetEvent = (ev) => {
    ev.preventDefault();
    console.log('hola');
    setData(defaultCard);
    ls.remove('cards');
    setUrl('');
    setIsError('');
  }

  return (
    <main className="main">
      <section className="preview">
        <ImgCard
          className={"preview__cover-img"}
          data={data}
          defaultAvatar={cover}
        />
        <div className="preview__card-position">
          <Card
            className={"preview__card--autor--img"}
            data={data}
            defaultAvatar={user}
          />
        </div>
      </section>
      <Form
        data={data}
        handleInput={handleInput}
        handleClickCreateCard={handleClickCreateCard}
        url={url}
        isError={isError}
        updateAvatar={updateAvatar}
        updateProjectImg={updateProjectImg}
        handleResetEvent={handleResetEvent}
        message={message}
      />
    </main>

  );
};

export default CreateCard;


