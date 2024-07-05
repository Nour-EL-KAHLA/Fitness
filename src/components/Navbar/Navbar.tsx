import gym from "../../assets/kora.png";
import { useAuth } from "../../providers/AuthProvider";
import Usernavbar from "./Usernavbar";
import Coachnavbar from "./Coachnavbar";
import Joinusbtn from "./joinusbtn";
import Adminnavbar from "./Adminnavbar";
import { Link } from "react-router-dom";
import { JackInTheBox, Slide } from "react-awesome-reveal";

function Navbar() {
  const { user } = useAuth();

  return (
    <div>
      <div className=" top-0 z-10 fixed backdrop-filter w-full pt-8 backdrop-blur-md md:h-24 h-20 bg-[#040404e4]">
        <div className="flex justify-between items-center lg:px-16 mx-8 h-8   ">
          <Slide>
            <Link to="/">
              <img
                className="md:w-28 w-12
            "
                src={gym}
              ></img>
            </Link>
          </Slide>

          {!user ? (
            <JackInTheBox>
              <Joinusbtn></Joinusbtn>
            </JackInTheBox>
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
