import React from "react";
import { categories } from "../data/data";

const Category: React.FC = () => {
  return (
    <section className="container mx-auto py-8">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
        Hottest Category
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`${category.color} text-white p-6 rounded`}
          >
            <h4 className="text-lg sm:text-xl font-bold">{category.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
