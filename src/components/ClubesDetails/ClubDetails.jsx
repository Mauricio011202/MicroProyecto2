import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { getoneClub } from "../../Firebase/clubes";
import Juego from "../../components/Juegos/Juego"
import Clubes from "../../components/Clubes/Clubes"

export function ClubDetails(){

    const{ID}= useParams();


    const [clubes, setClubes]= useState([{
        "nombre": "Club de Aventureros",
      }
    ]);

    useEffect(()=>{
        async function getClub(){
                   const club =await getoneClub(parseInt(ID))
                   setClubes(club);
                 }
                 getClub()
      },[]);

    // 

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
            
            
            <Clubes clubes={clubes[0]}/>
            {/* <section>
        {
        clubes[0].videojuegos.map((id) => (

          <Juego juego={juego} key={juego.ID} />
        ))}
        </section> */}

            <button> Subscribirme</button>

        </div>
    )


}

export default  ClubDetails; 




