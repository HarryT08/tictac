import { Header } from "@/features/home/components";
import { useState } from "react";
import { contenidoAudiovisual } from "@/features/home/utils/contenidoAudiovisual";

const ContenidoAudiovisual = () => {
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
  const filteredContenidoAudiovisual = contenidoAudiovisual.filter(
    (contenidoAudiovisual) => contenidoAudiovisual.tipo === selectedFilter
  );

  return (
    <section className="px-12 py-10" id="contenido-audiovisual">
      <Header titulo="Contenido audiovisual" />
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
      {/* Mostrar las cartas filtradas */}
      <div className="mt-8 flex justify-center flex-wrap gap-3">
        {filteredContenidoAudiovisual.map((contenidoAudiovisual) => (
          <div
            key={contenidoAudiovisual.id}
            className="w-96 border-2 rounded-lg shadow-md"
          >
            <img
              src={contenidoAudiovisual.imagen}
              alt={`Imagen de perfil de ${contenidoAudiovisual.titulo}`}
              className="rounded-t-lg h-36 w-full object-cover object-center m-auto"
            />
            <div className="p-3 space-y-2">
              <p className="font-semibold text-base md:text-lg text-center">
                {contenidoAudiovisual.titulo}
              </p>
              <p className="text-center text-sm md:text-base">
                {contenidoAudiovisual.descripcion}
              </p>
              <p className="text-center text-sm md:text-base">
                {contenidoAudiovisual.docente}
              </p>
              <button className=" text-sm md:text-base bg-azul-50 hover:bg-azul-100 transition duration-300 w-full rounded-lg p-2 text-white font-medium">
                Ver
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContenidoAudiovisual;
