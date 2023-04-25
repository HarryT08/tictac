interface HeaderProps {
  titulo: string;
  subtitulo: string;
}

const Header = ({ titulo, subtitulo }: HeaderProps) => {
  return (
    <>
      <h2 className="p-3 w-3/4 text-2xl font-bold rounded-md bg-gray-100 uppercase">
        {titulo}
      </h2>
      <p className="p-3 w-1/4 relative bottom-3 text-lg font-semibold rounded-md bg-azul-200 text-white uppercase">
        {subtitulo}
      </p>
    </>
  );
};

export default Header;
