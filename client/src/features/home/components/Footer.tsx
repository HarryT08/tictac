import tictac from "../../../../public/images/TicTac.png";
import { FiFacebook, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="px-12 py-10 bg-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1">
          <p className="text-lg md:text-xl font-bold">Acerca de nosotros</p>
          <p className="my-2 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            pariatur.
          </p>
          <img src={tictac} alt="Logo Tic tac" width={300} />
        </div>
        <div className="col-span-1">
          <p className="text-lg md:text-xl font-bold">Informacion de contacto</p>
          <p className="my-2 text-sm md:text-base">Correo: correo@gmail.com</p>
          <p className="mb-2 text-sm md:text-base">Telefono: 34567865432</p>
          <p className="text-sm md:text-base">correo@gmail.com</p>
        </div>
        <div className="col-span-1">
          <p className="text-lg md:text-xl font-bold">Redes sociales</p>
          <div className="flex items-center gap-2 mt-2">
            <FiFacebook className="text-azul-50 text-base md:text-lg" />
            <FiInstagram className="text-orange-400 text-base md:text-lg" />
          </div>
        </div>
      </div>
      <span className="text-xs md:text-sm text-gray-600">
        Copyright ©2023 Todos los derechos reservados | Universidad Francisco de
        Paula Santander
      </span>
    </footer>
  );
};

export default Footer;
