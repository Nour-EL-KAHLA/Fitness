interface elem {
  name: string;
  subname: string;
  info: string;
  icon: any;
}
function Bodycenterelem({ name, subname, info, icon }: elem) {
  return (
    <div className="bg-black backdrop-blur-sm  bg-black/70 w-72  lg:m-8 tracking-[.1em] text-left p-2 flex flex-row">
      <img src={icon} className="md:w-12 md:h-12 md:mx-2  w-8 h-8 mx-1"></img>
      <div className="flex flex-col">
        <div className="lg:text-lg md:text-base text-sm font-bold">
          {name}&<span className="textgradiant ">{subname}</span>
        </div>
        <div className="lg:text-sm text-xs ">
          {info} Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          provident saepe quis,
        </div>
      </div>
    </div>
  );
}

export default Bodycenterelem;
