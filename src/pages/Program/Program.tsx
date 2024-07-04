import Navbar from "../../components/Navbar/Navbar";

import { useAuth } from "../../providers/AuthProvider";
import ExercisesCaroussel from "../../components/Exercises/ExercisesCaroussel";
import Schedule from "../../components/Models/Schedule";

function Program() {
  const { user, loading } = useAuth();

  if (loading && !user) return <div>loading</div>;

  if (!user.program)
    return (
      <div className="mt-28">
        {" "}
        You are not assigned to a coach yet, please wait until we match you with
        one of the best coaches
      </div>
    );
  const programs = user.program.programExercises.map((ex: any) => {
    return {
      id: ex.id,
      name: ex.exercise.name,
      startDatetime: ex.dayOfWeek,
      endDatetime: ex.dayOfWeek,
      description: ex.exercise.description,
      imageUrl: ex.exercise.photos[0],
    };
  });

  return (
    <>
      <Navbar></Navbar>
      <div className="pt-16 "></div>
      <div className="py-8 lg:mx-28  mx-8 md:py-12">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h1 className="text-2xl font-bold md:text-3xl">My Program </h1>

          <>
            {/* The button to open modal */}
            <label
              htmlFor="my_modal_6"
              className="inline-flex  items-center  btn justify-center rounded-xl bg-[#FBB915]  py-1.5 text-sm font-semibold leading-6 text-white  hover:bg-[#fbd815]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efd74e] shadow-lg ring-0 ring-[#efd74e]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mx-1"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                stroke="currentColor"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </label>

            <input type="checkbox" id="my_modal_6" className="modal-toggle " />
            <Schedule programs={programs}></Schedule>
          </>
        </div>
        {
          <ExercisesCaroussel
            programExercises={user.program.programExercises}
            username={user.username}
            programs={programs}
            program={user?.program.id}
          ></ExercisesCaroussel>
        }
      </div>
    </>
  );
}

export default Program;
