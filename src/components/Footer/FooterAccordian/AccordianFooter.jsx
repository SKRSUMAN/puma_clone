"use client";

import * as React from "react";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MobileAccordionDatas } from "@/constant/Footer/MobileFooter";

const AccordianFooter = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="w-full px-5 py-5">
      {MobileAccordionDatas.map((section, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            boxShadow: "none",
          }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              backgroundColor:
                expanded === `panel${index}` ? "#3B4047" : "#181818",
              transition: "background-color 0.3s ease",
            }}>
            <Typography
              component="span"
              sx={{
                width: "100%",
                flexShrink: 0,
                margin: "0px",
              }}>
              <h1 className="font-bold text-[18px] text-white">
                {section.title.toUpperCase()}
              </h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#181818", color: "white" }}>
            {section.title === "Support" ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  {section.items.slice(0, 8).map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="text-gray-700 hover:text-black">
                      <p className="text-white">{item.name}</p>
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  {section.items.slice(8).map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="text-gray-700 hover:text-black">
                      <p className="text-white">{item.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : section.title === "Stay up to date" ? (
              <div className="flex gap-10">
                {section.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="text-gray-700 hover:text-black">
                    <p className="text-white">{item.icon}</p>
                  </Link>
                ))}
              </div>
            ) : section.title === "Explore" ? (
              <div className="flex gap-10">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center p-2 cursor-pointer hover:text-black border border-white">
                    <div className="text-[30px]">{item.icon}</div>
                    <p className="tracking-[2px] text-[14px] text-white">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {section.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="text-gray-700 hover:text-black">
                    <p className="text-white">{item.name}</p>
                  </Link>
                ))}
              </div>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordianFooter;
