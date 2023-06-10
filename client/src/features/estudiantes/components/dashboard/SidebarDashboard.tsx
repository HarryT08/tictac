import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import {FiFolder, FiGrid, FiStar} from "react-icons/fi";
import logo from "../../../../../public/images/TicTac.png";

interface SidebarDashboardProps {
  setSidebarOpen: (open: boolean) => void;
  sidebarOpen: boolean;
}

const SidebarDashboard = ({
  setSidebarOpen,
  sidebarOpen,
}: SidebarDashboardProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(event.target as Node) ||
        trigger.current.contains(event.target as Node)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    const body = document.querySelector("body");
    if (body) {
      if (sidebarExpanded) {
        body.classList.add("sidebar-expanded");
      } else {
        body.classList.remove("sidebar-expanded");
      }
    }
  }, [sidebarExpanded]);

  return (
    <div>
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <Link to="/" className="block border-none hover:border-none">
            <img src={logo} alt="" width={200} height={200} />
          </Link>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages groups */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span>
            </h3>
            <ul className="mt-3">

              {/* Inicio */}
              <li
                  className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                      pathname.includes("inicio") && "bg-slate-900"
                  }`}
              >
                <Link
                    to="/"
                    className={`block text-slate-200 truncate transition duration-150 ${
                        pathname.includes("inicio")
                            ? "hover:text-slate-200"
                            : "hover:text-white"
                    }`}
                >
                  <div className="flex items-center">
                    <FiStar
                        className={`shrink-0 h-6 w-6 ${
                            pathname.includes("inicio")
                                ? "text-indigo-500"
                                : "text-slate-400"
                        }`}
                    />
                    <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Inicio
                    </span>
                  </div>
                </Link>
              </li>

              {/* Contenido audiovisual */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("contenido-audiovisual") && "bg-slate-900"
                }`}
              >
                <Link
                  to="/menu-estudiantes/contenido-audiovisual"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("contenido-audiovisual")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <FiGrid
                      className={`shrink-0 h-6 w-6 ${
                        pathname.includes("contenido-audiovisual")
                          ? "text-indigo-500"
                          : "text-slate-400"
                      }`}
                    />
                    <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Contenido audiovisual
                    </span>
                  </div>
                </Link>
              </li>

              {/* Proyectos de aula */}
              <li
                  className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                      pathname.includes("proyecto-aula") && "bg-slate-900"
                  }`}
              >
                <Link
                    to="/menu-estudiantes/proyecto-aula"
                    className={`block text-slate-200 truncate transition duration-150 ${
                        pathname.includes("proyecto-aula")
                            ? "hover:text-slate-200"
                            : "hover:text-white"
                    }`}
                >
                  <div className="flex items-center">
                    <FiFolder
                        className={`shrink-0 h-6 w-6 ${
                            pathname.includes("proyecto-aula")
                                ? "text-indigo-500"
                                : "text-slate-400"
                        }`}
                    />
                    <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Mis proyectos de aula
                    </span>
                  </div>
                </Link>
              </li>

            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDashboard;
