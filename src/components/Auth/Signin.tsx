import logo from "../../assets/gymwhite.png";
import Inputfield from "./Inputfield";
const fields: string[] = ["email", "password"];
function Signin() {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={logo} alt="Gym" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          {fields.map((Element: string) => (
            <Inputfield key={Element} name={Element}></Inputfield>
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
