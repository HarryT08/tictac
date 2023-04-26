import { Navbar } from "@/components";
import { CuadroHonor } from "@/layout";
import {
  Estudiantes,
  Docentes,
  ProyectoAula,
} from "@/features/directivos/pages";
import { Route, Routes } from "react-router";

const Herramientas = () => {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<CuadroHonor />} />
          <Route path="/cuadro-honor" element={<CuadroHonor />} />
          <Route path="/historicos" element={<h1>historicos</h1>} />
          <Route
            path="/historicos/herramientas"
            element={<h1>Historico herramientas</h1>}
          />
          <Route path="/historicos/proyecto-aula" element={<ProyectoAula />} />
          <Route
            path="/historicos/plan-trabajo"
            element={<h1>Historico plan de trabajo</h1>}
          />
          <Route
            path="/historicos/contenido-audiovisual"
            element={<h1>Historico contenido audiovisual</h1>}
          />
          <Route path="/estudiantes" element={<Estudiantes />} />
          <Route path="/docentes" element={<Docentes />} />
          <Route path="/estadisticas" element={<h1>estadisticas</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default Herramientas;
