import Navbar from "./components/Navbar/Navbar";
import axios from "axios";

import { Outlet } from "react-router-dom";
import useBearStore from "./state/State";
import { useEffect, useState } from "react";
import AuthProvider from "./providers/AuthProvider";

axios.defaults.baseURL = "http://127.0.0.1:8090";
axios.defaults.withCredentials = true;

function App() {
  const { checkUserToken } = useBearStore();
  const [isuserauth, setuserauth] = useState(false);

  useEffect(() => {
    console.log(checkUserToken());
    // setuserauth(checkUserToken());
    setuserauth(checkUserToken());
    console.log(checkUserToken());

    console.log(
      "hedhi hiya " + isuserauth + "oui" + localStorage.getItem("token")
    );
  });

  // return isUserValid ? (
  //   <>
  //     <Navbar></Navbar>
  //     <Outlet />
  //   </>
  // ) : (
  //   <Navigate to={"/signin"} />
  // );

  // EL ASA7 ***********************************
  // return (
  //   <>
  //     {localStorage.getItem("token") ? (
  //       <>
  //         <Navbar />
  //         <Outlet />
  //       </>
  //     ) : (
  //       <Navigate to={"/signin"} />
  //     )}
  //   </>
  // );
  //********************************** */
  return (
    <div className="App">
      <AuthProvider>
        {" "}
        <Navbar />
        <Outlet />
      </AuthProvider>
    </div>
  );
}

export default App;
