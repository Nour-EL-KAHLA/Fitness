import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

const CoachRoute = () => {
  const { token } = useAuth();

  if (token == "kk") return <Navigate to="/" />;
  return <Outlet />;
};

export default CoachRoute;
