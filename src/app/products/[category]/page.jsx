import React from "react";
import { VscSettings } from "react-icons/vsc";
import { RiArrowDownSLine } from "react-icons/ri";
import { BiGridAlt } from "react-icons/bi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";


const page = () => {
  return (
    <div className="w-full flex flex-col px-12 py-8 gap-5 relative">
      <div className="flex items-center gap-5 text-sm ">
        <ul>
          <li className="text-[18px] font-bold">Home</li>
        </ul>
        <span className="text-gray-400 text-[20px]">•</span>
        <ol>
          <li className="text-[17px]">Men</li>
        </ol>
      </div>

      <div className="w-full">
        <div className="text-[35px] font-bold">MEN</div>
      </div>

      <div className="relative">
        <div className="border-b absolute left-[-50px] right-[-48px] top-0 text-[#B2B2B2]"></div>
      </div>

      <div className="flex w-full justify-between items-center">
        <div className="px-5 py-2 border flex gap-2 items-center cursor-pointer border-[#B2B2B2] hover:border-black">
          <div className="text-[16px] font-bold">FILTERS</div>
          <div className="">
            <VscSettings className="text-[25px]" />
          </div>
        </div>
        <div className="px-5 py-2 border flex gap-2 items-center cursor-pointer border-[#B2B2B2] hover:border-black">
          <div className="text-[16px] font-bold">SORT BY</div>
          <div>
            <RiArrowDownSLine className="text-[25px]" />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="border-b absolute left-[-50px] right-[-48px] top-0 text-[#B2B2B2]"></div>
      </div>

      <div className="w-full flex justify-between">
        <div className="text-[16px] font-bold">
       { ("4128 Products").toUpperCase()}
        </div>
        <div className="flex gap-3 items-center">
        <div><BiGridAlt  className="text-[25px]"/></div>
        <div><TfiLayoutGrid4Alt className="text-[22px]"/></div>
        </div>
      </div>


      <div>sdfdf</div>
    </div>
  );
};

export default page;
