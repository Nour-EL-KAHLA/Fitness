import { useForm } from "react-hook-form";
import logo from "../../assets/gymwhite.png";
import Inputfield from "./Inputfield";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
function Signup() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const signUpAction = async (data: any) => {
    try {
      await axios.post("http://127.0.0.1:8090/auth/signup", data).then(() => {
        axios.post("http://127.0.0.1:8090/auth/signin", data).then((res) => {
          localStorage.setItem("site", res.data.accessToken);
          setUser(res.data);

          navigate("/");
        });
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
        <img className="mx-auto h-10 w-auto" src={logo} alt="Gym" />
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
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
