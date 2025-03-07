"use client"

import { NavigationDatass } from "@/constant/ProductsDerails/NavigationDatas";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const page = () => {

    const router = useRouter();
    const path = usePathname();
    // console.log("path",path)

  return (
    <div className="w-full">
      <div className="lg:w-[70%] w-[95%] m-auto flex flex-col my-10 gap-5">
      <div className="w-full text-black">
      <Link href="/" className="font-bold">Home</Link>
      <span className="mx-1 text-gray-500"> • </span>
      <Link href="/account" className="font-bold">My account</Link>
      <span className="mx-1 text-gray-500"> • </span>
      <Link href="/wishlist" className="font-normal">{path.split("/").pop()}</Link>
    </div>

        <div className="flex flex-col gap-2 pb-5">
          <div className="text-2xl font-bold">Order history</div>
          <div className="text-5xl font-bold">My account</div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-[12px] font-bold">SELECT DATE</div>
          <div className="relative">
            <select className="border p-4 w-full appearance-none bg-white">
              <option value="" disabled>
                Select time period
              </option>
              <option value="last-six-months">Last six months</option>
              <option value="last-twelve-months">Last twelve months</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        <div className="text-xl font-bold">No orders found for that time period</div>
        <div onClick={()=> router.push("/account")} className="flex items-center justify-center"><span className="border-b-3 border-[#a1a8af] hover:border-black cursor-pointer text-sm font-bold">RETURN TO MY ACCOUNT</span></div>
      </div>
    </div>
  );
};

export default page;
