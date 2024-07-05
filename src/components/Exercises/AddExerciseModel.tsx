import axios from "axios";
import { useForm } from "react-hook-form";
import Inputfield from "../Auth/Inputfield";
import { IoIosAddCircle } from "react-icons/io";
import { useState } from "react";
import CloudinaryUploadWidget from "../../providers/CloudinaryUploadWidget";
interface AddExerciseModelProps {
  onAddExercise: (newExercise: any) => void;
}
function AddExerciseModel({ onAddExercise }: AddExerciseModelProps) {
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("site"),
    },
  };
  const [loading, setLoading] = useState(false);

  const [urlImage, setUrlImage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      name: "",
      description: "",
      photos: [""],
      video: "",
    },
  });

  const AddExerciseAction = async (data: any) => {
    if (!data.name || !data.description || !data.video || !urlImage) {
      console.error("Missing required fields");
      return;
    }

    const datas = { ...data, photos: [urlImage], videos: [data.video] };
    console.log(datas);
    try {
      setLoading(true);
      const response = await axios
        .post("http://127.0.0.1:8090/exercise/addexercise", datas, config)
        .finally(() => setLoading(false));
      const newExercise = response.data;
      onAddExercise(newExercise);
      data.name = "";
      data.description = "";
      data.videos = [""];
      console.log("done");
    } catch (error) {
      console.error(
        "There has been a problem with your add exercise operation:",
        error
      );
    }
  };
  const onsubmit = (data: any) => {
    AddExerciseAction(data).then(() => {
      setUrlImage("");
    });
  };

  const fields: string[] = ["name", "description", "video"];
  if (loading) return <div>Loading</div>;
  return (
    <div className="modal inset-0 bg-black bg-opacity-90  z-60" role="dialog">
      <div className="modal-box bg-white">
        <h3 className="text-lg font-bold">Add a new Exercise!</h3>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onsubmit)}
          >
            {fields.map((Element: any, i: number) => (
              <>
                <div key={i} className="text-black">
                  <Inputfield name={Element} />
                  <div className="mt-2 ">
                    <input
                      {...register(Element, { required: true, minLength: 4 })}
                      placeholder={Element}
                      type={Element}
                      className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#efd74e] sm:text-sm sm:leading-6"
                    ></input>

                    {errors[Element] &&
                      errors[Element]?.type === "required" && (
                        <p className="text-red-500 text-sm mt-1">
                          This field is required.
                        </p>
                      )}
                    {errors[Element] &&
                      errors[Element]?.type === "minLength" && (
                        <p className="text-red-500 text-sm mt-1">
                          Minimum length of 4 characters.
                        </p>
                      )}
                  </div>
                </div>
              </>
            ))}
            {urlImage ? (
              <img src={urlImage} />
            ) : (
              <CloudinaryUploadWidget setUrlImage={setUrlImage} />
            )}

            <div className="modal-action">
              <label htmlFor="my_modal_7">
                <button
                  type="submit"
                  className=" btn justify-center rounded-md bg-[#FBB915] py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#fbd815]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efd74e]"
                >
                  Add exercise <IoIosAddCircle></IoIosAddCircle>
                </button>
              </label>
            </div>
          </form>
        </div>
      </div>
      <label className="modal-backdrop" htmlFor="my_modal_7">
        Close
      </label>
    </div>
  );
}

export default AddExerciseModel;
