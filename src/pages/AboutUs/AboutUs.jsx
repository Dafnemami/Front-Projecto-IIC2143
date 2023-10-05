import React from "react";
import './about-us.css'
import alberto from "../../assets/alberto.jpeg"
import dafne from "../../assets/dafne.jpeg"

function AboutUs() {
  return (
    <main className="content">

      {/* <div className="bg-container"></div> */}

      <div className="content">

        <div className="title-about-us">
          <h1 className="h1-title-about-us"> El equipo Sopaipilla</h1>
        </div>


        <div className="fichas">

          {/* FICHA ALBERTO */}
          <div className="ficha-box">
              <h1 className="title-descripcion-box"> Alberto</h1>

            <div className="descripcion-sopaipilla">
              <p>
                Alberto nació con suerte, concurso que participa siempre algo se gana. Afanado de los transformers de 
                toda la vida y conocido por jamás saciarse, se declara fan de las sopaipillas.
              </p>
            </div>

            <div className="ficha-logo">
              <img src={alberto} className="imagen-integrante"></img>
            </div>

          </div>

          {/* FICHA DAFNE */}
          <div className="ficha-box">
              <p className="title-descripcion-box"> Dafne </p>

            <div className="descripcion-sopaipilla">
              <p>
                Dafne es fan de paloma mami, el Rayo Mcqueen y de hablar incoherencias.
                Entre sus hobbies se encuentra comer sopaipillas a altas horas de la noche 
                cuando ha perdido el control de su vida.
              </p>
            </div>

            <div className="ficha-logo">
              <img src={dafne} className="imagen-integrante"></img>
            </div>

          </div>

        </div>

      </div>

      <div className="bg-container"></div>


    </main>
  )
}

export default AboutUs;