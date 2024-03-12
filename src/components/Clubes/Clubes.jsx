import styles from "./Clubes.module.css"

function Clubes({clubes}){

    return (
        
        <div className={styles.contenedor}>
        <div className={styles.container}>
          <h3>{clubes.nombre}</h3>
          <p>Descripción: {clubes.descripcion}</p>
        </div>
      </div>
    )
}
export default Clubes