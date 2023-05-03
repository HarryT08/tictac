type HeaderProps = {
  titulo: string;
};

const Header = ({ titulo }: HeaderProps) => {
  return (
    <h2 className="font-semibold text-2xl md:text-3xl border-b-2 border-gray-400 pb-2">
      {titulo}
    </h2>
  );
};

export default Header;
