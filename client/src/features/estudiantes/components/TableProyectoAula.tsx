import { useState } from "react";
import { FiEye, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const columns = [
  { id: "nombreProyecto", label: "Nombre proyecto" },
  { id: "fechaInicio", label: "Fecha inicio" },
  { id: "fechaCierre", label: "Fecha cierre" },
  { id: "docente", label: "Docente lider" },
  { id: "grado", label: "Grado" },
  { id: "acciones", label: "Acciones" },
];

const rows = [
  {
    id: 1,
    nombreProyecto: "Emprendiendo con mi negocio",
    fechaInicio: "2021-01-01",
    fechaCierre: "2021-01-01",
    docente: "Juan",
    grado: "11A",
  },
  {
    id: 2,
    nombreProyecto: "Emprendiendo con mi negocio",
    fechaInicio: "2021-01-01",
    fechaCierre: "2021-01-01",
    docente: "Pedro",
    grado: "11B",
  },
  {
    id: 3,
    nombreProyecto: "Emprendiendo con mi negocio",
    fechaInicio: "2021-01-01",
    fechaCierre: "2021-01-01",
    docente: "Juana",
    grado: "11A",
  },
  {
    id: 4,
    nombreProyecto: "Emprendiendo con mi negocio",
    fechaInicio: "2021-01-01",
    fechaCierre: "2021-01-01",
    docente: "Sofia",
    grado: "11B",
  },
  {
    id: 5,
    nombreProyecto: "Emprendiendo con mi negocio",
    fechaInicio: "2021-01-01",
    fechaCierre: "2021-01-01",
    docente: "Martina",
    grado: "11A",
  },
  {
    id: 6,
    nombreProyecto: "Emprendiendo con mi negocio",
    fechaInicio: "2021-01-01",
    fechaCierre: "2021-01-01",
    docente: "Pedro",
    grado: "11B",
  },
];

const TableProyectoAula = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rows.slice(indexOfFirstItem, indexOfLastItem);

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
          {currentItems.map((row) => (
            <tr
              key={row.id}
              className="text-center hover:bg-slate-50 transition duration-200"
            >
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <p>{row.nombreProyecto}</p>
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <p>{row.fechaInicio}</p>
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <p>{row.fechaCierre}</p>
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <p>{row.docente}</p>
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <p>{row.grado}</p>
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <button
                  id="button-see"
                  type="button"
                  className="transition duration-300 hover:bg-gray-100 rounded-full p-2"
                >
                  <FiEye className="m-auto text-[#ffe100]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
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
      </table>
      <Tooltip anchorSelect="#button-see" content="Ver" />
    </>
  );
};

export default TableProyectoAula;
