import React from "react";
// import { Link } from "react-router-dom";
import './landing.css'
import relacion from "../../assets/carta.png"
import logo from "../../assets/logo-toma-6.png"
import { NavLink } from "react-router-dom";

// HOME 

function LandingPage() {

  const isLogged = localStorage.getItem("token") && localStorage.getItem("username");



  return (
    <main className="content">
      
      <div className="div-logo">
        <img src={logo} className="logo" ></img>
      </div>

      {/* <div className="bg-container"></div> */}


      <div className="text-content" id="text-content-ppal">

        <div className="title">
          <h1>Bienvenido a <span className="name">Come 6</span></h1>
        </div>
          {/* <Link className="play-button" to="/playlist">
              Play some music!
          </Link> */}

        <div className="title-bajada">
          <p>Escoge secuencialmente cartas para ir agregando a las filas, pero evita agregar la 6ta!</p>
        </div>

      </div>


      <div className="text-content" id="LogInSignUp-block">

        <div className="LogInSignUp-title"> 
          <h1>Crea una cuenta! Juega! Disfruta!</h1>
        </div>

        <div className="LogInSignUp-buttons">
          {!isLogged && (          
          <div id="botonIR2">
            <NavLink to="/login">
              <button id="botonIR" className="button-85">Iniciar sesión</button>
            </NavLink>
          </div>
          )}

          {!isLogged && (
          <div id="botonIR2" >
            <NavLink to="/signup">
              <button id="botonIR" className="button-85">Registrarse</button>
            </NavLink>
          </div>
          )}
        </div>
      </div>
      
      
      <div className="div-imagen-relacionada">
        <img src={relacion} className="imagen-relacionada"></img>
        <img src={relacion} className="imagen-relacionada"></img>
        <img src={relacion} className="imagen-relacionada"></img>
      </div>
      
      <div className="bg-container"></div>
      
    </main>
  )
}

export default LandingPage;