import React, { ReactNode, useEffect, useRef, useState } from "react";

// Định nghĩa kiểu dữ liệu cho mỗi item trong dropdown
export interface DropdownItem {
  label: string;
  key: string;
  icon?: ReactNode;
  danger?: boolean;
  disabled?: boolean;
}

export interface DropdownProps {
  items: DropdownItem[];
  children?: React.ReactNode;
  icon?: React.ReactNode;
  position?: "left" | "right";
  width?: string | number;
  height?: string | number;
}

const DropdownComponent: React.FC<DropdownProps> = ({
  items,
  children,
  icon,
  position = "right",
  width = "auto",
  height = "auto",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative inline-block text-left w-auto h-auto border-2"
      ref={dropdownRef}
    >
      <button
        onClick={(e) => {
          setIsOpen(!isOpen);
          e.stopPropagation();
        }}
        style={{ width, height }}
        className="px-2 py-2 text-black bg-white border border-[#CCCCCC] rounded-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center gap-x-2"
      >
        <div>
          {icon && <span className="mr-2">{icon}</span>}
          <span className="text-xs font-semibold">{children}</span>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-xs ml-2">az</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-5 h-5 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div
          className={`absolute z-30 mt-2 w-48 bg-white border border-black rounded-md shadow-lg ${
            position === "right" ? "right-0" : "left-0"
          }`}
        >
          <ul className="py-1">
            {items.map((item) => (
              <li key={item.key}>
                <a
                  href="#sd"
                  className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
