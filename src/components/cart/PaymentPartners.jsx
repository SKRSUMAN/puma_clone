import { featuresDatas, paymentPartnersDatas } from '@/constant/cart/PaymentDatas';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const PaymentPartners = () => {
  const [filteredData, setFilteredData] = useState(featuresDatas);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setFilteredData(featuresDatas.slice(0, -1)); // Remove last card on small screens
      } else {
        setFilteredData(featuresDatas);
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full py-20 px-4 flex flex-col items-center gap-10">
      <div className="xl:w-[60%] lg:[w-65%] md:[w-80%] w-full mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center justify-items-center">
        {filteredData.map((item) => (
          <div 
            key={item.id} 
            className=" max-w-[300px] h-full border rounded-lg border-gray-300 flex flex-col gap-3 items-center justify-center p-4 text-center "
          >
            <div className="w-full flex flex-col items-center justify-center text-3xl">
              {item.icon}
            </div>
            <div className="w-full">
              <div className="font-bold text-base">{item.title}</div>
              <div className="text-xs text-gray-600 font-normal leading-tight">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full flex flex-col items-center gap-5'>
        <div className='text-[16px] font-normal'>Our trusted payment partners</div>
        <div className='w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-15'>
            {paymentPartnersDatas.map((items,index)=>(
                <div key={index} >
                    <Image src={items.image} alt='image' width={50} height={50}/>
                </div>

            ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentPartners;