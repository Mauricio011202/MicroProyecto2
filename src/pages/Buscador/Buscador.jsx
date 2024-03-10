
import { getJuegos } from "../../Firebase/videoJuegos"
import styles from "../Buscador/Buscador.module.css"
import React, { useState } from 'react'

export  function Buscador() {
  const [juego, setjuego] = useState()
  const onClick = async () => {
      const juegos = await getJuegos(juego);
      console.log(juegos)
      

  }

  const handleOnChange = (event) => {
      setjuego(event.target.value)
  }
  const MostrarJuegos = ({ juegos }) => {
    if (juegos.length == 0) {
      return <p>No hay juegos disponibles</p>;
    }

    return (
      <div>
        {juegos.map((juego) => (
          <div key={juego.id}>
            <h3>{juego.titulo}</h3>
            <p>Género: {juego.genero}</p>
            <p>Descripción: {juego.descripcion}</p>
          </div>
        ))}
      </div>
    );
  };


  return (
    <div className={styles.container}>
      <input  className={styles.bard} type="text" placeholder='Ingrese el nombre del juego' onChange={handleOnChange} />
      <button className={styles.boton} onClick={onClick}>Buscar</button>
      <div>{MostrarJuegos}</div>
      
    </div>
  )
}