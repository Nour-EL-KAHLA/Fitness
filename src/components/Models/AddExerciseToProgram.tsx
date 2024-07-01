import axios from "axios";
import { useForm } from "react-hook-form";
import Inputfield from "../Auth/Inputfield";
import { useEffect, useState } from "react";
import Exercises from "../../pages/Exercises/Exercises";
interface exercisetoprogram {
  program: any;
}
function AddExerciseToProgram({ program }: exercisetoprogram) {
  const [exercises, setExercises] = useState<any>();
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("site"),
    },
  };
  useEffect(() => {
    getALLExercise();
  }, []);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Exercise: "",
      Date: "",
    },
  });

  const getALLExercise = async () => {
    try {
      setLoading(true);
      await axios
        .get(`http://127.0.0.1:8090/exercise`, config)
        .then((res) => {
          //@ts-ignore
          setExercises(res.data);

          console.log(res.data);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.error(
        "There has been a problem with your getting exercises",
        error
      );
    }
  };
  const AddExerciseAction = async (data: any) => {
    if (!data.Exercise || !data.Date) {
      console.error("Missing required fields");
      return;
    }

    try {
      setLoading(true);
      console.log(data.Exercise);
      await axios
        .post(
          `http://127.0.0.1:8090/program/${program.id}/exercises/${data.Exercise}/dayOfWeek?${data.Date}`,

          config
        )
        .then(() => {
          console.log("done");
        })
        .finally(() => setLoading(false))
        .catch((error) => {
          console.error("Adding error:", error);
        });
    } catch (error) {
      console.error(
        "There has been a problem with your add exercise operation:",
        error
      );
    }
  };
  const onsubmit = (data: any) => {
    AddExerciseAction(data);
  };

  if (loading) return <div>Loading</div>;
  return (
    <div className="modal bg-white" role="dialog">
      <div className="modal-box bg-white">
        <h3 className="text-lg font-bold">Add an exercise!</h3>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onsubmit)}
          >
            <>
              <div className="text-black">
                <label
                  htmlFor="Exercise"
                  className="text-sm font-medium leading-none"
                >
                  Exercise
                </label>
                <select
                  id="Exercise"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#fbd815] focus:border-transparent appearance-none "
                  {...register("Exercise")}
                >
                  {
                    //@ts-ignore
                    exercises?.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))
                  }
                </select>
                <label
                  htmlFor="Date"
                  className="text-sm font-medium leading-none"
                >
                  Date
                </label>
                <input
                  id="Date"
                  type="Date"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#fbd815] focus:border-transparent appearance-none "
                  {...register("Date")}
                />
              </div>
            </>

            <div className="modal-action">
              <label htmlFor="my_modal_7">
                <button
                  type="submit"
                  className="mb-8 flex w-full justify-center mt-12 rounded-md bg-[#FBB915] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#fbd815]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efd74e]"
                >
                  Add
                </button>
              </label>
            </div>
          </form>
        </div>
      </div>
      <label className="modal-backdrop" htmlFor="my_modal_5">
        Close
      </label>
    </div>
  );
}

export default AddExerciseToProgram;
