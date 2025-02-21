"use client";

import * as React from "react";
import { VscSettings } from "react-icons/vsc";
import { RiArrowDownSLine } from "react-icons/ri";
import { BiGridAlt } from "react-icons/bi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { Drawer, useMediaQuery } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import FilterAccordian from "@/components/Products/FilterAccordian";
import Cards from "@/components/Products/Cards";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import Desription from "@/components/Products/Desription";

const Page = () => {
  const [open, setOpen] = React.useState(false);
  const [sortOption, setSortOption] = React.useState("");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const isSmallScreen = useMediaQuery("(max-width: 500px)");

  return (
    <div className="w-full flex flex-col md:px-10 px-3 py-8 gap-5 relative">
      <div className="flex items-center md:gap-5 gap-0 text-sm">
        <Link href="/" className="block md:hidden text-center">
          <MdKeyboardArrowLeft size={30} />
        </Link>
        <Link href="/">
        <ul>
          <li className="text-[18px] font-bold">Home</li>
        </ul>
        </Link>
        
        <span className="text-gray-400 text-[20px] hidden md:block">•</span>
        <ol className="hidden md:block">
          <li className="text-[17px]">Men</li>
        </ol>
      </div>

      <div className="w-full">
        <div className="text-[35px] font-bold">MEN</div>
      </div>

      <div className="relative">
        <div className="border-b absolute md:left-[-40px] left-[-8px] md:right-[-40px] right-[-8px] top-0 text-[#B2B2B2]"></div>
      </div>

      <div className="flex w-full justify-between items-center">
        <div className="px-5 py-2 flex gap-2 items-center border-[#B2B2B2] hover:border-black cursor-pointer border">
          <button onClick={toggleDrawer(true)} className="text-[16px] font-bold cursor-pointer">
            FILTERS
          </button>
          <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: { width: isSmallScreen ? "100vw" : "450px" },
            }}
          >
            <div className="p-5 flex flex-col w-full gap-5">
              <div className="w-full flex justify-between items-center">
                <div className="text-[20px] font-bold">Products Filters</div>
                <div className="w-10 h-10 flex items-center justify-center hover:rounded-full hover:bg-[#c2c2c2]">
                  <RxCross2
                    onClick={toggleDrawer(false)}
                    className="md:text-[45px] text-[35px] cursor-pointer p-2"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="border-b absolute left-[-20px] right-[-20px] top-0 text-[#B2B2B2]"></div>
              </div>
              <div className="w-full">
                <FilterAccordian />
              </div>
              <div>
                <button className="w-full h-15 bg-black text-white text-[20px] cursor-pointer hover:bg-[#FFDFB7] font-bold">
                  SHOW 4118 PRODUCTS
                </button>
              </div>
            </div>
          </Drawer>
          <div className="cursor-pointer">
            <VscSettings className="text-[25px]" />
          </div>
        </div>

        <div className="relative border inline-block">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-2 py-2 border border-[#B2B2B2] hover:border-black text-[16px] font-bold cursor-pointer appearance-none w-auto min-w-[200px]"
          >
            <option value="" disabled>
              SORT BY
            </option>
            <option value="discount-high-low">Discount High To Low</option>
            <option value="best-matches">Best Matches</option>
            <option value="top-sellers">Top Sellers</option>
            <option value="price-low-high">Price Low To High</option>
            <option value="price-high-low">Price High To Low</option>
            <option value="newest">Newest</option>
          </select>
          <RiArrowDownSLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[25px]" />
        </div>
      </div>

      <div className="relative">
        <div className="border-b absolute md:left-[-40px] left-[-8px] md:right-[-40px] right-[-8px] top-0 text-[#B2B2B2]"></div>
      </div>

      <div className="w-full flex justify-between">
        <div className="text-[16px] font-bold">{"4128 Products".toUpperCase()}</div>
        <div className="flex gap-3 items-center">
          <div>
            <BiGridAlt className="text-[25px]" />
          </div>
          <div>
            <TfiLayoutGrid4Alt className="text-[22px]" />
          </div>
        </div>
      </div>

      <div>
        <Cards />
      </div>
      <div>
        <Desription/>
      </div>
    </div>
  );
};

export default Page;
