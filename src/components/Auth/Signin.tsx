import axios from "axios";
import logo from "../../assets/gymwhite.png";
import Inputfield from "./Inputfield";
import { useForm } from "react-hook-form";
// import useBearStore from "../../state/State";
import { useNavigate } from "react-router-dom";

function Signin() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });
  // const setIsUserValid = useBearStore((state: any) => state.setIsUserValid);
  const navigate = useNavigate();
  // const { setIsUserValid } = useBearStore();
  const onsubmit = async (data: any) => {
    try {
      const response = await axios.post("/auth/signin", data);

      // Assuming the response contains a status or user data indicating successful sign-in
      if (response.status === 200) {
        const token = response.data.accessToken;
        localStorage.setItem("token", token);
        // setIsUserValid(true);
        navigate("/"); // Navigate to the home page
      }
    } catch (error) {
      console.error(
        "There has been a problem with your sign-in operation:",
        error
      );
    }
  };

  const fields: string[] = ["email", "password", "username"];

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={logo} alt="Gym" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="space-y-6"
          action="#"
          method="POST"
        >
          {/* {fields.map((Element: string) => (
            <Inputfield  key={Element} name={Element}></Inputfield>
          ))} */}
          {fields.map((Element: any, i: number) => (
            <>
              <div key={i}>
                <Inputfield name={Element} />
                <div className="mt-2">
                  <input
                    {...register(Element, { minLength: 2 })}
                    placeholder={Element}
                    type={Element}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#efd74e] sm:text-sm sm:leading-6"
                  ></input>
                </div>
              </div>
            </>
          ))}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#FBB915] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#fbd815]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efd74e]"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signin;
