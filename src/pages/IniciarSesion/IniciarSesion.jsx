import React from 'react'
import { crearVideoJuegos, videoJuegos } from '../../controllers/VideoJuegos'

export  function IniciarSesion() {
  
  videoJuegos.map(juego =>{
    crearVideoJuegos({ID: juego.ID, titulo: juego.titulo,genero: juego.genero,descripcion : juego.descripcion})
  })
  
  
  return (
    <div>IniciarSesion</div>
  )
}