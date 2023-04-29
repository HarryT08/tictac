import { useState } from "react";
import { cartas } from "@/features/home/utils/DataCards";
import { FiCheckCircle } from "react-icons/fi";

const ModeloTicTac = () => {
  const filters = [
    { label: "Principios", value: "principios" },
    { label: "Ejes", value: "ejes" },
    { label: "Competencias", value: "competencias" },
  ];

  const [selectedFilter, setSelectedFilter] = useState<string>(
    filters[0].value
  );

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilter(event.target.value);
  };

  // Filtrar las cartas según el filtro seleccionado
  const filteredCartas = cartas.filter(
    (carta) => carta.tipo === selectedFilter
  );

  return (
    <section className="px-12 py-10">
      <h2 className="font-semibold text-3xl border-b-2 border-gray-400 pb-2">
        Modelo Tic-Tac
      </h2>
      <div className="flex items-center mt-8 space-x-4">
        {filters.map((filter) => (
          <label
            key={filter.value}
            className={`${
              selectedFilter === filter.value
                ? "bg-azul-100 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-300"
            } px-4 py-2 rounded-full cursor-pointer transition-colors duration-300`}
          >
            <input
              type="radio"
              name="filter"
              value={filter.value}
              checked={selectedFilter === filter.value}
              onChange={handleFilterChange}
              className="sr-only"
            />
            {filter.label}
          </label>
        ))}
      </div>

      {/* Mostrar las cartas filtradas */}
      <div className="mt-8 flex justify-center flex-wrap gap-3">
        {filteredCartas.map((carta) => (
          <div
            key={carta.titulo}
            className="bg-white rounded-lg shadow-md max-w-[800px]"
          >
            <h3 className="font-semibold text-lg text-white mb-2 bg-azul-100 text-center rounded-tl-lg rounded-tr-lg p-4">
              {carta.titulo}
            </h3>
            <div className="bg-gray-100 grid grid-cols-2 p-2 gap-3">
              {carta.items.map((item) => (
                <div key={item.id} className="flex gap-1">
                  <span className="text-azul-50">
                    <FiCheckCircle />
                  </span>
                  <p>{item.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModeloTicTac;
