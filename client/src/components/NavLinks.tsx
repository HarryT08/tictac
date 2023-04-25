import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

const linksNav = [
  {
    name: "Cuadro Honor",
    link: "cuadro-honor",
  },
  {
    name: "Historicos",
    link: "historicos",
    subMenu: true,
    subLinks: [
      {
        name: "Herramientas",
        link: "historicos/herramientas",
      },
      {
        name: "Proyecto de aula",
        link: "historicos/proyecto-aula",
      },
      {
        name: "Plan de trabajo",
        link: "historicos/plan-trabajo",
      },
      {
        name: "Contenido audiovisual",
        link: "historicos/contenido-audiovisual",
      },
    ],
  },
  {
    name: "Estudiantes",
    link: "estudiantes",
  },
  {
    name: "Docentes",
    link: "docentes",
  },
  {
    name: "Estadisticas",
    link: "estadisticas",
  },
];

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {linksNav.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <Link
              to={link.link}
              className="py-7 transition duration-200 flex justify-between items-center md:pr-0 pr-5 group text-gray-200 hover:text-white border-b-2 border-transparent hover:border-white"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {link.subLinks && (
                <div>
                  <span className="text-xl md:hidden inline">
                    {heading === link.name ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </span>
                  <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                    <FiChevronDown />
                  </span>
                </div>
              )}
            </Link>
            {link.subLinks && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute
                mt-1 bg-azul-200 rotate-45"
                    ></div>
                  </div>
                  <div className="bg-azul-200 grid grid-cols-2 gap-10 p-5">
                    {link.subLinks.map((mysublinks, index) => (
                      <div key={index} className="">
                        <Link
                          to={mysublinks.link}
                          className="text-sm transition duration-200 text-gray-200 hover:text-white py-3 border-b-2 border-transparent hover:border-white"
                        >
                          {mysublinks.name}
                        </Link>
                        {}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menu */}
          <div
            className={`
               ${heading === link.name ? "md:hidden" : "hidden"}
             `}
          >
            {/* SubLinks */}
            {link.subLinks && (
              <div className="bg-azul-200 p-5">
                {link.subLinks.map((mySubLinks, index) => (
                  <div key={index} className="py-3">
                    <Link
                      to={mySubLinks.link}
                      className="text-sm text-white py-3 border-b-2 border-transparent hover:border-white transition duration-200"
                      onClick={() =>
                        subHeading !== mySubLinks.name
                          ? setSubHeading(mySubLinks.name)
                          : setSubHeading("")
                      }
                    >
                      {mySubLinks.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
