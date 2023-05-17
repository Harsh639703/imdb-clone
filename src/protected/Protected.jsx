import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"


export const Protected = () => {
    const { currentUser } = useAuth();

    return (
        currentUser ? <Outlet /> : <Navigate to="/login"/>
    )
}