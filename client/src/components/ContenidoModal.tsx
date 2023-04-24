import { Link } from "react-router-dom";

export const ContenidoModalEstudiante = () => {
  return (
    <div className="container-cardsModal">
      <Link to="/login/estudiantes/primaria" className="cardModal pequenios">
        <div className="overlayModal"></div>
        <div className="circleModalPequenios"></div>
        <p className="font-medium">Estudiantes de 1° hasta 3°</p>
      </Link>
      <Link to="/login/estudiantes/primaria-secundaria" className="cardModal grandes">
        <div className="overlayModal"></div>
        <div className="circleModalGrandes"></div>
        <p className="font-medium">Estudiantes de 4° hasta 11°</p>
      </Link>
    </div>
  );
};

export const ContenidoModalDirectivo = () => {
  return (
    <div className="container-cardsModal">
      <Link to="/login/directivos/directivos-docentes" className="cardModal directivos">
        <div className="overlayModal"></div>
        <div className="circleModalDirectivos"></div>
        <p className="font-medium">Coordinadores y Rector</p>
      </Link>
      <Link to="/login/directivos/directivos-docentes" className="cardModal docentes">
        <div className="overlayModal"></div>
        <div className="circleModalDocentes"></div>
        <p className="font-medium">Docentes</p>
      </Link>
    </div>
  );
};
