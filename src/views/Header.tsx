import { Divider } from "antd";
import React, { useState } from "react";

const Menu = ["HOME", "GAMES", "NEWS", "MATH", "COMPANY", "EVENTS", "PARTNERS"];

type MenuProps = {
  menus: string[];
  setActiveTab: (value: React.SetStateAction<string>) => void;
  activeTab: string;
  setIsMenuOpen: (value: React.SetStateAction<boolean>) => void;
};
const MenuComponent = (data: MenuProps) => {
  const { menus = [], setActiveTab, activeTab, setIsMenuOpen } = data;
  return menus.map((item, index) => (
    <>
      <a
        onClick={() => {
          setActiveTab(item);
          setIsMenuOpen(false);
        }}
        key={index}
        href={`#${item.toLowerCase()}`}
        className="hover:underline md:hidden flex justify-center items-center"
      >
        {item}
      </a>
      <Divider className="md:hidden " />
      <a
        onClick={() => setActiveTab(item)}
        key={index}
        href={`#${item.toLowerCase()}`}
        className="hover:underline justify-center items-center hidden md:flex"
        style={{
          color: activeTab === item ? "#FFFFFF" : "#FFFFFF80",
          height: "100%",
          borderBottom:
            "2px solid " + (activeTab === item ? "#FFFFFF" : "transparent"),
        }}
      >
        {item}
      </a>
    </>
  ));
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(Menu[0]);

  return (
    <header
      className="md:absolute fixed z-50 flex justify-center items-start md:items-center top-0 left-0 right-0 lg:h-[90px] text-slate-900
        lg:bg-gradient-to-t from-[#00000099] to-[#00000099]"
    >
      <div className="container body-position p-4 md:p-0 elementor-position flex justify-between items-start md:items-center">
        <div className="text-2xl font-bold">
          <img src="/images/logo.svg" alt="logo" className="h-8 md:h-12" />
        </div>

        {/* Menu for Desktop */}
        <nav className="hidden md:flex items-center h-full gap-x-11 font-normal space-x-4">
          {MenuComponent({
            menus: Menu,
            setActiveTab,
            activeTab,
            setIsMenuOpen,
          })}
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          className="md:hidden container absolute top-0 right-0 w-screen h-screen bg-white p-4 transition-opacity duration-300 ease-in-out"
          style={{ opacity: isMenuOpen ? 1 : 0 }}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col font-bold mt-20 sm:font-montserrat">
            {MenuComponent({
              menus: Menu,
              setActiveTab,
              activeTab,
              setIsMenuOpen,
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
