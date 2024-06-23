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
import { jwtDecode } from "jwt-decode";
import { useContext, createContext, useState, useEffect } from "react";

//import { useNavigate } from "react-router-dom";

const AuthContext = createContext<any>({});

// const AuthProvider = ({ children }: any) => {
//   const [user, setUser] = useState(localStorage.getItem("site") || "");
//   const [token, setToken] = useState(localStorage.getItem("site") || "");
//   const navigate = useNavigate();
//   const loginAction = async (data: any) => {
//     try {
//       await axios
//         .post("http://127.0.0.1:8090/auth/signin", data)
//         .then((res) => {
//           console.log(res);
//           setUser(res.data.email);
//           setToken(res.data.accessToken);
//           localStorage.setItem("site", res.data.accessToken);
//           localStorage.setItem("user", res.data.email);
//         });

//       navigate("/");
//     } catch (error) {
//       console.error(
//         "There has been a problem with your sign-in operation:",
//         error
//       );
//     }
//   };
const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user) {
      //@ts-ignore
      const { jti } = jwtDecode(
        //@ts-ignore
        localStorage.getItem("site")
      );

      axios
        .get("http://127.0.0.1:8090/usermanagement/user/" + jti)
        .then(({ data }) => {
          setUser(data);
        })
        .finally(() => setLoading(false));
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// const logOut = () => {
//   setUser("");
//   setToken("");
//   localStorage.removeItem("site");
//   localStorage.removeItem("user");
//   navigate("/");
// };

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
