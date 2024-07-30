const BreedCard = ({ breed, onClick }) => {
  return (
    <div
      className="flex flex-col sm:flex-row justify-between gap-4 items-center cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
      onClick={() => onClick(breed.id)}
    >
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-48 border-2 border-black rounded-xl bg-gray-300">
        <img
          src={breed.image?.url || "https://placehold.co/370x370"}
          className="w-full h-full object-cover rounded-xl"
          alt={breed.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/200x200";
          }}
        />
      </div>
      <div className="flex flex-col gap-4 w-full sm:w-2/3">
        <div className="flex gap-2 items-center">
          <h3 className="font-semibold text-3xl">{breed.name}</h3>
        </div>
        <p>{breed.description}</p>
      </div>
    </div>
  );
};

export default BreedCard;
