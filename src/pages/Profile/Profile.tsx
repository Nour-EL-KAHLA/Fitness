import { useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import SaveChangesBtn from "../../components/Buttons/SaveChangesBtn";
import { Bounce, Fade, Slide, Zoom } from "react-awesome-reveal";

function Profile() {
  const { user, loading } = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!loading && user) {
      // Set default values
      setValue("username", user?.username);
      setValue("email", user?.email);
      setValue("weight", user?.weight);
      setValue("sexe", user?.sexe);
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
    } catch (error) {
      console.error("There has been a problem updating the profile", error);
    }
  };

  const fields = [
    {
      name: "username",
      type: "text",
      label: "Name",
      validation: { required: true, minLength: 4 },
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      validation: { required: true },
    },
    {
      name: "weight",
      type: "number",
      label: "Weight (Kg)",
      validation: { required: true, min: 0 },
    },
    {
      name: "sexe",
      type: "select",
      label: "Sexe",
      validation: { required: true },
      options: ["Man", "Woman"],
    },
  ];
  if (loading && !user) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <Fade className="md:mt-4 mt-12 mx-2 md:mx-0 min-h-screen flex items-center justify-center ">
        <div className="shadow-lg ring-0 bg-svg-backgrounda ring-gray-400  w-full max-w-2xl rounded-lg border  bg-white text-gray-900 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-6">
              <div className="text-2xl font-semibold mb-3">
                <div className="flex flex-row justify-center items-center">
                  <h1 className="text-2xl font-bold md:text-3xl mr-2">My</h1>
                  <blockquote className="md:text-3xl text-2xl font-bold text-center pr-2 text-slate-900">
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#FBB915] relative inline-block">
                      <span className="relative text-white"> Profile</span>
                    </span>
                  </blockquote>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-16">
                {fields.map((field: any, i) => (
                  <div key={i} className="">
                    <label
                      htmlFor={field.name}
                      className="text-sm font-medium leading-none"
                    >
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        id={field.name}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#fbd815] focus:border-transparent appearance-none "
                        {...register(field.name, field.validation)}
                      >
                        {
                          //@ts-ignore
                          field.options.map((option) => (
                            <option
                              key={option}
                              value={option}
                              selected={option == user?.sexe}
                            >
                              {option}
                            </option>
                          ))
                        }
                      </select>
                    ) : (
                      <input
                        id={field.name}
                        type={field.type}
                        className="mt-1 flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#fbd815] focus:border-transparent"
                        {...register(field.name, field.validation)}
                      />
                    )}

                    {errors[field.name] &&
                      errors[field.name]?.type === "required" && (
                        <p className="text-red-500 text-sm m-1">
                          This field is required.
                        </p>
                      )}
                    {errors[field.name] &&
                      errors[field.name]?.type === "minLength" && (
                        <p className="text-red-500 text-sm m-1">
                          Minimum length of 4 characters.
                        </p>
                      )}
                    {errors[field.name] &&
                      errors[field.name]?.type === "min" && (
                        <p className="text-red-500 text-sm m-1">
                          Weight must be positive.
                        </p>
                      )}
                  </div>
                ))}{" "}
              </div>
            </div>
            <Fade className="p-6 flex items-center justify-end">
              {/* <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 h-10 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Save Changes
              </button> */}
              <SaveChangesBtn></SaveChangesBtn>
            </Fade>
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default Profile;
