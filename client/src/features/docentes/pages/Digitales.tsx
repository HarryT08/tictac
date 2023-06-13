import React, {useEffect, useState} from 'react';
import {Header} from "@/components";
import AddIcon from '@mui/icons-material/Add';
import {Modal, Box, Card, CardContent, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import axios from "axios";

const Digitales = () => {
    const [open, setOpen] = React.useState(false);
    const autor = localStorage.getItem("documento");
    const [titulo, setTitulo] = useState('');
    const [visibilidad, setVisibilidad] = useState('0');
    const [url, setUrl] = useState('');

    const [isLoading, setIsLoading] = useState(true);
    const [rows, setRows] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/contenido/list`);
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
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            titulo: titulo,
            visibilidad: visibilidad,
            autor: autor,
            url: url,
            tipo: "Contenido digital"
        };
        try {
            const response = await axios.post("http://localhost:8081/contenido/create", formData);

            setTitulo("");
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
            <button style={{border: "1px solid", borderRadius: 5, padding: 0, marginInlineStart: 15}}
                    onClick={handleOpen}>
                <Cardcito>
                    <CardContent>
                        <AddIcon style={{fontSize: 40}}/>
                        <p>Agregar</p>
                        <p>Contenido Digital</p>
                    </CardContent>
                </Cardcito>
            </button>
            <div className="mt-3">
                <div>
                    {isLoading ? (
                        <p>Cargando datos...</p>
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
                    )}
                </div>

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
