import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { getoneClub } from "../../Firebase/clubes";
import Clubes from "../../components/Clubes/Clubes"

export function ClubDetails(){

    const{ID}= useParams();

    const [clubes, setClubes]= useState([{
        "nombre": "Club de Aventureros",
      },
    ]);

    // async function getClub(){
    //     const club =await getoneClub(ID)
    //     console.log(club);
    //     setClubes(club);
    //   }
    //   getClub()

    // useEffect(()=>{

    //     async function getClub(){
    //       const club =await getoneClub(ID)
    //       console.log(club);
    //       setClubes(club);
    //     }
    //     getClub()
    //   },[])

    return(

        <div>
            {/* <section>
        <Clubes clubes={clubes} key={clubes.ID} />
        </section> */}
            <div> está aqui - ${ID} </div>
            <h3>{clubes.nombre}</h3>

            <p>Descripcion: {ID}</p>

            <button> Subscribirme</button>

        </div>
    )


}

export default  ClubDetails; 




