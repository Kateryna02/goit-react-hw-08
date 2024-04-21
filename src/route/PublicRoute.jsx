import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useLocation } from "react-router-dom";

export default function PublicRoute({children}) {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const location = useLocation();
    if (!isLoggedIn) {
        return children
    }
    return <Navigate to={location.state?.from || '/'} />
}
