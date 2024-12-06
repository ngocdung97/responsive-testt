import { SearchOutlined } from "@ant-design/icons";
import { Divider, Input } from "antd";
import React, { useState } from "react";
import HotGame from "./HotGame";
import HottestCategory from "./HottestCategory";

const TabData = [
  {
    id: "home",
    label: "Games Home",
    icon: "home",
  },
  { id: "timeline", label: "Timeline", icon: "timeline" },
  {
    id: "all-games",
    label: "All Games",
    icon: "all-games",
  },
];

const Content: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TabData[0].id);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="container lg:mx-auto overflow-hidden flex gap-x-10 body-position py-24">
      <div className="min-w-[150px]">
        {/* Search bar */}
        <div className="-ml-2 flex justify-between items-center">
          <Input
            type="text"
            className="text-base"
            variant="borderless"
            placeholder="Search games..."
            prefix={<SearchOutlined />}
            // className="w-full md:w-[60%] border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-500"
          />
        </div>

        <Divider />

        {/* Tabs */}
        <div className="flex flex-col justify-start items-start mb-6">
          {TabData.map((tab, index) => (
            <div
              className={`flex items-center gap-x-2 py-3 text-base md:text-base font-medium ${
                activeTab === tab.id
                  ? "opacity-80 text-black"
                  : "opacity-20 text-black hover:text-gray-500"
              }`}
            >
              <img src={`/images/icon/${tab.icon}.svg`} alt={tab.label} />
              <button key={index} onClick={() => handleTabChange(tab.id)}>
                {tab.label}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-16">
        <HotGame />
        <HottestCategory />
      </div>
    </section>
  );
};

export default Content;
