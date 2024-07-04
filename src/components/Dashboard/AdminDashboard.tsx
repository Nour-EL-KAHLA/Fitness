// import axios from "axios";
import { useEffect, useState } from "react";

import axios from "axios";
import UserTable from "./DashboardComponents/UserTable";
import { set } from "date-fns";

function AdminDashboard() {
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("site"),
      },
    };

    try {
      setLoading(true);
      const response = await axios.get(
        "http://127.0.0.1:8090/usermanagement/users",
        config
      );
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("There has been a problem with getting the users", error);
    } finally {
      setLoading(false);
    }
  };
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("site"),
    },
  };
  const updateUser = async (userId: any, roleId: any, coach: any) => {
    console.log(coach);
    var data;
    if (roleId === 3) {
      data = {
        role: ["coach"],
      };
    } else if (roleId === 1) {
      data = {
        role: ["admin"],
      };
    } else {
      data = {
        role: ["user"],
      };
    }

    try {
      await axios.put(
        `http://127.0.0.1:8090/usermanagement/updateuser/${userId}`,
        data,
        config
      );
      console.log("User updated successfully");
    } catch (error) {
      console.error("There has been a problem with updating the user", error);
    }
    try {
      await axios.post(
        `http://127.0.0.1:8090/program/create/${userId}/${coach}`,
        null,
        config
      );
      console.log("User coach updated successfully");
    } catch (error) {
      console.error("There has been a problem with updating the user", error);
    }
  };
  const deleteUser = async (userId: any) => {
    setLoading(true);
    try {
      await axios.delete(
        `http://127.0.0.1:8090/usermanagement/deleteuser/${userId}`,
        config
      );
      setUsers(users.filter((user: any) => user.id !== userId));

      console.log("User delete successfully");
    } catch (error) {
      console.error("There has been a problem with deleted the user", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !users.length) return <div>Loading...</div>;

  return (
    <div className="overflow-x-auto mt-28">
      <div className="text-gray-900 ">
        <div className="p-4 flex">
          <h1 className="text-3xl">Users</h1>
        </div>
        <UserTable
          users={users}
          updateUser={updateUser}
          deleteUser={deleteUser}
        />
      </div>
    </div>
  );
}

export default AdminDashboard;
