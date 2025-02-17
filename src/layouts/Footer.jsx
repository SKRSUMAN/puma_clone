"use client";

import AccordianFooter from "@/components/Footer/FooterAccordian/AccordianFooter";
import CountrySearch from "@/components/Footer/India/CountrySearch";
import { AboutDatas } from "@/constant/Footer/About";
import { PaymentIconsDatas } from "@/constant/Footer/PaymentIcons";
import { SocialMediaDatas } from "@/constant/Footer/SocialMedia";
import { SupportDatas } from "@/constant/Footer/Support";
import { Drawer } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiPuma } from "react-icons/si";

const Footer = () => {
  const [country, setCountry] = useState(false);

  const handelCountry = () => {
    setCountry(!country);
  };

  return (
    <div className="w-full bg-[#181818] text-white  ">
      <div className="relative xl:px-25 lg:px-15 px-10 hidden lg:block">
        <div className="grid grid-cols-4 gap-5 pt-10 pb-2">
          <div className="grid grid-cols-2 col-span-2 items-start">
            <div className="flex flex-col gap-2">
              <h1 className="tracking-[1px] text-[18px] font-bold">
                {"Support".toUpperCase()}
              </h1>
              {SupportDatas.slice(0, 8).map((data, index) => (
                <Link href={data.href} key={index}>
                  <p className="text-[rgb(215,211,211)] hover:text-white tracking-[1px] text-[15px] place-self-start">
                    {data.name}
                  </p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 my-10">
              {SupportDatas.slice(8).map((data, index) => (
                <Link href={data.href} key={index + 8}>
                  <p className="text-[rgb(215,211,211)] hover:text-white tracking-[1px] text-[15px] place-self-start">
                    {data.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="">
            <h1 className="tracking-[1px] text-[18px] font-bold">ABOUT</h1>
            <div className="flex flex-col gap-2 my-2">
              {AboutDatas.map((data, index) => (
                <Link href={data.href} key={index}>
                  <p className="text-[rgb(215,211,211)] hover:text-white tracking-[1px] text-[15px]">
                    {data.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10 ">
            <div className="flex flex-col gap-7">
              <h1 className="text-[18px] font-bold">
                {"Stay up to date".toUpperCase()}
              </h1>
              <div className="flex gap-5 items-center">
                {SocialMediaDatas.map((data, index) => (
                  <Link
                    href={data.href}
                    key={index}
                    className="w-11 h-11 flex flex-col items-center justify-center rounded-full cursor-pointer hover:border-white hover:bg-[#404040]">
                    <p className="p-5">{data.img}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-[18px] font-bold">
                {"Explore".toUpperCase()}
              </h1>
              <div className="flex gap-10">
                <div className="border border-[rgb(102,98,98)] w-[65px] h-[65px] rounded-md flex flex-col items-center justify-center p-2 cursor-pointer hover:border-white">
                  <SiPuma className="w-15 h-15" />
                  <p className="tracking-[2px] text-[12px]">App</p>
                </div>
                <div className="border border-[rgb(102,98,98)] w-[65px] h-[65px] rounded-md flex flex-col items-center justify-center p-2 cursor-pointer hover:border-white">
                  <SiPuma className="w-15 h-15" />
                  <p className="tracking-[2px] text-[12px]">TRAC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:px-15 px-10 ">
        <div className="border-b-1 border-[rgb(215,211,211)]"></div>
      </div>

      <div className="block lg:hidden w-full">
      <AccordianFooter />
      <div className=" items-center justify-center gap-2 md:px-10 px-5 my-5">
          <div
            onClick={handelCountry}
            className="w-full h-12 flex gap-3 items-center justify-center border border-[rgb(215,211,211)] cursor-pointer hover:border-white rounded-[2px] ">
            <div className="w-8 h-8 rounded-full overflow-hidden border relative">
              <Image
                src="/india.svg"
                alt="India"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className="text-[18px] text-white font-bold">INDIA</h1>
          </div>
        </div>
      <div className="w-full lg:px-15 md:px-10 px-5 ">
        <div className="border-b-1 border-[rgb(215,211,211)]"></div>
      </div>
     
      </div>
      <div className="w-full px-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 text-center text-[14px] text-gray-400 gap-5 ">
        <div className=" flex gap-2 items-center ">
          {PaymentIconsDatas.map((data, index) => (
            <div
              key={index}
              className="border w-10 h-6 flex items-center justify-center bg-[#FFFFFF] rounded-[2px]">
              <Image src={data.image} alt={data.name} width={25} height={10} />
            </div>
          ))}
        </div>
        <div className=" items-center justify-center gap-2 hidden lg:flex">
          <div
            onClick={handelCountry}
            className="w-40 h-15 flex gap-3 items-center justify-center border cursor-pointer hover:border-white rounded-md">
            <div className="w-10 h-10 rounded-full overflow-hidden border relative">
              <Image
                src="/india.svg"
                alt="India"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className="text-[20px] text-white font-bold">INDIA</h1>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <p className=" text-[12px]">
            {"© PUMA India Ltd, 2025. All Rights Reserved.".toUpperCase()}
          </p>
          <p className="border-b text-[12px]">
            {"Imprint and Legal Data".toUpperCase()}
          </p>
        </div>
      </div>
      <Drawer
        anchor="bottom"
        open={country}
        onClose={handelCountry}
        sx={{
          "& .MuiDrawer-paper": {
            width: "25%",
            height: "auto",
            margin: "0 auto",
            borderRadius: "10px 10px 0 0",
            padding: "15px",
          },
        }}>
        <div className="text-black bg-white w-full m-auto">
          <CountrySearch handleCountry={handelCountry} />
        </div>
      </Drawer>
    </div>
  );
};

export default Footer;
