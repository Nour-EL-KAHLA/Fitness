import ExercisesCard from "./ExercisesCard";

interface elem {
  programExercises: any;
}

function ExercisesCaroussel({ programExercises }: elem) {
  return (
    <>
      {console.table(programExercises)}
      <div className="carousel rounded-box mx-4 mt-4">
        <div className="carousel-item">
          {programExercises?.map((element: any) => (
            <ExercisesCard
              key={element?.exercise.name}
              name={element?.exercise.name}
              description={element?.exercise.description}
              photos={element?.exercise.photos}
            ></ExercisesCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default ExercisesCaroussel;
