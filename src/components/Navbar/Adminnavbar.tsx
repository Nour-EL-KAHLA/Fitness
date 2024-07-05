import { TbDoorExit } from "react-icons/tb";
import Logoutbtn from "./Logoutbtn";
function Adminnavbar() {
  return (
    <div>
      <div className=" transition text-3xl text-[#FBB915] duration-150 absolute">
        <TbDoorExit />
      </div>
      <div className="text-transparent bg-transparent  relative w-8 hover:text-transparent hover:bg-transparent">
        <Logoutbtn></Logoutbtn>
      </div>
    </div>
  );
}

export default Adminnavbar;
