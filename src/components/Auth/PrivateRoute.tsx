import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (!user && !loading) return <Navigate to="/signin" />;
  return <Outlet />;
};

export default PrivateRoute;
