import styles from "./Clubes.module.css"

function Clubes({clubes}){

    return (
        <div>
            <div></div>
            <div className={styles.bloque}>
          <h3>{clubes.nombre}</h3>
          <p>Descripcion: {clubes.descripcion}</p>
          <div>
          </div>
          </div>
        </div>
    )
}
export default Clubes