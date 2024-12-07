import React from "react";
import Content from "../components/desktop/Content";
import ContentMobile from "../components/mobile/Content";

const Body: React.FC = () => {
  return (
    <>
      <div className="hidden md:block">
        <Content />
      </div>
      <section className="block lg:hidden">
        <ContentMobile />
      </section>
    </>
  );
};

export default Body;
