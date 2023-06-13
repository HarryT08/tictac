import React from 'react';
import { useState, useEffect } from 'react';
import { Header } from "@/components";
import { Box, Select, MenuItem, FormControl, SelectChangeEvent, Checkbox, ListItemText, InputLabel } from '@mui/material';

interface Fila {
    id: number;
    proceso: string;
    recurso: string;
    tiempo: string;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const competencias = [
    { id: 0, valor: 'Competencia #1', content: 'Participa activamente en los ámbitos sociales e interpersonales, manifestando solidaridad e interés por la comunidad' },
    { id: 0, valor: 'Competencia #2', content: 'Capacidad de comunicarse constructivamente' },
    { id: 0, valor: 'Competencia #3', content: 'Conoce y aplica las normas de tránsito y seguridad vial' },
    { id: 1, valor: 'Competencia #1', content: 'Comprende los aspectos de la sexualidad humana, sus transiciones e implicaciones en la vida cotidiana' },
    { id: 1, valor: 'Competencia #2', content: 'Identifica la diversidad que existe en los seres humanos y sus formas de expresarla' },
    { id: 1, valor: 'Competencia #3', content: 'Toma decisiones centradas en el enfoque de derechos sexuales y reproductivos' },
    { id: 2, valor: 'Competencia #1', content: 'Comprende los procesos de cuidado y protección del medio ambiente' },
    { id: 2, valor: 'Competencia #2', content: 'Cuida y protege el medio ambiente' },
    { id: 2, valor: 'Competencia #3', content: 'Promueve en su comunidad el cuidado y protección del medio ambiente' },
    { id: 3, valor: 'Competencia #1', content: 'Desarrolla pensamiento emprendedor en el ser, sentir, pensar y actuar' },
    { id: 3, valor: 'Competencia #2', content: 'Desarrolla hábitos y valores emprendedores que orienten el comportamiento para el éxito personal' },
    { id: 3, valor: 'Competencia #3', content: 'Tiene capacidad para entender el entorno socioeconómico en su contexto' },
    { id: 4, valor: 'Competencia #1', content: 'Comprende que las TIC facilitan responder a problemas de su entorno y se deben utilizar de manera responsable' },
    { id: 4, valor: 'Competencia #2', content: 'Integra las TIC en el desarrollo de las actividades académicas y cotidianas para facilitar y agilizar los procesos operativos en los diferentes contextos' },
    { id: 4, valor: 'Competencia #3', content: 'Construye soluciones a problemas del contexto usando las TIC' },
];

const CrearHerramientaForm = () => {
    const [objectives, setObjectives] = useState('');
    const [filas, setFilas] = useState<Fila[]>([]);
    const [eje, setEje] = React.useState('');
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChangeCompe = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChange = (event: SelectChangeEvent) => {
        setEje(event.target.value as string);
    };

    const agregarFila = () => {
        setFilas([...filas, { id: filas.length + 1, proceso: '', recurso: '', tiempo: '' }]);
    };

    const actualizarFila = (indice: number, campo: keyof Fila, valor: string) => {
        const nuevasFilas = [...filas];
        nuevasFilas[indice] = {
            ...nuevasFilas[indice],
            [campo]: valor
        };
        setFilas(nuevasFilas);
    };

    const eliminarFila = (indice: number) => {
        const nuevasFilas = filas.filter((_fila, i) => i !== indice);
        setFilas(nuevasFilas);
    };

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setObjectives(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            let newObjectives = objectives;

            if (!objectives.startsWith('•')) {
                newObjectives = '• ' + newObjectives;
            }
            if (!objectives.endsWith('.')) {
                newObjectives = newObjectives + '.';
            }

            setObjectives(newObjectives + '\n• ');
        }
    };

