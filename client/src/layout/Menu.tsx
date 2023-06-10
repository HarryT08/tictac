import { useState } from "react";
import { CardsMenu, Modal } from "@/components";
import {
  ContenidoModalEstudiante,
  ContenidoModalDirectivo,
} from "@/components/cards/ContenidoModal";
import NavigationIcon from '@mui/icons-material/Navigation';
import { Fab } from '@mui/material';

const Menu = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<string>("");

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

  return (
    <>
      <div className="container-cards">
        <CardsMenu handleOpenModal={handleOpenModal} />
        <Fab variant="extended" href="/" sx={{
          backgroundColor: "#186ade", position: "absolute", color: "white", bottom: 20, right: 20, zIndex: 999,
          '&:hover': {
            backgroundColor: "#0d4ea6"
          },
        }}>
          <NavigationIcon sx={{ mr: 1 }} />
          Volver
        </Fab>
      </div>

      <Modal openModal={openModal} handleCloseModal={handleCloseModal}>
        {modalContent}
      </Modal>
    </>
  );
};

export default Menu;
