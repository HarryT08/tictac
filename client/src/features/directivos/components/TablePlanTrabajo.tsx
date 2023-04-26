import { useState } from "react";
import { FiEye, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const columns = [
  { id: "nombrePlan", label: "Nombre plan" },
  { id: "lineaPpt", label: "Linea PPT" },
  { id: "año", label: "Año" },
  { id: "docenteLider", label: "Docente lider" },
  { id: "acciones", label: "Acciones" },
];

const rows = [
  {
    id: 1,
    nombrePlan: "Plan de trabajo empresarial",
    lineaPpt: "Emprendimiento",
    año: "2021",
    docenteLider: "Juan",
  },
  {
    id: 2,
    nombrePlan: "Plan de trabajo social",
    lineaPpt: "Educacion sexual",
    año: "2021",
    docenteLider: "Pedro",
  },
  {
    id: 3,
    nombrePlan: "Plan de trabajo empresarial",
    lineaPpt: "Emprendimiento",
    año: "2021",
    docenteLider: "Juan",
  },
  {
    id: 4,
    nombrePlan: "Plan de trabajo social",
    lineaPpt: "Educacion sexual",
    año: "2021",
    docenteLider: "Pedro",
  },
  {
    id: 5,
    nombrePlan: "Plan de trabajo empresarial",
    lineaPpt: "Emprendimiento",
    año: "2021",
    docenteLider: "Juan",
  },
  {
    id: 6,
    nombrePlan: "Plan de trabajo social",
    lineaPpt: "Educacion sexual",
    año: "2021",
    docenteLider: "Pedro",
  },
];

const TablePlanTrabajo = () => {
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
                <p>{row.nombrePlan}</p>
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <p>{row.lineaPpt}</p>
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <p>{row.año}</p>
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <p>{row.docenteLider}</p>
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

export default TablePlanTrabajo;
