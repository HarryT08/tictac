import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { Dashboard } from "../components";

const MenuEstudiantes = () => {
  const location = useLocation();

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      // Verificación de nulidad
      htmlElement.style.scrollBehavior = "auto";
      window.scroll({ top: 0 });
      htmlElement.style.scrollBehavior = "";
    }
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default MenuEstudiantes;
