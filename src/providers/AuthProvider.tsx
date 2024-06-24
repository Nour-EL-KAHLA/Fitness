import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext<any>({});

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user && localStorage.getItem("site")) {
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

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
