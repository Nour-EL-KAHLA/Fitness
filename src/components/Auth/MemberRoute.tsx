import { useEffect } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MemberRoute = () => {
  const { user, loading } = useAuth();
  useEffect(() => {
    if (!loading) console.log(user.roles[0].id);
  }, [loading]);
  if (loading && !user) return <div>loading</div>;
  if (user.roles[0].id !== 2) return <Navigate to="/" />;
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default MemberRoute;
