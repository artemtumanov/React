import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../hooks/AuthProvider";

const RequireAuth = () => {
    const  location = useLocation();
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to='login' state= {{from: location }} />
        
    }
    return (
        <div><Outlet/></div>
    );
}

export default RequireAuth