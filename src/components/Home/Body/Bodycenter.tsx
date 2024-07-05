import home from "../../../assets/home.jpg";
import Bodycenterelem from "./Bodycenterelem";
import healthicon from "../../../assets/healthcare.png";
import protection from "../../../assets/protection.png";
import flexibility from "../../../assets/flexibility.png";
import muscle from "../../../assets/muscle.png";
import { Bounce, Fade, Hinge, JackInTheBox, Slide } from "react-awesome-reveal";
const features: any = [
  {
    name: "Health",
    subname: "Accessibility",
    info: "lorem",
    icon: healthicon,
  },
  {
    name: "Fitness",
    subname: "Cardio",
    info: "some info",
    icon: protection,
  },
  {
    name: "Muscles",
    subname: "Bones",
    info: "some info",
    icon: muscle,
  },
  {
    name: "Flexibility",
    subname: "Mobility",
    info: "some info",
    icon: flexibility,
  },
];
function Bodycenter() {
  return (
    <div className="relative">
      <Fade>
        <img
          className="opacity-100 blur-sm md:h-auto h-screen  polygon"
          src={home}
        ></img>
      </Fade>
      <div className="z-9 text-white absolute  top-0  text-center  mt-10 w-full tracking-[.3em] ">
        <div className="flex flex-col items-center justify-center">
          <JackInTheBox className="font-bold text-3xl textgradiant">
            WHY US?
          </JackInTheBox>
          <div className="font-medium text-xl  tracking-[.1em] ">
            COMMUNITY OF HEALTHY PEOPLE COMMITED TO FITNESS
          </div>
          <div className="gradiant w-1/6 h-1 rounded-full my-4 "></div>
          <div className="grid grid-cols-1  mx-auto lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-y-2 gap-x-4">
            {" "}
            <Bounce cascade duration={400}>
              {" "}
              {features.map((element: any) => (
                <Bodycenterelem
                  key={element.name}
                  name={element.name}
                  subname={element.subname}
                  info={element.info}
                  icon={element.icon}
                ></Bodycenterelem>
              ))}
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bodycenter;
