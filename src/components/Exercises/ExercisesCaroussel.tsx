import ExercisesCard from "./ExercisesCard";
import { compareAsc } from "date-fns";
interface elem {
  programExercises: any;
  username: string;
  programs: any;
}

function ExercisesCaroussel({ programExercises }: elem) {
  return (
    <>
      <div className="p-4 flex items-center justify-start  carousel rounded-box md:mb-8 mx-4 mt-4">
        {programExercises
          ?.sort((a: any, b: any) => {
            return compareAsc(a.dayOfWeek, b.dayOfWeek);
          })
          .map((element: any) => (
            <>
              <div className="carousel-item gap gap-4 m-4 mx-4 ">
                <ExercisesCard
                  key={element?.exercise.name}
                  name={element?.exercise.name}
                  description={element?.exercise.description}
                  photos={element?.exercise.photos}
                  date={element?.dayOfWeek}
                ></ExercisesCard>
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export default ExercisesCaroussel;
