import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { IoIosFitness } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function CoachDashboard() {
  const { user } = useAuth();
  const [users, setUsers] = useState<any>();
  const [loading, setLoading] = useState(false);
  interface User {
    id: number;
    name: string;
    program: {
      id: any;
    };
  }
  const navigate = useNavigate();
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
        .get(
          "http://127.0.0.1:8090/usermanagement/findbycoach/" + user.id,
          config
        )
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
  function handleEditProgram(user: User) {
    //@ts-ignore
    navigate(`/programEdit/${user.id}`, { state: { user } });
  }
  if (loading && !users) return <div>Loading</div>;
  return (
    <>
      {/* <div className="overflow-x-auto mt-28">
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
      </div> */}
      <div className="overflow-x-auto mt-28">
        <div className="text-gray-900 ">
          <div className="p-4 flex">
            <h1 className="text-3xl">Members</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Name</th>
                  <th className="text-left p-3 px-5">Sexe</th>
                  <th className="text-left p-3 px-5">Weight</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((elem: any) => {
                    return (
                      <tr
                        key={elem}
                        className="border-b hover:bg-slate-100 bg-slate-50"
                      >
                        <td className="p-3 px-5">
                          <div className="bg-transparent">{elem?.username}</div>
                        </td>

                        <td className="p-3 px-5">
                          <div className="bg-transparent">{elem?.sexe}</div>
                        </td>
                        <td className="p-3 px-5">
                          <div className="bg-transparent">{elem?.weight}</div>
                        </td>
                        <td className="p-3 px-5 flex justify-end ">
                          <div
                            className="bg-[#FBB915] w-fit h-fit  flex flex-row 
  justify-center items-center hover:bg-[#fbd815] duration-150 ease-in-out p-3 px-4 gap-2 bg-gradient-to-r from-[#FBCD15] to-[#fbae15] text-black font-bold rounded-full transition-transform transform-gpu h hover:shadow-lg"
                          >
                            <button onClick={() => handleEditProgram(elem)}>
                              Edit Program
                            </button>
                            <div className="mt-1">
                              <IoIosFitness></IoIosFitness>
                            </div>
                          </div>
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

export default CoachDashboard;
