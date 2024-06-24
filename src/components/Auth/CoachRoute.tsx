import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect } from "react";

const CoachRoute = () => {
  const { user, loading } = useAuth();
  useEffect(() => {
    if (!loading) console.log(user.roles[0].id);
  }, [loading]);
  if (loading && !user) return <div>loading</div>;
  if (user.roles[0].id !== 3) return <Navigate to="/" />;
  return <Outlet />;
};

export default CoachRoute;
