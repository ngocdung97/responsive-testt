import React, { useState } from "react";

const Menu = ["HOME", "GAMES", "NEWS", "MATH", "COMPANY", "EVENTS", "PARTNERS"];
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(Menu[0]);

  return (
    <header
      className="absolute z-50 flex justify-center top-0 left-0 right-0 h-24 text-slate-900 py-4 
        lg:bg-gradient-to-t from-[#00000099] to-[#00000099]"
    >
      <div className="container lg:mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <img src="/images/logo.svg" alt="logo" className="h-8 md:h-12" />
        </h1>

        {/* Menu for Desktop */}
        <nav className="hidden md:flex gap-x-11 font-normal space-x-4">
          {Menu.map((item, index) => (
            <a
              onClick={() => setActiveTab(item)}
              key={index}
              href={`#${item.toLowerCase()}`}
              className="hover:underline"
              style={{
                color: activeTab === item ? "#FFFFFF" : "#FFFFFF80",
              }}
            >
              {item}
            </a>
          ))}
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
        <nav className="md:hidden bg-gray-700 text-white p-4">
          <a href="#home" className="block py-2 hover:underline">
            Home
          </a>
          <a href="#games" className="block py-2 hover:underline">
            Games
          </a>
          <a href="#news" className="block py-2 hover:underline">
            News
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
