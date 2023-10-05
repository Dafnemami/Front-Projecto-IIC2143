import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

function Navbar() {


    const isLogged = localStorage.getItem("token") && localStorage.getItem("username");
  
    const handleLogout = () => { // esta función la pedí a chatGPT
        // Realiza las acciones necesarias para cerrar sesión, como eliminar el token y el nombre de usuario del almacenamiento local
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        window.location.href = "/";
    };

    
    return (
    <header>
        <nav className="navbar">
            {/* <NavLink to="/" className="logo-display">
                <img src="/logo-no-text.svg" alt="logo-image" className="logo-image" />
                <span className="name title"> Spotify </span>
            </NavLink> */}
            <ul className="navbar-links-container">
                <dl className="navbar-element">
                    <NavLink to="/" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        <button className="button-85" role="button">
                            Home
                        </button>
                    </NavLink>
                </dl>
                <dl className="navbar-element"> 
                    <NavLink to="about-us" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        <button className="button-85" role="button">
                            Sobre Nosotros
                        </button>
                    </NavLink>
                </dl>

                {isLogged && (
                  <dl className="navbar-element">
                    <button className="button-85" role="button" onClick={handleLogout}>
                      Cerrar Sesión
                    </button>
                  </dl>               
               )}

               {isLogged && (
                <dl className="navbar-element">
                    <NavLink to="jugar" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        <button id="boton-log" className="button-85" role="button"> Juega! </button>
                    </NavLink>
                </dl>
                )}

                <dl className="navbar-element">
                    <NavLink to="main" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        <button className="button-85" role="button">
                            Página Principal
                        </button>  
                    </NavLink>  
                </dl>
                <dl className="navbar-element">
                    <NavLink to="instructions" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        <button className="button-85" role="button">
                            Instrucciones
                        </button>
                    </NavLink>    
                </dl>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;