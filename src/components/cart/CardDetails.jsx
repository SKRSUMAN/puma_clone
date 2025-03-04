"use client"

import { cartItemsDatas } from "@/constant/cart/cartItems";
import Image from "next/image";
import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";

const CardDetails = () => {
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
    <div>
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
                  <div className="text-[16px] font-bold text-[#4d7d04]">
                    <FaCheckCircle />
                  </div>
                  <div className="text-[10px] font-bold text-[#4d7d04]">
                    IN STOCK
                  </div>
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
                      Size: <span className="text-[#191919]">{items.size}</span>
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
                            {Array.from({ length: 10 }, (_, i) => i + 1).map(
                              (qty) => (
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
                </div>

                <div className="flex flex-col items-start sm:flex md:flex-col  sm:justify-between md:justify-start sm:flex-row-reverse lg:gap-5 sm:gap-0 gap-5 md:my-0 my-5">
                  <div>
                    <div
                      className={`text-xl font-bold ${
                        items.originalPrice ? "text-[#ba2b20]" : "text-black"
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
  );
};

export default CardDetails;
