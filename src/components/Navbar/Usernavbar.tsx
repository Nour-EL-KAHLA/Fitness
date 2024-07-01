import { Link, NavLink, useLocation } from "react-router-dom";

import Logoutbtn from "./Logoutbtn";

function Usernavbar() {
  return (
    <>
      <details className="dropdown dropdown-end lg:hidden">
        <summary className="btn m-1 border-transparent hover:border-transparent bg-transparent p-0 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </summary>
        <ul className="menu dropdown-content rounded-box z-[1] w-36 p-2 shadow bg-[#FBB915] font-semibold text-md">
          <li className=" transition duration-150 ease-in-out rounded-full  hover:bg-[#fbcd15]">
            <Link to={"/profile"}> Profile</Link>
          </li>
          <li className=" transition duration-150 ease-in-out rounded-full  hover:bg-[#fbcd15]">
            <Link to={"/program"}> Program</Link>
          </li>
          <li className=" transition duration-150 ease-in-out rounded-full  hover:bg-[#fbcd15]">
            <Logoutbtn></Logoutbtn>
          </li>
        </ul>
      </details>

      {/* <div className="dropdown dropdown-end">
        <summary role="button" className="btn btn-ghost  flex-end lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </summary>
        <ul className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div> */}

      <div className="lg:navbar-end hidden text-white lg:flex">
        <ul className="menu menu-horizontal px-1  text-base">
          <li>
            <NavLink to="/profile" className="hover:text-[#695f25]">
              {({ isActive }) => (
                <span className={isActive ? "text-[#fbd815]" : ""}>
                  Profile
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/program"} className="hover:text-[#695f25]">
              {({ isActive }) => (
                <span className={isActive ? "text-[#fbd815]" : ""}>
                  Program
                </span>
              )}
            </NavLink>
          </li>
          <li className=" ml-12 text-base  flex flex-row text-[#bf3305] hover:text-[#bf1b05]">
            <Logoutbtn></Logoutbtn>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Usernavbar;
