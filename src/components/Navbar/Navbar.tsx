import gym from "../../assets/gymwhite.png";
import { useAuth } from "../../providers/AuthProvider";
import Usernavbar from "./Usernavbar";
import Coachnavbar from "./Coachnavbar";
import Joinusbtn from "./joinusbtn";
import Adminnavbar from "./Adminnavbar";

function Navbar() {
  const { user } = useAuth();

  return (
    <div>
      <div className=" top-0 z-10 fixed backdrop-filter w-full pt-8 backdrop-blur-md h-24 bg-[#040404]">
        <div className="flex justify-between items-center lg:px-24 mx-12 h-8 md:px-12 px-12 ">
          <div>
            <img className="w-16" src={gym}></img>
          </div>

          {!user ? (
            <>
              <Joinusbtn></Joinusbtn>
            </>
          ) : (
            <>
              {user?.roles[0].id == 1 ? (
                <Adminnavbar></Adminnavbar>
              ) : user?.roles[0].id == 3 ? (
                <Coachnavbar></Coachnavbar>
              ) : (
                <Usernavbar></Usernavbar>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
