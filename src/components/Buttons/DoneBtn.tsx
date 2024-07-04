import axios from "axios";
import React, { useState } from "react";
import { MdOutlineDoneOutline } from "react-icons/md";
interface exerciseId {
  id: any;
  onDelete: (id: any) => void;
  program: any;
  programexercise: any;
}
function DoneBtn({ id, program, onDelete, programexercise }: exerciseId) {
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
    } catch (error) {
      console.error(
        "There has been a problem with your delete exercise operation:",
        error
      );
    }
  };

  return (
    <button
      type="button"
      onClick={DeleteExerciseAction}
      disabled={loading}
      className="btn justify-center rounded-xl bg-[#04f163] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#14f104] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efd74e]"
    >
      <MdOutlineDoneOutline /> Done
    </button>
  );
}

export default DoneBtn;
