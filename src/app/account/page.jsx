"use client"

import Swipers from "@/components/Home/Swiper/Swipers";
import Cards from "@/components/Products/Cards";
import { cardDatas } from "@/constant/Accounts/card";
import { menuItems } from "@/constant/Accounts/MenuData";
import Link from "next/link";
import React from "react";


const page = () => {

  return (
    <div className="w-full flex h-full ">
      <div className="lg:max-w-[300px] w-full bg-[#f6f7f8] py-12 md:px-8 px-0">
        <div className="flex flex-col items-center justify-center gap-3">
          {menuItems.map((items, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center justify-center">
              <Link  href={items.path}
                className={`w-full flex items-center gap-5 p-5 hover:bg-[#dfe0e1] cursor-pointer 
              ${index === 0 ? "border-l-2 bg-white" : ""}`}>
                <div className="text-[23px] font-bold">{items.icon}</div>
                <div className="text-[16px] font-bold">{items.name}</div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10 mt-5 items-start px-5 lg:px-0">
          <div className="text-lg font-bold ">Need Help?</div>
          <div className="text-[14px] font-bold border-b-3 leading-3 cursor-pointer">
            LOGOUT
          </div>
        </div>
      </div>

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
