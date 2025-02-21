"use client";
import { NavigationDatass } from "@/constant/ProductsDerails/NavigationDatas";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiRulerLine } from "react-icons/ri";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRotateRight, FaTruckFast } from "react-icons/fa6";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQty, setSelectedQty] = useState(1);
  const [hoverQty, setHoverQty] = useState(1);

  const handleSelect = (qty) => {
    console.log("Selected Quantity:", qty);
    setSelectedQty(qty);
    setHoverQty(qty); // Reset hover to selected
    setIsOpen(false);
  };

  const handleDropdownToggle = (e) => {
    e.stopPropagation(); // Prevents closing immediately after opening
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = () => {
    setIsOpen(false);
    setHoverQty(selectedQty); // Reset hover when closing
  };

  return (
    <div className="w-full px-10 py-10 flex flex-col gap-5">
      <div className="w-full">
        {NavigationDatass.map((item, index) => (
          <span key={index}>
            <Link
              href={item.link}
              style={{
                textDecoration: "none",
                color:
                  index === NavigationDatass.length - 1 ? "black" : "inherit",
                fontWeight:
                  index === NavigationDatass.length - 1 ? "normal" : "bold",
              }}>
              {item.label}
            </Link>
            {index < NavigationDatass.length - 1 && (
              <span style={{ margin: "0 5px", color: "grey" }}> • </span>
            )}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-2">
        <div className="border col-span-8">sdfdsf</div>
        <div className="border col-span-4">
          <div className=" flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="text-[30px] font-bold leading-9">
                Easy Rider Leather Unisex Sneakers
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[18px] text-red-700 font-bold">
                  ₹7,199
                  <span className="ml-2 text-[16px] text-black font-normal text line-through">
                    ₹8,999
                  </span>
                </div>
                <div className="text-[15px] text-[#757b80]">
                  Prices include GST
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <div className="font-bold text-[20px]">Color</div>
                <div className="text-[#757b80] text-[15px]">
                  PUMA Black-Frosted Ivory
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[60px] h-[60px]">
                  <div className="border rotate-y-180">
                    <Image
                      src="/Images/Products/cards/Easy-Rider-Leather-Unisex-Sneakers (6).jpeg"
                      alt="puma image"
                      width={60}
                      height={50}
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="">
                    <Image
                      src="/Images/Products/cards/Easy-Rider-Mesh-Unisex-Sneakers.jpeg"
                      alt="puma image"
                      width={60}
                      height={50}
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-[#dfe0e1]"></div>

            <div className="text-[12px] italic">
              Highly recommended for its cushioned fit and finish
            </div>

            <div className="border-b border-[#dfe0e1]"></div>

            <div className="flex flex-col gap-3">
              <div className="flex w-full justify-between">
                <div className="font-bold text-[20px]">Size</div>
                <div className="text-[15px] font-se">ONLY 5 LEFT</div>
              </div>

              <div className="grid grid-cols-8 place-items-start gap-10">
                <div className="border w-[60px] h-[55px] flex items-center justify-center  border-[#dfe0e1] cursor-pointer rounded-[2px]">
                  UK 5
                </div>
                <div className="border w-[60px] h-[55px] flex items-center justify-center  border-[#dfe0e1] cursor-pointer rounded-[2px]">
                  UK 6
                </div>
                <div className="border w-[60px] h-[55px] flex items-center justify-center  border-[#dfe0e1] cursor-pointer rounded-[2px]">
                  UK 11
                </div>
                <div className="border w-[60px] h-[55px] flex items-center justify-center  border-[#dfe0e1] cursor-pointer rounded-[2px]">
                  UK 12
                </div>
                <div className="border w-[60px] h-[55px] flex items-center justify-center  border-[#dfe0e1] cursor-pointer rounded-[2px]">
                  UK 13
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="border-b font-bold text-[15px] leading-none">
                  SIZE GUIDE
                </div>
                <div className="text-[18px] mb-2 rotate-180">
                  <RiRulerLine />
                </div>
              </div>
            </div>
            <div className="border-b border-[#dfe0e1]"></div>

            <div className="flex gap-5">
              <div>
                <div className="relative inline-block">
                  <div
                    className="border border-gray-400 p-2 rounded-[2px] w-16 h-12 cursor-pointer bg-white flex justify-between items-center"
                    onClick={handleDropdownToggle}>
                    {selectedQty}{" "}
                    <span>
                      <IoChevronDownSharp />
                    </span>
                  </div>
                  {isOpen && (
                    <div>
                      <ul
                        className="absolute left-0 mt-1 w-20 border bg-white rounded-md shadow-lg z-10"
                        onClick={(e) => e.stopPropagation()}>
                        <li className="p-2 text-center text-gray-400 cursor-not-allowed">
                          Qty
                        </li>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(
                          (qty) => (
                            <li
                              key={qty}
                              className={`p-2 text-center cursor-pointer ${
                                hoverQty === qty
                                  ? "bg-blue-500 text-white"
                                  : "hover:bg-blue-500 hover:text-white"
                              }`}
                              onClick={() => handleSelect(qty)}
                              onMouseEnter={() => setHoverQty(qty)}>
                              {qty}
                            </li>
                          )
                        )}
                      </ul>
                      <div
                        className="fixed inset-0"
                        onClick={handleOutsideClick}></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-col gap-5 ">
                <div className="">
                  <div className="border py-5 flex items-center justify-center bg-[#191919] text-white text-[18px] font-bold rounded-[5px] cursor-pointer hover:bg-[#3b4047]">
                    ADD TO CART
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex items-center gap-5 border py-5 justify-center cursor-pointer ">
                    <div className="text-[25px] font-bold">
                      <FaRegHeart />
                    </div>
                    <div className="text-[18px] font-bold">ADD TO WISHLIST</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-1">
              <div className="flex gap-2 items-center font-bold text-[#6d9532] text-[17px]">
                <div>
                  <FaTruckFast />
                </div>
                <div>This item qualifies for free shipping!</div>
              </div>
              <div className="flex gap-2 items-center font-bold text-[#80858c] text-[17px]">
                <div>
                  <FaArrowRotateRight />
                </div>
                <div>Free returns on all qualifying orders.</div>
              </div>
            </div>

            <div className="border-b border-[#dfe0e1]"></div>

            <div>Please enter PIN code to check delivery time</div>

            <div className="flex flex-col gap-2">
              <div className="font-bold text-[14px]">PIN CODE</div>
              <div className="flex w-full justify-between">
                <div className="">
                  <input
                    type="text"
                    placeholder="PIN Code"
                    className="w-83 h-15 px-4 border border-[#191919] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
                <div className="border w-33 h-15 flex items-center justify-center bg-[#191919] font-bold text-white text-[18px] rounded-[2px] hover:bg-[#3b4047]"> CHECK </div>
              </div>
            </div>

            <div className="border-b border-[#dfe0e1]"></div>

            <div className="flex flex-col gap-2">
              <div className="font-bold text-[18px]">Description</div>
              <div className="text-[16px] text-[#191919c1]">The PUMA Easy Rider was born in the late '70s, when running made its move from the track to the streets. Today it's back with</div>
              <div>
                <div></div>
                <div></div>
              </div>
              <div className="text-[15px] font-bold leadi-8 border-b-2">READ MORE </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
