import { Header } from "@/components";
import { FiSearch } from "react-icons/fi";
import { TablePlanTrabajo } from "@/features/directivos/components";

const PlanTrabajo = () => {
  return (
    <div className="mt-3">
      <Header titulo="Plan de trabajo" subtitulo="Listado" />
      <div className="bg-white mt-4 shadow-md p-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-10">
            {/* Barra busqueda nombre */}
            <div>
              <p className="font-medium">Nombre plan de trabajo</p>
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
              <p className="font-medium">Linea PPT</p>
              <select className="appearance-none bg-white border border-gray-300 py-2 px-4 pr-8 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:shadow-outline mt-2">
                <option value="1">Emprendiemiento</option>
                <option value="2">Educacion sexual</option>
              </select>
            </div>
          </div>
        </div>
        <TablePlanTrabajo />
      </div>
    </div>
  );
};

export default PlanTrabajo;
