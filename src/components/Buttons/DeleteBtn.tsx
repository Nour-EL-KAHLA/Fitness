import axios from "axios";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

interface exerciseId {
  id: any;
  onDelete: (id: any) => void;
  program: any;
  programexercise: any;
}
function DeleteBtn({ id, onDelete, program, programexercise }: exerciseId) {
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("site"),
    },
  };
  const [loading, setLoading] = useState(false);

  const DeleteExerciseAction = async () => {
    console.log(id);

    try {
      setLoading(true);
      if (programexercise) {
        await axios
          .delete(
            `http://127.0.0.1:8090/program/${program}/exercises/${programexercise}`,
            config
          )
          .then(() => {
            console.log("deleted");
            onDelete(programexercise);
          })
          .finally(() => setLoading(false))
          .catch((error) => {
            console.error("Deleting error:", error);
          });
      } else {
        await axios
          .delete("http://127.0.0.1:8090/exercise/" + id, config)
          .then(() => {
            console.log("deleted");
            onDelete(id);
          })
          .finally(() => setLoading(false))
          .catch((error) => {
            console.error("Deleting error:", error);
          });
      }
    } catch (error) {
      console.error(
        "There has been a problem with your delete exercise operation:",
        error
      );
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={DeleteExerciseAction}
        disabled={loading}
        className="text-3xl text-red-600 hover:text-red-700 w-fit h-fit p-1 gap gap-2 rounded-md flex flex-row justify-center items-center transition duration-150 ease-in-out"
      >
        <MdDelete />
      </button>
    </>
  );
}

export default DeleteBtn;
