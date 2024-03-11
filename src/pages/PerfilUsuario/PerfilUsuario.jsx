import { useUser } from "../../contexts/UserContex"
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { creatUserProfile, getUserProfile} from '../../Firebase/users'
import styles from "./PerfilUsuario.module.css"


export  function PerfilUsuario() {
    const {user} = useUser();
    const [usuario, setUsuario] = useState(null)
    async function getPerfil() {
      const result =  await getUserProfile(user.email)
      setUsuario(result)
      
  }
    
    useEffect(()=>{
      getPerfil()
    },[user]);
    const navigate = useNavigate()
    // useEffect(()=>{
    //   async function getPerfil(){
    //     const usuario =  await getUserProfile(user.email)
    //     setUsuario(usuario);
    //     console.log(usuario)
    //   }
      
    //   getPerfil()

    // },[]);

    const onSubmit = async (event) => {
      event.preventDefault();
    
      const {name, userName, ...extraData} = formData;
      await creatUserProfile(user.id,formData)
      navigate('/')
  };
    
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userName: '',
    fav: ''
  });

  const handleOnChange = async (event) => {
    const { name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
    return (
      
      <div>
        {!!usuario &&(
                        <><div >
                            <h3 className={styles.title}>Información Actual</h3>
                            <div className={styles.containerPrin}>
                              <div className={styles.containerInfo}>
                            
                                  <div className={styles.datos}>
                                    <label htmlFor="name"><span>Nombre:</span></label>
                                    <div id="name">{usuario.name}</div>
                                  </div>
                                  <div className={styles.datos}>
                                    <label htmlFor="userName"><span>UserName:</span></label>
                                    <div id="userName">{usuario.userName}</div>
                                  </div>
                                  <div className={styles.datos}>
                                    <label htmlFor="email"><span>Correo Electronico:</span></label>
                                    <div id="email">{usuario.email}</div>
                                  </div>
                                  <div className={styles.datos}>
                                    <label htmlFor="fav"><span>Juego favorito:</span></label>
                                    <div id="fav">{usuario.fav}</div>
                                  </div>
                                  <div className={styles.datos}>
                                    <label htmlFor="club"><span>Pertenece a los clubs:</span></label>
                                    <div id="club">{usuario.club}</div>
                                  </div>
                                </div>

                            </div>

                                                        
                            
                          <div className={styles.container}>
          <form className={styles.form} onSubmit={onSubmit}>
            <h1 className={styles.title}>Actualizar cuenta</h1>
            
    
            {/* NAME FIELD */}
            <div className={styles.inputContainer}>
              <label htmlFor="name">
                <span>Ingresa tu nombre y Apellido</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Pedro Chacon"
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
    
            
            <div className={styles.inputContainer}>
              <label htmlFor="userName">
                <span>Ingresa tu UserName</span>
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Jon231"
                onChange={handleOnChange}
                
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="fav">
                <span>Ingresa el Id de su juego Favorito "Puede buscarlo en la seccion de busqueda"</span>
              </label>
              <input
                type="text"
                name="fav"
                id="fav"
                placeholder="Jon231"
                onChange={handleOnChange}
                
              />
            </div>
    
    
            <button
              type="submit"
              className={styles.submitBtn}
            
              
            >
              Guargar Cambios
            </button>
    
          </form>
                          </div>
                          </div>
                        </>
                    )}
      </div> 
    )
  }