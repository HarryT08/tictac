import { useState } from "react";
import { SidebarDashboard, NavbarDashboard } from "@/components";
import { CuadroHonor } from "@/layout";
import {
  Estudiantes,
  Docentes,
  ProyectoAula,
  PlanTrabajo,
  HistoricoHerramientas,
  VerHerramienta,
} from "@/features/directivos/pages";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SidebarDashboard
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <NavbarDashboard
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <h1>Hola mundillo</h1>
            {/* <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<CuadroHonor />} />
          <Route path="/cuadro-honor" element={<CuadroHonor />} />
          <Route path="/historicos" element={<h1>historicos</h1>} />
          <Route
            path="/historicos/herramientas"
            element={<HistoricoHerramientas />}
          />
          <Route path="/historicos/herramientas/:nombre" element={<VerHerramienta/>}/>
          <Route path="/historicos/proyecto-aula" element={<ProyectoAula />} />
          <Route path="/historicos/plan-trabajo" element={<PlanTrabajo />} />
          <Route
            path="/historicos/contenido-audiovisual"
            element={<h1>Historico contenido audiovisual</h1>}
          />
          <Route path="/estudiantes" element={<Estudiantes />} />
          <Route path="/docentes" element={<Docentes />} />
          <Route path="/estadisticas" element={<h1>estadisticas</h1>} />
        </Routes>
      </div> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
