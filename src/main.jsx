import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Home} from "./pages/Home/Home.jsx"
import {IniciarSesion} from "./pages/IniciarSesion/IniciarSesion.jsx"
import {Buscador} from "./pages/Buscador/Buscador.jsx"
import { Club } from './pages/Club/Club.jsx';
import {Navbar} from "./components/Navbar/Navbar.jsx"
import {Layout} from "./pages/Layout/Layout.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home/>}/>
          <Route path='/IniciarSesion' element={<IniciarSesion />}/>
          <Route path='/Registro' element={<IniciarSesion />}/>
          <Route path='/Busqueda' element={<Buscador />}/>
          <Route path='/Club' element={<Club />}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
