import {
    createBrowserRouter,
    RouterProvider,
    redirect
  } from 'react-router-dom';
  import Layout from './pages/Layout';
  import AboutUs from './pages/AboutUs/AboutUs';
  import LandingPage from './pages/LandingPage/LandingPage';
  import MainPage from "./pages/MainPage/MainPage";
  import Instructions from "./pages/Instructions/Instructions";
  import Login from './pages/LogIn/login'; 
  import Signup from './pages/Registrar/signup';
  import Jugar from './pages/Jugar/jugar';
  import Game from './pages/Game/Game';
  import Games from './pages/Games/Games';
  import createGame from './pages/createGame/createGame';
  
  function Router() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '',
            element: <LandingPage />
          },
          {
            path: 'about-us',
            element: <AboutUs />
          },
          {
            path: 'main',
            element: <MainPage />
          },
          {
            path: 'instructions',
            element: <Instructions />
          },
          {
            path: 'login',
            element: <Login />
          },
          {
            path: 'signup',
            element: <Signup />            
          },
          {
            path: 'jugar',
            element: <Jugar />
          },
          {
            path: 'game/:id',
            element: <Game />
          },
          {
            path: 'games',
            element: <Games />
          },
          {
            path: 'createGame',
            element: <createGame />
          }
        ]
      },
      {
        path: '*', 
        loader: () => {
          return redirect('/')
        }
      }
    ])
  
    return (
      <RouterProvider router={router} />
    );
  }
  
  export default Router;