import { Navbar } from "@/components";
import { Route, Routes } from "react-router";

const Herramientas = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Cuadro honor</h1>} />
        <Route path="/cuadro-honor" element={<h1>Cuadro honor</h1>} />
        <Route path="/historicos" element={<h1>historicos</h1>} />
        <Route
          path="/historicos/herramientas"
          element={<h1>Historico herramientas</h1>}
        />
        <Route
          path="/historicos/proyecto-aula"
          element={<h1>Historico proyecto de aula</h1>}
        />
        <Route
          path="/historicos/plan-trabajo"
          element={<h1>Historico plan de trabajo</h1>}
        />
        <Route
          path="/historicos/contenido-audiovisual"
          element={<h1>Historico contenido audiovisual</h1>}
        />
        <Route path="/estudiantes" element={<h1>estudiantes</h1>} />
        <Route path="/docentes" element={<h1>docentes</h1>} />
        <Route path="/estadisticas" element={<h1>estadisticas</h1>} />
      </Routes>
    </>
  );
};

export default Herramientas;
