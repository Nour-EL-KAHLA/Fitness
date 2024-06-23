import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

const PrivateRoute = () => {
  const { token } = useAuth();

  if (token !== localStorage.getItem("site")) return <Navigate to="/signin" />;
  return <Outlet />;
};

export default PrivateRoute;
