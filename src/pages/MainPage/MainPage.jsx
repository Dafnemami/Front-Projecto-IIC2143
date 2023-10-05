import React from "react";
import './main_page.css'
import sopaipilla2 from "../../assets/sopaipilla2.png"

function MainPage() {
  return (
    <main className="content">
      
      {/* <div className="bg-container"></div> */}

      <div className="content">

        <div className="title-main">
          <h1 className="h1-title-main"> Información del juego</h1>
        </div>

        <div className="title-bajada-main">

          <p>En este juego tu objetivo es tener la menor cantidad de puntos posibles. Si quieres ganar evita poner la sexta carta en una fila, pero cuidado, no sabes que cartas tienen los demás!!</p>
          <p>Partiendo con 10 cartas, cada ronda tienes que elegir una carta para que sea colocada al frente de la carta con el número menor mas cercano, pero si es la sexta en la fila esas cinco cartas pasan a ser puntos para ti.</p>
          <p>Ganará quien tenga menos puntos al final de la partida!!</p>

        </div>

        <div className="div-imagen">
          <img src={sopaipilla2} className="imagen"></img>
          <img src={sopaipilla2} className="imagen"></img>
          <img src={sopaipilla2} className="imagen"></img>
        </div>

        <div className="title-bajada-main">
          <p> Te animas a una partida rápida colega?</p>
        </div>

        <button className="button-85-main">Partida rápida</button>

      </div>

      <div className="bg-container">
        
      </div>
    </main>
  )
}

export default MainPage;