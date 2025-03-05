import { menuItems } from "@/constant/Accounts/MenuData";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex h-[100vh] ">
      <div className="lg:w-[25%] w-full bg-[#f6f7f8] border p-10">
        <div className="flex flex-col items-center justify-center gap-5">
            {menuItems.map((items, index)=>(
                <div key={index} className="w-full flex flex-col items-center justify-center">
                    <div className={`w-full flex items-center gap-5 p-5 hover:bg-[#dfe0e1] cursor-pointer 
              ${index === 0 ? "border-l-2 bg-white" : ""}`}>
                        <div className="text-[22px] font-bold">{items.icon}</div>
                        <div className="text-[16px] font-bold">{items.name}</div>
                    </div>
                </div>
            ))}
        </div>
      </div>
      <div className="hidden lg:block w-[75%] border">asd

      </div>
    </div>
  );
};

export default page;
