import { useState } from "react";
import { NavLinks, UserMenu } from "@/components";
import { FiAlignJustify, FiArrowLeft } from "react-icons/fi";
import logo from "../../public/images/TicTac.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-azul-200">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={logo} alt="logo" className="md:cursor-pointer h-10" />
          <div
            className="text-3xl md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiArrowLeft /> : <FiAlignJustify />}
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-8">
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <UserMenu />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
      md:hidden bg-azul-200 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
      duration-500 ${open ? "left-0" : "left-[-100%]"}
      `}
        >
          <NavLinks />
          <div className="py-5">
            <UserMenu />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
