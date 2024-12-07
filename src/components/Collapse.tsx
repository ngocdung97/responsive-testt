import React, { useState } from "react";

interface CollapseItem {
  id: number;
  name: string;
  sub: string[];
}

const Collapse: React.FC<{ data: CollapseItem[] }> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {data.map((item, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <h2 className="text-xs opacity-80 font-semibold">{item.name}</h2>
            <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out flex flex-col p-2 items-start ${
              activeIndex === index
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            {activeIndex === index &&
              item.sub.map((sub, subIndex) => (
                <a
                  key={subIndex}
                  href={sub}
                  className="underline mt-2 text-gray-600 text-sm"
                >
                  {sub}
                </a>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collapse;
