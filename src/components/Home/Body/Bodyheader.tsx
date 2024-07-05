import { Bounce, Zoom } from "react-awesome-reveal";

function Bodyheader() {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-4 mb-8 tracking-[.3em]">
      <Bounce className="font-bold lg:text-4xl md:text-2xl text-xl my-4 textgradiant">
        REACH NEW HIGHTS
      </Bounce>
      <div className="font-semibold md:text-xl text-sm md:tracking-[.3em] tracking-[.1em]">
        EXPERIENCE THE BEST PERSONNALISED EXERCICES
      </div>
      <div className="gradiant w-1/6 h-1 rounded-full my-4"></div>
      <Zoom className="w-3/4 text-center md:text-xl text-sm text-wrap text-gray-800 md:tracking-[.3em] tracking-[.1em]">
        Our roster includes certified professionals and industry experts with
        years of experience in their respective fields. From fitness trainers to
        life coaches, we have the expertise to guide you every step of the way.
        Our coaches are not only knowledgeable but also passionate about helping
        you achieve your best self.
      </Zoom>
    </div>
  );
}

export default Bodyheader;
