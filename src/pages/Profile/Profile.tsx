import { useForm } from "react-hook-form";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect } from "react";
import axios from "axios";

function Profile() {
  const { user, loading } = useAuth();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (!loading && user) {
      console.log(user);
      setValue("username", user.username);
      setValue("email", user.email);
      setValue("weight", user.weight);
      setValue("sexe", user.sexe);
    }
  }, [loading, user, setValue]);
  const onSubmit = async (data: any) => {
    try {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("site"),
        },
      };
      await axios.put(
        `http://127.0.0.1:8090/usermanagement/updateuser/${user.id}`,
        data,
        config
      );
      alert("Profile updated successfully");
    } catch (error) {
      console.error("There has been a problem updating the profile", error);
    }
  };
  if (loading && !user) return <div>loading</div>;
  return (
    <div>
      <Navbar></Navbar>
      {/* <div className="mt-28 ">{user?.email}</div> */}
      <div className="mt-4 min-h-screen flex items-center justify-center ">
        <div className="w-full max-w-2xl rounded-lg border bg-white text-gray-900 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">User Profile</h3>
              <p className="text-sm text-gray-600 mb-6">
                Update your personal information.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue={user.username}
                    {...register("username")}
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue={user.email}
                    {...register("email")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="grid gap-2">
                  <label
                    htmlFor="weight"
                    className="text-sm font-medium leading-none"
                  >
                    Weight
                  </label>
                  <input
                    id="weight"
                    type="number"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue={user.weight}
                    {...register("weight")}
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="sex"
                    className="text-sm font-medium leading-none"
                  >
                    Sex
                  </label>
                  <select
                    id="sexe"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    {...register("sexe")}
                    defaultValue={user.sexe}
                  >
                    <option value="Man">Male</option>
                    <option value="Woman">Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-6 flex items-center justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 h-10 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
