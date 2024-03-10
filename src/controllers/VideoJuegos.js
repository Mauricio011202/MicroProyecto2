import { collection, addDoc, getDocs , setDoc, doc} from "firebase/firestore";
import { db } from "../Firebase/Firebase";


// export async function crearVideoJuegos({ID, titulo, genero, descripcion}){
//      await setDoc(doc(db,"juegos",ID),{titulo, genero, descripcion})
  
//  }
// videoJuegos.map(juego =>{
//     crearVideoJuegos({ID: juego.ID,titulo: juego.titulo,genero: juego.genero, descripcion: juego.descripcion})
//   })

// export async function crearClubes({ID, nombre, descripcion, videojuegos}){
//     await setDoc(doc(db,"clubes",ID),{nombre, descripcion, videojuegos})

// }
// clubesData.map(club =>{
//     crearClubes({ID: club.ID, nombre: club.nombre, descripcion: club.descripcion, videojuegos: club.videojuegos})
//   })

 

