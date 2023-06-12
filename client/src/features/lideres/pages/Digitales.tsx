import React from 'react';
import { Header } from "@/components";
import AddIcon from '@mui/icons-material/Add';
import { Modal, Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
const Digitales = () => {
    const [open, setOpen] = React.useState(false);
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

    const contenidos = [
        {
            id: 1,
            titulo: "Cuidado del Medio Ambiente",
            descripcion: "Portal informativo y práctico sobre conservación ambiental, energías renovables y prácticas sostenibles para un futuro más verde y equilibrado.",
            poblacion: ['Preescolar, ', 'Básica Primaria, ', 'Básica Secundaria y Media'],
            url: "https://www.youtube.com/watch?",
        },
        {
            id: 2,
            titulo: "Sexualidad Saludable",
            descripcion: "Recursos y consejos para promover una sexualidad saludable y consciente en todos los aspectos de la vida.",
            poblacion: ['Básica Secundaria y Media'],
            url: "https://www.youtube.com/watch?",
        },
        {
            id: 3,
            titulo: "Formación en el Hogar",
            descripcion: "Guía práctica para la formación y comportamiento responsable en el hogar, promoviendo hábitos positivos y sostenibles para un entorno familiar armonioso.",
            poblacion: ['Preescolar, ', 'Básica Primaria'],
            url: "https://www.youtube.com/watch?",
        },
    ];

    return (
        <div>
            <Header titulo="Contenidos Digitales" subtitulo="Listado" />
            <div className="mt-3">
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    {contenidos.map((tab, _index) => (

                        <Cardcito sx={{ width: 350, minHeight: 250, margin: 2, alignItems: 'center' }}>
                            <a href={tab.url} target="_blank">
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                                        {tab.id}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {tab.titulo}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5, fontSize: 10 }} variant="caption">
                                        {tab.poblacion}
                                    </Typography>
                                    <Typography variant="body2">
                                        {tab.descripcion}
                                        <br />
                                    </Typography>
                                </CardContent>
                            </a>
                        </Cardcito>
                    ))}
                </div>
                <button style={{ border: "1px solid", borderRadius: 5, padding: 50, marginInlineStart: 15 }} onClick={handleOpen}>
                    <AddIcon style={{ fontSize: 60 }} />
                    <p>Agregar</p>
                    <p>Contenido Digital</p>
                </button>

                <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <p style={{ fontSize: 30 }}><b>Agregar Contenido Digital</b></p>
                        <div style={margintop}>
                            <p><b>Título</b></p>
                            <input type="text" style={bordes} />
                        </div>
                        <div style={margintop}>
                            <p><b>Descripción</b></p>
                            <textarea name="" id="" cols={30} rows={3} style={bordes} />
                        </div>
                        <div style={margintop}>
                            <p><b>Población</b></p>
                            <select name="" id="" style={bordes}>
                                <option value="0">Preescolar</option>
                                <option value="1">Básica Primaria</option>
                                <option value="2">Básica Secundaria y Media</option>
                            </select>
                        </div>
                        <div style={margintop}>
                            <p><b>URL</b></p>
                            <input type="text" style={bordes} />
                        </div>
                        <div>
                            <button type="submit" style={guardar}>Guardar</button>
                            <button type="button" onClick={handleClose} style={cancelar}>Cancelar</button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div >
    );
};

export default Digitales;
