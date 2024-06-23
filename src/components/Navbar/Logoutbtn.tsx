import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

function Logoutbtn() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const logOut = () => {
    setUser(null);

    localStorage.removeItem("site");

    navigate("/");
  };
  return (
    <div>
      <button
        onClick={logOut}
        className=" rounded-full w-full  hover:bg-[#fbcd15]"
      >
        logout
      </button>
    </div>
  );
}

export default Logoutbtn;
