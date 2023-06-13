import React, {useEffect, useState} from 'react';
import {Header} from "@/components";
import AddIcon from '@mui/icons-material/Add';
import {Modal, Box, Card, CardContent, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

const Digitales = () => {
    const [open, setOpen] = React.useState(false);
    const autor = localStorage.getItem("documento");
    const [titulo, setTitulo] = useState('');
    const [tipo, setTipo] = useState('1');
    const [visibilidad, setVisibilidad] = useState('0');
    const [url, setUrl] = useState('');

    const [activeTab, setActiveTab] = useState(0);
    const [eje, setEje] = useState('1');

    const [isLoading, setIsLoading] = useState(true);
    const [rows, setRows] = useState([]);

    const tabsData = [
        {id: 1,title: "Relaciones sociales y practicas cívicas",},
        {id: 2,title: "Sexualidad y construcción de ciudadanía",},
        {id: 3,title: "Educación ambiental",},
        {id: 4,title: "Emprendimiento",},
        {id: 5,title: "TIC",},
    ];

    const handleTabClick = (id) => {
        setActiveTab(id-1);
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            titulo: titulo,
            visibilidad: visibilidad,
            autor: autor,
            url: url,
            tipo: tipo
        };
        try {
            const response = await axios.post("http://localhost:8081/contenido/create", formData);

            setTitulo("");
            setTipo("1");
            setUrl("");
            setVisibilidad("0");

            console.log('Archivo enviado:', response.data);
        } catch (error) {
            setTitulo("");
            setUrl("");
            console.error('Error al enviar el archivo:', error);
        }
        handleClose();
        window.location.reload()
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
        textAlign: 'center'
    };

    const bordes = {
        border: ".5px solid",
        borderRadius: 5,
        padding: 5,
        width: "90%",
    }

    const margintop = {
        marginTop: 15
    }

    const guardar = {
        border: ".5px solid",
        borderRadius: 5,
        padding: 5,
        backgroundColor: "#0F0A",
        marginTop: 15,
        marginRight: 100,
    }
    const cancelar = {
        border: ".5px solid",
        borderRadius: 5,
        padding: 5,
        backgroundColor: "#ff1744",
        marginTop: 15,
        marginLeft: 100,
        color: "#fff",
        borderColor: "#000"
    }

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
            <button style={{padding: 20, marginInlineStart: 15}}
                    onClick={handleOpen}>
                <Cardcito>
                    <CardContent>
                        <AddIcon style={{fontSize: 40}}/>
                        <p>Agregar</p>
                        <p>Contenido Digital</p>
                    </CardContent>
                </Cardcito>
            </button>
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
                <div className="mt-4" >
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
                                            <Cardcito sx={{width: 350, minHeight: 100, margin: 2, alignItems: 'center'}}>
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
                                                        {/*
                                        <Typography variant="body2">
                                            {tab.descripcion}
                                            <br/>
                                        </Typography>
                                        */}
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
            <div className="mt-3">
                {/*
                <div>
                    {isLoading ? (
                        <CircularProgress />
                    ) : (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}>
                            {rows.map((tab, _index) => (
                                <div style={{flexBasis: '25%', flexGrow: 0}}>
                                    <Cardcito sx={{width: 350, minHeight: 100, margin: 2, alignItems: 'center'}}>
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
                                                {/*
                                        <Typography variant="body2">
                                            {tab.descripcion}
                                            <br/>
                                        </Typography>

                                            </CardContent>
                                        </a>
                                    </Cardcito>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                */}

                <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <p style={{fontSize: 30}}><b>Agregar Contenido Digital</b></p>
                        <form onSubmit={handleSubmit}>
                            <div style={margintop}>
                                <p><b>Título</b></p>
                                <input required={true} type="text" value={titulo}
                                       onChange={(e) => setTitulo(e.target.value)} style={bordes}/>
                            </div>
                            {/*
                        <div style={margintop}>
                            <p><b>Descripción</b></p>
                            <textarea name="" id="" cols={30} rows={3} style={bordes} />
                        </div>
                        */}
                            <div style={margintop}>
                                <p><b>Eje</b></p>
                                <select required={true} value={tipo}
                                        onChange={(e) => setTipo(e.target.value)} style={bordes}>
                                    <option value="1">1. Relaciones sociales y prácticas cívicas </option>
                                    <option value="2">2. Sexualidad y construcción de ciudadanía</option>
                                    <option value="3">3. Educación Ambiental</option>
                                    <option value="4">4. Emprendimiento</option>
                                    <option value="5">5. Tecnologías de Información y Comunicación</option>
                                </select>
                            </div>
                            <div style={margintop}>
                                <p><b>Visibilidad</b></p>
                                <select required={true} value={visibilidad}
                                        onChange={(e) => setVisibilidad(e.target.value)} style={bordes}>
                                    <option value="0">Privado</option>
                                    <option value="1">Público</option>
                                </select>
                            </div>
                            <div style={margintop}>
                                <p><b>URL</b></p>
                                <input required={true} type="text" value={url} onChange={(e) => setUrl(e.target.value)}
                                       style={bordes}/>
                            </div>
                            <div>
                                <button type="submit" style={guardar}>Guardar</button>
                                <button type="button" onClick={handleClose} style={cancelar}>Cancelar</button>
                            </div>
                        </form>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default Digitales;
