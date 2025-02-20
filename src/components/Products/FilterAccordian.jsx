"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Checkbox,
  Slider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FilterDatas } from "@/constant/Products/FilterData";

const FilterAccordian = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const [priceRange, setPriceRange] = useState([199, 45999]);

  // Handle slider change
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Handle manual input change
  const handleInputChange = (index, value) => {
    let newPriceRange = [...priceRange];

    // Allow only numbers
    const numericValue = value.replace(/\D/g, "");

    if (numericValue === "") {
      newPriceRange[index] = "";
    } else {
      const parsedValue = parseInt(numericValue, 10);
      if (index === 0) {
        newPriceRange[index] = Math.max(
          0,
          Math.min(parsedValue, priceRange[1])
        ); // Min value now starts from 0
      } else {
        newPriceRange[index] = Math.min(
          45999,
          Math.max(parsedValue, priceRange[0])
        );
      }
    }

    setPriceRange(newPriceRange);
  };

  // Handle input blur (fallback to valid min/max values)
  const handleInputBlur = (index) => {
    let newPriceRange = [...priceRange];

    if (newPriceRange[index] === "" || isNaN(newPriceRange[index])) {
      newPriceRange[index] = index === 0 ? 199 : 45999;
    }

    setPriceRange(newPriceRange);
  };

  return (
    <>
    <div className="w-full">
      {FilterDatas.map((section, index) => (
        <Accordion
          key={index}
          expanded={expandedIndexes.includes(index)}
          onChange={() =>
            setExpandedIndexes((prev) =>
              prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
            )
          }
          sx={{ boxShadow: "none", border: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}>
            <Typography variant="h6">{section.title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingBottom: "16px" }}>
            {section.title === "Category" && (
              <div className="w-full flex flex-col">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Checkbox
                      size="medium"
                      sx={{ "&.Mui-checked": { color: "#191919" } }}
                    />
                    <div className="flex gap-1 cursor-pointer">
                      <span>{item.name}</span>
                      <span className="text-[#B8B8B8]">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.title === "Price" && (
              <div className="w-full flex flex-col gap-4">
                <div className="flex justify-between items-center gap-4">
                  <div className="relative w-[180px]">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-600">
                      ₹
                    </span>
                    <input
                      type="text"
                      value={priceRange[0]}
                      onChange={(e) => handleInputChange(0, e.target.value)}
                      onBlur={() => handleInputBlur(0)}
                      className="w-full h-[60px] pl-7 pr-2 border border-black rounded"
                    />
                  </div>

                  <div className="relative w-[180px]">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-600">
                      ₹
                    </span>
                    <input
                      type="text"
                      value={priceRange[1]}
                      onChange={(e) => handleInputChange(1, e.target.value)}
                      onBlur={() => handleInputBlur(1)}
                      className="w-full h-[60px] pl-7 pr-2 border border-black rounded"
                    />
                  </div>
                </div>

                <Slider
                  min={0}
                  max={45999}
                  value={priceRange}
                  onChange={handlePriceChange}
                  valueLabelDisplay="off"
                  sx={{
                    "& .MuiSlider-thumb": {
                      backgroundColor: "black", // Thumb color
                      width: "30px",
                      height: "30px",
                    },
                    "& .MuiSlider-track": {
                      backgroundColor: "black", // Track color
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#ccc", // Rail color
                    },
                    "& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible, & .MuiSlider-thumb.Mui-active":
                      {
                        boxShadow: "none",
                      },
                    // Scrollbar styling for overflow in case of horizontal scrolling
                    "&::-webkit-scrollbar": {
                      height: "6px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#black",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "black",
                      borderRadius: "6px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      background: "#black",
                    },
                  }}
                />
              </div>
            )}

            {section.title === "Gender" && (
              <div className="w-full flex flex-col">
                {section.items.map((item, idxs) => (
                  <div key={idxs} className="flex items-center gap-2">
                    <Checkbox
                      size="medium"
                      sx={{ "&.Mui-checked": { color: "#191919" } }}
                    />
                    <div className="flex gap-1 cursor-pointer">
                      <span>{item.name}</span>
                      <span className="text-[#B8B8B8]">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.title === "Size" && (
              <div className="w-full grid grid-cols-5 gap-5">
                {section.items.map((item, ind) => (
                  <div
                    className="w-full border border-[#DFE0E1] flex items-center justify-center p-2 cursor-pointer hover:border-black"
                    key={ind}>
                    {item.name}
                  </div>
                ))}
              </div>
            )}

            {section.title === "Color" && (
              <div className="w-full grid grid-cols-4 gap-2 pl-5">
                {section.items.map((item, ind) => (
                  <div
                    key={ind}
                    className="flex flex-col items-center gap-2 cursor-pointer px-2 min-w-[80px]">
                    <div
                      className="w-10 h-10 border rounded-full border-[#000000] flex items-center"
                      style={{
                        background:
                          item.value === "multi-colored"
                            ? "linear-gradient(45deg, red, blue, yellow, green)"
                            : item.bgColor,
                      }}></div>

                    <div className="flex gap-1 items-center text-[15px] pb-2 justify-center whitespace-nowrap">
                      <span>{item.name}</span>
                      <span className="text-gray-500 text-[14px]">
                        {item.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.title === "Discount" && (
              <div className="w-full flex flex-col">
                {section.items.map((item, idxs) => (
                  <div key={idxs} className="flex items-center gap-2">
                    <Checkbox
                      size="medium"
                      sx={{ "&.Mui-checked": { color: "#191919" } }}
                    />
                    <div className="flex gap-1 cursor-pointer">
                      <span>{item.name}</span>
                      <span className="text-[#B8B8B8]">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
    </>
  );
};

export default FilterAccordian;
