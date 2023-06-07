import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "@/features/home/components";
import { FiAlignRight, FiXCircle, FiLogIn } from "react-icons/fi";
import logo from "../../../../public/images/Titalogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={logo} alt="logo" className="md:cursor-pointer" width={150}/>
          <div
            className="text-3xl md:hidden text-azul-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiXCircle /> : <FiAlignRight />}
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-8">
          <NavLinks setOpen={setOpen} open={open} />
        </ul>
        <Link to="/menu" className="md:block hidden border-none">
          <button className="flex items-center font-medium gap-2 hover:text-azul-50 transition duration-300 text-sm md:text-base">
            <FiLogIn className="text-azul-50" />
            Iniciar sesión
          </button>
        </Link>
        {/* Mobile nav */}
        <ul
          className={`
          md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24
          duration-500 z-10 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <NavLinks setOpen={setOpen} open={open} />
          <Link to="/menu" className="py-5 border-none">
            <button
              type="button"
              className="m-auto flex items-center justify-center font-medium gap-2 transition duration-300 hover:text-azul-50"
            >
              <FiLogIn className="text-azul-50" />
              Iniciar sesión
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
