import React, { useState } from "react";
import "./signup.css";
// por alguna razón cada import debe estar en una línea separada
import { NavLink } from 'react-router-dom';
import axios from "axios";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [outMessage, setOutMessage] = useState("");


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    let obj = {
      username: firstName, // en back es username
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
  
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user`, obj);
  
      // Verificar si la respuesta del servidor indica éxito
      if (response.status === 201) {
        setOutMessage("¡Registro exitoso! Vuelve a inicio para iniciar sesión.");


      } else {
        // Manejar otros casos de respuesta del servidor
        setOutMessage("");

      }

    } catch (error) {
      // Manejar errores de la solicitud
      console.log(error);
      setOutMessage("¡Registro fallido! Intenta nuevamente.");
    }
  };
  


  return (
    <main className="content-signup">
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="title-signup">Empieza la aventura</div>

          <div className="input-container-su">
            <label htmlFor="firstName">Nombre de usuario </label>
            <input type="text" id="firstName" name="firstName" value={firstName} 
                    onChange={handleInputChange} placeholder="Ingresa tu nombre" />
          </div>
          <div className="input-container-su">
            <label htmlFor="email">Email </label>
            <input type="email" id="email" name="email" value={email} 
                  onChange={handleInputChange} placeholder="Ingresa tu email" />
          </div>
          <div className="input-container-su">
            <label htmlFor="password">Clave</label>
            <input type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="input-container-su">
            <label htmlFor="confirmPassword">Confirma tu contraseña </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirma tu contraseña"
            />
          </div>

          {/* Mostrar el mensaje de salida si existe */}
          {outMessage && <p className="out-message">{outMessage}</p>}

          <div className="button-container-su">
            <button className="submit-button-su" type="submit">
              Registrarse
            </button>
          </div>

          <div className="button-container-su" id="volver-su">
            <NavLink to="/">
              <button className="submit-button-su">Volver</button>
            </NavLink>
          </div>


        </form>
      </div>

      <div className="signup-container-2">{/* Just space */}</div>
    </main>
  );
}

export default Signup;
