import { Header } from "@/features/home/components";
import { useState } from "react";
import { herramientas } from "@/features/home/utils/herramientas";

const Herramientas = () => {
  const filters = [
    {
      label: "Relaciones sociales y practicas civicas",
      value: "relacionesSocialesYPracticasCivicas",
    },
    {
      label: "Sexualidad y construcción de ciudadanía",
      value: "sexualidadYConstrucciónDeCiudadanía",
    },
    { label: "Educación ambiental", value: "educaciónAmbiental" },
    { label: "Emprendimiento", value: "emprendimiento" },
    { label: "Tic", value: "tic" },
  ];

  const [selectedFilter, setSelectedFilter] = useState<string>(
    filters[0].value
  );

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilter(event.target.value);
  };

  // Filtrar las cartas según el filtro seleccionado
  const filteredHerramientas = herramientas.filter(
    (herramienta) => herramienta.categoria === selectedFilter
  );

  return (
    <section className="px-12 py-10" id="herramientas">
      <Header titulo="Herramientas" />
      <div className="flex flex-wrap gap-3 items-center mt-8 w-full overflow-x-auto">
        {filters.map((filter) => (
          <label
            key={filter.value}
            className={`${
              selectedFilter === filter.value
                ? "bg-azul-100 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-300"
            } px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 text-center text-sm md:text-base`}
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
      <div className="mt-8 flex justify-center flex-col gap-3">
        {filteredHerramientas.map((herramienta) => (
          <div
            key={herramienta.id}
            className="bg-white rounded-lg shadow-md max-w-[800px] flex items-center justify-between"
          >
            <h3 className="font-semibold text-sm md:text-lg mb-2 rounded-tl-lg rounded-tr-lg p-3">
              {herramienta.titulo}
            </h3>
            <button className="text-sm md:text-base px-4 py-1 bg-azul-50 hover:bg-azul-100 transition duration-300 rounded-lg text-white font-medium">
              Ver
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Herramientas;
