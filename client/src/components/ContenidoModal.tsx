import { FaTwitch, FaYoutube } from "react-icons/fa";

export const ContenidoModalEstudiante = () => {
  return (
    <div className="container-cardsModal">
      <div className="cardModal youtube">
        <div className="overlayModal"></div>
        <div className="circleModal">
          <FaYoutube className="logoModal" />
        </div>
        <p className="font-medium">Estudiantes peques</p>
      </div>
      <div className="cardModal twitch">
        <div className="overlayModal"></div>
        <div className="circleModal">
          <FaTwitch className="logoModal" />
        </div>
        <p className="font-medium">Estudiantes Grandes</p>
      </div>
    </div>
  );
};

export const ContenidoModalDirectivo = () => {
  return (
    <div className="container-cardsModal">
      <div className="cardModal youtube">
        <div className="overlayModal"></div>
        <div className="circleModal">
          <FaYoutube className="logoModal" />
        </div>
        <p className="font-medium">Directivos</p>
      </div>
      <div className="cardModal twitch">
        <div className="overlayModal"></div>
        <div className="circleModal">
          <FaTwitch className="logoModal" />
        </div>
        <p className="font-medium">Docentes</p>
      </div>
    </div>
  );
};
