import { useState } from "react";
import ExercisesCard from "./ExercisesCard";
import { compareAsc } from "date-fns";
import WatchVideoModel from "../Models/WatchVideoModel";
interface elem {
  programExercises: any;
  username: string;
  programs: any;
}

function ExercisesCaroussel({ programExercises }: elem) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideos, setModalVideos] = useState<string[]>([]);

  const openModal = (videos: string[]) => {
    setModalVideos(videos);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalVideos([]);
    setIsModalOpen(false);
  };

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
                  id={element?.id}
                  key={element?.exercise.name}
                  name={element?.exercise.name}
                  description={element?.exercise.description}
                  photos={element?.exercise.photos}
                  date={element?.dayOfWeek}
                  videos={element?.videos}
                  openModal={openModal}
                  onDelete={(id: any) => null}
                ></ExercisesCard>
              </div>
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
