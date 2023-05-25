import React, { useState } from 'react';
import './Style.css';

import img from '../img/118859538.png'

import api from '../api.js'

import { useParams } from 'react-router-dom';

function Forms() {
  const [pictureImage, setPictureImage] = useState("Clique aqui para por a imagem");

  const [id, setID] = useState()

  const { id1 } = useParams();

  async function enviarForm(event){


    event.preventDefault()
    try{

      const data = {
        id
      };
      
      const response = await api.post('/resolutor', data)

      alert('Formulario enviado')

      
    
    }catch(error){
      console.log(`Erro no forms >>> ${error}`)
      alert(`Erro no forms >>> ${error}`)
    }
  }

  const handleInputChange = (e) => {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function (e) {
        const readerTarget = e.target;

        const imgSrc = readerTarget.result;

        const imgElement = <img src={imgSrc} className="picture__img" alt="Imagem" />;
        setPictureImage(imgElement);
      });

      reader.readAsDataURL(file);
    } else {
      setPictureImage("Clique aqui para por a imagem");
    }
  };

  return (
    <section className="card" id="card">
      <img src={img} alt="Logo" />

      <h1>Formulario de resolução</h1>

      <h2>ID de denuncia</h2>
      <input 
      className="idInput" 
      type="number"
      placeholder={`ID selecionado anteriormente: ${id1}`}
      value={id}
      onChange={e => setID(e.target.value)} 
      />

      <h2>Imagem do problema solucionado</h2>

      <label className="picture" htmlFor="picture__input" tabIndex="0">
        <span className="picture__image">{pictureImage}</span>
      </label>

      <div className="teste" />

      <input type="file" name="picture__input" id="picture__input" accept="imagem/*" onChange={handleInputChange} />

      <button className="myButton" onClick={enviarForm}>Enviar</button>
    </section>
  );
}

export default Forms;
