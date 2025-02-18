"use client";
import { heroSectionDatas } from "@/constant/Home/heroSectionData";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center py-10 px-5">
      {/* Always 3 columns on all screens */}
      <div className="grid grid-cols-3 gap-5 w-full max-w-[1400px]">
        {heroSectionDatas.map((item, index) => (
          <div key={index} className="relative">
            <Link href={item.href}>
              <Image
                src={item.img}
                alt="Puma Product Image"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </Link>
            <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black/60 via-black/20 to-transparent h-[40%]"></div>
            <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 p-2">
              <span className="inline-block align-top no-underline min-w-[100px]  md:min-w-[120px] lg:min-w-[90px] text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-semibold tracking-wide text-center">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
