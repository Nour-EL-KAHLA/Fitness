import ReactPlayer from "react-player/youtube";
interface element {
  videos: string[];
  onClose: () => void;
}

function WatchVideoModel({ videos, onClose }: element) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        <div className=" bg-[#ffffffd1] max-w-6xl w-auto h-auto p-4 overflow-auto  rounded-md">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Video :</h2>

            <button onClick={onClose} className="btn btn-sm btn-circle">
              ✕
            </button>
          </div>
          <div className="mt-4">
            {videos && <ReactPlayer url={videos[0]} controls />}
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchVideoModel;
