import axios from "axios";
import logo from "../../assets/gymwhite.png";
import Inputfield from "./Inputfield";
import { useForm } from "react-hook-form";

const onSubmit = (data: any) => {
  console.log(data);
  axios.post("/auth/signin", data);
};
const fields: string[] = ["email", "password", "username"];
function Signin() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });
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
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          action="#"
          method="POST"
        >
          {/* {fields.map((Element: string) => (
            <Inputfield  key={Element} name={Element}></Inputfield>
          ))} */}
          {fields.map((Element: any) => (
            <>
              {" "}
              <Inputfield key={Element} name={Element}></Inputfield>
              <div className="mt-2">
                <input
                  {...register(Element, { minLength: 2 })}
                  placeholder={Element}
                  type={Element}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#efd74e] sm:text-sm sm:leading-6"
                ></input>
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
