"use client";

import ApplyPromo from "@/components/cart/ApplyPromo";
import TotalPrice from "@/components/cart/TotalPrice";
import OrderDetails from "@/components/Checkout/OrderDetails";
import { Tab, Tabs } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";

const page = () => {
  const [value, setValue] = useState(0);
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedOption, setSelectedOption] = useState("standard");

  const states = ["BIhar", "Jharkhand", "Goa", "Utter Predesh", "Delhi"]; // Add more states
  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "India",
  ]; // Add more countries

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheckboxChange = () => {
    setIsSameAddress((prev) => !prev);
  };

  return (
    <div className="w-full xl:px-30 lg:px-10 md:px-20 sm:px-10 px-5 py-10">
      <div className="w-full flex flex-col gap-5 ">
        <div className="text-[32px] font-bold"> CHECKOUT</div>
        <div className="w-full flex ">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="checkout tabs"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTab-root": {
                fontWeight: "bold",
                color: "#999999",
                textTransform: "none",
                borderBottom: "1px solid #ccc", // Smaller border for small screens
                marginRight: "3px", // Minimized gap for small screens
                padding: "2px 6px", // More compact padding
                minHeight: "28px",
                minWidth: "65px", // Slightly reduced width for small screens
                "@media (min-width: 768px)": {
                  borderBottom: "2px solid #ccc", // Restore thicker border for larger screens
                  marginRight: "30px", // Restore larger spacing
                  padding: "8px 12px",
                  minHeight: "32px",
                  minWidth: "120px",
                },
                "@media (min-width: 620px)": {
                  marginRight: "25px", // Restore larger spacing
                  padding: "4px 12px",
                  minHeight: "32px",
                  minWidth: "120px",
                },
                "@media (min-width: 520px)": {
                  marginRight: "25px", // Restore larger spacing
                  padding: "4px 12px",
                  minHeight: "32px",
                  minWidth: "90px",
                }
              },
              "& .Mui-selected": {
                color: "black !important",
                fontWeight: "bold",
                borderBottom: "1px solid black !important", // Smaller selected border for small screens
                "@media (min-width: 768px)": {
                  borderBottom: "2px solid black !important", // Restore thicker selected border for larger screens
                },
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}>
            <Tab label="CART" />
            <Tab label="SHIPPING" />
            <Tab label="PAYMENT" />
            <Tab label="SUMMARY" />
          </Tabs>
          {/* <CustomTabPanel value={value} index={0}>
            Item One
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel> */}
        </div>
        <div>
          <div className="xl:grid xl:grid-cols-10 lg:grid-cols-9 gap-5 flex flex-col-reverse lg:flex lg:flex-row">
            <div className="grid xl:col-span-6 lg:col-span-5 gap-5">
              <div className="text-xl font-bold">
                For faster checkout experience
              </div>
              <div className="grid grid-cols-2">
                <Link
                  href={"/signup"}
                  className="w-full text-[16px] font-bold text-white bg-[#191919] border text-center py-4">
                  SIGN IN
                </Link>
              </div>
              <div className="text-[12px] font-normal">
                By continuing, I confirm that I have read and accept the {"  "}
                <span className="underline">
                  Terms and Conditionsand
                </span> the {"  "}
                <span className="underline">Privacy Policy</span>.
              </div>

              <div>
                <div className="py-4 bg-[#eeeeee] px-2">1. ADDRESSES</div>
              </div>
              <div className="text-xl font-normal">
                Enter A Shipping Address
              </div>
              <div className="flex flex-col gap-5">
                <form action="" className="flex flex-col gap-5">
                  <div className="flex items-center gap-5">
                    <div className="w-full flex flex-col gap-1 relative">
                      <label className="text-[14px] font-bold" htmlFor="">
                        FIRST NAME
                      </label>
                      <span className="text-[18px] text-red-700 absolute top-0 left-22">
                        *
                      </span>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="border w-full px-2 py-3 text-[16px] font-normal"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-1 relative">
                      <label className="text-[14px] font-bold" htmlFor="">
                        LAST NAME
                      </label>
                      <span className="text-[18px] text-red-700 absolute top-0 left-21">
                        *
                      </span>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="border w-full px-2 py-3 text-[16px] font-normal"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 relative">
                    <label className="text-[14px] font-bold" htmlFor="">
                      PIN CODE
                    </label>
                    <span className="text-[18px] text-red-700 absolute top-0 left-18">
                      *
                    </span>
                    <input
                      type="text"
                      placeholder="PIN code"
                      className="border w-full px-2 py-3 text-[16px] font-normal"
                    />
                  </div>
                  <div className="flex flex-col gap-1 relative">
                    <label className="text-[14px] font-bold" htmlFor="">
                      ADDRESS LINE 1
                    </label>
                    <span className="text-[18px] text-red-700 absolute top-0 left-29">
                      *
                    </span>
                    <input
                      type="text"
                      placeholder="Address Line 1"
                      className="border w-full px-2 py-3 text-[16px] font-normal"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[14px] font-bold" htmlFor="">
                      ADDRESS LINE 2
                    </label>

                    <input
                      type="text"
                      placeholder="Address Line 2"
                      className="border w-full px-2 py-3 text-[16px] font-normal"
                    />
                  </div>
                  <div className="flex flex-col gap-1 relative">
                    <label className="text-[14px] font-bold" htmlFor="">
                      CITY
                    </label>
                    <span className="text-[18px] text-red-700 absolute top-0 left-8">
                      *
                    </span>
                    <input
                      type="text"
                      placeholder="City"
                      className="border w-full px-2 py-3 text-[16px] font-normal"
                    />
                  </div>
                  <div className="flex gap-5">
                    {/* State Dropdown */}
                    <div className="w-full flex flex-col gap-1 relative">
                      <label className="text-[14px] font-bold">STATE</label>
                      <span className="text-[18px] text-red-700 absolute top-0 left-12">
                        *
                      </span>
                      <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="border w-full px-2 py-3 text-[16px] font-normal">
                        <option value="" disabled>
                          Select a state
                        </option>
                        {states.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Country Dropdown */}
                    <div className="w-full flex flex-col gap-1">
                      <label className="text-[14px] font-bold">COUNTRY</label>
                      <select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="border w-full px-2 py-3 text-[16px] font-normal">
                        <option value="" disabled>
                          Select a country
                        </option>
                        {countries.map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>Enter Contact Info</div>
                  <div className="flex gap-5">
                    <div className="w-full flex flex-col gap-1 relative">
                      <label className="text-[14px] font-bold" htmlFor="">
                        EMAIL
                      </label>
                      <span className="text-[18px] text-red-700 absolute top-0 left-11">
                        *
                      </span>
                      <input
                        type="text"
                        placeholder="Email"
                        className="border w-full px-2 py-3 text-[16px] font-normal"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-1 relative">
                      <label className="text-[14px] font-bold" htmlFor="">
                        PHONE NUMBER
                      </label>
                      <span className="text-[18px] text-red-700 absolute top-0 left-29">
                        *
                      </span>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="border w-full px-2 py-3 text-[16px] font-normal"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="h-5 w-5 border rounded-[2px]
                 appearance-none checked:bg-black checked:border-black 
                 checked:before:content-['✔'] checked:before:text-white 
                 checked:before:text-[14px] checked:before:font-light 
                 flex items-center justify-center"
                      />
                      <span>
                        Please send me SMS shipping updates about my order
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="h-5 w-5 border rounded-[2px] 
                 appearance-none checked:bg-black checked:border-black
                 checked:before:content-['✔'] checked:before:text-white 
                 checked:before:text-[14px] checked:before:font-light 
                 flex items-center justify-center"
                      />
                      <span>Please add me to the PUMA email list</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-medium">
                      Select a Shipping Method
                    </div>
                    <div className="flex w-full justify-between items-center p-3">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="shipping"
                          className="w-5 h-5 accent-black"
                          checked={selectedOption === "standard"}
                          onChange={() => setSelectedOption("standard")}
                        />
                        <span className="font-semibold">Standard</span>
                      </div>
                      <div className="text-lg font-medium">₹0</div>
                    </div>
                  </div>

                  <div>Enter a Billing Address</div>

                  <div>
                    <div className="flex gap-3 items-center">
                      <input
                        type="checkbox"
                        checked={isSameAddress}
                        onChange={handleCheckboxChange}
                        className="h-5 w-5 border rounded-[2px]
                 appearance-none checked:bg-black checked:border-black 
                 checked:before:content-['✔'] checked:before:text-white 
                 checked:before:text-[14px] checked:before:font-light 
                 flex items-center justify-center"
                      />
                      <span>Billing and Shipping details are the same</span>
                    </div>
                  </div>
                  {!isSameAddress && (
                    <>
                      <div className="flex items-center gap-5">
                        <div className="w-full flex flex-col gap-1 relative">
                          <label className="text-[14px] font-bold" htmlFor="">
                            FIRST NAME
                          </label>
                          <span className="text-[18px] text-red-700 absolute top-0 left-22">
                            *
                          </span>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="border w-full px-2 py-3 text-[16px] font-normal"
                          />
                        </div>
                        <div className="w-full flex flex-col gap-1 relative">
                          <label className="text-[14px] font-bold" htmlFor="">
                            LAST NAME
                          </label>
                          <span className="text-[18px] text-red-700 absolute top-0 left-21">
                            *
                          </span>
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="border w-full px-2 py-3 text-[16px] font-normal"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 relative">
                        <label className="text-[14px] font-bold" htmlFor="">
                          PIN CODE
                        </label>
                        <span className="text-[18px] text-red-700 absolute top-0 left-18">
                          *
                        </span>
                        <input
                          type="text"
                          placeholder="PIN code"
                          className="border w-full px-2 py-3 text-[16px] font-normal"
                        />
                      </div>
                      <div className="flex flex-col gap-1 relative">
                        <label className="text-[14px] font-bold" htmlFor="">
                          ADDRESS LINE 1
                        </label>
                        <span className="text-[18px] text-red-700 absolute top-0 left-29">
                          *
                        </span>
                        <input
                          type="text"
                          placeholder="Address Line 1"
                          className="border w-full px-2 py-3 text-[16px] font-normal"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[14px] font-bold" htmlFor="">
                          ADDRESS LINE 2
                        </label>

                        <input
                          type="text"
                          placeholder="Address Line 2"
                          className="border w-full px-2 py-3 text-[16px] font-normal"
                        />
                      </div>
                      <div className="flex flex-col gap-1 relative">
                        <label className="text-[14px] font-bold" htmlFor="">
                          CITY
                        </label>
                        <span className="text-[18px] text-red-700 absolute top-0 left-8">
                          *
                        </span>
                        <input
                          type="text"
                          placeholder="City"
                          className="border w-full px-2 py-3 text-[16px] font-normal"
                        />
                      </div>
                      <div className="flex gap-5">
                        {/* State Dropdown */}
                        <div className="w-full flex flex-col gap-1 relative">
                          <label className="text-[14px] font-bold">STATE</label>
                          <span className="text-[18px] text-red-700 absolute top-0 left-12">
                            *
                          </span>
                          <select
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                            className="border w-full px-2 py-3 text-[16px] font-normal">
                            <option value="" disabled>
                              Select a state
                            </option>
                            {states.map((state, index) => (
                              <option key={index} value={state}>
                                {state}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Country Dropdown */}
                        <div className="w-full flex flex-col gap-1">
                          <label className="text-[14px] font-bold">
                            COUNTRY
                          </label>
                          <select
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
                            className="border w-full px-2 py-3 text-[16px] font-normal">
                            <option value="" disabled>
                              Select a country
                            </option>
                            {countries.map((country, index) => (
                              <option key={index} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="grid md:grid-cols-2 grid-cols-1">
                    <Link
                      href=""
                      className="border rounded-[2px] py-4 text-center text-white font-bold text-lg bg-[#000000]">
                      CONTINUE TO PAYMENT METHOD
                    </Link>
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="text-[12px] font-normal">
                      By continuing, I confirm that I have read and accept the{" "}
                      {"  "}
                      <span className="underline">
                        Terms and Conditionsand
                      </span>{" "}
                      the {"  "}
                      <span className="underline">Privacy Policy</span>.
                    </div>
                  </div>

                  <div className="py-4 bg-[#eeeeee] px-2">2. PAY</div>
                </form>
              </div>
            </div>
            <div className="grid xl:col-span-4 lg:col-span-4 gap-5">
              <div className="flex flex-col gap-5">
                <OrderDetails />
                <ApplyPromo />
                <div className="border-b border-[#cccccc] "></div>
                <div className="flex gap-2 items-center text-[#818181]">
                  <div className="text-[20px] font-bold">
                    <GrPowerReset />
                  </div>
                  <div className="text-[14px] font-bold">
                    Free returns on all qualifying orders.
                  </div>
                </div>
                <div className="border-b border-[#cccccc] "></div>
                <TotalPrice />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
