import { useState } from "react";
import ExercisesCard from "./ExercisesCard";
import { compareAsc } from "date-fns";
import WatchVideoModel from "../Models/WatchVideoModel";
import { Bounce, Fade, Slide, Zoom } from "react-awesome-reveal";
interface elem {
  programExercises: any;
  username: string;
  programs: any;
  program: any;
 
}

function ExercisesCaroussel({
  programExercises,
  program,

}: elem) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideos, setModalVideos] = useState<string[]>([]);
  const [programexercises, setprogramexercises] =
    useState<any>(programExercises);
  const openModal = (videos: string[]) => {
    setModalVideos(videos);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalVideos([]);
    setIsModalOpen(false);
  };
  const handleDelete = (id: any) => {
    setprogramexercises((prevExercises: any) =>
      prevExercises.filter((program: any) => program.id !== id)
    );
  };

  return (
    <>
      <div className="py-4 flex items-center justify-start px-0 mx-0 carousel rounded-box md:mb-8 mt-4">
        {programexercises
          ?.sort((a: any, b: any) => {
            return compareAsc(a.dayOfWeek, b.dayOfWeek);
          })
          .map((element: any) => (
            <>
              <Zoom className="carousel-item gap gap-4 m-4 mx-4 ">
                <ExercisesCard
                  program={program}
                  programexercise={element?.id}
                  id={element?.exercise.id}
                  key={element?.id}
                  name={element?.exercise.name}
                  description={element?.exercise.description}
                  photos={element?.exercise.photos}
                  date={element?.dayOfWeek}
                  videos={element?.exercise.videos}
                  openModal={openModal}
                  onDelete={handleDelete}
                ></ExercisesCard>
              </Zoom>
            </>
          ))}
      </div>
      {isModalOpen && (
        <WatchVideoModel videos={modalVideos} onClose={closeModal} />
      )}
    </>
  );
}

export default ExercisesCaroussel;
