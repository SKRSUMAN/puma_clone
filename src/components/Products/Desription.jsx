import { DescriptionDatas } from "@/constant/Products/Description";

const Desription = () => {
  return (
    <div className="w-full flex px-3 md:px-0">
      <div className="w-full flex flex-col gap-5">
        {DescriptionDatas.map((item,index)=>(
        <div className="flex flex-col gap-5" key={index }>
        <div className="text-[25px] font-bold">{item.title}</div>
        <div className="text-[15px] ">{item.description}</div>
        </div>
        ))}

      </div>
    </div>
  );
};

export default Desription;
