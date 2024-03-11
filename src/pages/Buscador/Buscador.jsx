
import { getJuegos } from "../../Firebase/videoJuegos"
import styles from "../Buscador/Buscador.module.css"
import React, {useState} from 'react'
import Juego from "../../components/Juegos/Juego"

export  function Buscador() {
  const muestra = [{
    "ID": "1",
    "titulo": "The Witcher 3: Wild Hunt",
    "genero": "RPG",
    "descripcion": "Un épico juego de rol de mundo abierto con una trama envolvente y gráficos impresionantes."
  }
]
  const [juego, setjuego] = useState(null)
  const [juegos, setjuegos] = useState(muestra)
  const onClick = async () => {
      const result = await getJuegos(juego);
      console.log(result)
      setjuegos(result)
      
  }

  const handleOnChange = (event) => {
      setjuego(event.target.value)
  }



  return (
    <div>
      <div className={styles.container}>
        <input  className={styles.bard} type="text" placeholder='Ingrese el nombre del juego' onChange={handleOnChange} />
        <button className={styles.boton} onClick={onClick}>Buscar</button>
      </div>
      <section>
        {juegos.map((juego) => (
          <Juego juego={juego} key={juego.ID} />
        ))}
        </section>
      
    </div>
  )
}