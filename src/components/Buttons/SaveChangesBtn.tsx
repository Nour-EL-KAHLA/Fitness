import React from "react";
import { VscSaveAs } from "react-icons/vsc";
function SaveChangesBtn() {
  return (
    <button
      type="submit"
      className="gradiant w-fit h-fit p-1 gap gap-2 rounded-md px-4 flex flex-row 
justify-center items-center hover:bg-[#fbd815] transition duration-150 ease-in-out shadow-lg shadow-[#fbd815]/30 font-semibold"
    >
      Save Changes
    </button>
  );
}

export default SaveChangesBtn;
