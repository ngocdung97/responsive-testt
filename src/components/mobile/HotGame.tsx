import { Carousel } from "antd";
import React from "react";
import { games, menuItems } from "../../data/data";
import DropdownComponent from "../DropDown";

const HotGameMobile: React.FC = () => {
  return (
    <div className="w-full p-5">
      <div className="flex justify-between items-center  mb-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">HOT GAME</h2>
        <DropdownComponent height={28} items={menuItems}>
          Release Date
        </DropdownComponent>
      </div>

      {/* Game cards */}
      <div className="game-card  p-3 z-10">
        <Carousel autoplay draggable>
          {games.map((game, index) => (
            <div key={index} className={`rounded-2xl overflow-hidden`}>
              <div
                className="rounded-2xl text-white overflow-hidden"
                style={{ backgroundColor: game.color }}
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-[180px] object-fill"
                />
                <div className="p-4 w-full flex flex-col justify-start items-center gap-y-6 gap-x-4">
                  <div className="flex justify-start gap-x-4 items-center">
                    <img
                      src={game.thumbnail}
                      alt={game.name}
                      className="w-[60px] h-[60px] object-fill"
                    />
                    <div className="flex flex-col w-full max-h-[60px] justify-between items-start ">
                      <div className="font-medium text-base opacity-90">
                        {game.name}
                      </div>
                      <p className="text-xs opacity-50 line-clamp-2">
                        {game.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between w-full mb-3 items-center">
                    <div>
                      <div className="text-base opacity-85">MEDIUM</div>
                      <p className="text-xs opacity-50 line-clamp-2 ">
                        Volatility
                      </p>
                    </div>
                    <div>
                      <div className="text-base opacity-85">95.01%</div>
                      <p className="text-xs opacity-50 line-clamp-2 ">RTP</p>
                    </div>
                    <div>
                      <div className="text-base opacity-85">x5000</div>
                      <p className="text-xs opacity-50 line-clamp-2 ">
                        Maxium Win
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HotGameMobile;
