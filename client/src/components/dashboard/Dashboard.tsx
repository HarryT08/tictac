import { useState } from "react";
import { SidebarDashboard, NavbarDashboard } from "@/components";
import { Routes, Route } from "react-router-dom";
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
            <Routes>
              <Route path="/" element={<h1>Cuadro honor</h1>} />
              <Route path="/cuadro-honor" element={<h1>Cuadro honor</h1>} />
              <Route
                path="/historicos/herramientas"
                element={<h1>historico herramientas</h1>}
              />
              <Route
                path="/historicos/proyecto-aula"
                element={<h1>historico proyecto de aula</h1>}
              />
              <Route
                path="/historicos/plan-trabajo"
                element={<h1>historico plan de trabajo</h1>}
              />
              <Route
                path="/historicos/contenido-audiovisual"
                element={<h1>historico contenido audiovisual</h1>}
              />
              <Route path="/docentes" element={<h1>Docentes</h1>} />
              <Route path="/estudiantes" element={<h1>Estudiantes</h1>} />
              <Route path="/estadisticas" element={<h1>Estadisticas</h1>} />
            </Routes>
            {/* 
          <Route path="/historicos/herramientas/:nombre" element={<VerHerramienta/>}/>
           */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
