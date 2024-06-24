import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../providers/AuthProvider";

function Profile() {
  const { user, loading } = useAuth();
  useEffect(() => {
    if (!loading) console.log(user);
  }, [loading]);
  if (loading && !user) return <div>loading</div>;

  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-28 ">{user?.email}</div>
    </div>
  );
}

export default Profile;
