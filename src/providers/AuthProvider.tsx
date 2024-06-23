// import { useContext, createContext } from "react";
// const AuthContext = createContext<any>(null);

// const AuthProvider = ({ children }: any) => {
//   return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
import axios from "axios";
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

const AuthContext = createContext<any>({});

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();
  const loginAction = async (data: any) => {
    try {
      await axios
        .post("http://127.0.0.1:8090/auth/signin", data)
        .then((res) => {
          console.log(res);
          setUser(JSON.stringify(res));
          setToken(res.data.accessToken);
          localStorage.setItem("site", res.data.accessToken);
        });

      navigate("/");
    } catch (error) {
      console.error(
        "There has been a problem with your sign-in operation:",
        error
      );
    }
  };

  const logOut = () => {
    setUser("");
    setToken("");
    localStorage.removeItem("site");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
