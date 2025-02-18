const Block3 = () => {
  return (
    <div className='w-full h-[550px] bg-cover bg-center flex flex-col gap-5 justify-center px-16 cursor-pointer' style={{ backgroundImage: "url('/Images/Home/Block3/f571697198c0088cf47433371305eac19fe134ae.jpeg')" }}>
        <div className="hidden sm:block">
        <h1 className="text-[40px] font-bold text-white">PUMA x TMNT</h1>
        <h2 className="text-[24px] text-white">UP FROM THE UNDERGROUND</h2>
        </div>
    <div className="hidden sm:block">
        <button className="px-3 py-2 bg-white hover:bg-[#DFE0E1] font-semibold rounded-[2px] cursor-pointer ">SHOP NOW</button>
    </div>
    </div>
  )
}

export default Block3