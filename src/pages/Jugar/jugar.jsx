import React, { useState } from "react";
import './jugar.css';
import { NavLink } from "react-router-dom";


function Jugar() {

    // Página con dos botones: uno para buscar una partida y otro para unirse a una que
    // aún no a empezado 

    return (
        <div className="jugar">
            <div className="jugar-container" id="Jugar-block">
                <div className="jugar-title">
                    <h1> Ya estás listo para jugar? </h1>
                </div>

                <div className="jugar-buttons">
                    <div className="jugar-button">
                        <NavLink to="/games">
                            <button  id="botonIR" className="button-85" role="button"> Buscar Partida</button>
                        </NavLink>
                    </div>

                    <div className="jugar-button">
                        <NavLink to="/createGame">
                            <button id="botonIR" className="button-85" role="button"> Crear Partida </button>
                        </NavLink>
                    </div>
                </div>
            
            </div>
        </div>
    );
}


export default Jugar;