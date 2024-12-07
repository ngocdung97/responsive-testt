import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { TabBar } from "antd-mobile";
import React from "react";
import { tabs } from "../../data/data";
import { menus } from "../../views/Footer";
import Collapse from "../Collapse";
import HotGameMobile from "./HotGame";
import HottestCategoryMobile from "./HottestCategory";

const Content: React.FC = () => {
  return (
    <section className="container gap-x-10 body-position">
      <div className="min-w-[150px] w-full flex">
        <TabBar className="w-full border-b">
          {tabs.map((item) => (
            <TabBar.Item
              className={`${"filter" === item.key && "border-l"}`}
              key={item.key}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </TabBar>
      </div>
      <div className="flex flex-col gap-y-8">
        <HotGameMobile />
        <HottestCategoryMobile />
        <Button
          icon={<PlusOutlined />}
          className="mt-8 mx-6 rounded-s-md"
          iconPosition="end"
          style={{
            backgroundColor: "#00000005",
            borderRadius: 10,
            borderColor: "#00000005",
            height: "50px",
          }}
        >
          <div className="text-base font-semibold">Load More</div>
        </Button>

        <div className="mx-6">
          <Collapse data={menus} />
        </div>
      </div>
    </section>
  );
};

export default Content;
