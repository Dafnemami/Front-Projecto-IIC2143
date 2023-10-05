import React, { useState } from "react";
import './login.css';
import { NavLink } from "react-router-dom";
import axios from "axios";


function Login() {
    // React States
    const [outMessage, setOutMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  


    const handleInputChange = (e) => {
      const { name, value } = e.target;
      if (name === "username") {
        setUsername(value);
      }
      if (name === "password") {
        setPassword(value);
      }
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();

      let obj = {
        username: username,
        password: password,
      };
  
      if (username === "" && password === "") {
        setOutMessage("Por favor, ingresa el nombre de usuario y la contraseña.");
        return;
      }
  
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, obj);
      
      
        // Verificar si la respuesta del servidor indica éxito
        if (response.status === 200) {
          setOutMessage("¡Inicio de sesión exitoso!");
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", username);
          window.location.href = "/";

        } 
  
      } catch (error) {
        // Manejar errores de la solicitud
        console.log(error);

        if (error.response.status === 401) {
          setOutMessage("El nombre de usuario o la contraseña son incorrectos.");

        } else {
          setOutMessage("Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo nuevamente.");
        }
      }
    };
  
    return (
      <main className="content-login">
        <div className="login-container">
          <div className="login-form">
            <div className="title-login">Iniciar Sesión</div>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Nombre de usuario</label>
                <input id="input-text" type="text" name="username" value={username}
                      onChange={handleInputChange} placeholder="ingresa tu nombre"/>
              </div>
              <div className="input-container">
                <label>Contraseña</label>
                <input id="input-text" type="password" name="password" value={password}
                      onChange={handleInputChange} placeholder="ingresa tu contraseña"/>
              </div>

              {outMessage && <p className="out-message">{outMessage}</p>}

              <div className="button-container">
                <button className="submit-button" type="submit">
                  Inicia Sesión
                </button>
              </div>

              <div className="button-container" id="volver">
                <NavLink to="/">
                  <button className="submit-button">Volver</button>
                </NavLink>
              </div>

            </form>
          </div>
        </div>
      </main>
    );
  }
  
  export default Login;