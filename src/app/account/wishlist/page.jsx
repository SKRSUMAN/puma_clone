"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { CgHeart } from "react-icons/cg";

const page = () => {
  const router = useRouter();
  const path = usePathname();
  // console.log("path",path)

  return (
    <div className="w-full">
      <div className="lg:w-[70%] w-[95%] m-auto flex flex-col my-10 gap-5">
        <div className="w-full text-black">
          <Link href="/" className="font-bold">
            Home
          </Link>
          <span className="mx-1 text-gray-500"> • </span>
          <Link href="/account" className="font-bold">
            My account
          </Link>
          <span className="mx-1 text-gray-500"> • </span>
          <Link href="/wishlist" className="font-normal">
            {path.split("/").pop()}
          </Link>
        </div>

        <div className="flex flex-col pb-5">
          <div className="text-5xl font-bold">My account</div>
        </div>

        <div className="w-full sm:border h-[525px] rounded-2xl sm:border-[#e5e7eb] sm:p-10 flex flex-col items-center">
          <div className="w-full flex flex-col justify-between gap-5">
           <div className="flex justify-between">
            <div className="text-2xl font-normal">My Wishlist</div>
            <div className="text-[20px] font-normal"><span>0</span> items</div>
           </div>
           <div className="border-b border-[#e5e7eb]"></div>
          </div>
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="text-3xl text-[#e5e7eb] font-bold"><CgHeart className="text-[100px] font-bold"/></div>
            <div className="text-[28px] font-bold text-center">Your Wishlist is Empty</div>
          </div>
        </div>

        <div></div>

        <div
          onClick={() => router.push("/account")}
          className="flex items-center justify-center">
          <span className="border-b-3 border-[#a1a8af] hover:border-black cursor-pointer text-sm font-bold">
            RETURN TO MY ACCOUNT
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
