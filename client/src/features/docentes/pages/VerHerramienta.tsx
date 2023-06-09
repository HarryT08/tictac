import { useParams } from "react-router";
import { Header } from "@/components";

const columns = [
  { id: "proceso", label: "Proceso" },
  { id: "recursos", label: "Recursos" },
  { id: "tiempo", label: "Tiempo" },
];

const rows = [
  {
    id: 1,
    proceso:
      "Se escucha la canción “La solidaridad: canción infantil para reforzar valores” con los estudiantes y se reitera hasta que ellos empiecen a repetir la letra. Se habla de la importancia de la solidaridad y como esta canción tiene algunos elementos que permiten valorar si somos solidarios.",
    recursos: [
      {
        id: 1,
        nombreRecurso: "Proyector y sonido",
      },
      {
        id: 2,
        nombreRecurso:
          "Link de la canción: “La solidaridad: canción infantil para reforzar valores”: Link",
      },
    ],
    tiempo: "30 minutos",
  },
];

const VerHerramienta = () => {
  const { nombre } = useParams();

  return (
    <div>
      <Header titulo={`${nombre}`} subtitulo="categoria" />
      <button className="bg-azul-50 hover:bg-azul-100 transition duration-200 rounded-lg text-white font-medium px-3 py-2">
        Volver
      </button>

      <div className="rounded-md mt-4 border-2 bg-white shadow-sm">
        {/* Nombre herramienta */}
        <div className="flex items-center border-b-2">
          <p className="rounded-tl-md w-1/3 p-2 font-bold">
            Nombre de la herramienta
          </p>
          <p className="w-2/3 p-2 border-l-2">
            Aprendiendo la cancion de la solidaridad
          </p>
        </div>
        {/* Pobalcion objetivo */}
        <div className="flex items-center border-b-2">
          <p className="w-1/3 p-2 font-bold">Poblacion objetivo</p>
          <div className="w-2/3 flex justify-between items-center p-2 border-l-2">
            <div className="flex">
              <p className="">Preescolar</p>
              <input className="" type="radio" />
            </div>
            <div className="flex">
              <p>Preescolar</p>
              <input className="" type="radio" />
            </div>
            <div className="flex">
              <p>Preescolar</p>
              <input className="" type="radio" />
            </div>
          </div>
        </div>

        {/*Tema */}
        <div className="flex items-center border-b-2">
          <p className="rounded-tl-md w-1/3 font-bold p-2">Tema</p>
          <p className="w-2/3 p-2 border-l-2">Solidaridad</p>
        </div>

        {/*Objetivo */}
        <div className="flex items-center border-b-2">
          <p className="rounded-tl-md w-1/3 p-2 font-bold">Objetivo</p>
          <p className="w-2/3 p-2 border-l-2">
            Reflexionar sobre la importancia de ser solidarios en la escuela, la
            familia y la comunidad.
          </p>
        </div>

        {/*Competencias */}
        <div className="flex items-center border-b-2">
          <p className="w-1/3 p-2 font-bold">Competencias</p>
          <p className="w-2/3 border-l-2 p-2">
            Participa activamente en los ambitos sociales e interpersonales,
            manifestando solidaridad e interes por la comunidad.
          </p>
        </div>

        {/* Momentos a desarrollar */}
        <div className="border-b-2 p-2">
          <p className="font-bold">Momentos a desarrollar</p>
          <ul>
            <li className="my-2">
              <span className="font-medium">Primer momento: </span>
              presentación. El docente da la bienvenida a niños y nilñas y les
              habla de la importancia de la solidaridad. Menciona que van a
              aprender la canción “La solidaridad”.
            </li>
            <li>
              <span className="font-medium">Segundo momento: </span>
              aprendizaje de la canción. El taller se desarrolla a través de
              tres actividades que se describen a continuación:
            </li>
          </ul>
        </div>

        {/* Table */}
        <table className="w-full my-4 border-b-2">
          <thead className="bg-[#E6E8F0] rounded-t-lg">
            <tr>
              {columns.map((column) => (
                <th key={column.id}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-slate-50 transition duration-200"
              >
                <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                  <p>{row.proceso}</p>
                </td>
                <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                  {row.recursos.map((recurso) => (
                    <ul key={recurso.id}>
                      <li>- {recurso.nombreRecurso}</li>
                    </ul>
                  ))}
                </td>
                <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                  <p>{row.tiempo}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*Duracion */}
        <div className="flex items-center border-y-2">
          <p className="w-1/3 p-2 font-bold">Duracion</p>
          <p className="w-2/3 border-l-2 p-2">una hora y 30minutos</p>
        </div>

        {/*Duracion */}
        <div className="flex items-center">
          <p className="w-1/3 p-2 font-bold">Recomendaciones</p>
          <p className="w-2/3 border-l-2 p-2">
            La cancion la pueden presentar los niños en una izada de bandera. Se
            puede reforzar el aprendizaje de la melodía con los padres,
            pidiéndoles que la escuchen en la casa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerHerramienta;
