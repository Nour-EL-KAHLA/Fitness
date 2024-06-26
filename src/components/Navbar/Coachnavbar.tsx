import { Link } from "react-router-dom";
import coach from "../../assets/Navbar/coach.png";
import Logoutbtn from "./Logoutbtn";

function Coachnavbar() {
  return (
    <>
      <details className="dropdown dropdown-end">
        <summary className="btn m-1 border-transparent hover:border-transparent bg-transparent p-0 rounded-full">
          <img src={coach} className="w-16"></img>
        </summary>
        <ul className="menu dropdown-content rounded-box z-[1] w-36 p-2 shadow bg-[#FBB915] font-semibold text-md">
          <li className=" transition duration-150 ease-in-out rounded-full  hover:bg-[#fbcd15]">
            <Link to={"/profile"}> Profile</Link>
          </li>
          <li className=" transition duration-150 ease-in-out rounded-full  hover:bg-[#fbcd15]">
            <Link to={"/coaching"}> Coaching</Link>
          </li>
          <li className=" transition duration-150 ease-in-out rounded-full  hover:bg-[#fbcd15]">
            <Logoutbtn></Logoutbtn>
          </li>
        </ul>
      </details>
    </>
  );
}

export default Coachnavbar;
