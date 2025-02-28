"use client";

import { useState } from "react";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-center px-10 my-10 ">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full md:w-[70%] lg:text-5xl md:text-[4xl] text-3xl font-bold mb-15">My account</div>
        <div className="w-full md:w-[55%] lg:w-[35%] flex flex-col justify-center gap-5">
          <div className=" w-full flex flex-col items-center justify-center gap-3">
            <div className="text-xl font-bold">Login / Join Us</div>
            <div className="w-full border-b-2"></div>
            <div className="w-full text-[16px] font-normal mt-5">
              Enter your email and password to log in
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center relative">
            <form action="" className="w-full flex flex-col gap-5 ">
              <div className="w-full flex flex-col gap-2">
                <label className="text-[12px] font-bold" htmlFor="">
                  EMAIL
                </label>
                <span className="text-[20px] text-red-700 absolute -top-1 left-10">
                  *
                </span>
                <input
                  type="text"
                  placeholder="Email"
                  className="border px-2 py-3"
                />
              </div>
              <div className="w-full flex flex-col gap-2 relative">
                <label className="text-[12px] font-bold" htmlFor="">
                  PASSWORD
                </label>
                <span className="text-[20px] text-red-700 absolute -top-1 left-18">
                  *
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="border px-2 py-3"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-12 transform -translate-y-1/2 bg-white rounded-r-xl border-gray-300 cursor-pointer">
                  {showPassword ? (
                    <svg
                      className="h-6 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div className="w-full flex gap-5 items-center cursor-pointer">
                <label className="flex gap-3 items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="w-6 h-6 border-2 border-gray-500 rounded-[2px] appearance-none checked:bg-black checked:border-3 checked:border-[#969ba1] checked:before:content-['✔'] checked:before:text-white checked:before:text-[10px] checked:before:font-normal checked:before:flex checked:before:justify-center checked:before:items-center checked:before:pt-[2px]"
                  />
                  <span>Remember me on this computer</span>
                </label>
              </div>

              <div>
                <button type="submit" className="w-full py-3 bg-[#bdc1c5] text-lg font-bold rounded-[2px] cursor-pointer">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="text-[12px]">
              By logging in, I confirm that I have read and accept the {"  "}
              <span className="underline">
                Terms and Conditionsand
              </span> the {"  "}
              <span className="underline">Privacy Policy</span>.
            </div>
          </div>
          <div className="flex flex-wrap gap-5">
            <div className="border-b-3 border-[#bdc1c5] hover:border-[black] cursor-pointer text-sm font-bold">
              LOGIN WITH OTP
            </div>
            <div className="border-b-3 border-[#bdc1c5] hover:border-[black] cursor-pointer text-sm font-bold">
              FORGOTTEN YOUR PASSWORD?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
