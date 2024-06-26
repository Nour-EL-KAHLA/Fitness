import { Outlet } from "react-router-dom";

function Authlayout() {
  return (
    <div className="h-screen bg-[#040404]">
      <div className="h-full">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <Outlet />{" "}
        </div>
      </div>
    </div>
  );
}

export default Authlayout;
