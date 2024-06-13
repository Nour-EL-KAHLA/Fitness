import landingpage from "../../../assets/landingpage.png";

function Header() {
  return (
    <div className="relative">
      <img className="opacity-100 h-full polygon" src={landingpage}></img>
      <div className="z-9 text-white absolute  top-1/4  text-center  mt-10 w-full tracking-[.8em] ">
        <div className="font-bold text-5xl">TOGETHER WE CLIMB</div>
        <div className="font-extrabold text-8xl">TOGETHER WE RISE</div>
        <div className="font-semibold text-3xl">
          <span className="text-[#FBB915]">GET READY FOR </span>THE BEST
          PERSONNLISED TRAINING PROGRAMS MADE JUST FOR YOU
        </div>
        <div>WHAT ARE YOU WATING FOR</div>
      </div>
    </div>
  );
}

export default Header;
