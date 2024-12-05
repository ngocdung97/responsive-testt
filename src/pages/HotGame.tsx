import React, { useState } from "react";

const HotGame: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Games Home");
  const games = [
    {
      id: 1,
      name: "Mahjong Ways",
      image: "/images/mahjong.png",
      description: "A relaxing and strategic game.",
    },
    {
      id: 2,
      name: "Wild Bandito",
      image: "/images/wild-bandito.png",
      description: "Action-packed adventure!",
    },
  ];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="container mx-auto py-8">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
        Hot Game
      </h3>

      {/* Search bar */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search games..."
          className="w-full md:w-[60%] border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-500"
        />
      </div>

      {/* Tabs */}
      <div className="flex justify-start space-x-4 mb-6 border-b border-gray-200">
        {["Games Home", "Timeline", "All Games"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-4 py-2 text-sm md:text-base font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Game cards */}
      <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8">
        {games.map((game) => (
          <div
            key={game.id}
            className="w-full md:w-[45%] lg:w-[30%] bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="font-bold text-lg">{game.name}</h4>
              <p className="text-sm text-gray-500 mt-2">{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotGame;
