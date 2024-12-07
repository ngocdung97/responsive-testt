import React, { useState } from "react";
import { categorys } from "../../data/data";
import { CategoryItem } from "../CategoryItem";

const HottestCategory: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < categorys.length - 2) {
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
          Hottest Category
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
            className={`${
              currentIndex >= categorys.length - 2 && "opacity-20"
            }`}
            disabled={currentIndex >= categorys.length - 2}
          >
            <img src="/images/icon/arrow-right.svg" alt="arrow-right" />
          </button>
        </div>
      </div>

      {/* Game cards */}
      <div className="relative">
        {/* List of games */}
        <div className="flex gap-x-6">
          {categorys.slice(currentIndex, currentIndex + 2).map((category) => (
            <CategoryItem category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HottestCategory;
