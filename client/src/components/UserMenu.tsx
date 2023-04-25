const UserMenu = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer text-gray-200 hover:text-white transition duration-200">
      <img
        src="../../public/images/Coordinador.jpg"
        alt="foto-perfil"
        className="w-10 h-10 object-cover rounded-full"
      />
      <div>
        <p className="text-sm  ">Nombre</p>
      </div>
    </div>
  );
};

export default UserMenu;
