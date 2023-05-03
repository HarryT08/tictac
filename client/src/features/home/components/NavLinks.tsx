import { Link } from "react-scroll";

const linksNav = [
  {
    name: "Modelo Tic-Tac",
    link: "modelo-tictac",
  },
  {
    name: "Cuadro honor",
    link: "cuadro-honor",
  },
  {
    name: "Herramientas",
    link: "herramientas",
  },
  {
    name: "Contenido Audiovisual",
    link: "contenido-audiovisual",
  },
];

interface NavLinksProps {
  setOpen: (open: boolean) => void;
  open: boolean;
}

const NavLinks = ({ setOpen, open }: NavLinksProps) => {
  return (
    <>
      {linksNav.map((link, index) => (
        <div key={index}>
          <Link
            to={link.link}
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className="text-center text-sm md:text-base md:cursor-pointer m-2 md:mb-0"
          >
            <p
              onClick={() => setOpen(!open)}
              className="px-3 py-2 bg-gray-100 hover:bg-gray-200 hover:text-black rounded-full transition duration-300 font-medium"
            >
              {link.name}
            </p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
