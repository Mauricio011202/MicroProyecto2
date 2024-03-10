import { useUser } from "../../contexts/UserContex"


export  function PerfilUsuario() {
    const {user} = useUser();
    console.log({user})
    return (
      
      <div>Perfil</div>
    )
  }