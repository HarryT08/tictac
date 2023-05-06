import { useState } from "react";
import { CardsMenu, Modal } from "@/components";
import {
  ContenidoModalEstudiante,
  ContenidoModalDirectivo,
} from "@/components/cards/ContenidoModal";

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
      </div>
      <Modal openModal={openModal} handleCloseModal={handleCloseModal}>
        {modalContent}
      </Modal>
    </>
  );
};

export default Menu;
