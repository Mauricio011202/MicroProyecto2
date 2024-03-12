import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { getoneClub } from "../../Firebase/clubes";
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
            {}

            <button> Subscribirme</button>

        </div>
    )


}

export default  ClubDetails; 




