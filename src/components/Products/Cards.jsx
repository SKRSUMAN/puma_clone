import { CardDatas } from "@/constant/Products/Cards";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4 sm:gap-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-5">
        {CardDatas.map((item, index) => (
          <div key={index} className="flex flex-col overflow-hidden cursor-pointer ">
            <div className="relative aspect-square w-full">
              <Image
                src={item.img}
                alt={item.name}
                layout="fill"
                objectFit="contain"
                // className="transition-transform duration-300 hover:scale-105"
                priority={index < 4}
              />
            </div>

            <div className="flex flex-1 flex-col bg-white py-5 space-y-3">
              <div className="flex justify-between items-center gap-4">
                <h3 className="truncate text-[16px] font-bold text-gray-900 flex-1">
                  {item.name}
                </h3>
                {item.offerPrice ? (
                  <span className="text-red-600 font-bold">
                    {item.offerPrice}
                  </span>
                ) : (
                  <span className="text-black font-bold">{item.price}</span>
                )}
              </div>
              <div className="flex justify-between items-center gap-4">
                <p className="text-xs text-red-500 truncate flex-1">
                  {item.description || ""}
                </p>
                <span
                  className={`text-large whitespace-nowrap ${
                    item.offerPrice
                      ? "text-gray-500 line-through"
                      : "font-bold text-gray-900"
                  }`}>
                  {item.offerPrice && (
                    <span className="text-gray-500 line-through">
                      {item.price}
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
