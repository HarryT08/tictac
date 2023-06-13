import { Header } from "@/features/home/components";
import {useEffect, useState} from "react";
import axios from "axios";
import {styled} from "@mui/material/styles";
import {Card, CardContent, Typography, CircularProgress} from "@mui/material";

const ContenidoAudiovisual = () => {
  const tabsData = [
    {id: 1, title: "Relaciones sociales y practicas cívicas",},
    {id: 2, title: "Sexualidad y construcción de ciudadanía",},
    {id: 3, title: "Educación ambiental",},
    {id: 4, title: "Emprendimiento",},
    {id: 5, title: "TIC",},
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [eje, setEje] = useState('1');

  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState([]);

  const handleTabClick = (id) => {
    setActiveTab(id - 1);
    setIsLoading(true);
    switch (id) {
      case 1:
        setEje("1");
        break;
      case 2:
        setEje("2");
        break;
      case 3:
        setEje("3");
        break;
      case 4:
        setEje("4");
        break;
      case 5:
        setEje("5");
        break;
      default:
        setEje("1");
        break;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/contenido/list/home?eje=${eje}`);
        const data = response.data.map((item) => ({
          titulo: item.titulo,
          visibilidad: item.visibilidad,
          autor: item.autor,
          url: item.url,
          tipo: item.tipo,
        }));
        setRows(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [eje]);

  const Cardcito = styled(Card)({
    '&:hover': {
      backgroundColor: '#1e293b',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color: '#fff',
      transition: '.3s'
    },
  });

  return (
    <section className="px-12 py-10" id="contenido-audiovisual">
      <Header titulo="Contenido audiovisual" />
      <div className="flex flex-wrap gap-3 items-center mt-8 w-full overflow-x-auto">
        <ul className="flex">
          {tabsData.map((tab, index) => (
              <li key={tab.id}>
                <button
                    className={`${activeTab === index
                        ? "bg-azul-100 text-white"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-300"
                    } px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 text-center text-sm md:text-base`}
                    //onClick={() => setActiveTab(index)}
                    onClick={() => handleTabClick(tab.id)}
                >
                  {tab.title}
                </button>
              </li>
          ))}
        </ul>
      </div>
      {/* Mostrar las cartas filtradas */}
      <div className="mt-4">
        <div>
          {isLoading ? (
              <CircularProgress />
          ) : (
              rows.length == 0 ? (
                  <p>No se encontraron herramientas...</p>
              ) : (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                  }}>
                    {rows.map((tab, _index) => (
                        <div style={{flexBasis: '25%', flexGrow: 0}}>
                          <Cardcito
                              sx={{width: 350, minHeight: 100, margin: 2, alignItems: 'center'}}>
                            <a href={tab.url} target="_blank">
                              <CardContent>
                                <Typography sx={{fontSize: 14}} gutterBottom>
                                  {tab.tipo}
                                </Typography>
                                <Typography variant="h5" component="div">
                                  {tab.titulo}
                                </Typography>
                                <Typography sx={{mb: 1.5, fontSize: 15}} variant="caption">
                                  {tab.autor}
                                </Typography>
                              </CardContent>
                            </a>
                          </Cardcito>
                        </div>
                    ))}
                  </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default ContenidoAudiovisual;
