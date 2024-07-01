import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

import ExercisesCaroussel from "../../components/Exercises/ExercisesCaroussel";
import Schedule from "../../components/Models/Schedule";

const ProgramEdit: React.FC = () => {
  //@ts-ignore
  const location = useLocation<{ state: { user: any } }>();
  const { user } = location.state;
  console.log(user);

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
  console.log(programs);
  return (
    <>
      <Navbar></Navbar>
      <div className="pt-16"></div>
      <div className="w-full  max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h1 className="text-2xl font-bold md:text-3xl">
            {user.username} <span className="text-[#fbd815]"> Program</span>{" "}
          </h1>

          <>
            {/* The button to open modal */}
            <label
              htmlFor="my_modal_6"
              className="inline-flex items-center  btn justify-center rounded-xl bg-[#FBB915]  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#fbd815]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efd74e]"
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
          ></ExercisesCaroussel>
        }
      </div>
    </>
  );
};

export default ProgramEdit;
