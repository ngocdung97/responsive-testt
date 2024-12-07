import { Divider } from "antd";
import React from "react";

export const menus = [
  {
    id: 1,
    name: "WEB MAP",
    sub: ["Home", "Games", "News", "Math", "Company", "Events", "Partners"],
  },
  {
    id: 2,
    name: "ABOUT US",
    sub: [
      "Licensing",
      "Certification",
      "Responsible Gaming",
      "Exhibitions",
      "Copyright Protection",
      "Privacy Policy",
    ],
  },
  {
    id: 3,
    name: "EVENTS",
    sub: ["PG ICE 2017", "PG ICE 2018", "PG ICE 2019", "About ICE"],
  },
  {
    id: 4,
    name: "OUR PARTNERS",
    sub: ["Relax Gaming", "Leander Games"],
  },
];

const Footer: React.FC = () => {
  return (
    <>
      <div className="hidden md:block">
        <footer className="border-y">
          <div className="container body-position mx-auto my-[101px]">
            <div className="flex justify-between items-start text-center text-sm sm:text-base">
              <div>
                <img
                  src="/images/logo-b&w.svg"
                  className="w-[53] h-[31] mb-3"
                  alt="logo"
                />
                <div className="mb-10 opacity-40 text-left">
                  Valletta Buildings, South Street, <br />
                  Valletta - VLT 1103 Malta
                </div>
                <div className="flex gap-x-4">
                  <img src="/images/icon/twitter.svg" alt="fb" />
                  <img src="/images/icon/youtube.svg" alt="tw" />
                  <img src="/images/icon/linked-in.svg" alt="li" />
                </div>
              </div>
              <div className="flex gap-x-[90px] text-left">
                {menus.map((menu) => (
                  <div className="flex flex-col" key={menu.id}>
                    <div className="mb-4 text-sm opacity-80">{menu.name}</div>
                    <div className="flex flex-col text-xs gap-y-2 opacity-40">
                      {menu.sub.map((sub) => (
                        <a href={sub} key={sub}>
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Divider className="my-10" />

            <div className="text-xs opacity-40">
              COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
            </div>
          </div>
        </footer>
      </div>
      <section className="block lg:hidden container lg:mx-auto overflow-hidden md:flex px-6 gap-x-10 body-position pt-5 pb-24">
        <div className="mt-8 text-left text-[11px] opacity-30">
          <p>Valletta Buildings, South Street, Valletta – VLT 1103 Malta</p>
          <p className="mt-2">COPYRIGHT © 2015–2024 ALL RIGHTS RESERVED.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#a" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#b" className="text-red-500 hover:text-red-700">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#c" className="text-blue-700 hover:text-blue-900">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="flex gap-x-4 mt-2">
          <img src="/images/icon/twitter.svg" alt="fb" />
          <img src="/images/icon/youtube.svg" alt="tw" />
          <img src="/images/icon/linked-in.svg" alt="li" />
        </div>
      </section>
    </>
  );
};

export default Footer;
