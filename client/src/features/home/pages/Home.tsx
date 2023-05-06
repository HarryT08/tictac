import { Navbar, Slider, Footer } from "@/features/home/components"
import { FiChevronsUp } from "react-icons/fi";
import {
  ModeloTicTac,
  CuadroHonor,
  Herramientas,
  ContenidoAudiovisual,
} from "@/features/home/layout";
import { animateScroll as scroll } from "react-scroll";

const Home = () => {
  const scrollUp = () => {
    scroll.scrollToTop();
  };

  window.addEventListener("scroll", () => {
    const scrollBtn = document.getElementById("scrollBtn");
    if (scrollBtn) {
      if (window.scrollY > 200) {
        scrollBtn.classList.add("showScrollBtn");
      } else {
        scrollBtn.classList.remove("showScrollBtn");
      }
    }
  });

  return (
    <>
      <Navbar />
      <main className="px-12 py-10 flex flex-col items-center md:flex md:flex-row gap-4">
        <div className="w-full h-[55vh] md:w-2/3 md:h-[75vh] bg-gray-100 rounded-3xl flex items-center">
          <div className="p-6">
            <h1 className="font-semibold text-base md:text-3xl max-w-xl">
              Institución Educativa Nuestra Señora de las Mercedes
            </h1>
            <p className="text-xs md:text-base max-w-3xl my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              vero ipsam maiores iusto consequatur nobis quas doloremque animi.
              Ex, velit. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Voluptatibus, ratione?
            </p>
            <button className="text-sm md:text-base bg-azul-50 hover:bg-azul-100 transition duration-300 text-white font-medium px-3 py-2 rounded-full">
              Contáctanos
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 h-[75vh] bg-gray-100 rounded-3xl">
          <Slider />
        </div>
      </main>
      <section className="px-12 py-10">
        <div className="bg-gray-100 flex flex-col gap-4 md:flex md:flex-row md:justify-between items-center rounded-3xl p-6">
          <div className="flex items-center gap-2">
            <p className="text-azul-50 text-lg md:text-3xl font-bold">7421</p>
            <p className="font-medium text-sm md:text-base">
              Contenido audiovisual
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-azul-50 text-lg md:text-3xl font-bold">90</p>
            <p className="font-medium text-sm md:text-base">Herramientas</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-azul-50 text-lg md:text-3xl font-bold">150</p>
            <p className="font-medium text-sm md:text-base">
              Proyectos de aula
            </p>
          </div>
        </div>
      </section>
      <button onClick={scrollUp} id="scrollBtn">
        <FiChevronsUp className="text-lg"/>
      </button>
      <ModeloTicTac />
      <CuadroHonor />
      <Herramientas />
      <ContenidoAudiovisual />
      <Footer />
    </>
  );
};

export default Home;
