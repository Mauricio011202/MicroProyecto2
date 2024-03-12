import { useParams } from "react-router-dom";
import { useUser } from "../../contexts/UserContex"
import { useEffect,useState } from "react";
import { getoneClub } from "../../Firebase/clubes";
import Juego from "../../components/Juegos/Juego"
import Clubes from "../../components/Clubes/Clubes"
import styles from "./ClubDetails.module.css"
import Juego from "../Juegos/Juego";
import {db} from "../../Firebase/Firebase";
import { creatUserProfile } from "../../Firebase/users";
import { useNavigate } from "react-router-dom";

export function ClubDetails(){

    const{ID}= useParams();
    const {user} = useUser();
    const navigate = useNavigate()
   // const userRef = db.collection('usuarios').doc(user);



    const [clubes, setClubes]= useState([{
        "nombre": "Loading...",
      }
    ]);

    // const [juego, setJuego]= useState([{
    //     "ID": "Loading",
    //   }
    // ]);

    //  const [user, setUser]= useState([{
    //      "email": "Loading",
    //    }
    //  ]);

    useEffect(()=>{
        async function getClub(){
                   const club =await getoneClub(parseInt(ID))
                   setClubes(club);
                 }
                 getClub()
      },[]);

      const onClick = async () => {

        await creatUserProfile(user.id,{name:user.name,username: user.username, fav: user.fav,email:user.email,membresias: clubes[0].nombre});
        navigate("/")
        
        }
    //console.log(user.parseInt(ID));

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




