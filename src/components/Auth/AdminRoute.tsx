import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const AdminRoute = () => {
  const { user, loading } = useAuth();
  useEffect(() => {
    if (!loading) console.log(user);
  }, [loading]);
  if (loading && !user) return <div>loading</div>;
  if (user.roles[0].id !== 1) return <Navigate to="/" />;
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default AdminRoute;
