import { PhotoScrollDatas } from "@/constant/ProductsDerails/PhotoScroll";
import Image from "next/image";
import React from "react";

const Photos = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full">
      <div className="w-full grid grid-cols-2 gap-5">
        {PhotoScrollDatas.map((items) => (
          <div key={items.id} className="w-full">
            <Image
              src={items.img}
              alt="Shoes Images"
              width={250}
              height={250}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
});

Photos.displayName = "Photos";

export default Photos;