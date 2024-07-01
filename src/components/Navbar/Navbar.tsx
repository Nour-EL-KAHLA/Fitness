import gym from "../../assets/kora.png";
import { useAuth } from "../../providers/AuthProvider";
import Usernavbar from "./Usernavbar";
import Coachnavbar from "./Coachnavbar";
import Joinusbtn from "./joinusbtn";
import Adminnavbar from "./Adminnavbar";
import { Link } from "react-router-dom";

function Navbar() {
  const { user } = useAuth();

  return (
    <div>
      <div className=" top-0 z-10 fixed backdrop-filter w-full pt-8 backdrop-blur-md h-24 bg-[#040404e4]">
        <div className="flex justify-between items-center lg:px-24 mx-4 h-8 md:px-12 px-12 ">
          <div>
            <Link to="/">
              <img
                className="w-28
            "
                src={gym}
              ></img>
            </Link>
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
