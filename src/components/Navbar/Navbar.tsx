import { NavLink } from "react-router-dom";
import gym from "../../assets/gymwhite.png";

function Navbar() {
  return (
    <div>
      <div className="top-0 z-10 fixed backdrop-filter backdrop-blur-lg w-full pt-8  ">
        <div className="flex justify-between px-24 mx-12  h-12">
          <div>
            <img className="w-8 pb-2" src={gym}></img>
          </div>
          <div className="flex justify-between ">
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
          </div>
          <div className="font-bold text-gray-50 from-neutral-50 w-fit h-fit bg-[#EB4537] p-1 rounded-full px-4">
            Join us
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
