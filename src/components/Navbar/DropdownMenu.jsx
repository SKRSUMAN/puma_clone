import React from "react";
import { menuDats } from "@/constant/Navbar/MenuData";

const DropdownMenu = ({ show, setShow }) => {
  if (!show || !menuDats[show]) return null;

  const { sections } = menuDats[show];

  return (
    <div
      onMouseEnter={() => setShow(show)}
      onMouseLeave={() => setShow(null)}
      className="absolute h-auto top-[80px] left-0 bg-white shadow-lg z-50 transition-all duration-300 p-6 overflow-x-auto border-4 max-w-[100vw] w-full "
    >
      <div className="flex flex-nowrap gap-20 min-w-max">
        {sections.map((section, index) => (
          <div key={index} className="space-y-2 min-w-[200px]">
            {section.heading && (
              <h2 className="font-bold text-[16px] text-black border-b pb-1">
                {section.heading}
              </h2>
            )}
            <ul className="space-y-1">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="text-gray-600 hover:text-black cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;