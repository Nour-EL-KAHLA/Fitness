import gym from "../../assets/gymwhite.png";
import { useAuth } from "../../providers/AuthProvider";
import Logoutbtn from "./Logoutbtn";
import Usernavbar from "./Usernavbar";
import Joinusbtn from "./joinusbtn";

function Navbar() {
  const { token } = useAuth();
  return (
    <div>
      <div className="top-0 z-10 fixed backdrop-filter w-full pt-8 bg-opacity-20 backdrop-blur-md h-28 bg-black/20">
        <div className="flex justify-between items-center lg:px-24 mx-12 h-8 md:px-12 px-12 ">
          <div>
            <img className="w-16" src={gym}></img>
          </div>
          {token !== localStorage.getItem("site") ? (
            <>
              <Joinusbtn></Joinusbtn>
            </>
          ) : (
            <>
              <Logoutbtn></Logoutbtn>
              <Usernavbar></Usernavbar>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
