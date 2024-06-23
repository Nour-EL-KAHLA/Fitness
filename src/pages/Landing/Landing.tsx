import Header from "../../components/Home/Header/Header";
import Body from "../../components/Home/Body/Body";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect } from "react";

function Landing() {
  const { user, loading } = useAuth();
  useEffect(() => {
    if (!loading) console.log(user);
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Body></Body>
    </>
  );
}

export default Landing;
