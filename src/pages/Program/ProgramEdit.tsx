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
      <div className="pt-28"></div>

      {
        <ExercisesCaroussel
          programExercises={user.program.programExercises}
          username={user.username}
          programs={programs}
        ></ExercisesCaroussel>
      }
      <Schedule programs={programs}></Schedule>
    </>
  );
};

export default ProgramEdit;
