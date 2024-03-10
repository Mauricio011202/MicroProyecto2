import styles from "./Juego.module.css"

function Juego({juego}){
    return(
        <div className={styles.container}>
          <h3>{juego.titulo}</h3>
          <p>Género: {juego.genero}</p>
          <p>Descripción: {juego.descripcion}</p>
        </div>
    )
}

export default Juego;