import { useState } from "react";
import { SidebarDashboard, NavbarDashboard } from "../../components";
import { Routes, Route } from "react-router-dom";
import { CuadroHonor } from "@/layout";
import {
    ProyectoAula,
    PlanTrabajo,
    Herramientas,
    VerHerramienta,
    CrearHerramientaForm,
    Peticiones,
    Digitales
} from "@/features/lideres/pages";

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
                            <Route path="/herramientas" element={<Herramientas />} />
                            <Route
                                path="/historicos/proyecto-aula"
                                element={<ProyectoAula />}
                            />
                            <Route
                                path="/historicos/plan-trabajo"
                                element={<h1>historico plan de trabajo</h1>}
                            />
                            <Route
                                path="/contenido-audiovisual"
                                element={<Digitales />}
                            />
                            <Route path="/estadisticas" element={<h1>Estadisticas</h1>} />
                            <Route path="/verherramienta/:nombre" element={<VerHerramienta />} />
                            <Route path="/peticion-herramienta" element={<Peticiones />} />
                            <Route path="/crear-herramienta" element={<CrearHerramientaForm />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
