import Navbar from "./components/Navbar/Navbar";
import axios from "axios";

import { Navigate, Outlet } from "react-router-dom";

axios.defaults.baseURL = "http://127.0.0.1:8090";
axios.defaults.withCredentials = true;

function App() {
  const isUserValid: boolean = true;

  return isUserValid ? (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  ) : (
    <Navigate to={"/signin"} />
  );
}

export default App;
