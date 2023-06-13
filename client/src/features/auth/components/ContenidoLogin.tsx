import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
//import { useMostrarPassword } from "@/features/auth/hooks/useMostrarPassword";
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const FormularioLoginEstudiantesPrimaria = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-3/4 lg:block hidden bg-[url('../../../../public/images/preescolar.png')] bg-cover bg-center bg-no-repeat"></div>
      <div className="w-full lg:w-2/5 flex justify-center items-center">
        <div className="p-3 w-2/3">
          <h1 className="font-semibold text-3xl text-center underline">
            Inicio de sesión
          </h1>
          <form className="mt-14">
            <div>
              <label className="font-semibold text-sm sm:text-lg">
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
              <label className="font-semibold text-sm sm:text-lg">
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
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [documento, setDocumento] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toggleMostrarPassword = () => {
    setMostrarPassword(!mostrarPassword);
  };
  const handleChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear objeto de datos a enviar
    const data = {
      documento,
      password,
    };

    const endpoint = 'http://localhost:8081/sesion/login/2';
    // Realizar la solicitud de inicio de sesión utilizando Axios
    axios.post(endpoint, data)
        .then(response => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("nombre", response.data.nombre);
          localStorage.setItem("apellido", response.data.apellido);
          localStorage.setItem("documento", response.data.documento);
          localStorage.setItem("rol", response.data.rol)
          if(response.status == 200) navigate("/menu-estudiantes");
        })
        .catch(error => {
          console.log(error);
        });
  };

  return (
    <div className="w-full h-screen flex">
      <div className="bg-[url('../../../../public/images/primarialog.png')] bg-cover bg-center bg-no-repeat w-3/4"></div>
      <div className="w-2/5 flex justify-center items-center">
        <div className="p-3 w-2/3">
          <h1 className="font-semibold text-3xl text-center underline">
            Inicio de sesión
          </h1>
          <form className="mt-14" onSubmit={handleSubmit}>
            <div>
              <label className="font-semibold text-lg">
                Documento
              </label>
              <div className="flex items-center gap-2 focus-within:outline outline-2 outline-azul-50 rounded-lg border-2 border-gris-50 hover:border-gris-100 mt-2">
                <div className="p-2 bg-gray-200 rounded-tl-lg rounded-bl-lg">
                  <FiUser className="" size={20} />
                </div>
                <input
                  className=" focus:outline-none w-full border-none"
                  type="text"
                  placeholder="Juanito Perez"
                  id={documento}
                  name={documento}
                  value={documento}
                  onChange={(event) => setDocumento(event.target.value) }
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
                  id={password}
                  name={password}
                  value={password}
                  onChange={(event) => handleChange(event)}
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
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [documento, setDocumento] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toggleMostrarPassword = () => {
    setMostrarPassword(!mostrarPassword);
  };
  const handleChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear objeto de datos a enviar
    const data = {
      documento,
      password,
    };

    const u = 'http://localhost:8081/sesion/login/1';
    // Realizar la solicitud de inicio de sesión utilizando Axios
    axios.post(u, data)
        .then(response => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("nombre", response.data.nombre);
          localStorage.setItem("apellido", response.data.apellido);
          localStorage.setItem("documento", response.data.documento);
          localStorage.setItem("rol", response.data.rol)
          if(response.status == 200 && localStorage.getItem("rol") == "Docente") navigate("/menu-docentes");
          if(response.status == 200 && localStorage.getItem("rol") == "Lider PPT") navigate("/menu-lideres");
          if(response.status == 200 && localStorage.getItem("rol") == "Admin") navigate("/menu-directivos");
        })
        .catch(error => {
          console.log(error);
        });
  };

  return (
    <div className="w-full h-screen flex">
      <div className="bg-[url('../../../../public/images/directivozz.png')] bg-cover bg-center bg-no-repeat w-3/4"></div>
      <div className="w-2/5 flex justify-center items-center">
        <div className="p-3 w-2/3">
          <h1 className="font-semibold text-3xl text-center underline">
            Inicio de sesión
          </h1>
          <form className="mt-14" onSubmit={handleSubmit}>
            <div>
              <label className="font-semibold text-lg">
                Documento
              </label>
              <div className="flex items-center gap-2 focus-within:outline outline-2 outline-azul-50 rounded-lg border-2 border-gris-50 hover:border-gris-100 mt-2">
                <div className="p-2 bg-gray-200 rounded-tl-lg rounded-bl-lg">
                  <FiUser className="" size={20} />
                </div>
                <input
                    className=" focus:outline-none w-full border-none"
                    type="text"
                    placeholder="Juanito Perez"
                    id={documento}
                    name={documento}
                    value={documento}
                    onChange={(event) => setDocumento(event.target.value) }
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
                    id={password}
                    name={password}
                    value={password}
                    onChange={(event) => handleChange(event)}
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
