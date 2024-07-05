import { Fade, Zoom } from "react-awesome-reveal";
import landingpage from "../../../assets/landingpage.png";

function Header() {
  return (
    <div className="relative">
      <img className="opacity-100 polygon max-w-full" src={landingpage}></img>
      <div className="z-9 text-white absolute top-1/4  text-center  mt-10 w-full lg:tracking-[.8em] md:tracking-[.4em] tracking-normal">
        <Fade className="font-bold lg:text-5xl md:text-3xl text-xl">
          TOGETHER WE CLIMB
        </Fade>
        <Zoom className="font-extrabold lg:text-8xl md:text-5xl text-2xl">
          TOGETHER WE RISE
        </Zoom>
        <Zoom>
          {" "}
          <div className="font-semibold lg:text-3xl md:text-xl text-base ">
            <span className="textgradiant ">GET READY FOR </span>THE BEST
            PERSONNLISED TRAINING PROGRAMS
          </div>
        </Zoom>

        <Zoom>WHAT ARE YOU WATING FOR</Zoom>
      </div>
    </div>
  );
}

export default Header;
