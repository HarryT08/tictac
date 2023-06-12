import { Menu, NotFound, SecondMenu } from "@/layout";
import { Login } from "@/features/auth/pages";
import { Home } from "@/features/home/pages";
import { MenuDirectivos } from "@/features/directivos/pages";
import { MenuDocentes } from "@/features/docentes/pages";
import { MenuEstudiantes } from "@/features/estudiantes/pages";
import { MenuLideres } from "@/features/lideres/pages";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login/estudiantes/:opcion" element={<Login />} />
            <Route path="/login/directivos/:opcion" element={<Login />} />
            <Route path="/menu-principal" element={<SecondMenu />} />
            <Route path="/menu-directivos/*" element={<MenuDirectivos />} />
            <Route path="/menu-docentes/*" element={<MenuDocentes />} />
            <Route path="/menu-estudiantes/*" element={<MenuEstudiantes />} />
            <Route path="/menu-lideres/*" element={<MenuLideres />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
