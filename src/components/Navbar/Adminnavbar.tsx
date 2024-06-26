import logout from "../../assets/Navbar/logout.png";
import Logoutbtn from "./Logoutbtn";
function Adminnavbar() {
  return (
    <div>
      <img src={logout} className=" transition w-8 duration-150 absolute"></img>
      <div className="text-transparent bg-transparent  relative w-8 hover:text-transparent hover:bg-transparent">
        <Logoutbtn></Logoutbtn>
      </div>
    </div>
  );
}

export default Adminnavbar;
