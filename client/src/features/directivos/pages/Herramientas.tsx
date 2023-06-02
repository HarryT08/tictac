import { Header } from "@/components";
import { Tabs } from "@/features/directivos/components";

const Herramientas = () => {
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
