import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [users, setUsers] = useState<any>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getallusers();
  }, []);
  const getallusers = async () => {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("site"),
      },
    };

    try {
      setLoading(true);
      await axios
        .get("http://127.0.0.1:8090/usermanagement/users", config)
        .then((res) => {
          //@ts-ignore
          setUsers(res.data);
          console.log(res.data);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.error("There has been a problem with getthing the users", error);
    }
  };
  if (loading && !users) return <div>Loading</div>;
  return (
    <>
      <div className="overflow-x-auto mt-28">
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Sexe</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((elem: any) => {
                return (
                  <tr className="hover:bg-slate-200">
                    <td>{elem.username}</td>
                    <td>{elem.email}</td>
                    <td>{elem?.sexe}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
