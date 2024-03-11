import React, { useEffect, useState } from 'react'
import {getClubes} from "../../Firebase/clubes"
import Clubes from "../../components/Clubes/Clubes"
import { Link } from 'react-router-dom';

export  function Home() {

  const [clubes, setClubes]= useState([{
    "ID": "1",
    "nombre": "Club de Aventureros",
    "descripcion": "Explora lugares misteriosos y descubre tesoros ocultos con otros entusiastas de la aventura.",
    "videojuegos": ["1", "3", "11"]
  },
]);

  useEffect(()=>{

    async function getClub(){
      const club =await getClubes()
      console.log(club);
      setClubes(club);
    }
    getClub()
  },[])
    
  return (
    <div>
    
     <h1 className='styles.Title'> Welcome to Planet Games </h1>
     <section>
        {clubes.map((club) => (
          <Link to={`${club.ID}`} key={club.ID}>
          <Clubes clubes={club} key={club.ID} />
          </Link>
        ))}
      </section>
    </div>
  )
}