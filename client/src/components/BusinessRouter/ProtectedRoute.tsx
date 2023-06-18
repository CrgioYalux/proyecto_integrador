import { Navigate, Outlet } from 'react-router-dom'
import { useAdminSystem } from "../../providers/AdminSystem";

interface ProtectedRouteProps {};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ }) => {
    const [state] = useAdminSystem();

    if (state.userSession.logged) return <Outlet /> 
    return <Navigate to='/admin/login' replace />
};

export default ProtectedRoute;
