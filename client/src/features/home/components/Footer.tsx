import tictac from "../../../../public/images/TicTac.png";
import { FiFacebook, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="px-12 py-10 bg-gray-200">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <p className="text-xl font-bold ">Acerca de nosotros</p>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            pariatur.
          </p>
          <img src={tictac} alt="Logo Tic tac" className="w-36 h-36" />
        </div>
        <div className="col-span-1">
          <p className="text-xl font-bold ">Informacion de contacto</p>
          <p className="my-2">Correo: correo@gmail.com</p>
          <p className="mb-2">Telefono: 34567865432</p>
          <p>correo@gmail.com</p>
        </div>
        <div className="col-span-1">
          <p className=" text-xl font-bold">Redes sociales</p>
          <div className="flex items-center gap-2 mt-2">
            <FiFacebook className="text-azul-50 text-lg" />
            <FiInstagram className="text-orange-400 text-lg" />
          </div>
        </div>
      </div>
      <span className="text-sm text-gray-600">
        Copyright ©2023 Todos los derechos reservados | Universidad Francisco de
        Paula Santander
      </span>
    </footer>
  );
};

export default Footer;
