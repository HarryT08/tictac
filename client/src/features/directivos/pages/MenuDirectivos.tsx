import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { Dashboard } from "@/components";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

const MenuDirectivos = () => {
  const location = useLocation();
  const endpoint = "http://localhost:8081/sesion/validarToken";
  const [isLoading, setIsLoading] = useState(true);
  const [isValidated, setIsValidated] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      // Verificación de nulidad
      htmlElement.style.scrollBehavior = "auto";
      window.scroll({ top: 0 });
      htmlElement.style.scrollBehavior = "";
    }

    const validarToken = async () => {
      try {
        const response = await axios.post(endpoint, token, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setIsValidated(response.data.estado);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    validarToken();
  }, [location.pathname]); // triggered on route change

  if (isLoading) {
    return <CircularProgress />;
  }
  if (isValidated && localStorage.getItem("rol") == "Admin") {
    return (
      <>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      </>
    );
  } else {
    return <Navigate to={"/menu"} />;
  }
};

export default MenuDirectivos;
