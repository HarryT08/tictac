import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { SidebarLinkGroups } from "../components";
import {FiAward, FiFolder, FiBarChart2, FiUsers, FiTool, FiGrid, FiStar, FiBriefcase} from "react-icons/fi";
import logo from "../../../../public/images/TicTac.png";

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
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-64"
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

              {/* Cuadro honor */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("cuadro-honor") && "bg-slate-900"
                  }`}
              >
                <Link
                  to="/menu-lideres/cuadro-honor"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes("cuadro-honor")
                    ? "hover:text-slate-200"
                    : "hover:text-white"
                    }`}
                >
                  <div className="flex items-center">
                    <FiAward
                      className={`shrink-0 h-6 w-6 ${pathname.includes("cuadro-honor")
                        ? "text-indigo-500"
                        : "text-slate-400"
                        }`}
                    />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Cuadro de honor
                    </span>
                  </div>
                </Link>
              </li>

              {/* Historicos */}

              {/* Contenido audiovisual */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("contenido-audiovisual") && "bg-slate-900"
                  }`}
              >
                <Link
                  to="/menu-lideres/contenido-audiovisual"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes("contenido-audiovisual")
                    ? "hover:text-slate-200"
                    : "hover:text-white"
                    }`}
                >
                  <div className="flex items-center">
                    <FiGrid
                      className={`shrink-0 h-6 w-6 ${pathname.includes("contenido-audiovisual")
                        ? "text-indigo-500"
                        : "text-slate-400"
                        }`}
                    />
                    <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200" style={{ marginLeft: 12 }}>
                      Contenidos Digitales
                    </span>
                  </div>
                </Link>
              </li>

              {/* Herramientas*/}
              {/* <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("herramientas") && "bg-slate-900"
                  }`}
              >
                <Link
                  to="/menu-directivos/herramientas"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes("herramientas")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                    }`}
                >
                  <div className="flex items-center">
                    <FiTool
                      className={`shrink-0 h-6 w-6 ${pathname.includes("herramientas")
                          ? "text-indigo-500"
                          : "text-slate-400"
                        }`}
                    />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Herramientas
                    </span>
                  </div>
                </Link>
              </li> */}
              {/* Fin Herramientas*/}
              <SidebarLinkGroups
                activeCondition={
                  pathname === "/" || pathname.includes("herramientas") || pathname.includes("crear-herramienta") || pathname.includes("peticion-herramienta")
                }
              >
                {(handleClick, open) => {
                  return (
                    <>
                      <NavLink
                        to="/menu-lideres/herramientas"
                        className={`block text-slate-200 truncate transition duration-150${pathname === "/" || pathname.includes("herramientas") || pathname.includes("crear-herramienta") || pathname.includes("peticion-herramienta")
                          ? "hover:text-slate-200"
                          : "hover:text-white"
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between ">
                          <div className="flex items-center">
                            <FiTool
                              className={`shrink-0 h-6 w-6 ${pathname.includes("herramientas") || pathname.includes("crear-herramienta") || pathname.includes("peticion-herramienta")
                                ? "text-indigo-500"
                                : "text-slate-400"
                                }`}
                            />
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Herramientas
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "rotate-180"
                                }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </NavLink>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block ">
                        <ul className={`pl-9 mt-1  ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <Link
                              to="/menu-lideres/herramientas"
                              className={`block text-gray-400 truncate transition duration-150 ${pathname ===
                                "/menu-lideres/herramientas"
                                ? "hover:text-slate-200 text-purple-300"
                                : "hover:text-white"
                                }`}
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Ver Listado
                              </span>
                            </Link>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <Link
                              to="/menu-lideres/crear-herramienta"
                              className={`block text-gray-400 truncate transition duration-150 ${pathname ===
                                "/menu-lideres/crear-herramienta"
                                ? "hover:text-slate-200 text-purple-300"
                                : "hover:text-white"
                                }`}
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Crear Herramienta
                              </span>
                            </Link>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <Link
                              to="/menu-lideres/peticion-herramienta"
                              className={`block text-gray-400 truncate transition duration-150 ${pathname ===
                                "/menu-lideres/peticion-herramienta"
                                ? "hover:text-slate-200 text-purple-300"
                                : "hover:text-white"
                                }`}
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Peticiones
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  );
                }}
              </SidebarLinkGroups>

              {/* Proyectos del docente */}
              <li
                  className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                      pathname.includes("mis-proyectos") && "bg-slate-900"
                  }`}
              >
                <Link
                    to="/menu-lideres/mis-proyectos"
                    className={`block text-slate-200 truncate transition duration-150 ${
                        pathname.includes("mis-proyectos")
                            ? "hover:text-slate-200"
                            : "hover:text-white"
                    }`}
                >
                  <div className="flex items-center">
                    <FiFolder
                        className={`shrink-0 h-6 w-6 ${
                            pathname.includes("mis-proyectos")
                                ? "text-indigo-500"
                                : "text-slate-400"
                        }`}
                    />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Mis proyectos
                    </span>
                  </div>
                </Link>
              </li>

              {/* Planes de trabajo del docente */}
              <li
                  className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                      pathname.includes("mi-plan-trabajo") && "bg-slate-900"
                  }`}
              >
                <NavLink
                    end
                    to="/menu-lideres/mi-plan-trabajo"
                    className={`block text-slate-200 truncate transition duration-150 ${
                        pathname.includes("mi-plan-trabajo")
                            ? "hover:text-slate-200"
                            : "hover:text-white"
                    }`}
                >
                  <div className="flex items-center">
                    <FiBriefcase
                        className={`shrink-0 h-6 w-6 ${
                            pathname.includes("mi-plan-trabajo")
                                ? "text-indigo-500"
                                : "text-slate-400"
                        }`}
                    />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Mi plan de trabajo
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* Docentes*/}
              {/* <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("docentes") && "bg-slate-900"
                  }`}
              >
                <Link
                  to="/menu-lideres/docentes"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes("docentes")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                    }`}
                >
                  <div className="flex items-center">
                    <FiUsers
                      className={`shrink-0 h-6 w-6 ${pathname.includes("docentes")
                          ? "text-indigo-500"
                          : "text-slate-400"
                        }`}
                    />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Docentes
                    </span>
                  </div>
                </Link>
              </li> */}

              {/* Estudiantes */}
              {/* <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("estudiantes") && "bg-slate-900"
                  }`}
              >
                <NavLink
                  end
                  to="/menu-lideres/estudiantes"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes("estudiantes")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                    }`}
                >
                  <div className="flex items-center">
                    <FiUsers
                      className={`shrink-0 h-6 w-6 ${pathname.includes("estudiantes")
                          ? "text-indigo-500"
                          : "text-slate-400"
                        }`}
                    />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Estudiantes
                    </span>
                  </div>
                </NavLink>
              </li> */}

              {/* Estadisticas */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("estadisticas") && "bg-slate-900"
                  }`}
              >
                <Link
                  to="/menu-lideres/estadisticas"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes("estadisticas")
                    ? "hover:text-slate-200"
                    : "hover:text-white"
                    }`}
                >
                  <div className="flex items-center">
                    <FiBarChart2
                      className={`shrink-0 h-6 w-6 ${pathname.includes("estadisticas")
                        ? "text-indigo-500"
                        : "text-slate-400"
                        }`}
                    />
                    {/* <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${
                          pathname.includes("estadisticas")
                            ? "text-indigo-500"
                            : "text-slate-600"
                        }`}
                        d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z"
                      />
                      <path
                        className={`fill-current ${
                          pathname.includes("estadisticas")
                            ? "text-indigo-300"
                            : "text-slate-400"
                        }`}
                        d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z"
                      />
                    </svg> */}
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Estadisticas
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
