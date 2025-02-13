import { SiPuma } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Badge } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#181818] text-white w-full h-20 flex justify-between items-center px-6 lg:px-10">
      <div className="hidden lg:flex items-center space-x-7 font-bold hover:text-[#918e8e]">
        <Link href="/" className="text-white">
          <SiPuma size={34} />
        </Link>
        {[
          { name: "New", href: "/new", icon: <ElectricBoltIcon sx={{ color: "#FFC83D", fontSize: "22px", paddingLeft: "2px" }} /> },
          { name: "Men", href: "/men" },
          { name: "Women", href: "/women" },
          { name: "Sports", href: "/sports" },
          { name: "Motorsports", href: "/motorsports" },
          { name: "Collaborations", href: "/collaborations" },
          { name: "Kids", href: "/kids" },
          { name: "Outlet", href: "/outlet" }
        ].map((item) => (
          <Link key={item.name} href={item.href} className="hover:border-[#8A7350] hover:border-b-2 hover:text-white transition">
            {item.name} {item.icon && <span>{item.icon}</span>}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <div className="hidden lg:flex items-center gap-5">
          <div className="relative">
            <SearchIcon className="absolute top-2 left-3 text-gray-400" />
            <input
              type="text"
              className="border border-gray-500 text-white bg-transparent p-2 rounded pl-10 w-[130px] text-bold placeholder:text-sm placeholder:font-bold placeholder:text-gray-400 cursor-pointer hover:border-white"
              placeholder="SEARCH"
            />
          </div>
          <button className="cursor-pointer border border-transparent rounded-full transition-all p-3 hover:bg-[#404040]">
            <FaRegHeart size={20} />
          </button>
        </div>

        <div className="flex flex-row-reverse lg:flex-row gap-5">
          <button className="cursor-pointer border border-transparent rounded-full transition-all p-3 hover:bg-[#404040] flex items-center">
            <Badge badgeContent={4} color="error">
              <IoCartOutline size={25} />
            </Badge>
          </button>
          <button className="cursor-pointer border border-transparent rounded-full transition-all p-3 hover:bg-[#404040] flex items-center">
            <PersonIcon fontSize="medium" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
