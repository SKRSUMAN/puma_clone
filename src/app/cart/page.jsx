"use client";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GrPowerReset } from "react-icons/gr";
import { GoGift } from "react-icons/go";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { cartItemsDatas } from "@/constant/cart/cartItems";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Image from "next/image";
import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

const Page = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [selectedQty, setSelectedQty] = useState({});
  const [hoverQty, setHoverQty] = useState({});

  const handleSelect = (qty, id) => {
    setSelectedQty((prev) => ({ ...prev, [id]: qty }));
    setHoverQty((prev) => ({ ...prev, [id]: qty }));
    setOpenDropdownId(null);
  };

  const handleDropdownToggle = (e, id) => {
    e.stopPropagation();
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleOutsideClick = () => {
    setOpenDropdownId(null);
  };

  return (
    <div className="w-full lg:px-10 lg:py-10 px-5 py-5 flex flex-col gap-5">
      <div className="w-full text-[32px] font-bold">
        {" "}
        My Shopping Cart{" "}
        <span className="text-[32px] font-bold text-[#6c6c6c]">(2)</span>
      </div>
      <div className="w-full grid lg:grid-cols-10 grid-cols-5 gap-10 ">
        <div className="grid lg:col-span-6 col-span-6">
          <div className="flex flex-col gap-5">
            {cartItemsDatas.map((items, index) => (
              <div className="border border-[#e5e7eb] " key={index}>
                <div className=" m-5 flex gap-5">
                  <div className="h-full relative">
                    <Image
                      src={items.imageUrl}
                      alt="shoes"
                      width={250}
                      height={250}
                    />
                     <div className="hidden absolute  bottom-1 border border-[#c4d477] sm:flex items-center justify-center rounded-full gap-1 px-2 py-1">
                     <div className="text-[16px] font-bold text-[#4d7d04]"><FaCheckCircle/></div>
                     <div className="text-[10px] font-bold text-[#4d7d04]">IN STOCK</div>
                  </div>
                   
                  </div>
                  <div className="w-full md:flex flex-row justify-between gap-5">
                    <div className="flex flex-col gap-3">
                      <div className="text-xl font-bold">{items.name}</div>
                      <div>
                        <div className="text-[#6c6c6c] text-[16px] font-normal">
                          Color:{" "}
                          <span className="text-[#191919]">{items.color}</span>
                        </div>
                        <div className="text-[#6c6c6c] text-[16px] font-normal">
                          Size:{" "}
                          <span className="text-[#191919]">{items.size}</span>
                        </div>
                        <div className="text-[#6c6c6c] text-[16px] font-normal">
                          Style Number:{" "}
                          <span className="text-[#191919]">
                            {items.styleNumber}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="relative inline-block">
                          <div
                            className="border border-gray-400 p-2 rounded-[2px] w-23 h-14 cursor-pointer bg-white flex justify-between items-center"
                            onClick={(e) => handleDropdownToggle(e, items.id)}>
                            {selectedQty[items.id] || 1} <IoChevronDownSharp />
                          </div>
                          {openDropdownId === items.id && (
                            <div>
                              <ul className="absolute left-0 mt-1 w-20 border bg-white rounded-md shadow-lg z-10">
                                <li className="p-1 text-gray-400 cursor-not-allowed">
                                  Qty
                                </li>
                                {Array.from(
                                  { length: 10 },
                                  (_, i) => i + 1
                                ).map((qty) => (
                                  <li
                                    key={qty}
                                    className={`p-1 cursor-pointer ${
                                      hoverQty[items.id] === qty
                                        ? "bg-blue-500 text-white"
                                        : "hover:bg-blue-500 hover:text-white"
                                    }`}
                                    onClick={() => handleSelect(qty, items.id)}
                                    onMouseEnter={() =>
                                      setHoverQty((prev) => ({
                                        ...prev,
                                        [items.id]: qty,
                                      }))
                                    }>
                                    {qty}
                                  </li>
                                ))}
                              </ul>
                              <div
                                className="fixed inset-0"
                                onClick={handleOutsideClick}></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start sm:flex md:flex-col  sm:justify-between md:justify-start sm:flex-row-reverse lg:gap-5 sm:gap-0 gap-5 md:my-0 my-5">
                      <div>
                        <div
                          className={`text-xl font-bold ${
                            items.originalPrice
                              ? "text-[#ba2b20]"
                              : "text-black"
                          }`}>
                          {items.price}
                        </div>
                        <div className="text-xl font-bold text-[#8c8c8c] line-through">
                          {items.originalPrice}
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="text-[20px] hover:bg-[#d8d9da] w-10 h-10 cursor-pointer rounded-full flex items-center justify-center">
                          <BiEditAlt />
                        </div>
                        <div className="text-[20px] hover:bg-[#d8d9da] w-10 h-10 cursor-pointer rounded-full flex items-center justify-center">
                          <RiDeleteBin5Line />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full grid lg:col-span-4 col-span-6">
          <div className="w-full flex flex-col  gap-5">
            <div className="border border-[#dfe0e1] rounded-md flex gap-2 items-center justify-center text-[#17913a] py-2 ">
              <div className="text-[20px] font-bold">
                <LiaShippingFastSolid />
              </div>
              <div className="text-[14px] font-bold">
                YOU’VE EARNED FREE SHIPPING
              </div>
            </div>
            <div className="border border-[#dfe0e1] rounded-md flex gap-2 items-center justify-center text-[#818181] py-2">
              <div className="text-[20px] font-bold">
                <GrPowerReset />
              </div>
              <div className="text-[14px] font-bold">
                YOU’VE EARNED FREE SHIPPING
              </div>
            </div>
            <div className="w-full rounded-[2px]">
              <Accordion
                className="!bg-transparent !shadow-none !border-none"
                disableGutters>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="!bg-[#eeeeee] px-4 py-5 !min-h-[60px] flex items-center">
                  <span className="text-base font-semibold text-gray-800">
                    APPLY A PROMO CODE
                  </span>
                </AccordionSummary>
                <AccordionDetails className="!px-0 !py-5">
                  <div className="w-full flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Enter a promo code"
                      className="w-full border border-gray-300 px-4 py-4 text-gray-700 rounded-[2px] focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <button className="bg-gray-300 text-gray-700 font-bold py-4 px-7 rounded">
                      APPLY
                    </button>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>

            <div className="border border-[#dfe0e1] rounded-[2px] flex gap-2 items-center justify-center text-white cursor-pointer py-2 bg-[#999999]">
              <div className="font-bold text-xl">
                <GoGift />
              </div>
              <div className="font-bold text-[16px]">
                CLICK HERE TO SELECT BONUS ITEM
              </div>
            </div>

            <div className="flex justify-between">
              <div className="text-[14px] font-normal">
                EXRTA 10% OFF APPLIED
              </div>
              <div className="text-[14px] font-normal text-[#008626]">
                -₹674.80
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-[#6c6c6c] text-[14px] font-bold">
                <div>SUBTOTAL</div>
                <div>₹24,747</div>
              </div>
              <div className="flex justify-between text-[#6c6c6c] text-[14px] font-bold">
                <div>SHIPPING COST</div>
                <div>₹0</div>
              </div>
              <div className="flex justify-between text-[#6c6c6c] text-[14px] font-bold">
                <div>ORDER DISCOUNT</div>
                <div>-₹674.80</div>
              </div>
            </div>
            <div className="border-b border-[#d5d5d5]"></div>
            <div className="flex justify-between">
              <div className="text-xl font-bold">
                GRAND TOTAL{" "}
                <span className="text-sm font-bold text-[#6c6c6c]">
                  PRICES INCLUDE GST
                </span>
              </div>
              <div className="text-xl font-bold">₹24,072.20</div>
            </div>

            <div>
              <button className="w-full border text-lg font-bold text-white bg-[#181818] hover:bg-[#3b4047] rounded-[2px] py-4 cursor-pointer">
                CHECKOUT
              </button>
            </div>
            <div className="text-[12px] font-normal">
              By continuing, I confirm that I have read and accept the {"  "}
              <span className="underline">
                Terms and Conditionsand
              </span> the {"  "}
              <span className="underline">Privacy Policy</span>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
