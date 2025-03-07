import { menuItems } from '@/constant/Accounts/MenuData'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className="lg:max-w-[300px] w-full bg-[#f6f7f8] py-12 md:px-8 px-0">
            <div className="flex flex-col items-center justify-center gap-3">
              {menuItems.map((items, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-center">
                  <Link  href={items.path}
                    className={`w-full flex items-center gap-5 p-5 hover:bg-[#dfe0e1] cursor-pointer 
                  ${index === 0 ? "border-l-2 bg-white" : ""}`}>
                    <div className="text-[23px] font-bold">{items.icon}</div>
                    <div className="text-[16px] font-bold">{items.name}</div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-10 mt-5 items-start px-5 lg:px-0">
              <div className="text-lg font-bold ">Need Help?</div>
              <div className="text-[14px] font-bold border-b-3 leading-3 cursor-pointer">
                LOGOUT
              </div>
            </div>
          </div>
  )
}

export default SideBar