const columns = [
  { id: "posicion", label: "Posicion" },
  { id: "nombre", label: "Nombre" },
  { id: "puntaje", label: "Puntaje" },
];

const rows = [
  { id: 1, posicion: 1, nombre: "Juan", puntaje: 100 },
  { id: 2, posicion: 2, nombre: "Pedro", puntaje: 90 },
  { id: 3, posicion: 3, nombre: "Maria", puntaje: 80 },
  { id: 4, posicion: 4, nombre: "Jose", puntaje: 70 },
  { id: 5, posicion: 5, nombre: "Luis", puntaje: 60 },
];

const TableHonor = () => {
  return (
    <table className="w-full mt-4 border shadow-sm">
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
              <p>{row.posicion}</p>
            </td>
            <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
              <div className="flex justify-center items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  alt="Foto"
                  className="w-10 h-10 rounded-full"
                />
                <p>{row.nombre}</p>
              </div>
            </td>
            <td className="p-3 border-b border-[rgba(230,232,240,0.5)] text-center">
              <p className="bg-blue-500 w-max rounded-full px-2 text-white m-auto">
                {row.puntaje}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableHonor;
