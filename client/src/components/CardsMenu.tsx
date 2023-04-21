import { FaYoutube, FaTwitch } from "react-icons/fa";

interface CardsMenuProps {
  handleOpenModal: (card: string) => void;
}

const CardsMenu = ({ handleOpenModal }: CardsMenuProps) => {
  return (
    <>
      <div
        onClick={() => handleOpenModal("Estudiantes")}
        className="card youtube"
      >
        <div className="overlay"></div>
        <div className="circle">
          <FaYoutube className="logo" />
        </div>
        <p className="font-medium">Estudiantes</p>
      </div>
      <div
        onClick={() => handleOpenModal("Directivos")}
        className="card twitch"
      >
        <div className="overlay"></div>
        <div className="circle">
          <FaTwitch className="logo" />
        </div>
        <p className="font-medium">Directivos</p>
      </div>
    </>
  );
};

export default CardsMenu;
