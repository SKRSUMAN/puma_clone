"use client"

import SideBar from "@/components/Account/SideBar";
import Swipers from "@/components/Home/Swiper/Swipers";
import Cards from "@/components/Products/Cards";
import { cardDatas } from "@/constant/Accounts/card";
import React from "react";


const page = () => {

  return (
    <div className="w-full flex h-full ">
      <SideBar/>
      <div className="hidden lg:block w-[80%] p-10 h-full">
        <div className="h-full flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <div className="text-4xl font-bold">Hello, suman</div>
            <div className="text-lg font-normal">Account Overview</div>
          </div>
          <div className="w-full flex gap-10">
            {cardDatas.map((items, index) => (
              <div
                key={index}
                className="min-w-[300px] h-[220px] bg-cover bg-center flex items-end justify-center py-5"
                style={{ backgroundImage: `url(${items.bg})` }}>
                <div className="flex items-end justify-center px-5 py-2 bg-[#181818] hover:bg-[#464646] cursor-pointer text-white text-[16px] font-bold">{items.title}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold">TOP TRENDING</div>
            <div>
              <Swipers/>
            </div>
          </div>

          <div>
            <div className="text-2xl font-bold">RECENTLY VIEWED BY YOU</div>
            <div>
              <Cards/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
