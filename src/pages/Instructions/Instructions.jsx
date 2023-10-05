import React, { useState } from "react";
import './instructions.css'
let inst_carta = "Cada carta tiene un número del 1 al 104, sin repetir números, y también tiene un valor de puntos. Intenta de que tus oponentes se lleven las cartas con mas puntos!!"
let inst_mano = "Partes con 10 cartas normales y 3 especiales en tu mano, cada ronda eliges una para colocar en la fila que le corresponde. Cuando todos hayan elegido una carta, estas se revelan y se van colocando en donde corresponder desde menor a mayor"
let inst_tablero = "Hay 4 filas, cada una parte con una carta. Las cartas jugadas se colocan después de la carta con el número menor mas cercano. Cada fila tiene una capacidad de 5 cartas, si tu carta es la sexta te llevas las 5 cartas que ya estaban como puntos y tu carta queda como la unica en la fila. Si tu carta no va en ninguna fila tu eliges en cual ponerla, pero ojo que también te tienes que llevar las cartas que ya estaban en esa fila como puntos"
let inst_final = "Después de 10 rondas se cuentan los puntos de cada jugador, si alguien tiene 66 puntos o mas el juego se acaba y se cuentan los puntos, el jugador con la menor cantidad de puntos gana. Si esto no ha ocurrido aún se sacan 10 cartas mas para cada uno y se continua el juego"
let inst_special = "Cuando la proxima carta a colocar en su posición es la tuya puedes jugar una de tus cartas especiales."
function Instructions() {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [stext, setStext] = useState('');
  const [tittle, setTittle] = useState('');
  const clickcard = () => {
    setText(inst_carta)
    setName("Carta")
  }
  const clickhand = () => {
    setText(inst_mano)
    setName("Tu mano")
  }
  const clickboard = () => {
    setText(inst_tablero)
    setName("El tablero")
  }
  const clickend = () => {
    setText(inst_final)
    setName("Fin del juego")
  }
  const clickspecial = () => {
    setText(inst_special)
    setName("Cartas especiales")
  }
  const click7 = () => {
    setStext("Coloca tu carta al inicio de cualquier fila cuya primera carta sea mayor que tu carta.")
    setTittle("Inicio")
  }
  const clickfith = () => {
    setStext("Coloca tu carta al final de cualquier fila cuya ultima carta sea menor que tu carta.")
    setTittle("Ascendente")
  }
  const clickpositive = () => {
    setStext("Bloquea el siguiente espacio libre de una fila hasta que se lleve alguien las cartas.")
    setTittle("Omitir")
  }
  const clickreplace = () => {
    setStext("Convierte los puntos negativos de una carta de la fila en puntos positivos que se restan de los negativos.")
    setTittle("Menos es mas")
  }
  return (
    <main className="content">

      {/* <div className="bg-container"></div> */}

      <div className="content">

        <div className="title-instructions">
          <h1 className="h1-title-instructions"> Cómo jugar el juego?</h1>
        </div>


      {/* idea: botones bajo cosas, click boton y te dice que es/instrucciones */}

      <div className="botones-dinamicos-1">
        
        <div className="boton-dinamico-1">
          <button onClick={clickcard} className="button-92">Carta</button>
        </div>
        <div className="boton-dinamico-1">
        <button onClick={clickspecial} className="button-92">Cartas especiales</button>
        </div>
        <div className="boton-dinamico-1">
          <button onClick={clickhand} className="button-92">Tu mano</button>
        </div>
        <div className="boton-dinamico-1">
          <button onClick={clickboard} className="button-92">El tablero</button>
        </div>
        <div className="boton-dinamico-1">
          <button onClick={clickend} className="button-92">Fin del juego</button>
        </div>
    
      </div>

      </div>

      <div className="header-display-boton">
        <h2 className="h2-header-display-boton">{name}</h2>
      </div>

      <div className="text-display-boton">
        <p className="p-text-display-boton">{text}</p>
      </div>



      <div className="content">
        <div className="title-special">
          <h1 className="h1-title-special"> Cartas especiales</h1>
      </div>


      {/* idea: botones bajo cosas, click boton y te dice que es/instrucciones */}

      <div className="botones-dinamicos-1">
        <div className="boton-dinamico-1">
        <button onClick={click7} className="button-92">Inicio</button>
        </div>
        <div className="boton-dinamico-1">
        <button onClick={clickfith} className="button-92">Ascendente</button>
        </div>
        <div className="boton-dinamico-1">
        <button onClick={clickpositive} className="button-92">Omitir</button>
        </div>
        <div className="boton-dinamico-1">
        <button onClick={clickreplace} className="button-92">Menos es mas</button>
        </div>
        </div>
        <div className="header-display-boton">
          <h2 className="h2-header-display-boton">{tittle}</h2>
        </div>
      </div>

      <div className="text-display-boton">
        <p className="p-text-display-boton">{stext}</p>
      </div>

      <div className="bg-container"></div>
    </main>

  )
}

export default Instructions;