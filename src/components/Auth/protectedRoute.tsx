import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

interface ProtectedRouteProps {
    children: React.ReactNode
}

const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    
    const navigate = useNavigate();
    const {user} = useAuth();

    const checkUserToken = () => {
       if(user == ""){
        return navigate("/login");
       }
    }
    useEffect(() => {
            checkUserToken();
        }, [user]);

    return (
        <React.Fragment>
            {
                user ? children : null
            }
        </React.Fragment>
    );
}
export default ProtectedRoute;