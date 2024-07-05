import { useState } from "react";
import WatchVideoModel from "../Models/WatchVideoModel";
import ExerciseManagement from "./ExerciseManagement";
import { Bounce } from "react-awesome-reveal";

interface elem {
  program: any;
  programexercise: any;
  id: any;
  name: string;
  description: string;
  photos: string[];
  date: string;
  videos: string[];
  openModal: (videos: string[]) => void;
  onDelete: (id: any) => void;
}

function ExercisesCard({
  id,
  program,
  programexercise,
  name,
  description,
  photos,
  date,
  videos,
  openModal,
  onDelete,
}: elem) {
  return (
    <div className="w-72 bg-svg-backgrounda shadow-lg h-[28rem] ring-0 ring-gray-300 ring-offset-2 ring-offset-white rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
      <div
        className="flex  flex-col space-y-1.5 px-4 py-2 pt-4
      "
      >
        <h3 className="whitespace-nowrap text-xl font-semibold text-nowrap leading-none tracking-tight">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
      <div className="moving-borderpy-4 px-4">
        {photos ? (
          <img
            src={photos[0]}
            alt={name}
            className="rounded-md mb-2 object-cover w-full"
            style={{ aspectRatio: "400 / 300" }}
            width="400"
            height="300"
          />
        ) : (
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt={name}
            className="rounded-md mb-4 object-cover w-full"
            style={{ aspectRatio: "400 / 300" }}
            width="400"
            height="300"
          />
        )}
        <p className="text-muted-foreground h-20">{description}</p>
      </div>
      <div className="flex items-center justify-between py-4 pt-6 px-4">
        <Bounce>
          <button
            onClick={() => openModal(videos)} // Use openModal to open the modal
            className="btn justify-center rounded-md video hover:bg-[#000000] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efd74e]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              stroke="currentColor"
            >
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
            Watch Video
          </button>
        </Bounce>
        <Bounce>
          <ExerciseManagement
            id={id}
            program={program}
            programexercise={programexercise}
            onDelete={onDelete}
            date={date}
          ></ExerciseManagement>
        </Bounce>
      </div>
    </div>
  );
}

export default ExercisesCard;
