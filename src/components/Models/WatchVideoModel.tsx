interface element {
  videos: string[];
  onClose: () => void;
}

function WatchVideoModel({ videos, onClose }: element) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className=" bg-white max-w-6xl w-full h-5/6 p-4 overflow-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Videos</h2>
            <button onClick={onClose} className="btn btn-sm btn-circle">
              ✕
            </button>
          </div>
          <div className="mt-4">
            {videos ? (
              // videos.map((video, index) => (
              //   <div key={index} className="mb-4">
              //     <video controls className="w-full">
              //       <source src={video} type="video/mp4" />
              //       Your browser does not support the video tag.
              //     </video>
              //   </div>
              // ))
              <div>yesssi</div>
            ) : (
              <p>No videos available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchVideoModel;
