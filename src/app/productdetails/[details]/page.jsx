"use client";
import { NavigationDatass } from "@/constant/ProductsDerails/NavigationDatas";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiRulerLine } from "react-icons/ri";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRotateRight, FaTruckFast } from "react-icons/fa6";
import Photos from "@/components/productDetails/Photos";
import Swipers from "@/components/Home/Swiper/Swipers";
import ProductStory from "@/components/productDetails/ProductStory";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQty, setSelectedQty] = useState(1);
  const [hoverQty, setHoverQty] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const images = [
    "/Images/Products/cards/Easy-Rider-Leather-Unisex-Sneakers (6).jpeg",
    "/Images/Products/cards/Easy-Rider-Mesh-Unisex-Sneakers.jpeg",
  ];

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
    <div className="w-full lg:px-10 px-3 py-10 flex flex-col gap-5">
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
      <div className="grid md:grid-cols-12 grid-cols-1 gap-5 relative w-full ">
        {/* left */}
        <div className="w-full lg:col-span-8 md:col-span-12 col-span-8 h-full overflow-auto">
          <Photos />
        </div>

        {/* right  */}
        <div className="w-full lg:col-span-4 md:col-span-12 col-span-8 mt-2 h-fit sticky top-20">
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
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`w-[60px] h-[60px] cursor-pointer p-1 ${
                      selectedImageIndex === index
                        ? "border-2 border-black"
                        : "border border-gray-300"
                    } rounded-md`}
                    onClick={() => handleImageClick(index)}>
                    <Image
                      src={img}
                      alt="Puma image"
                      width={60}
                      height={50}
                      objectFit="cover"
                    />
                  </div>
                ))}
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

              <div className="flex flex-wrap gap-2 w-full justify-start">
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
              <div className="w-full flex flex-col gap-4 sm:gap-5">
      {/* Add to Cart Button */}
      <div className="w-full">
        <button className="w-full border py-4 sm:py-5 px-4 sm:px-6 flex items-center justify-center bg-[#191919] text-white text-base sm:text-lg md:text-xl font-bold rounded-md cursor-pointer transition duration-300 hover:bg-[#3b4047] min-h-[50px] sm:min-h-[60px]">
          ADD TO CART
        </button>
      </div>

      {/* Add to Wishlist Button */}
      <div className="w-full">
        <button className="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-5 border py-4 sm:py-5 px-4 sm:px-6 cursor-pointer hover:bg-gray-100 transition duration-300 rounded-md min-h-[50px] sm:min-h-[60px]">
          <span className="text-2xl sm:text-3xl">
            <FaRegHeart />
          </span>
          <span className="text-base sm:text-lg md:text-xl font-bold text-center">ADD TO WISHLIST</span>
        </button>
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

            <div className="flex flex-col gap-2 w-full max-w-md">
              <label className="font-bold text-sm md:text-base">PIN CODE</label>
              <div className="flex flex-col sm:flex-col lg:flex-row w-full gap-2">
                <input
                  type="text"
                  placeholder="PIN code"
                  className="w-full h-10 px-4 border border-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 lg:flex-1"
                />
                <div className="flex justify-end w-full lg:w-auto">
                  <button className="h-10 px-4 bg-black font-bold text-white text-sm rounded-sm cursor-pointer hover:bg-gray-800">
                    CHECK
                  </button>
                </div>
              </div>
            </div>

            <div className="border-b border-[#dfe0e1]"></div>

            <div className="flex flex-col gap-2">
              <div className="font-bold text-[18px]">Description</div>
              <div className="text-[16px] text-[#191919c1]">
                The PUMA Easy Rider was born in the late '70s, when running made
                its move from the track to the streets. Today it's back with
              </div>
              <div>
                <ul className="list-disc pl-5">
                  <li>Style: 399029_02</li>
                  <li>Color: PUMA White-Frosted Ivory</li>
                </ul>
              </div>

              <div></div>
              <div className="">
                <button className="text-[15px] font-bold leading-4 border-b-2 cursor-pointer">
                  READ MORE
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-xl font-bold">Shipping and Returns</div>
              <div className="text-[16px] font-normal text-[#191919]">
                Free return on all qualifying orders within 14 days of your
                order delivery date. Visit our{" "}
                <span className="border-b-2 leading-5 cursor-pointer border-[#95a9ba] hover:border-[#d1c3af]">
                  Return Policy
                </span>{" "}
                for more information.
              </div>
              <div className="text-[16px] font-normal text-[#191919]">
                For any queries, please contact Customer Service on email at{" "}
                <span className="border-b-2 leading-5 cursor-pointer border-[#95a9ba] hover:border-[#d1c3af]">
                  customercareindia@puma.com
                </span>{" "}
                , or send us a "Hi" on Whatsapp at 6364929121.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 my-5">
        <div className="text-2xl font-bold">SEE SIMILAR</div>
        <div>
          <Swipers />
        </div>
      </div>
      <div>
        <ProductStory />
      </div>
    </div>
  );
};

export default Page;
