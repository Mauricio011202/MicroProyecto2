import React, { useState } from 'react'
import styles from "./IniciarSesion.module.css"
import { loginWithEmailAndPassword , singInWithGoogle} from '../../Firebase/auth';
import { Link , useNavigate} from 'react-router-dom';

export  function IniciarSesion() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  
  const onSubmit = async (event) => {
    event.preventDefault();
    const {email, password}= formData;
    navigate("/")
    await loginWithEmailAndPassword(email,password)
    
  };

  const handleOnChange = (event) => {
      const {name, value} = event.target;
      setFormData({
        ...formData,
        [name]:value,
      });
  };

  const handleSingWithGoogle = async () => {
    await singInWithGoogle()
    navigate("/")
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h1 className={styles.title}>Bienvenido!</h1>
        <p className={styles.welcomeTxt}>
          Inicia sesión e inspecciona tus juegos favoritos.
        </p>

        {/* EMAIL FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="email">
            <span>Ingresa tu email</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Eg. ejemplo@email.com"
            onChange= {handleOnChange}
          />
        </div>

        {/* PASSWORD FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="password">
            <span>Ingresa tu contraseña</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={handleOnChange}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Entrar
        </button>

        <button
          type="button"
          className={styles.googleBtn}
          onClick={handleSingWithGoogle}
        >
          Iniciar con google
        </button>

        <Link to={"/Registro"} className={styles.loginRedirect}>
          ¿No tienes una cuenta?{" "}
          <span className={styles.redirectLink}>Regístrate</span>
        </Link>
      </form>
    </div>
  )
}