import { AboutDatas } from "@/constant/Footer/About";
import { SocialMediaDatas } from "@/constant/Footer/SocialMedia";
import { SupportDatas } from "@/constant/Footer/Support";
import Link from "next/link";
import { SiPuma } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full bg-[#181818] text-white">
      <div className="grid grid-cols-4 gap-5 px-30 pt-10 pb-2">
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

        <div>
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
        <div className="flex flex-col gap-10 justify-center">
          <div className="flex flex-col gap-7">
            <h1 className="text-[18px] font-bold">
              {"Stay up to date".toUpperCase()}
            </h1>
            <div className="flex gap-10">
              {SocialMediaDatas.map((data, index) => (
                <Link href={data.href} key={index}>
                  {data.img}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-[18px] font-bold">{"Explore".toUpperCase()}</h1>
            <div className="flex gap-10">
              <div className="border w-[65px] h-[65px] rounded-md flex flex-col items-center justify-center p-2">
                <SiPuma className="w-15 h-15" />
                <p className="tracking-[2px] text-[12px]">App</p>
              </div>
              <div className="border w-[65px] h-[65px] rounded-md flex flex-col items-center justify-center p-2">
                <SiPuma className="w-15 h-15" />
                <p className="tracking-[2px] text-[12px]">TRAC</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-15 "> 
        <div className="border-b-1 border-[rgb(215,211,211)] px-10"></div>
      </div>

      <div className="py-5 text-center text-[14px] text-gray-400">
        © 2025 Your Company. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
