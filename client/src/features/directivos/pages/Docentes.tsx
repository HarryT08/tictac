import { Header } from "@/components";
import { TableDocentes } from "@/features/directivos/components";
import { FiSearch } from "react-icons/fi";
import ReactModal from "react-modal";
import {useState} from "react";
import axios from "axios";

const Docentes = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [file, setFile] = useState(null);
  const handleInputChange = (event) => {
    const selectedFile = event.target.files[0];
    // Validar el tipo de archivo
    if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post("http://localhost:8081/personas/uploadDocentes", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Archivo enviado:', response.data);
      } catch (error) {
        console.error('Error al enviar el archivo:', error);
      }
    }
    handleCloseModal();
  };

  return (
    <div className="mt-3">
      <Header titulo="Docentes" subtitulo="Listado" />
      <div className="bg-white mt-4 shadow-md p-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-10">
            {/* Barra busqueda nombre */}
            <div>
              <p className="font-medium">Nombre docente</p>
              <div className="flex items-center gap-2 focus:outline-none rounded-lg border border-gray-300 hover:bg-gray-100 bg-white mt-2">
                <div className="p-2 rounded-tl-lg rounded-bl-lg">
                  <FiSearch className="" size={20} />
                </div>
                <input
                  className="focus:outline-none border-none bg-transparent py-2 px-2"
                  type="text"
                  placeholder="Buscar..."
                />
              </div>
            </div>

            {/* Select filter by year */}
            <div>
              <p className="font-medium">Año</p>
              <select className="appearance-none bg-white border border-gray-300 py-2 px-4 pr-8 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:shadow-outline mt-2">
                <option value="1">2023</option>
                <option value="2">2022</option>
              </select>
            </div>
          </div>
          <button
            type="button" onClick={handleOpenModal}
            className="bg-azul-50 hover:bg-azul-100 text-white font-medium rounded-lg h-max p-3">
            Cargar docentes
          </button>
          <ReactModal
              isOpen={modalVisible}
              onRequestClose={handleCloseModal}
              // Otras propiedades del modal
              style={{
                overlay: {
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                content: {
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '450px',
                  height: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              }}
          >
            {/* Contenido del modal */}
            <h1 style={{fontSize: '24px', marginBottom: '16px'}}>Cargar docentes</h1>
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <label>
                <input name={"file"} id={"file"} type="file" onChange={handleInputChange}
                       className="bg-gray-100 border border-gray-300 rounded-lg p-1 mt-1"/>
              </label>
              <div style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '16px'
              }}>
                <button type="submit"
                        className="bg-green-500 hover:bg-green-300 text-white font-medium rounded-lg h-max p-2">Enviar
                </button>
                <button onClick={handleCloseModal}
                        className="bg-red-500 hover:bg-red-300 text-white font-medium rounded-lg h-max p-2">Cancelar
                </button>
              </div>
            </form>
          </ReactModal>
        </div>
        <TableDocentes />
      </div>
    </div>
  );
};

export default Docentes;
