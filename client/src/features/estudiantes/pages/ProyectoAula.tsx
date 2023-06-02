import { Header } from "@/components";
import { FiSearch } from "react-icons/fi";
import { TableProyectoAula } from "@/features/estudiantes/components";

const ProyectoAula = () => {
  return (
    <div className="mt-3">
      <Header titulo="Proyectos de Aula" subtitulo="Listado" />
      <div className="bg-white mt-4 shadow-md p-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-10">
            {/* Barra busqueda nombre */}
            <div>
              <p className="font-medium">Nombre proyecto</p>
              <div className="flex items-center gap-2 focus:outline-none rounded-lg border border-gray-300 hover:bg-gray-100 bg-white mt-2">
                <div className="p-2 rounded-tl-lg rounded-bl-lg">
                  <FiSearch className="" size={20} />
                </div>
                <input
                  className="focus:outline-none border-none bg-transparent py-2 px-2"
                  type="text"
                  placeholder="Buscar..."
                />
              </div>
            </div>

            {/* Select filter by course */}
            <div>
              <p className="font-medium">Nombre docente</p>
              <div className="flex items-center gap-2 focus:outline-none rounded-lg border border-gray-300 hover:bg-gray-100 bg-white mt-2">
                <div className="p-2 rounded-tl-lg rounded-bl-lg">
                  <FiSearch className="" size={20} />
                </div>
                <input
                  className="focus:outline-none border-none bg-transparent py-2 px-2"
                  type="text"
                  placeholder="Buscar..."
                />
              </div>
            </div>

            {/* Select filter by year */}
            <div>
              <p className="font-medium">Año</p>
              <select className="appearance-none bg-white border border-gray-300 py-2 px-4 pr-8 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:shadow-outline mt-2">
                <option className="" value="1">
                  2023
                </option>
                <option className="" value="2">
                  2022
                </option>
              </select>
            </div>
          </div>
        </div>
        <TableProyectoAula />
      </div>
    </div>
  );
};

export default ProyectoAula;
