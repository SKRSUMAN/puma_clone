"use client";
import { RxCross2 } from "react-icons/rx";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { RecentlyviewedData } from "@/constant/SearchBox/Recentlyviewed";

const SearchBox = ({ handleSearch }) => {
  return (
    <div className="text-black w-full h-[95vh]">
      <div className="w-full h-30 flex flex-row-reverse lg:flex-row items-center gap-5 bg-[#F6F7F8] px-10">
        <div className="w-full md:h-14 h-12 relative">
          <input
            type="text"
            placeholder="SEARCH PUMA.COM"
            className=" border border-grey-500 w-full h-full md:px-5 px-2 bg-white"
          />
          <div className="absolute p-[5px] md:right-2 right-[1px] h-11 w-11 md:top-[8px] top-[3px] hover:bg-[#c2c2c2] hover:rounded-full cursor-pointer flex items-center justify-center">
            <SearchIcon
              sx={{
                fontSize: {
                  xs: "22px",
                  sm: "25px",
                  md: "28px",
                  lg: "30px",
                },
              }}
            />
          </div>
        </div>

        <div className="w-10 h-10 flex items-center justify-center bg-[#F6F7F8] hover:rounded-full  hover:bg-[#c2c2c2]">
          <RxCross2
            onClick={handleSearch}
            className="md:text-[45px] text-[35px] cursor-pointer p-2"
          />
        </div>
      </div>

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-2 p-5">
        <div className="p-4">
          <h1 className="text-[20px] font-bold mb-5">
            {"Trending searches".toUpperCase()}
          </h1>
          <div className="flex flex-col gap-2">
            {[
              { name: "Shoes", href: "/shoes" },
              { name: "Cap", href: "/cap" },
              { name: "Sneakers", href: "/sneakers" },
              { name: "Slides", href: "/slides" },
              { name: "Palermo", href: "/palermo" },
              { name: "Sneakers", href: "/sneakers" },
            ].map((items, index) => (
              <div
                key={index}
                className="text-[17px] font-semibold text-[#8a8a8a] ">
                <Link className="hover:text-black" href={items.href}>
                  {items.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 col-span-2">
          <h1 className="text-[20px] font-bold col-span-full">
            {"Recently viewed".toUpperCase()}
          </h1>

          {RecentlyviewedData.map((items, index) => (
            <div key={index} className="grid grid-cols-4 items-center gap-3">
              <div className="col-span-1">
                <img
                  src={items.img}
                  alt=""
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="grid col-span-3 lg:col-span-3 py-3 cursor-pointer">
                <div className="text-[16px] font-semibold flex items-center w-full pb-2 ">
                  <h2 className="border-b-2 border-transparent hover:border-black leading-none ">
                    {items.name}
                  </h2>
                </div>
                <div className="flex gap-5 w-full">
                  <p className="text-red-500 font-semibold">
                    {items.offerPrice}
                  </p>
                  <p className="line-through text-gray-500">
                    {items.actualPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
