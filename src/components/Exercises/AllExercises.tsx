import { useEffect, useState } from "react";
import ExercisesCard from "./ExercisesCard";
import axios from "axios";
import AddExercise from "./AddExercise";
import WatchVideoModel from "../Models/WatchVideoModel";

function AllExercises() {
  const [exercises, setExercises] = useState<any>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    gettoken();
  }, []);
  const gettoken = async () => {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("site"),
      },
    };

    try {
      setLoading(true);
      await axios
        .get("http://127.0.0.1:8090/exercise", config)
        .then((res) => {
          //@ts-ignore
          setExercises(res.data);

          console.log(res.data);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.error(
        "There has been a problem with getthing the exercises",
        error
      );
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideos, setModalVideos] = useState<string[]>([]);

  const openModal = (videos: any) => {
    setModalVideos(videos);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalVideos([]);
    setIsModalOpen(false);
  };

  const handleDelete = (id: any) => {
    setExercises((prevExercises: any) =>
      prevExercises.filter((exercise: any) => exercise.id !== id)
    );
  };
  if (loading && !exercises) return <div>Loading</div>;

  return (
    <>
      <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h1 className="text-2xl font-bold md:text-3xl">All Exercises</h1>
          <AddExercise></AddExercise>
        </div>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {exercises?.map((element: any) => (
            <ExercisesCard
              id={element?.id}
              key={element?.name}
              name={element?.name}
              description={element?.description}
              photos={element?.photos}
              videos={element?.videos}
              date=""
              openModal={openModal}
              onDelete={handleDelete}
            ></ExercisesCard>
          ))}
        </div>
        {isModalOpen && (
          <WatchVideoModel videos={modalVideos} onClose={closeModal} />
        )}
      </div>
    </>
  );
}

export default AllExercises;
