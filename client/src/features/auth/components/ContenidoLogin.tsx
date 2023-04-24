import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useMostrarPassword } from "@/features/auth/hooks/useMostrarPassword";

export const FormularioLoginEstudiantesPrimaria = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="bg-[url('../../../../public/images/imageForm1.png')] bg-cover bg-center bg-no-repeat w-3/4"></div>
      <div className="w-2/5 flex justify-center items-center">
        <div className="p-3 w-2/3">
          <h1 className="font-semibold text-3xl text-center underline">
            Inicio de sesión
          </h1>
          <form className="mt-14">
            <div>
              <label className="font-semibold text-lg">
                Nombre del estudiante
              </label>
              <div className="flex items-center gap-2 focus-within:outline outline-2 outline-azul-50 rounded-lg border-2 border-gris-50 hover:border-gris-100 mt-2">
                <div className="p-2 bg-gray-200 rounded-tl-lg rounded-bl-lg">
                  <FiUser className="" size={20} />
                </div>
                <input
                  className=" focus:outline-none w-full border-none"
                  type="text"
                  placeholder="Juanito Perez"
                />
              </div>
            </div>
            <div className="my-6">
              <label className="font-semibold text-lg">
                Codigo del estudiante
              </label>
              <div className="flex items-center gap-2 focus-within:outline outline-2 outline-azul-50 rounded-lg border-2 border-gris-50 hover:border-gris-100 mt-2">
                <div className="p-2 bg-gray-200 rounded-tl-lg rounded-bl-lg">
                  <FiLock className="" size={20} />
                </div>
                <input
                  className=" focus:outline-none w-full border-none"
                  type="number"
                  placeholder="30"
                />
              </div>
            </div>
            <button className="w-full bg-azul-50 hover:bg-azul-100 rounded-lg text-white text-medium p-2">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const FormularioLoginEstudiantesPrimariaSecundaria = () => {
  const { mostrarPassword, toggleMostrarPassword, handleChange, password } =
    useMostrarPassword();

  return (
    <div className="w-full h-screen flex">
      <div className="bg-[url('../../../../public/images/imageForm1.png')] bg-cover bg-center bg-no-repeat w-3/4"></div>
      <div className="w-2/5 flex justify-center items-center">
        <div className="p-3 w-2/3">
          <h1 className="font-semibold text-3xl text-center underline">
            Inicio de sesión
          </h1>
          <form className="mt-14">
            <div>
              <label className="font-semibold text-lg">
                Correo electronico
              </label>
              <div className="flex items-center gap-2 focus-within:outline outline-2 outline-azul-50 rounded-lg border-2 border-gris-50 hover:border-gris-100 mt-2">
                <div className="p-2 bg-gray-200 rounded-tl-lg rounded-bl-lg">
                  <FiUser className="" size={20} />
                </div>
                <input
                  className=" focus:outline-none w-full border-none"
                  type="text"
                  placeholder="Juanito Perez"
                />
              </div>
            </div>
            <div className="my-6">
              <label className="font-semibold text-lg">Contraseña</label>
              <div className="flex items-center gap-2 focus-within:outline outline-2 outline-azul-50 rounded-lg border-2 border-gris-50 hover:border-gris-100 mt-2">
                <div className="p-2 bg-gray-200 rounded-tl-lg rounded-bl-lg">
                  <FiLock className="" size={20} />
                </div>
                <input
                  className="focus:outline-none w-full border-none"
                  value={password}
                  onChange={handleChange}
                  type={mostrarPassword ? "text" : "password"}
                />
                <button
                  className="p-2 bg-gray-200 rounded-tr-lg rounded-br-lg"
                  type="button"
                  onClick={toggleMostrarPassword}
                >
                  {mostrarPassword ? (
                    <FiEye className="" size={20} />
                  ) : (
                    <FiEyeOff className="" size={20} />
                  )}
                </button>
              </div>
            </div>
            <button className="w-full bg-azul-50 hover:bg-azul-100 rounded-lg text-white text-medium p-2">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const FormularioLoginDirectivosProfesores = () => {
  const { mostrarPassword, toggleMostrarPassword, handleChange, password } =
    useMostrarPassword();

  return (
    <div className="w-full h-screen flex">
      <div className="bg-[url('../../../../public/images/imageForm1.png')] bg-cover bg-center bg-no-repeat w-3/4"></div>
      <div className="w-2/5 flex justify-center items-center">
        <div className="p-3 w-2/3">
          <h1 className="font-semibold text-3xl text-center underline">
            Inicio de sesión
          </h1>
          <form className="mt-14">
            <div>
              <label className="font-semibold text-lg">
                Correo electronico
              </label>
              <div className="flex items-center gap-2 focus-within:outline outline-2 outline-azul-50 rounded-lg border-2 border-gris-50 hover:border-gris-100 mt-2">
                <div className="p-2 bg-gray-200 rounded-tl-lg rounded-bl-lg">
                  <FiUser className="" size={20} />
                </div>
                <input
                  className=" focus:outline-none w-full border-none"
                  type="text"
                  placeholder="Juanito Perez"
                />
              </div>
            </div>
            <div className="my-6">
              <label className="font-semibold text-lg">Contraseña</label>
              <div className="flex items-center gap-2 focus-within:outline outline-2 outline-azul-50 rounded-lg border-2 border-gris-50 hover:border-gris-100 mt-2">
                <div className="p-2 bg-gray-200 rounded-tl-lg rounded-bl-lg">
                  <FiLock className="" size={20} />
                </div>
                <input
                  className="focus:outline-none w-full border-none"
                  value={password}
                  onChange={handleChange}
                  type={mostrarPassword ? "text" : "password"}
                />
                <button
                  className="p-2 bg-gray-200 rounded-tr-lg rounded-br-lg"
                  type="button"
                  onClick={toggleMostrarPassword}
                >
                  {mostrarPassword ? (
                    <FiEye className="" size={20} />
                  ) : (
                    <FiEyeOff className="" size={20} />
                  )}
                </button>
              </div>
            </div>
            <button className="w-full bg-azul-50 hover:bg-azul-100 rounded-lg text-white text-medium p-2">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
