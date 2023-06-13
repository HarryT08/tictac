import React, {useEffect, useState} from 'react';
import {Header} from "@/components";
import {Card, CardContent, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

const Digitales = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [eje, setEje] = useState('1');

    const [isLoading, setIsLoading] = useState(true);
    const [rows, setRows] = useState([]);

    const tabsData = [
        {id: 1, title: "Relaciones sociales y practicas cívicas",},
        {id: 2, title: "Sexualidad y construcción de ciudadanía",},
        {id: 3, title: "Educación ambiental",},
        {id: 4, title: "Emprendimiento",},
        {id: 5, title: "TIC",},
    ];

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
                const response = await axios.get(`http://localhost:8081/contenido/list/institucion?eje=${eje}`);
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
        <div>
            <Header titulo="Contenidos Digitales" subtitulo="Listado"/>
            <div className="w-full">
                <ul className="flex">
                    {tabsData.map((tab, index) => (
                        <li key={tab.id}>
                            <button
                                className={`${activeTab === index
                                    ? "bg-white text-azul-50 border-azul-50"
                                    : "bg-gray-100"
                                } text-sm px-4 py-2 text-gray-500 font-semibold uppercase border-b-2 transition duration-300`}
                                //onClick={() => setActiveTab(index)}
                                onClick={() => handleTabClick(tab.id)}
                            >
                                {tab.title}
                            </button>
                        </li>
                    ))}
                </ul>
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
            </div>
        </div>
    );
};

export default Digitales;
