import { Link, useNavigate } from "react-router-dom";
import  styles from "./Navbar.module.css"
import { useUser } from "../../contexts/UserContex";
import {logout} from "../../Firebase/auth.js"


export function Navbar(){
    const {user}= useUser();
    const handleLogout = async () => {
        await logout();
    }
    return(
        <header>
            <div>
                <img className={styles.imagen} src="./public/huesos.png" alt="Logo pagina" />
            </div>
            <nav className={styles.navbar}>
                <ul className={styles.navList}>
                    <li>
                        <Link className={styles.Link} to={"/"}><span>Home</span></Link>
                    </li>
                    <li>
                        <Link className={styles.Link} to={"/Busqueda"}><span>Busqueda</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={"/Club"}><span>Club</span></Link>
                    </li>
                    {!!user &&(
                        <>
                            <li>
                                <Link className={styles.Link} to={"/PerfilUsuario"} ><span>Perfil - {user.name}</span></Link>
                            </li>
                            <li>
                                <button className={styles.boton} type="button" onClick={handleLogout}>Salir</button>
                            </li>
                        </>
                    )}
                    {!user &&(
                        <>
                            <li>
                                <Link className={styles.Link} to={"/IniciarSesion"} ><span>Iniciar Sesion</span></Link>
                            </li>
                            <li>
                                <Link className={styles.Link} to={"/Registro"} ><span>Registrarse</span></Link>
                            </li>
                        </>
                    )}
                    
                    
                </ul>
            </nav>
        </header>
    );
}