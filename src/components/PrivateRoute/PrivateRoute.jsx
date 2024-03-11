import { Navigate } from "react-router-dom";
import { useUser} from "../../contexts/UserContex.jsx"

export function PrivateRoute({children}){
    const { user } = useUser();

    if (!user){
        return <Navigate to="/IniciarSesion" />;
    }
    return children;
}