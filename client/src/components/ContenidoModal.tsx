export const ContenidoModalEstudiante = () => {
  return (
    <div className="container-cardsModal">
      <div className="cardModal pequenios">
        <div className="overlayModal"></div>
        <div className="circleModalPequenios"></div>
        <p className="font-medium">Estudiantes peques</p>
      </div>
      <div className="cardModal grandes">
        <div className="overlayModal"></div>
        <div className="circleModalGrandes"></div>
        <p className="font-medium">Estudiantes Grandes</p>
      </div>
    </div>
  );
};

export const ContenidoModalDirectivo = () => {
  return (
    <div className="container-cardsModal">
      <div className="cardModal directivos">
        <div className="overlayModal"></div>
        <div className="circleModalDirectivos"></div>
        <p className="font-medium">Directivos</p>
      </div>
      <div className="cardModal docentes">
        <div className="overlayModal"></div>
        <div className="circleModalDocentes"></div>
        <p className="font-medium">Docentes</p>
      </div>
    </div>
  );
};
