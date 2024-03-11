import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./Registro.module.css"
import { registerWithEmailAndPassword, singInWithGoogle } from '../../Firebase/auth'


export  function Registro() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userName: '',
    fav: '',
    membresias: []
  });

  const handleSingWithGoogle = async () => {
    await singInWithGoogle()
  }

  const handleOnChange = async (event) => {
    const { name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const {email, password, ...extraData} = formData;
    await registerWithEmailAndPassword(formData.email, formData.password, extraData)
    navigate('/')
  };


  return (
    <>
      <div className={styles.container}>
          <form className={styles.form} onSubmit={onSubmit}>
            <h1 className={styles.title}>Crea una cuenta</h1>
            <p className={styles.welcomeTxt}>
              Bienvenido! Te invitamos a ser parte de nuestra plataforma.
            </p>
    
            {/* NAME FIELD */}
            <div className={styles.inputContainer}>
              <label htmlFor="name">
                <span>Ingresa tu nombre completo</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Eg. John Doe"
                onChange={handleOnChange}
                
              />
            </div>
    
            {/* EMAIL FIELD */}
            <div className={styles.inputContainer}>
              <label htmlFor="email">
                <span>Ingresa tu email</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Eg. john@email.com"
                onChange={handleOnChange}
               
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
    
    
            <button
              type="submit"
              className={styles.submitBtn}
              
            >
              Entrar
            </button>
    
            <button
              type="button"
              className={styles.googleBtn}
              onClick={handleSingWithGoogle}
              
            >
              Registro con google
            </button>
    
            <Link to="/IniciarSesion" className={styles.loginRedirect}>
              ¿Ya tienes una cuenta?{" "}
              <span className={styles.redirectLink}>Inicia sesión</span>
            </Link>
          </form>
        </div>
    </>
    
  )
}