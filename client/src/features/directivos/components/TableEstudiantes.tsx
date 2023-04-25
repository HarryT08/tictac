import { useState } from "react";
import { FiEdit2, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReactPaginate from "react-paginate";

const columns = [
  { id: "nombre", label: "Nombre estudiante" },
  { id: "grado", label: "Grado" },
  { id: "fechaIngreso", label: "Fecha Ingreso" },
  { id: "fechaSalida", label: "Fecha Salida" },
  { id: "acciones", label: "Acciones" },
];

const rows = [
  {
    id: 1,
    nombre: "Juan",
    grado: "11B",
    fechaIngreso: "2021-01-01",
    fechaSalida: "2021-01-01",
  },
  {
    id: 2,
    nombre: "Pedro",
    grado: "11C",
    fechaIngreso: "2021-01-01",
    fechaSalida: "2021-01-01",
  },
  {
    id: 3,
    nombre: "Sandra",
    grado: "10A",
    fechaIngreso: "2021-01-01",
    fechaSalida: "2021-01-01",
  },
  {
    id: 4,
    nombre: "Maria",
    grado: "9B",
    fechaIngreso: "2021-01-01",
    fechaSalida: "2021-01-01",
  },
  {
    id: 5,
    nombre: "Juan",
    grado: "11B",
    fechaIngreso: "2021-01-01",
    fechaSalida: "2021-01-01",
  },
  {
    id: 6,
    nombre: "Pedro",
    grado: "11C",
    fechaIngreso: "2021-01-01",
    fechaSalida: "2021-01-01",
  },
  {
    id: 7,
    nombre: "Sandra",
    grado: "10A",
    fechaIngreso: "2021-01-01",
    fechaSalida: "2021-01-01",
  },
  {
    id: 8,
    nombre: "Maria",
    grado: "9B",
    fechaIngreso: "2021-01-01",
    fechaSalida: "2021-01-01",
  },
  {
    id: 9,
    nombre: "Juan",
    grado: "11B",
    fechaIngreso: "2021-01-01",
    fechaSalida: "2021-01-01",
  },
  {
    id: 10,
    nombre: "Pedro",
    grado: "11C",
    fechaIngreso: "2021-01-01",
    fechaSalida: "2021-01-01",
  },
];

const TableEstudiantes = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rows.slice(indexOfFirstItem, indexOfLastItem);

  return (
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
        {currentItems.map((row) => (
          <tr
            key={row.id}
            className="text-center hover:bg-slate-50 transition duration-200"
          >
            <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
              <p>{row.nombre}</p>
            </td>
            <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
              <p>{row.grado}</p>
            </td>
            <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
              <p>{row.fechaIngreso}</p>
            </td>
            <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
              <p>{row.fechaSalida}</p>
            </td>
            <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
              <button
                type="button"
                className="transition duration-300 hover:bg-gray-100 rounded-full p-2"
              >
                <FiEdit2 className="m-auto text-[#ffe100]" />
              </button>
            </td>
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
  );
};

export default TableEstudiantes;
