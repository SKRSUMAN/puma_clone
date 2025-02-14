"use client";

import { useState } from "react";
import { SiPuma } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoMenu } from "react-icons/io5";
import { Badge, Drawer } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import Link from "next/link";
import SearchBox from "@/components/Home/Search/SearchBox";

const Navbar = () => {
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <nav className="relative bg-[#181818] text-white w-full h-20 flex justify-between items-center px-4 lg:px-10">
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

      <div className="hidden lg:flex items-center space-x-5 font-bold hover:text-[#918e8e]">
        <Link href="/" className="text-white">
          <SiPuma size={34} />
        </Link>
        {[
          {
            name: "New",
            href: "/new",
            icon: (
              <ElectricBoltIcon
                sx={{ color: "#FFC83D", fontSize: "22px", paddingLeft: "2px" }}
              />
            ),
          },
          { name: "Men", href: "/men" },
          { name: "Women", href: "/women" },
          { name: "Sports", href: "/sports" },
          { name: "Motorsports", href: "/motorsports" },
          { name: "Collaborations", href: "/collaborations" },
          { name: "Kids", href: "/kids" },
          { name: "Outlet", href: "/outlet" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="hover:border-[#8A7350] hover:border-b-2 hover:text-white transition text-[16px]">
            {item.name} {item.icon && <span>{item.icon}</span>}
          </Link>
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
          <button className="cursor-pointer border border-transparent rounded-full transition-all p-3 hover:bg-[#404040] flex items-center">
            <PersonIcon fontSize="medium" />
          </button>
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
