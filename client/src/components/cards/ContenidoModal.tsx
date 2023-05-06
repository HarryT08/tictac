import { Link } from "react-router-dom";

export const ContenidoModalEstudiante = () => {
  return (
    <div className="container-cardsModal">
      <Link to="/login/estudiantes/primaria" className="cardModal pequenios">
        <div className="overlayModal"></div>
        <div className="circleModalPequenios"></div>
        <p className="font-medium text-center">Preescolar hasta 3°</p>
      </Link>
      <Link to="/login/estudiantes/primaria-secundaria" className="cardModal grandes">
        <div className="overlayModal"></div>
        <div className="circleModalGrandes"></div>
        <p className="font-medium text-center">Estudiantes de 4° hasta 11°</p>
      </Link>
    </div>
  );
};

export const ContenidoModalDirectivo = () => {
  return (
    <div className="container-cardsModal">
      <Link to="/login/directivos/directivos-docentes" className="cardModal coordinador">
        <div className="overlayModal"></div>
        <div className="circleModalCoordinador"></div>
        <p className="font-medium text-center">Coordinador y Rector</p>
      </Link>
      <Link to="/login/directivos/directivos-docentes" className="cardModal docentes">
        <div className="overlayModal"></div>
        <div className="circleModalDocentes"></div>
        <p className="font-medium text-center">Docentes</p>
      </Link>
      <Link to="/login/directivos/directivos-docentes" className="cardModal liderPpt">
        <div className="overlayModal"></div>
        <div className="circleModalLiderPpt"></div>
        <p className="font-medium text-center">Lider PPT</p>
      </Link>
    </div>
  );
};
