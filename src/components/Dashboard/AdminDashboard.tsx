import axios from "axios";
import { useEffect, useState } from "react";

function AdminDashboard() {
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
        <div className="text-gray-900 ">
          <div className="p-4 flex">
            <h1 className="text-3xl">Users</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <thead>
                {" "}
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Name</th>
                  <th className="text-left p-3 px-5">Email</th>
                  <th className="text-left p-3 px-5">Sexe</th>
                  <th className="text-left p-3 px-5">Role</th>
                  <th className="text-left p-3 px-5">Coach</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((elem: any) => {
                    return (
                      <tr className="border-b hover:bg-slate-100  bg-slate-50 ">
                        <td className="p-3 px-5 ">
                          <input
                            type="text"
                            value={elem.username}
                            className="bg-transparent border-b-2 border-slate-300 py-2"
                          />
                        </td>

                        <td className="p-3 px-5">
                          <input
                            type="text"
                            value={elem.email}
                            className="bg-transparent border-b-2 border-slate-300 py-2"
                          />
                        </td>
                        <td className="p-3 px-5">
                          <input
                            type="text"
                            value={elem.sexe}
                            className="bg-transparent border-b-2 border-slate-300 py-2"
                          />
                        </td>
                        <td className="p-3 px-5">
                          <select className="bg-transparent border-b-2 border-gray-300 py-2">
                            <>
                              <option
                                value="Admin"
                                selected={elem?.roles[0].id === 1}
                              >
                                Admin
                              </option>
                              <option
                                value="Coach"
                                selected={elem?.roles[0].id === 3}
                              >
                                Coach
                              </option>
                              <option
                                value="Member"
                                selected={elem?.roles[0].id === 2}
                              >
                                Member
                              </option>
                            </>
                          </select>
                        </td>
                       
                        <td className="p-3 px-5">
                          <select className="bg-transparent border-b-2 border-gray-300 py-2">
                            {users
                              .filter((elemo: any) => {
                                return elemo?.roles[0].id == 3;
                              })
                              .map((elemi: any) => {
                                return (
                                  <option
                                    value={elemi.username}
                                    key={elemi.username}
                                    selected={
                                      elemi.username ===
                                      elem?.program?.coach.username
                                    }
                                  >
                                    {elemi.username}
                                  </option>
                                );
                              })}
                          </select>
                        </td>

                        <td className="p-3 px-5 flex justify-end">
                          <button
                            type="button"
                            className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
