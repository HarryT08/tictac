import {Link} from "react-router-dom"
const CardsMenuPrincipal = () => {
  return (
    <>
      <div className="card principios">
        <div className="overlay"></div>
        <div className="circlePrincipios"></div>
        <p className="font-medium">Principios</p>
      </div>
      <div className="card competencias">
        <div className="overlay"></div>
        <div className="circleCompetencias"></div>
        <p className="font-medium">Competencias</p>
      </div>
      <Link to="/herramientas" className="card herramientas">
        <div className="overlay"></div>
        <div className="circleHerramientas"></div>
        <p className="font-medium">Herramientas</p>
      </Link>
    </>
  );
};

export default CardsMenuPrincipal;
