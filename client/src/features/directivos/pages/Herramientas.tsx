import { useEffect } from "react";
import { useLocation } from "react-router";
import { Header } from "@/components";
import { Tabs } from "@/features/directivos/components";

const Herramientas = () => {
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
      <div>
          <Header titulo="Herramientas" subtitulo="Listado"/>
          <div className="mt-3">
              <Tabs />
          </div>
      </div>
  );
};

export default Herramientas;
