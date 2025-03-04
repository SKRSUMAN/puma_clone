import React from 'react'

const TotalPrice = () => {
  return (
    <div className='flex  flex-col gap-5'>
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
    </div>
  )
}

export default TotalPrice