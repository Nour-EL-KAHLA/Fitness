import { useAuth } from "../../providers/AuthProvider";

function Logoutbtn() {
  const auth = useAuth();
  return (
    <div
      className="bg-[#FBB915] w-fit h-fit p-1 rounded-full px-4 flex flex-row 
  justify-center items-center hover:bg-[#fbd815] transition duration-150 ease-in-out"
    >
      <button onClick={() => auth.logOut()}>logout</button>
    </div>
  );
}

export default Logoutbtn;
