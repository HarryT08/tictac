import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "@/features/home/components";
import { FiAlignRight, FiXCircle, FiLogIn } from "react-icons/fi";
import { Skeleton, Box } from '@mui/material';
import logo from "../../../../public/images/Titalogo.png";
import axios from "axios";
import { Transition } from "@/utils";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const endpoint = "http://localhost:8081/sesion/validarToken";
    const [isLoading, setIsLoading] = useState(true);
    const [isValidated, setIsValidated] = useState(false);
    const token = localStorage.getItem("token");
    let rol = localStorage.getItem("rol")
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const trigger = useRef<HTMLButtonElement>(null);
    const dropdown = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload();
    };
    const validarToken = async () => {
        try {
            const response = await axios.post(endpoint, token, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setIsValidated(response.data.estado);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (localStorage.getItem("token")) {
        validarToken();
    }
    if (isLoading && token) {
        return <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', padding: 2.5 }}>
            <Skeleton variant="circular" width={100} height={100} sx={{ marginRight: 40 }}/>
            <Skeleton width={60} height={40} sx={{ marginInline: 5 }} />
            <Skeleton width={60} height={40} sx={{ marginInline: 5 }} />
            <Skeleton width={60} height={40} sx={{ marginInline: 5 }} />
            <Skeleton width={60} height={40} sx={{ marginInline: 5 }} />
            <Skeleton width={60} height={40} sx={{ marginInline: 5 }} />
        </Box>;
    }
    let plural = "s";
    if (localStorage.getItem("rol") == "Lider PPT") {
        rol = "lider";
        plural = "es"
    }
    else if (localStorage.getItem("rol") == "Admin") {
        rol = "directivo";
    }
    return (
        <nav className="bg-white">
            <div className="flex items-center font-medium justify-around">
                <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                    <img src={logo} alt="logo" className="md:cursor-pointer" width={150} />
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
                <ul className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 duration-500 z-10 ${open ? "left-0" : "left-[-100%]"}`}>
                    <NavLinks setOpen={setOpen} open={open} />
                </ul>
                <ul>
                    {isValidated ? (
                        <div className="relative inline-flex">
                            <button
                                ref={trigger}
                                className="inline-flex justify-center items-center group"
                                aria-haspopup="true"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                aria-expanded={dropdownOpen}
                            >
                                <img
                                    className="w-8 h-8 rounded-full object-cover object-center"
                                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    width="32"
                                    height="32"
                                    alt="User"
                                />
                                <div className="flex items-center truncate">
                                    <span className="truncate ml-2 text-sm font-medium group-hover:text-slate-800">
                                        {localStorage.getItem("nombre") + " " + localStorage.getItem("apellido")}
                                    </span>
                                    <svg
                                        className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                    </svg>
                                </div>
                            </button>
                            <Transition
                                className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
                                show={dropdownOpen}
                                appear
                                unmountOnExit
                                enter="transition ease-out duration-200 transform"
                                enterStart="opacity-0 -translate-y-2"
                                enterEnd="opacity-100 translate-y-0"
                                leave="transition ease-out duration-200"
                                leaveStart="opacity-100"
                                leaveEnd="opacity-0"
                                tag="div"
                            >
                                <div
                                    ref={dropdown}
                                    onFocus={() => setDropdownOpen(true)}
                                    onBlur={() => setDropdownOpen(false)}
                                >
                                    <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
                                        <div
                                            className="font-medium text-slate-800">{localStorage.getItem("documento")}</div>
                                        <div
                                            className="text-xs text-slate-500 italic">{localStorage.getItem("rol")}</div>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link
                                                className="font-medium hover:font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                                                to={"/menu-" + rol + plural}
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="font-medium hover:font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                                                to="/"
                                                onClick={() => handleLogout()}
                                            >
                                                Cerrar sesion
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Transition>
                        </div>
                    ) : (
                        <Link to="/menu" className="py-5 border-none">
                            <button
                                type="button"
                                className="m-auto flex items-center justify-center font-medium gap-2 transition duration-300 hover:text-azul-50"
                            >
                                <FiLogIn className="text-azul-50" />
                                Iniciar sesión
                            </button>
                        </Link>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
