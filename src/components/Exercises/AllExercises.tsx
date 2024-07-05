import { useEffect, useState } from "react";
import ExercisesCard from "./ExercisesCard";
import axios from "axios";
import AddExercise from "./AddExercise";
import WatchVideoModel from "../Models/WatchVideoModel";
import { Fade, Zoom } from "react-awesome-reveal";

function AllExercises() {
  const [exercises, setExercises] = useState<any>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchExercises();
  }, []);
  const fetchExercises = async () => {
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
  const handleAddExercise = (newExercise: any) => {
    setExercises((prevExercises: any) => [...prevExercises, newExercise]);
  };
  if (loading && !exercises) return <div>Loading</div>;

  return (
    <>
      <div className="w-full mx-auto  py-8 md:py-12">
        <div>
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <blockquote className="md:text-3xl text-2xl font-bold text-center text-slate-900">
              All
              <span className="before:block ml-2 gradiant before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#FBB915] relative inline-block">
                <span className="relative text-white"> Exercises</span>
              </span>
            </blockquote>
            <AddExercise onAddExercise={handleAddExercise}></AddExercise>
          </div>
        </div>

        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {exercises?.map((element: any) => (
            <Zoom>
              <ExercisesCard
                program={null}
                programexercise={null}
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
            </Zoom>
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
