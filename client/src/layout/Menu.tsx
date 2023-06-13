import { useState } from "react";
import { CardsMenu, Modal } from "@/components";
import {
  ContenidoModalEstudiante,
  ContenidoModalDirectivo,
} from "@/components/cards/ContenidoModal";
import NavigationIcon from '@mui/icons-material/Navigation';
import { Fab } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

const Menu = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<string>("");
  const endpoint = "http://localhost:8081/sesion/validarToken";
  const [isLoading, setIsLoading] = useState(true);
  const [isValidated, setIsValidated] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const validarToken = async () => {
    try {
      const response = await axios.post(endpoint, token, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setIsValidated(response.data.estado);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  if (token){
    validarToken();
  }
  const handleOpenModal = (card: string) => {
    setSelectedCard(card);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  let modalContent = null;

  if (selectedCard === "Estudiantes") {
    modalContent = <ContenidoModalEstudiante />;
  } else if (selectedCard === "Directivos") {
    modalContent = <ContenidoModalDirectivo />;
  }

  if (isLoading && token) {
    return <CircularProgress />;
  }
  if(isValidated){
    navigate("/")
  }
  else {
    return (
        <>
          <div className="container-cards">
            <CardsMenu handleOpenModal={handleOpenModal}/>
            <Fab variant="extended" href="/" sx={{
              backgroundColor: "#186ade", position: "absolute", color: "white", bottom: 20, right: 20, zIndex: 999,
              '&:hover': {
                backgroundColor: "#0d4ea6",
              },
            }}>
              <NavigationIcon sx={{mr: 1}}/>
              Volver
            </Fab>
          </div>

          <Modal openModal={openModal} handleCloseModal={handleCloseModal}>
            {modalContent}
          </Modal>
        </>
    );
  }
};

export default Menu;
