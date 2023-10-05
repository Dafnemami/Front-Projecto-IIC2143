import React from "react";
import { useState, useEffect } from "react";
import './games.css'
import axios from "axios";
import { NavLink } from "react-router-dom";

// BUSCAR PARTIDA QUE YA EXISTE
// PARA CREAR PARTIDA NOS FALTA AGREGAR FUNCIONES

function Games() {

    const [List, setList] = useState([]);

    // USEMOS AXIOS PARA HACER EL GET
    useEffect(() => {
      const getList = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/game`);
          setList(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      getList();
    }, []);

    // USEMOS FETCH PARA HACER EL GET
    // useEffect(() => {
    //     const getList = async () => {
    //       await fetch(`${process.env.VITE_BACKEND_URL}/game`)
    //         .then((res) => setList(res.data));
    //     };
    //     getList();
    // }, []);


    // {/* PUT A GAME/JOIN/ID */}
    // {/* al alzar game/join */}

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
      
    const bodyParameters = {
      key: "Value"
   };

    const handleJoinGame = async (gameId) => {
      try {

        const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/game/join/${gameId}`, bodyParameters, config);
          if (response.status === 200) {
            window.location.href = `/game/${gameId}`;
          }

      } catch (error) {
        console.error('Error al unirse al juego:', error);
        if (error.response.status === 404 | error.response.status === 401) {
          alert(error);
        } else if (error.response.status === 403) {
          alert("No puedes unirte a una partida en curso o en la que ya estás participando");
        }
      }
    };

    return (
      <main className="games">

        <div className="games-container"> 

          <div className="title-games">
            <h1 className="h1-title-games">Partidas Disponibles</h1>
            <p id="bajada">Selecciona una partida para unirte</p>
          </div>
          
          <div className="games-list">
          {List.map(game => {
            if (game.active==false && game.done==false) {
              return (
                <div className="game-container" key={game.id}>
                  <div className="game"> Partida {game.id}</div>
                  <div className="game"> Activo: {game.active ? "Si" : "No"}</div>
                  <div className="game"> Terminado: {game.done ? "Si" : "No"}</div>
                  <div className="game"> En ronda: {game.round}</div>
                  <button id="join-game-button" className="button-85" onClick={() => handleJoinGame(game.id)}>
                    Unirse </button>
                    <NavLink className='Game link' to={`/Game/${game.id}`}>
                    <button id="join-game-button" className="button-85">
                    Ver Juego </button>
                    </NavLink>
                </div>
                );

            } else {
              return (
                <div className="game-container" key={game.id}>
                  <div className="game"> Partida {game.id}</div>
                  <div className="game"> Activo: {game.active ? "Si" : "No"}</div>
                  <div className="game"> Terminado: {game.done ? "Si" : "No"}</div>
                  <div className="game"> En ronda: {game.round}</div>
                    <NavLink className='Game link' to={`/Game/${game.id}`}>
                    <button id="join-game-button" className="button-85">
                    Ver Juego </button>
                    </NavLink>
                </div>
                );
            
            }
        
          })}
          
          </div>

          <NavLink className='Game link' to={`/jugar`}>
              <button id="volver-games-button" className="button-85">Volver</button>
          </NavLink>

        </div>
          
        
        <div className="signup-container-2">{/* Just space */}</div>

      </main>


    )
}

export default Games;