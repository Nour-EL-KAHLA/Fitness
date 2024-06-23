import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../providers/AuthProvider";

function Profile() {
  // useEffect(() => {
  //   const { exp, iat, jti, sub, ...rest } = jwtDecode(
  //     "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNYWxhayBFTCBLQUhMQSIsImd5bS5tb2RlbHMuUm9sZUA0ZTc0NmNjMSI6eyJpZCI6MywibmFtZSI6IlJPTEVfQ09BQ0gifSwiZXhwIjoxNzE5MTg0NDY1LCJpYXQiOjE3MTkxNjQyNjMsImp0aSI6IjMifQ.gnxllY2SxW-h-U3xTFAdlCSxxrdNgt74mZ1_eNO6P5b7MJxayTK_z69lE1ymAEYfHoUUQphVu9Qzs9CS1-fqqQ"
  //   );

  //   const role: any = Object.keys(rest).map((key: any) => {
  //     //@ts-ignore
  //     return rest[key].id;
  //   })[0];
  //   console.log(role);
  // }, []);

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
