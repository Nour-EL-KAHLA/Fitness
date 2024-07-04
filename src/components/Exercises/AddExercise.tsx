import { IoIosAddCircle } from "react-icons/io";
import AddExerciseModel from "./AddExerciseModel";

function AddExercise({
  onAddExercise,
}: {
  onAddExercise: (newExercise: any) => void;
}) {
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor="my_modal_7"
        className="btn justify-center rounded-xl bg-[#FBB915] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#fbd815]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efd74e]"
      >
        Add Exercise <IoIosAddCircle></IoIosAddCircle>
      </label>

      <input type="checkbox" id="my_modal_7" className="modal-toggle " />
      <AddExerciseModel onAddExercise={onAddExercise}></AddExerciseModel>
    </>
  );
}

export default AddExercise;
