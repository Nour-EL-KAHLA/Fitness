import { useForm } from "react-hook-form";
import logo from "../../assets/kora.png";
import Inputfield from "./Inputfield";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { useState } from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [signupError, setSignupError] = useState<string>("");
  const signUpAction = async (data: any) => {
    if (!data.email || !data.username || !data.password) {
      console.error("Missing required fields");
      return;
    }

    try {
      await axios
        .post("http://127.0.0.1:8090/auth/signup", data)
        .then(() => {
          // Successful sign-up logic
          try {
            axios
              .post("http://127.0.0.1:8090/auth/signin", data)
              .then((res) => {
                localStorage.setItem("site", res.data.accessToken);
                setUser(res.data);
                navigate("/");
              })
              .catch((error) => {
                console.error("Sign-in error:", error);
              });
          } catch (error) {
            console.error(
              "There has been a problem with your sign-in operation:",
              error
            );
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 409) {
            // Handle 409 Conflict (email already exists) scenario
            console.log("Email already exists!");
            setSignupError(
              "Email already exists! Please use a different email."
            );
          }
        });
    } catch (error) {
      console.error(
        "There has been a problem with your sign-up operation:",
        error
      );
    }
  };
  const onsubmit = (data: any) => {
    signUpAction(data);
  };

  const fields: string[] = ["username", "email", "password"];

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Slide>
          {" "}
          <img className="mx-auto h-14 w-auto" src={logo} alt="Gym" />
        </Slide>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign up and create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit(onsubmit)}
        >
          {fields.map((Element: any, i: number) => (
            <>
              <div key={i} className="text-white">
                {" "}
                <Inputfield name={Element} />
                <div className="mt-2">
                  {" "}
                  <input
                    {...register(Element, { required: true, minLength: 4 })}
                    placeholder={Element}
                    type={Element}
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#efd74e] sm:text-sm sm:leading-6"
                  ></input>
                  {errors[Element] && errors[Element]?.type === "required" && (
                    <p className="text-red-500 text-sm mt-1">
                      This field is required.
                    </p>
                  )}
                  {errors[Element] && errors[Element]?.type === "minLength" && (
                    <p className="text-red-500 text-sm mt-1">
                      Minimum length of 2 characters.
                    </p>
                  )}
                </div>
              </div>
            </>
          ))}
          {signupError && (
            <p className="text-red-500 text-sm mt-1">{signupError}</p>
          )}
          <Zoom>
            <button
              type="submit"
              className="mb-8 flex w-full justify-center mt-12 rounded-md gradiant px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#fbd815]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efd74e]"
            >
              Sign up
            </button>
          </Zoom>

          <Link to={"/signin"} className=" text-[#FBB915] font-light text-sm ">
            Already have an accound ? please{" "}
            <span className="font-bold">Signin</span>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signup;
