import Navbar from "./components/Navbar/Navbar";
import axios from "axios";

import { Outlet } from "react-router-dom";

import AuthProvider from "./providers/AuthProvider";

axios.defaults.baseURL = "http://127.0.0.1:8090";
axios.defaults.withCredentials = true;

function App() {
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
