import React from "react";
import { MdOutlineDoneOutline } from "react-icons/md";
interface exerciseId {
  id: any;
}
function DoneBtn({ id }: exerciseId) {
  return (
    <button
      type="submit"
      className="btn justify-center rounded-xl bg-[#04f163] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#14f104] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efd74e]"
    >
      <MdOutlineDoneOutline /> Done
    </button>
  );
}

export default DoneBtn;
