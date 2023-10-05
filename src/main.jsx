import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'


// IMPORTAMOS LOS COMPONENTES
// import LandingPage from './pages/LandingPage/LandingPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    {/* LISTADO DE COMPONENTES */}

    <App />
    {/* <LandingPage /> */}
    
  </React.StrictMode>,
)
