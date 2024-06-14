import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8090";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
