interface elem {
  name: string;
  subname: string;
  info: string;
  icon: any;
}
function Bodycenterelem({ name, subname, info, icon }: elem) {
  return (
    <div className="bg-black backdrop-blur-sm  bg-black/70 w-72 m-8 tracking-[.1em] text-left p-2 flex flex-row">
      <img src={icon} className="w-12 h-12 mx-2"></img>
      <div className="flex flex-col">
        <div className="text-lg font-bold">
          {name}&<span className="text-[#FBB915] ">{subname}</span>
        </div>
        <div className="text-sm ">
          {info} Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          provident saepe quis,
        </div>
      </div>
    </div>
  );
}

export default Bodycenterelem;
