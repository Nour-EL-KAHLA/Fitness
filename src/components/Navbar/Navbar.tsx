import { Link } from "react-router-dom";
import gym from "../../assets/gym.png";
function Navbar() {
  return (
    <div>
      <div className="top-0 z-10 fixed backdrop-filter backdrop-blur-lg w-full pt-8  ">
        <div className="flex justify-between px-24 mx-12  h-12">
          <div>
            <img className="w-12 pb-2" src={gym}></img>
          </div>
          <div className="flex justify-between ">
            <Link to={"/home"} className="font-bold  w-fit h-fit px-24 ">
              Home
            </Link>
            <Link to={"/about"} className="font-bold w-fit h-fit ">
              About
            </Link>
          </div>
          <div className="font-bold text-gray-50 from-neutral-50 w-fit h-fit bg-red-700 p-1 rounded-full px-2">
            Join us
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
