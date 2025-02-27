import productDatas from "@/constant/ProductsDerails/ProductData";
import React from "react";

const ProductStory = () => {
  return (
    <div className="w-full bg-[#f3f3f3] p-10 flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="text-2xl font-bold">PRODUCT STORY</div>
        <div className="text-lg font-normal">
          The PUMA Easy Rider was born in the late '70s, when running made its
          move from the track to the streets. Today it's back with its classic
          slim profile and vintage vibes intact. This version, featuring a
          leather upper and tumbled leather overlays, is sure to become your
          go-to for bringing a touch of easy, retro-style to everyday looks.
        </div>
      </div>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10">
        {productDatas.map((item, index) => (
          <div key={index} className="">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold">{item.category}</div>
              <div className="flex flex-col gap-2">
                {item.items.map((list, index) => (
                  <ul
                    key={index}
                    className={
                      item.category === "Manufacturer's Address" ||
                      item.category === "Country Of Origin"
                        ? ""
                        : "list-disc pl-5 marker:text-[#8a7350]"
                    }>
                    <li className="text-[16px] font-normal">{list}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductStory;
