import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './game.css'
import axios from "axios";



function Game() {
    const [Hand, setHand] = useState({});
    const [Row1, setRow1] = useState("");
    const [Row2, setRow2] = useState("");
    const [Row3, setRow3] = useState("");
    const [Row4, setRow4] = useState("");
    const [NormalCard, setNormalCard] = useState("");
    const [SpecialCard, setSpecialCard] = useState("");
    const { id } = useParams();
    const [Round, setRound] = useState(0);
    const [Over, setOver] = useState(false);
    const [Start, setStart] = useState(false);
    const [End, setEnd] = useState([]);

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
    
    const bodyParameters = {
      key: "Value"
    };

    const getBoard = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/board/${id}`, config);
      if ("row1" in response.data)
      {setRow1(response.data.row1)
      setRow2(response.data.row2)
      setRow3(response.data.row3)
      setRow4(response.data.row4);
      await axios.get(`${import.meta.env.VITE_BACKEND_URL}/game/${id}`, config).then((res) => setRound(res.round))}
      else {
        setOver(true);
        setEnd(response.data)
      }
      };

    const getHand = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/usercard/game/${id}`, config);
      setHand(response.data);
      // setHand({hand:'3,4,5', specialhand:'1,2,1', points:5}) // para testear (comentar tres lineas de arriba)
    };
    
    const PlayNormalCard = async () => {
      if (NormalCard !== "")
      {const requestOptions = {
        game: id, card: Number(NormalCard), round: Round,
        };
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/normalplay`, requestOptions, config)
      .then(await getHand());}
    }

    const PlaySpecialCard = async () => {
        if (SpecialCard !== "")
        {const requestOptions = {
          game: id, card: Number(SpecialCard), round: Round,
          };
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/specialplay`, requestOptions, config)
        .then(await getHand());}
    }

    const NextRound = async () => {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" }
          };
        await axios.put(`${import.meta.env.VITE_BACKEND_URL}/board/${id}`, requestOptions, config)
        .then(await getBoard())
        .then(await getHand());
    }

    function NormalCardButton({ Card }) {
        function handlePlayClick() {
          setNormalCard(Card);
        }
      
        return (
          <button onClick={handlePlayClick} className="carta">
            {Card}
          </button>
        );
    }

    function SpecialCardButton({ Card }) {
        function handlePlayClick() {
          setSpecialCard(Card);
        }
      
        return (
          <button onClick={handlePlayClick} className="carta">
            {Card}
          </button>
        );
    }

    const handleStartGame = async (gameId) => {
      try {
        const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/game/start/${gameId}`, bodyParameters, config);
        if (response.status === 200) {
          getBoard();
          getHand();
          setStart(true);
        }

      } catch (error) {
        console.error('Error al comenzar la partida:', error);
        //if (error.response.status===404) {
          alert(error);
        //}
      }
    };
    
    useEffect(() => {
        getHand();
      }, []);

    useEffect(() => {
        getBoard();
    }, []);


    return (
      <div className="contenedor-game">

        <div className="title-board">
          <h1 className="h1-title-board">Partida {id}</h1>
        </div>

        <div className="boton-comenzar-partida">
          <button className="button-85" onClick={() => handleStartGame(id)}> 
          Comenzar </button>
        </div>
        {!Over ?

        <div className="contenedor-board">
          <div className='board'>
            <div className="row" id="1"> Row1 →
              {Start ? <div> {Row1} </div> : <div> Esperando a que comience la partida... </div>}
            </div>
            <div className="row" id="2"> Row2 →
              {Start ? <div> {Row2} </div> : <div> Esperando a que comience la partida...</div>}
            </div>
            <div className="row" id="3"> Row3 →
              {Start ? <div> {Row3} </div> : <div> Esperando a que comience la partida... </div>}
            </div>
            <div className="row" id="4"> Row4 →
              {Start ? <div> {Row4} </div> : <div> Esperando a que comience la partida... </div>}
            </div>
          </div>
        </div> : <div> </div>}

        {!Over ?

          <section>

          {"hand" in Hand ?
            <div className="hand-contenedor">

              <div className="contenedor-puntos">
                <div class="title-hand"> Tu mano: </div>
              </div>


              <div className="contenedor-text">
                <div className="text"> Cartas Normales: {Hand.hand.split(',').map((card) => (
                        <NormalCardButton Card={card}>
                            <div>{card}</div>
                        </NormalCardButton>
                ))} 
                </div>
                
                <div className="text"> Cartas Especiales: {Hand.specialhand.split(',').map((card) => (
                        <SpecialCardButton  className="carta" Card={card}>
                            {card}
                        </SpecialCardButton>
                ))} </div>

                <div className="contenedor-puntos">
                  <div className="text" id="points"> Points: {Hand.points} </div>
                </div>

              </div>
                
              <section id='buttons'>
                      <div>
                          <button id="B" className="button-85" onClick={PlayNormalCard}>Play Normal Card</button>
                      </div>
                      <div>
                          <button id="B" className="button-85" onClick={PlaySpecialCard}>Play Special Card</button>
                      </div>
                      <div>
                          <button id="B" className="button-85" onClick={NextRound}>Next Round</button>
                      </div>
              </section>
                  
            </div> :  <div></div> }
                  

          </section> : <div>
          {End.map((player) => (
            <div> {player[0]}: {player[1]} </div>
          ) )}</div>
}
      </div>
    )
}

export default Game;