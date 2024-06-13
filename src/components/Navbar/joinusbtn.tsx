import { Link } from "react-router-dom";
import forward from "../../assets/forward.png";
function Joinusbtn() {
  return (
    <div
      className="bg-[#FBB915] w-fit h-fit  p-1 rounded-full px-4 flex flex-row 
  justify-center items-center hover:bg-[#fbd815] transition duration-150 ease-in-out"
    >
      <Link to={"/signin"} className="font-bold text-black from-neutral-50 ">
        Join Us Now
      </Link>
      <img src={forward} className="h-4 ml-2"></img>
    </div>
  );
}

export default Joinusbtn;
