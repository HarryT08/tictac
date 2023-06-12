import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Header } from "@/components";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const tabsData = [
    {
        id: 1,
        title: "Todos",
        content: "Herramienta 37 las tecnologias y yo",
    },
    {
        id: 2,
        title: "Relaciones sociales y practicas cívicas",
        content: "Herramienta 38 las tecnologias y yo",
    },
    {
        id: 3,
        title: "Sexualidad y construcción de ciudadanía",
        content: "Herramienta 39 las tecnologias y yo",
    },
    {
        id: 4,
        title: "Educación ambiental",
        content: "Herramienta 40 las tecnologias y yo",
    },
    {
        id: 5,
        title: "Emprendimiento",
        content: "Herramienta 41 las tecnologias y yo",
    },
    {
        id: 6,
        title: "TIC",
        content: "Herramienta 42 las tecnologias y yo",
    },
];

const Peticiones = () => {
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

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <Header titulo="Listado de Peticiones" subtitulo="Por Validar" />
            <div className="mt-3">
                <div className="w-full">
                    <ul className="flex">
                        <li key={tabsData[0].id}>
                            <button
                                className={`${activeTab === 0
                                    ? "bg-white text-azul-50 border-azul-50"
                                    : "bg-gray-100"
                                    } text-sm px-4 py-2 text-gray-500 font-semibold uppercase border-b-2 transition duration-300`}
                                onClick={() => setActiveTab(0)}
                            >
                                {tabsData[0].title}
                            </button>
                        </li>
                        {tabsData.map((tab, index) => (
                            <li key={tab.id} hidden={tab.id === 1}>
                                <button
                                    className={`${activeTab === index
                                        ? "bg-white text-azul-50 border-azul-50"
                                        : "bg-gray-100"
                                        } text-sm px-4 py-2 text-gray-500 font-semibold uppercase border-b-2 transition duration-300`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                    {tabsData.map((tab, _index) => (
                            <div
                                className="border-2 border-gray-100 max-w-4xl shadow-sm rounded-md p-4"
                                key={tabsData[0].id}
                                hidden={activeTab !== 0}
                            >
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-semibold">{tab.content}</p>
                                    <Link to={`/menu-lideres/verherramienta/${tab.content}`}>
                                        <button
                                            className="bg-azul-50 hover:bg-azul-100 text-white font-medium px-6 py-2 rounded-md transition duration-300"
                                            type="button"
                                        >
                                            Ver
                                        </button>
                                    </Link>
                                    <Accordion >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Respuesta</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <textarea name="feedback" id="feedback" cols={20} rows={3} style={{ padding: "5px", border: "1px solid", borderRadius: 5 }} placeholder="Feedback" />
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="center"
                                                spacing={3}
                                                style={{ margin: 0 }}
                                            >
                                                <Grid item xs style={{ padding: 0 }}>
                                                    <button
                                                        style={{ background: "#0F08", border: "1px solid", borderRadius: "50%", width: 30, height: 30 }}>
                                                        Si
                                                    </button>
                                                </Grid>
                                                <Grid item xs={6} style={{ padding: 0 }}>
                                                    <p>
                                                        ¿Validar?
                                                    </p>
                                                </Grid>
                                                <Grid item xs style={{ padding: 0 }}>
                                                    <button
                                                        style={{ background: "#F008", border: "1px solid", borderRadius: "50%", width: 30, height: 30 }}>
                                                        No
                                                    </button>
                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        ))}
                        {tabsData.map((tab, index) => (
                            <div
                                className="border-2 border-gray-100 max-w-4xl shadow-sm rounded-md p-4"
                                key={tab.id}
                                hidden={activeTab !== index || activeTab === 0}
                            >
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-semibold">{tab.content}</p>
                                    <Link to={`/menu-lideres/verherramienta/${tab.content}`}>
                                        <button
                                            className="bg-azul-50 hover:bg-azul-100 text-white font-medium px-6 py-2 rounded-md transition duration-300"
                                            type="button"
                                        >
                                            Ver
                                        </button>
                                    </Link>
                                    <Accordion >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Respuesta</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <textarea name="feedback" id="feedback" cols={20} rows={3} style={{ padding: "5px", border: "1px solid", borderRadius: 5 }} placeholder="Feedback" />
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="center"
                                                spacing={3}
                                                style={{ margin: 0 }}
                                            >
                                                <Grid item xs style={{ padding: 0 }}>
                                                    <button
                                                        style={{ background: "#0F08", border: "1px solid", borderRadius: "50%", width: 30, height: 30 }}>
                                                        Si
                                                    </button>
                                                </Grid>
                                                <Grid item xs={6} style={{ padding: 0 }}>
                                                    <p>
                                                        ¿Validar?
                                                    </p>
                                                </Grid>
                                                <Grid item xs style={{ padding: 0 }}>
                                                    <button
                                                        style={{ background: "#F008", border: "1px solid", borderRadius: "50%", width: 30, height: 30 }}>
                                                        No
                                                    </button>
                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Peticiones;