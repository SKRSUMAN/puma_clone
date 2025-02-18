const Block2 = () => {
  return (
    <div 
      className="w-full h-[550px] border bg-cover bg-center flex flex-col gap-5 justify-center px-5 cursor-pointer" 
      style={{ backgroundImage: "url('/Images/Home/Block2/d68e8c58e7bcdeb121a389db543ebd052336edac.jpeg')" }}
    >
    <div className="">
        <h1 className="text-[40px] font-bold text-white">WELCOME TO DREAMLAND</h1>
        <div className=" text-white flex"><div className="text-[25px]">PUMA x AC MILAN x OFF-WHITE</div><div className="text-[14px] mt-[4px]">TM</div></div>
        <h3 className="text-white">LIMITED EDITION</h3>
    </div>
    <div>
        <button className="px-3 py-2 bg-white font-semibold rounded-[2px] cursor-pointer ">SHOP NOW</button>
    </div>
    </div>
  );
};

export default Block2;
