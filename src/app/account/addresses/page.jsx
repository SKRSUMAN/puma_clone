import SideBar from '@/components/Account/SideBar'
import React from 'react'
import { FiPlus } from "react-icons/fi";

const page = () => {
  return (
    <div className='w-full flex'> 
      <div className='w-[400px] lg:block hidden'><SideBar/></div>
      <div className='w-full px-10 py-20 flex flex-col gap-10'>
        <div className='text-5xl font-bold'>Addresses</div>
        <div className='flex flex-col gap-10'>
          <div className='text-2xl font-bold'>You have no addresses yet</div>
          <div className='w-full p-8 bg-[#f6f7f8] flex flex-col justify-center items-center gap-2 cursor-pointer'>
            <div><FiPlus className='text-[25px]'/></div>
            <div className='text-sm font-bold border-b-3 hover:border-black border-[#a1a8af]'>ADD NEW ADDRESS</div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default page