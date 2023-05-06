interface CardsMenuProps {
  handleOpenModal: (card: string) => void;
}

const CardsMenu = ({ handleOpenModal }: CardsMenuProps) => {
  return (
    <>
      <div
        onClick={() => handleOpenModal("Estudiantes")}
        className="card estudiantes"
      >
        <div className="overlay"></div>
        <div className="circleEstudiantes"></div>
        <p className="font-medium">Estudiantes</p>
      </div>
      <div
        onClick={() => handleOpenModal("Directivos")}
        className="card directivos"
      >
        <div className="overlay"></div>
        <div className="circleDirectivos"></div>
        <p className="font-medium">Directivos</p>
      </div>
    </>
  );
};

export default CardsMenu;
