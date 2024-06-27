interface elem {
  name: string;
  description: string;
  photos: string[];
}
function ExercisesCard({ name, description, photos }: elem) {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <figure>
        {photos ? (
          <img
            src={photos[0]}
            alt={name}
            className="h-80 w-72 object-cover rounded-t-xl"
          />
        ) : (
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="name"
          />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">learn More</button>
        </div>
      </div>
    </div>
  );
}

export default ExercisesCard;
