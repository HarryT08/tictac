import { useState } from 'react';
import { Header } from "@/components";

interface Fila {
    id: number;
    proceso: string;
    recurso: string;
    tiempo: string;
}

const CrearHerramientaForm = () => {
    const [objectives, setObjectives] = useState('');
    const [competences, setCompetences] = useState('');
    const [filas, setFilas] = useState<Fila[]>([]);

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

    const handleCompetencesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCompetences(event.target.value);
    };

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setObjectives(event.target.value);
    };

    const handleKeyDownCompetences = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            let newCompetences = competences;

            if (!competences.startsWith('•')) {
                newCompetences = '• ' + newCompetences;
            }
            if (!competences.endsWith('.')) {
                newCompetences = newCompetences + '.';
            }

            setCompetences(newCompetences + '\n• ');
        }
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
                            <td className='p-1 font-medium italic border-2' style={{ borderColor: '#b1b1b1' }}>Competencias Desarrolladas</td>
                            <td>
                                <textarea
                                    className='font-medium'
                                    style={{ width: '90%', height: '80px', border: '1px solid', borderRadius: '5px', marginTop: 7, padding: '5px' }}
                                    placeholder='"Enter" para agregar otra competencia'
                                    value={competences}
                                    onChange={handleCompetencesChange}
                                    onKeyDown={handleKeyDownCompetences}
                                />
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
                                <table style={{ margin: 'auto' }}>
                                    <thead className='border-2' style={{ borderColor: '#b1b1b1', backgroundColor: '#e3e3e3' }}>
                                        <tr>
                                            <th className='border-2' style={{ borderColor: '#b1b1b1' }}>Proceso</th>
                                            <th className='border-2' style={{ borderColor: '#b1b1b1' }}>Recurso</th>
                                            <th className='border-2' style={{ borderColor: '#b1b1b1' }}>Tiempo</th>
                                            <th className='border-2' style={{ borderColor: '#b1b1b1' }}>Acciones</th>
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
        </div>
    );
};

export default CrearHerramientaForm;