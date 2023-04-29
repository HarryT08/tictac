const linksNav = [
  {
    name: "Modelo Tic-Tac",
    link: "cuadro-honor",
  },
  {
    name: "Cuadro honor",
    link: "historicos",
  },
  {
    name: "Herramientas",
    link: "estudiantes",
  },
  {
    name: "Contenido Audiovisual",
    link: "docentes",
  },
];

const NavLinks = () => {
  return (
    <>
      {linksNav.map((link, index) => (
        <div key={index}>
          <div className="text-center md:cursor-pointer m-2 md:mb-0">
            <p className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition duration-300 font-medium">
              {link.name}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
