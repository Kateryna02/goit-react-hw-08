import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function PrivatRoute({children}) {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const location = useLocation();
    if (isLoggedIn) {
       return children 
    }
    return <Navigate to='/login' state={{from: location}}/>
}