    return (
        <div className="mt-3" >
            <Header titulo="Crear nueva herramienta" subtitulo="Formulario" />
            <form>
                <table className='border-2' style={{ borderColor: '#b1b1b1' }}>
                    <tbody className='text-center'>
                        <tr className='border-2' style={{ borderColor: '#b1b1b1', backgroundColor: '#e3e3e3' }}>
                            <td className='p-1 font-bold italic border-2' style={{ borderColor: '#b1b1b1' }}>Nombre de la Herramienta</td>
                            <td>
                                <input
                                    type="text"
                                    style={{ width: '90%', textAlign: 'center', backgroundColor: '#e3e3e3' }}
                                />
                            </td>
                        </tr>
                        <tr className='border-2' style={{ borderColor: '#b1b1b1' }}>
                            <td className='p-1 font-medium italic border-2' style={{ borderColor: '#b1b1b1' }}>Población Objetivo</td>
                            <td>
                                <label style={{ margin: 15, textAlign: 'center', verticalAlign: 'middle' }}>
                                    <input
                                        type="checkbox"
                                        name="population"
                                        value="Preescolar"
                                        style={{ marginRight: 5 }}
                                    />
                                    Preescolar
                                </label>
                                <label style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                    <input
                                        type="checkbox"
                                        name="population"
                                        value="Básica Primaria"
                                        style={{ marginRight: 5 }}
                                    />
                                    Básica Primaria
                                </label>
                                <label style={{ margin: 15, textAlign: 'center', verticalAlign: 'middle' }}>
                                    <input
                                        type="checkbox"
                                        name="population"
                                        value="Básica Secundaria y Media"
                                        style={{ marginRight: 5 }}
                                    />
                                    Básica Secundaria y Media
                                </label>
                            </td>
                        </tr>
                        <tr className='border-2' style={{ borderColor: '#b1b1b1' }}>
                            <td className='p-1 font-medium italic border-2' style={{ borderColor: '#b1b1b1' }}>Tema</td>
                            <td>
                                <input
                                    type="text"
                                    style={{ width: '90%', textAlign: 'center' }}
                                />
                            </td>
                        </tr>
                        <tr className='border-2' style={{ borderColor: '#b1b1b1' }}>
                            <td className='p-1 font-medium italic border-2' style={{ borderColor: '#b1b1b1' }}>Objetivos</td>
                            <td>
                                <textarea
                                    className='font-medium'
                                    style={{ width: '90%', height: '80px', border: '1px solid', borderRadius: '5px', marginTop: 7, padding: '5px' }}
                                    placeholder='"Enter" para agregar otro objetivo'
                                    value={objectives}
                                    onChange={handleTextareaChange}
                                    onKeyDown={handleKeyDown}
                                />
                            </td>
                        </tr>
                        <tr className='border-2' style={{ borderColor: '#b1b1b1' }}>
                            <td className='p-1 font-medium italic border-2' style={{ borderColor: '#b1b1b1' }}>Eje Transversal</td>
                            <td>
                                <Box sx={{ minWidth: 120, m: 1 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Seleccione un Eje Transversal</InputLabel>
                                        <Select
                                            value={eje}
                                            onChange={handleChange}
                                            label="Seleccione un Eje Transversal"
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value={0}>Relaciones Sociales y Prácticas Cívicas</MenuItem>
                                            <MenuItem value={1}>Sexualidad y Construcción de Ciudadanía</MenuItem>
                                            <MenuItem value={2}>Educación Ambiental</MenuItem>
                                            <MenuItem value={3}>Emprendimiento</MenuItem>
                                            <MenuItem value={4}>Tecnologías de Información y Comunicación</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </td>
                        </tr>
                        <tr className='border-2' style={{ borderColor: '#b1b1b1' }}>
                            <td className='p-1 font-medium italic border-2' style={{ borderColor: '#b1b1b1' }}>Competencias Desarrolladas</td>
                            <td>
                                <Box sx={{ minWidth: 120, m: 1 }}>
                                    <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Seleccione las Competencias a Desarrollar</InputLabel>
                                        <Select
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            multiple
                                            label="Seleccione las Competencias a Desarrollar"
                                            value={personName}
                                            onChange={handleChangeCompe}
                                            renderValue={(selected) => selected.join(', ')}
                                            MenuProps={MenuProps}
                                        >
                                            {competencias.map((compes) => (
                                                <MenuItem key={compes.id} value={compes.valor} style={{ display: compes.id !== Number(eje) ? 'none' : 'flex' }}>
                                                    <Checkbox checked={personName.indexOf(compes.valor) > -1} />
                                                    <ListItemText primaryTypographyProps={{ style: { whiteSpace: 'normal' } }}>
                                                        {compes.content}
                                                    </ListItemText>
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </td>
                        </tr>
                        <tr>
                            <h5 className='font-medium italic text-start p-1'>Momentos para Desarrollar</h5>
                        </tr>
                        <tr>
                            <td className='p-1 font-semibold italic'>Primer Momento: Presentación del taller.</td>
                            <textarea
                                className='font-medium'
                                style={{ width: '90%', height: '80px', border: '1px solid', borderRadius: '5px', marginTop: 7, padding: '5px' }}
                                placeholder='Escribe todo el proceso de la presentación del taller.'
                            />
                        </tr>
                        <tr>
                            <td className='p-1 font-semibold italic'>Segundo Momento: Desarrollo de las Actividades.</td>
                            <textarea
                                className='font-medium'
                                style={{ width: '90%', height: '80px', border: '1px solid', borderRadius: '5px', marginTop: 7, padding: '5px' }}
                                placeholder='Escribe una breve explicación general sobre el desarrollo del taller.'
                            />
                        </tr>
                    </tbody>
                    {/* COMIENZO TABLA DINAMICA */}
                    <tbody style={{ textAlign: 'center' }}>
                        <tr>
                            <td colSpan={4}>
                                <table style={{ margin: 'auto', marginTop: 20 }}>
                                    <thead className='border-2' style={{ borderColor: '#b1b1b1', backgroundColor: '#e3e3e3' }}>
                                        <tr>
                                            <th className='border-2' style={{ borderColor: '#b1b1b1', paddingInline: 72 }}>Proceso</th>
                                            <th className='border-2' style={{ borderColor: '#b1b1b1', paddingInline: 72 }}>Recurso</th>
                                            <th className='border-2' style={{ borderColor: '#b1b1b1', paddingInline: 72 }}>Tiempo</th>
                                            <th className='border-2' style={{ borderColor: '#b1b1b1', paddingInline: 72 }}>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className='border-2' style={{ borderColor: '#b1b1b1' }}>
                                        {filas.map((fila, indice) => (
                                            <tr key={fila.id}>
                                                <td className='border-2' style={{ borderColor: '#b1b1b1' }}>
                                                    <textarea
                                                        className='font-medium'
                                                        style={{ width: '90%', height: '120px', border: '1px solid', borderRadius: '5px', marginTop: 7, padding: '5px' }}
                                                        placeholder='Describe el proceso paso a paso.'
                                                        value={fila.proceso}
                                                        onChange={(e) => actualizarFila(indice, 'proceso', e.target.value)}
                                                    />
                                                </td>
                                                <td className='border-2' style={{ borderColor: '#b1b1b1' }}>
                                                    <textarea
                                                        className='font-medium'
                                                        style={{ width: '90%', height: '120px', border: '1px solid', borderRadius: '5px', marginTop: 7, padding: '5px' }}
                                                        placeholder='¿Qué recursos se necesitarán para la ejecución del taller?'
                                                        value={fila.recurso}
                                                        onChange={(e) => actualizarFila(indice, 'recurso', e.target.value)}
                                                    />
                                                </td>
                                                <td className='border-2' style={{ borderColor: '#b1b1b1' }}>
                                                    <textarea
                                                        className='font-medium'
                                                        style={{ width: '90%', height: '120px', border: '1px solid', borderRadius: '5px', marginTop: 7, padding: '5px' }}
                                                        placeholder='¿Cuánto tiempo se empleará para la ejecución del taller?'
                                                        value={fila.tiempo}
                                                        onChange={(e) => actualizarFila(indice, 'tiempo', e.target.value)}
                                                    />
                                                </td>
                                                <td className='border-2' style={{ borderColor: '#b1b1b1', padding: 5 }}>
                                                    <button className="font-bold" style={{ color: "#FFF", backgroundColor: "#d71a1c", border: "1px solid", borderRadius: 3, padding: 5, borderColor: "#a31315" }} onClick={() => eliminarFila(indice)}>Eliminar</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button className="font-bold" type="button" onClick={agregarFila} style={{ marginTop: '5px', backgroundColor: "#258aff", border: "1px solid", borderRadius: 3, padding: 5, color: "#fff", borderColor: "#256cff" }}>Agregar fila</button>
                            </td>
                        </tr>
                    </tbody>
                    {/* FINAL TABLA DINAMICA */}
                    <tbody className='text-center'>
                        <tr>
                            <td className='p-1 font-semibold italic'>Tercer Momento: Cierre.</td>
                            <textarea
                                className='font-medium'
                                style={{ width: '90%', height: '80px', border: '1px solid', borderRadius: '5px', marginTop: 7, padding: '5px' }}
                                placeholder='Explica como se cerrará el taller.'
                            />
                        </tr>
                        <tr className='p-1 font-medium italic border-2' style={{ borderColor: '#b1b1b1' }}>
                            <td className='p-1 font-medium italic border-2' style={{ borderColor: '#b1b1b1' }}>Duración</td>
                            <td>
                                <input
                                    type="text"
                                    style={{ width: '90%', textAlign: 'center' }}
                                />
                            </td>
                        </tr>
                        <tr className='p-1 font-medium italic border-2' style={{ borderColor: '#b1b1b1' }}>
                            <td className='p-1 font-medium italic border-2' style={{ borderColor: '#b1b1b1' }}>Recomendaciones</td>
                            <textarea
                                className='font-medium'
                                style={{ width: '90%', height: '80px', border: '1px solid', borderRadius: '5px', marginTop: 7, padding: '5px' }}
                                placeholder='¿Qué recomiendas para la ejecución del taller?'
                            />
                        </tr>
                    </tbody>
                </table>
                <button className="font-bold" type="submit"
                    style={{
                        marginTop: '5px', backgroundColor: "#1ed760",
                        border: "1px solid", borderRadius: 3, padding: 5,
                        color: "#fff", borderColor: "#1ed760"
                    }}>
                    Agregar
                </button>
            </form>
        </div >
    );
};

export default CrearHerramientaForm;