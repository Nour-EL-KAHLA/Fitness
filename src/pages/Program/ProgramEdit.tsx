import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

import ExercisesCaroussel from "../../components/Exercises/ExercisesCaroussel";
import Schedule from "../../components/Models/Schedule";
import AddExerciseToProgram from "../../components/Models/AddExerciseToProgram";
import { useAuth } from "../../providers/AuthProvider";

const ProgramEdit: React.FC = () => {
  //@ts-ignore
  const location = useLocation<{ state: { user: any } }>();
  const { user } = location.state;
  console.log(user);
  const [programExercises, setProgramExercises] = useState(
    user.program.programExercises
  );

  useEffect(() => {
    setProgramExercises(user.program.programExercises);
  }, [user]);

  const handleAddExercise = (newExercise: any) => {
    setProgramExercises((prevExercises: any) => [
      ...prevExercises,
      newExercise,
    ]);
  };
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
      <div className="pt-16 lg:mx-28  mx-8"></div>
      <div className=" py-8 lg:mx-28 mx-8 md:py-12">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h1 className="text-2xl font-bold md:text-3xl">
            {user.username} <span className="text-[#fbd815]"> Program</span>{" "}
          </h1>

          <>
            <div>
              {" "}
              <label
                htmlFor="my_modal_6"
                className="inline-flex items-center  btn justify-center rounded-xl  bg-[#FBB915]  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#fbd815]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efd74e]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w- h-3  
                  "
                  viewBox="0 0 24 24"
                  strokeWidth="3"
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
              <input
                type="checkbox"
                id="my_modal_6"
                className="modal-toggle "
              />
              <Schedule programs={programs}></Schedule>
              <label
                htmlFor="my_modal_5"
                className="inline-flex items-center  btn justify-center rounded-xl bg-[#FBB915]  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#fbd815]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efd74e]"
              >
                Add Exercise
              </label>
              <input
                type="checkbox"
                id="my_modal_5"
                className="modal-toggle "
              />
              <AddExerciseToProgram
                onAddExercise={handleAddExercise}
                program={user?.program}
              ></AddExerciseToProgram>
            </div>
            {/* The button to open modal */}
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
};

export default ProgramEdit;
