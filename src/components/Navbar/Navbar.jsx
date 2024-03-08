import { Link, useNavigate } from "react-router-dom";
import  styles from "./Navbar.module.css"

export function Navbar(){

    return(
        <header>
            <div>
                <img  src="./src/assets/logo.png" alt="Logo pagina" />
            </div>
            <nav className={styles.navbar}>
                <ul className={styles.navList}>
                    <li>
                        <Link className={styles.Link} to={"/Busqueda"}><span>Busqueda</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={"/Club"}><span>Club</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={"/IniciarSesion"} ><span>Iniciar Sesion</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={"/Registro"} ><span>Registrarse</span></Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}