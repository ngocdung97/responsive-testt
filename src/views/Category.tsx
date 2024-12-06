import React from "react";

const Category: React.FC = () => {
  const categories = [
    { id: 1, name: "Music", color: "bg-blue-500" },
    { id: 2, name: "Table Games", color: "bg-green-500" },
  ];

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
