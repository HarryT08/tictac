import { Navbar, Slider, Footer } from "@/features/home/components";
import {
  ModeloTicTac,
  CuadroHonor,
  Herramientas,
  ContenidoAudiovisual,
} from "@/features/home/layout";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="px-12 py-10 flex gap-4">
        <div className="w-2/3 bg-gray-100 rounded-3xl flex items-center">
          <div className="p-6">
            <h1 className="font-semibold text-3xl max-w-xl">
              Institución Educativa Nuestra Señora de las Mercedes
            </h1>
            <p className="max-w-3xl my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              vero ipsam maiores iusto consequatur nobis quas doloremque animi.
              Ex, velit. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Voluptatibus, ratione?
            </p>
            <button className="bg-azul-50 hover:bg-azul-100 transition duration-300 text-white font-medium p-3 rounded-full">
              Contáctanos
            </button>
          </div>
        </div>
        <div className="w-1/3 h-[75vh] bg-gray-100 rounded-3xl">
          <Slider />
        </div>
      </main>
      <section className="px-12 py-10">
        <div className="bg-gray-100 flex justify-between items-center rounded-3xl p-6">
          <div className="flex items-center gap-2">
            <p className="text-azul-50 text-3xl font-bold">7421</p>
            <p className="font-medium">Contenido audiovisual</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-azul-50 text-3xl font-bold">90</p>
            <p className="font-medium">Herramientas</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-azul-50 text-3xl font-bold">150</p>
            <p className="font-medium">Proyectos de aula</p>
          </div>
        </div>
      </section>
      <ModeloTicTac />
      <CuadroHonor />
      <Herramientas />
      <ContenidoAudiovisual />
      <Footer />
    </>
  );
};

export default Home;
