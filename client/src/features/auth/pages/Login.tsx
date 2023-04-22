import { useParams } from "react-router-dom";
import {
  FormularioLoginEstudiantesPrimaria,
  FormularioLoginEstudiantesPrimariaSecundaria,
  FormularioLoginDirectivosProfesores,
} from "@/features/auth/components/ContenidoLogin";

const Login = () => {
  const { opcion } = useParams();

  let formulario;
  switch (opcion) {
    case "primaria":
      formulario = <FormularioLoginEstudiantesPrimaria />;
      break;
    case "primaria-secundaria":
      formulario = <FormularioLoginEstudiantesPrimariaSecundaria />;
      break;
    case "directivos-docentes":
      formulario = <FormularioLoginDirectivosProfesores />;
      break;
    default:
      formulario = <div>Opción inválida</div>;
  }

  return (
    <div>
      {formulario}
    </div>
  );
};

export default Login;
