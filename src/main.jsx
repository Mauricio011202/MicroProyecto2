import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Home} from "./pages/Home/Home.jsx"
import {IniciarSesion} from "./pages/IniciarSesion/IniciarSesion.jsx"
import {Buscador} from "./pages/Buscador/Buscador.jsx"
//import {Navbar} from "./components/Navbar/Navbar.jsx"
import {Layout} from "./pages/Layout/Layout.jsx"
import {ClubDetails} from "./components/ClubesDetails/ClubDetails.jsx"
import './index.css'
import { Registro } from './pages/Registro/Registro.jsx';
import { PerfilUsuario } from './pages/PerfilUsuario/PerfilUsuario.jsx';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home/>}/>
          <Route path='/IniciarSesion' element={<IniciarSesion />}/>
          <Route path='/Registro' element={<Registro />}/>
          <Route path='/Busqueda' element={
          <PrivateRoute>
            <Buscador/>
          </PrivateRoute>
          }/>
          <Route path='/:ID' element={<ClubDetails />}/>
          <Route path='/PerfilUsuario' element={
          <PrivateRoute>
            <PerfilUsuario />
          </PrivateRoute>
          }/>
        </Route> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
