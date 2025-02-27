"use client";

import { useState } from "react";
import { SiPuma } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoMenu } from "react-icons/io5";
import { Badge, Drawer, Tooltip } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import Link from "next/link";
import SearchBox from "@/components/Home/Search/SearchBox";
import DropdownMenu from "@/components/Navbar/DropdownMenu";
import { TooltipDatas } from "@/constant/Navbar/TooltipData";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [show, setShow] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleSearch = () => {
    setSearch(!search);
  };

  const menuItems = [
    {
      name: "New",
      href: "/products/new",
      icon: (
        <ElectricBoltIcon
          style={{ color: "#FFC83D", fontSize: "22px", paddingLeft: "2px" }}
        />
      ),
    },
    { name: "Men", href: "/products/men" },
    { name: "Women", href: "/products/women" },
    { name: "Sports", href: "/products/sports" },
    { name: "Motorsports", href: "/products/motorsports" },
    { name: "Collaborations", href: "/products/collaborations" },
    { name: "Kids", href: "/products/kids" },
    { name: "Outlet", href: "/products/outlet" },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-[1000] bg-[#181818] text-white w-full h-20 flex justify-between items-center px-4 lg:px-10">
      <div className="lg:hidden flex gap-5">
        <Link href="/" className="text-white">
          <IoMenu size={30} />
        </Link>
        <button onClick={handleSearch}>
          <SearchIcon className="text-white" />
        </button>
      </div>

      <div className="block lg:hidden">
        <Link href="/">
          <SiPuma size={44} />
        </Link>
      </div>

      <div className="hidden lg:flex items-center space-x-5 font-bold">
        <Link href="/" className="text-white">
          <SiPuma size={34} />
        </Link>

        <DropdownMenu show={show} setShow={setShow} />

        {menuItems.map((item) => (
          <div
            key={item.name}
            onMouseEnter={() => setShow(item.name)}
            onMouseLeave={() => setShow(null)}
            className="relative h-20 flex items-center">
            <Link
              href={item.href}
              className="hover:border-[#8A7350] hover:border-b-2 hover:text-white transition text-[16px]">
              {item.name} {item.icon && <span>{item.icon}</span>}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden lg:flex items-center gap-3">
          <div className="relative border border-text-[#6F4F4F]">
            <button
              onClick={handleSearch}
              className="flex items-center gap-2 px-4 py-2 cursor-pointer">
              <SearchIcon className="text-white" />
              <p>SEARCH</p>
            </button>
          </div>
          <button className="cursor-pointer border border-transparent rounded-full transition-all p-3 hover:bg-[#404040]">
            <FaRegHeart size={20} />
          </button>
        </div>

        <div className="flex flex-row-reverse lg:flex-row lg:gap-3 gap-0">
          <button className="cursor-pointer border border-transparent rounded-full transition-all p-3 hover:bg-[#404040] flex items-center">
            <Badge badgeContent={2} color="error">
              <IoCartOutline size={25} />
            </Badge>
          </button>
          <Tooltip
  title={
    <div className="w-full flex flex-col gap-3">
      {TooltipDatas.map((items, index) => (
        <div key={index}>
          {/* Row content: Title + Optional Language */}
          <div className="text-lg sm:text-base flex justify-between items-center cursor-pointer">
            <Link href={items.href}>{items.title}</Link>

            {items.title === "Language" && (
              <span className="flex items-center gap-1">
                EN
                <img
                  src="/flag-for-india-svgrepo-com.svg"
                  alt="India Flag"
                  className="w-7 h-7 sm:w-5 sm:h-5"
                />
              </span>
            )}
          </div>

          {/* Add border ONLY if not the last item */}
          {index !== TooltipDatas.length - 1 && (
            <div className="border-b border-[#babdc1] mt-2"></div>
          )}
        </div>
      ))}

      <div className="flex flex-col gap-3 mt-3">
        <button className="border text-[16px] sm:text-[14px] bg-[#000000] hover:bg-[#3b4047] text-white py-3 sm:py-2 cursor-pointer">
          LOGIN
        </button>
        <button className="border text-[16px] sm:text-[14px] py-3 sm:py-2 cursor-pointer">
          JOIN US
        </button>
      </div>
    </div>
  }
  arrow
  open={open}
  onClose={handleClick}
  componentsProps={{
    tooltip: {
      style: {
        backgroundColor: "white",
        color: "black",
        fontSize: "14px",
        padding: "15px 20px",
        borderRadius: "6px",
        minWidth: "360px", // Default width
        maxWidth: "90vw",  // Adjust width for smaller screens
      },
    },
    arrow: {
      style: { color: "white" },
    },
  }}
>
  <button
    onClick={handleClick}
    className="cursor-pointer border border-transparent rounded-full transition-all p-3 sm:p-2 hover:bg-[#404040] flex items-center"
  >
    <PersonIcon fontSize="medium" />
  </button>
</Tooltip>



        </div>
      </div>

      <Drawer anchor="top" open={search} onClose={handleSearch}>
        <div className="text-black w-full bg-white">
          <SearchBox handleSearch={handleSearch} />
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
