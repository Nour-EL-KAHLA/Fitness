import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { IoIosFitness } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";

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
      <Fade className="min-h-screen  bg-svg-backgrounda  ">
        <div className="text-gray-900 mx-10 lg:mx-24 overflow-x-auto mt-24 px-0">
          <div className="py-4 flex">
            <div className="flex flex-row justify-center items-center mb-8">
              <h1 className="text-2xl font-bold md:text-3xl mr-2">My</h1>
              <blockquote className="md:text-3xl text-2xl font-bold text-center pr-2 text-slate-900">
                <span className="before:block gradiant before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#FBB915] relative inline-block">
                  <span className="relative text-white"> Members</span>
                </span>
              </blockquote>
            </div>
          </div>
          <div className="px-0 py-4 flex justify-center ">
            <table className="w-full md:text-sm text-xs bg-white  rounded mb-4 shadow-lg ring-0 ring-gray-400 ">
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
                          {elem?.sexe ? (
                            <div className="bg-transparent">{elem?.sexe}</div>
                          ) : (
                            <div>N/A</div>
                          )}
                        </td>
                        <td className="p-3 px-5">
                          {elem?.weight ? (
                            <div className="bg-transparent">{elem?.weight}</div>
                          ) : (
                            <div>N/A</div>
                          )}
                        </td>
                        <Fade className="p-3 px-5 flex justify-end ">
                          <div
                            className="bg-[#FBB915] w-fit h-fit  flex flex-row  gradiant
  justify-center items-center hover:bg-[#fbd815] rounded-md  duration-150 ease-in-out p-3 px-4 gap-2 bg-gradient-to-r from-[#FBCD15] to-[#fbae15] text-black font-bold transition-transform transform-gpu h hover:shadow-lg"
                          >
                            <button onClick={() => handleEditProgram(elem)}>
                              Edit Program
                            </button>
                            <div className="mt-1">
                              <IoIosFitness></IoIosFitness>
                            </div>
                          </div>
                        </Fade>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default CoachDashboard;
