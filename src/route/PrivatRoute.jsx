import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";


export default function PrivatRoute({children}) {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    if (isLoggedIn) {
       return children 
    }
    return <Navigate to='/login'/>
}