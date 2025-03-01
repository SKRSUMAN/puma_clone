"use client";

import { Tab, Tabs } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full px-30 py-10">
      <div className="w-full flex flex-col gap-5 ">
        <div className="text-[32px] font-bold"> CHECKOUT</div>
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="checkout tabs"
            sx={{
              "& .MuiTab-root": {
                fontWeight: "bold",
                color: "#999999", // Default tab text color
                textTransform: "none",
                borderBottom: "2px solid #ccc", // Default border for all tabs
                marginRight: "20px !important", // Space between tabs
                padding: "4px 12px", // Adjust spacing inside the tab
                minHeight: "32px", // Compact height
              },
              "& .Mui-selected": {
                color: "black !important", // Selected tab text color
                fontWeight: "bold",
                borderBottom: "2px solid black !important", // Change border to black when selected
              },
              "& .MuiTabs-indicator": {
                display: "none", // Hide default underline indicator
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
          <div className="grid grid-cols-10 gap-5">
            <div className="grid col-span-6 gap-5">
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
                Enter a Shipping Address
              </div>
              <div>
                <form action="">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-5">
                      <label htmlFor="">First Name</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="border"
                      />
                    </div>
                    <div>
                      <label htmlFor="">LAST NAME</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="border"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="">PIN CODE</label>
                    <input
                      type="text"
                      placeholder="PIN code"
                      className="border"
                    />
                  </div>
                  <div>
                    <label htmlFor="">ADDRESS LINE 1</label>
                    <input
                      type="text"
                      placeholder="Address Line 1"
                      className="border"
                    />
                  </div>
                  <div>
                    <label htmlFor="">ADDRESS LINE 2</label>
                    <input
                      type="text"
                      placeholder="Address Line 2"
                      className="border"
                    />
                  </div>
                  <div>
                    <label htmlFor="">CITY</label>
                    <input type="text" placeholder="City" className="border" />
                  </div>
                  <div>
                    <div>
                      <label htmlFor="">STATE</label>
                      <input
                        type="text"
                        placeholder="State"
                        className="border"
                      />
                    </div>
                    <div>
                      <label htmlFor="">STATE</label>
                      <input
                        type="text"
                        placeholder="State"
                        className="border"
                      />
                    </div>
                  </div>
                  <div>Enter Contact Info</div>
                  <div>
                    <div>
                      <label htmlFor="">EMAIL</label>
                      <input
                        type="text"
                        placeholder="Email"
                        className="border"
                      />
                    </div>
                    <div>
                      <label htmlFor="">PHONE NUMBER</label>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="border"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <input type="checkbox" />
                      <span>
                        Please send me SMS shipping updates about my order
                      </span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span>Please add me to the PUMA email list</span>
                    </div>
                  </div>
                  <div>
                    <div>Select a Shipping Method</div>
                    <div>
                        <div>
                            <input type="chekbox" />
                            <span>Standard</span>
                        </div>
                        <div>₹0</div>
                    </div>
                  </div>
                  <div>
                  Enter a Billing Address
                  </div>

                  <div>
                    <div>
                        <input type="checkbox" />
                        <span>Billing and Shipping details are the same</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="">First Name</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="border"
                      />
                    </div>
                    <div>
                      <label htmlFor="">LAST NAME</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="border"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="">PIN CODE</label>
                    <input
                      type="text"
                      placeholder="PIN code"
                      className="border"
                    />
                  </div>
                  <div>
                    <label htmlFor="">ADDRESS LINE 1</label>
                    <input
                      type="text"
                      placeholder="Address Line 1"
                      className="border"
                    />
                  </div>
                  <div>
                    <label htmlFor="">ADDRESS LINE 2</label>
                    <input
                      type="text"
                      placeholder="Address Line 2"
                      className="border"
                    />
                  </div>
                  <div>
                    <label htmlFor="">CITY</label>
                    <input type="text" placeholder="City" className="border" />
                  </div>
                  <div>
                    <div>
                      <label htmlFor="">STATE</label>
                      <input
                        type="text"
                        placeholder="State"
                        className="border"
                      />
                    </div>
                    <div>
                      <label htmlFor="">STATE</label>
                      <input
                        type="text"
                        placeholder="State"
                        className="border"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    <Link href="" className="border py-3 text-center bg-[#bdc1c5]">CONTINUE TO PAYMENT METHOD</Link>
                  </div>

                  <div className="text-[12px] font-normal">
              By continuing, I confirm that I have read and accept the {"  "}
              <span className="underline">
                Terms and Conditionsand
              </span> the {"  "}
              <span className="underline">Privacy Policy</span>.
            </div>

            <div className="py-4 bg-[#eeeeee] px-2">2. PAY</div>

                </form>
              </div>
            </div>
            <div className="grid col-span-4">asdad</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
