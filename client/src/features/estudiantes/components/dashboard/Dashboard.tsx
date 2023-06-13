import { useState } from "react";
import { SidebarDashboard, NavbarDashboard} from "../../components";
import { Routes, Route } from "react-router-dom";
import { ProyectoAula, Digitales } from "../../pages";
//import { Navigate } from 'react-router-dom'

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
                <Route path="/" element={<ProyectoAula />} />
                <Route path="/proyecto-aula" element={<ProyectoAula />} />
                <Route path="/contenido-audiovisual" element={<Digitales />} />
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
