import { Block1Datas } from "@/constant/Home/Block1Data";
import Image from "next/image";
import Link from "next/link";

const Block1 = () => {
  return (
    <div className="w-full lg:px-15 px-5 lg:py-5 py-2 md:my-10 ">
      <div className="flex lg:flex-nowrap justify-start gap-5 overflow-x-auto">
        {Block1Datas.map((items, index) => (
          <Link
            key={index}
            href={"/"}
            className="flex flex-col w-[32%] "
          >
            <div className="flex w-full mb-3">
              <Image
                src={items.img}
                alt="puma image"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between my-2">
              <p className="font-semibold">{items.name}</p>
              <p className="font-semibold">{items.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Block1;
