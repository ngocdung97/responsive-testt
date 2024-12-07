import { Carousel } from "antd";
import React from "react";
import { categorys } from "../../data/data";
import { CategoryItem } from "../CategoryItem";

const HottestCategoryMobile: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-5 mb-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
          HOTTEST CATEGORY
        </h2>
      </div>

      {/* Game cards */}
      <div className="game-card z-10">
        <Carousel autoplaySpeed={4000} draggable>
          {categorys.map((category, index) => (
            <CategoryItem key={index} category={category} isMobile={true} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HottestCategoryMobile;
