export const Name = ({baby, changeFavorite}) => {
  return (
    <div
      onClick={() => changeFavorite(baby.id)}
      className={`cursor-default py-1 px-3 m-1 rounded-xl hover:cursor-pointer font-semibold ${
        baby.gender == "m"
          ? " bg-cyan-400 text-sky-900"
          : "bg-pink-300 text-pink-800"
      }`}
    >
      {baby.name}
    </div>
  );
};


