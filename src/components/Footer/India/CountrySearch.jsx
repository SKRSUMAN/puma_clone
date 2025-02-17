import { RxCross2 } from "react-icons/rx";
import SearchIcon from "@mui/icons-material/Search";
import { CountryFlagDatas } from "@/constant/Footer/CountryData";
import Link from "next/link";
import Image from "next/image";
import { data } from "autoprefixer";

const CountrySearch = ({ handleCountry }) => {
  return (
    <div className="w-full h-[90vh] md:h-[85vh] lg:h-[88vh] flex flex-col gap-5 ">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Location Selector</h1>
        <div>
        <RxCross2
          onClick={handleCountry}
          className="text-[40px] cursor-pointer p-2 rounded-full hover:bg-[#c2c1c1]"
        />
        </div>
        
      </div>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Enter Location or Language"
          className="w-full border p-3 pr-10 rounded-md focus:outline-none placeholder:font-bold"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <SearchIcon className="text-black w-5 h-5" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 pb-10 justify-center">
        {CountryFlagDatas.map((datas, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-3 border-[#d5d0d0]">
            <div className="">
              <Link
                href={datas.href}
                className="flex gap-2 items-center justify-center">
                <Image
                  src={datas.img}
                  alt={data?.name || ""}
                  width={30}
                  height={30}
                />
                <p className="tracking-wide ">{datas.name}</p>
              </Link>
            </div>
            <div className="flex gap-1">
              {datas.language.map((lang, index) => (
                <p key={index} className="border-b leading-3 cursor-pointer text-[12px] border-[#585858]">
                  {lang}
                  {index !== datas.language.length - 1 ? "," : ""}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountrySearch;
