import gym from "../../assets/gymwhite.png";
import Joinusbtn from "./joinusbtn";

function Navbar() {
  return (
    <div>
      <div className="top-0 z-10 fixed backdrop-filter w-full pt-8 bg-opacity-20 backdrop-blur-md h-28 bg-black/20">
        <div className="flex justify-between items-center lg:px-24 mx-12 h-8 md:px-12 px-12 ">
          <div>
            <img className="w-16" src={gym}></img>
          </div>
          {/* <div className="flex justify-between ">
            <NavLink
              to={"/home"}
              className={({ isActive }) =>
                isActive
                  ? "font-semiboldbold  w-fit h-fit mx-24 hover:text-[#EB4537]  transition duration-150 ease-in-out text-red-600"
                  : "font-semiboldbold  w-fit h-fit mx-24 hover:text-[#EB4537] text-gray-50 transition duration-150 ease-in-out"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "font-semiboldbold  w-fit h-fit mx-24 hover:text-[#000000]  transition duration-150 ease-in-out text-red-600"
                  : "font-semiboldbold  w-fit h-fit mx-24 hover:text-[#000000] text-gray-50 transition duration-150 ease-in-out"
              }
            >
              About
            </NavLink>
          </div> */}
          {/* <div
            className="bg-[#FBB915] w-fit h-fit  p-1 rounded-full px-4 flex flex-row 
            justify-center items-center hover:bg-[#fbd815] transition duration-150 ease-in-out"
          >
            <Link
              to={"/signin"}
              className="font-bold text-black from-neutral-50 "
            >
              Join Us Now
            </Link>
            <img src={forward} className="h-4 ml-2"></img>
          </div> */}
          <Joinusbtn></Joinusbtn>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
