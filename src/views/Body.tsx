import React from "react";
import Content from "../components/desktop/Content";

const Body: React.FC = () => {
  return (
    <>
      <div className="hidden md:block">
        <Content />
      </div>
      <section className="block lg:hidden container lg:mx-auto overflow-hidden md:flex gap-x-10 body-position py-24">
        <div>dtttt</div>
      </section>
    </>
  );
};

export default Body;
