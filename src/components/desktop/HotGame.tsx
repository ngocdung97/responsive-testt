import React, { useState } from "react";

const Games = [
  {
    id: 1,
    name: "Mahjong Ways",
    image: "/images/mahjong.png",
    thumbnail: "/images/mahjong-thumbnail.png",
    description:
      "4TECH™ has just launched their very first Mahjong inspired slot machine game .................",
  },
  {
    id: 2,
    name: "Wild Bandito",
    image: "/images/wild-bandito.png",
    thumbnail: "/images/wild-bandito-thumbnail.png",
    description:
      "Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…",
  },
  {
    id: 3,
    name: "Tree Of Fortune",
    image: "/images/tree.png",
    thumbnail: "/images/tree-thumbnail.png",
    description:
      "4TECH™ has just launched their very first Mahjong inspired slot machine game .................",
  },
  {
    id: 4,
    name: "Wild Bandito 22222",
    image: "/images/wild-bandito.png",
    thumbnail: "/images/wild-bandito-thumbnail.png",
    description:
      "Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…",
  },
];

const HotGame: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    debugger;
    console.log(currentIndex);

    if (currentIndex < Games.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
          Hot Game
        </h2>
        <div className="flex gap-x-4 mr-2">
          <button
            onClick={handlePrevious}
            className={`${currentIndex === 0 && "opacity-20"}`}
            disabled={currentIndex === 0}
          >
            <img src="/images/icon/arrow-left.svg" alt="arrow-left" />
          </button>
          <button
            onClick={handleNext}
            className={`${currentIndex >= Games.length - 2 && "opacity-20"}`}
            disabled={currentIndex >= Games.length - 2}
          >
            <img src="/images/icon/arrow-right.svg" alt="arrow-right" />
          </button>
        </div>
      </div>

      {/* Game cards */}
      <div className="relative">
        {/* List of games */}
        <div className="flex gap-x-4">
          {Games.slice(currentIndex, currentIndex + 2).map((game) => (
            <div
              key={game.id}
              className="hover:scale-105 transition duration-300 ease-in-out md:w-[45%] lg:w-[490px] overflow-hidden"
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-56 object-fill"
              />
              <div className="py-4 w-full flex justify-start items-center gap-x-4">
                <img
                  src={game.thumbnail}
                  alt={game.name}
                  className="w-24 h-24 object-fill"
                />
                <div className="flex w-full h-full justify-between items-center">
                  <div>
                    <h4 className="font-bold text-lg">{game.name}</h4>
                    <p className="text-sm text-gray-500 line-clamp-2 mt-2 h-[2.5rem]">
                      {game.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="py-2 px-5 mb-2 text-sm font-semibold text-black focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotGame;
