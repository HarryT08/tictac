import { useState, useEffect} from "react";
import { FiEdit2, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

const columns = [
  { id: "documento", label: "Documento" },
  { id: "nombre", label: "Nombre" },
  { id: "apellido", label: "Apellido" },
  { id: "grado", label: "Grado" },
  { id: "ano_lectivo", label: "Año lectivo" }
  //{ id: "fechaIngreso", label: "Fecha Ingreso" },
  //{ id: "fechaSalida", label: "Fecha Salida" },
  //{ id: "acciones", label: "Acciones" },
];
{/*
const rows = [
  {
    id: 1151898,
    nombre: "Juan",
    apellido: "Sanchez",
    grado: "11B",
    ano_lectivo: 2017,
    //fechaIngreso: "2021-01-01",
    //fechaSalida: "2021-01-01",
  },
  {
    id: 1151898,
    nombre: "Juan",
    apellido: "Sanchez",
    grado: "11B",
    ano_lectivo: 2017,
    //fechaIngreso: "2021-01-01",
    //fechaSalida: "2021-01-01",
  },
  {
    id: 1151898,
    nombre: "Juan",
    apellido: "Sanchez",
    grado: "11B",
    ano_lectivo: 2017,
    //fechaIngreso: "2021-01-01",
    //fechaSalida: "2021-01-01",
  },
  {
    id: 1151898,
    nombre: "Juan",
    apellido: "Sanchez",
    grado: "11B",
    ano_lectivo: 2017,
    //fechaIngreso: "2021-01-01",
    //fechaSalida: "2021-01-01",
  },
  {
    id: 1151898,
    nombre: "Juan",
    apellido: "Sanchez",
    grado: "11B",
    ano_lectivo: 2017,
    //fechaIngreso: "2021-01-01",
    //fechaSalida: "2021-01-01",
  },
  {
    id: 1151898,
    nombre: "Juan",
    apellido: "Sanchez",
    grado: "11B",
    ano_lectivo: 2017,
    //fechaIngreso: "2021-01-01",
    //fechaSalida: "2021-01-01",
  },
  {
    id: 1151898,
    nombre: "Juan",
    apellido: "Sanchez",
    grado: "11B",
    ano_lectivo: 2017,
    //fechaIngreso: "2021-01-01",
    //fechaSalida: "2021-01-01",
  },
  {
    id: 1151898,
    nombre: "Juan",
    apellido: "Sanchez",
    grado: "11B",
    ano_lectivo: 2017,
    //fechaIngreso: "2021-01-01",
    //fechaSalida: "2021-01-01",
  },
];
*/}
const TableEstudiantes =  ({ grado, anoLectivo }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:8081/estudiante/list?grado=${grado}&anio=${anoLectivo}`);
        const data = response.data.map((item) => ({
          id: item.cedula,
          nombre: item.nombre,
          apellido: item.apellido,
          grado: item.id_curso,
          ano_lectivo: item.ano_lectivo,
          // fechaIngreso: item.fechaIngreso,
          // fechaSalida: item.fechaSalida,
        }));
        setRows(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [grado, anoLectivo]);

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rows.slice(indexOfFirstItem, indexOfLastItem);

  if (isLoading) {
    return <CircularProgress />;
  }
  if (rows.length == 0){
    return <p>No se encontraron registros</p>;
  }
  return (
    <>
      <table className="w-full mt-4 border">
        <thead className="bg-[#E6E8F0] rounded-t-lg">
          <tr>
            {columns.map((column) => (
              <th key={column.id} className="p-3 uppercase text-sm">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="rounded-b-lg">
          {rows.map((row) => (
            <tr
              key={row.id}
              className="text-center hover:bg-slate-50 transition duration-200"
            >
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <p>{row.id}</p>
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <p>{row.nombre}</p>
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <p>{row.apellido}</p>
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <p>{row.grado}</p>
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <p>{row.ano_lectivo}</p>
              </td>
              {/*
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <p>{row.fechaIngreso}</p>
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <p>{row.fechaSalida}</p>
              </td>

              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <button
                  id="button-edit"
                  type="button"
                  className="transition duration-300 hover:bg-gray-100 rounded-full p-2"
                >
                  <FiEdit2 className="m-auto text-[#ffe100]" />
                </button>
              </td>
              */}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <ReactPaginate
            previousLabel={<FiChevronLeft />}
            nextLabel={<FiChevronRight />}
            pageCount={Math.ceil(rows.length / itemsPerPage)}
            onPageChange={({ selected }) => setCurrentPage(selected)}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </tfoot>
      </table>
      <Tooltip anchorSelect="#button-edit" content="Editar" />
    </>
  );
};

export default TableEstudiantes;
