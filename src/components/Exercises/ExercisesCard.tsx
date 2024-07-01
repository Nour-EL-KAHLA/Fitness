interface elem {
  name: string;
  description: string;
  photos: string[];
  date: string;
}
function ExercisesCard({ name, description, photos, date }: elem) {
  return (
    <div className="w-72  bg-white shadow-lg ring-2 ring-gray-300 ring-offset-2 ring-offset-white rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
      <div className="p-6">
        {photos ? (
          <img
            src={photos[0]}
            alt={name}
            className="rounded-md mb-4 object-cover w-full"
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
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="flex items-center p-6">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
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
      </div>
    </div>
  );
}

export default ExercisesCard;
