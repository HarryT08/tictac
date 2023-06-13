import { useEffect, useState } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router";
import CircularProgress from '@mui/material/CircularProgress';
import { Dashboard } from "../components";
import axios from "axios";

const MenuEstudiantes = () => {
    const location = useLocation();
    const endpoint = "http://localhost:8081/sesion/validarToken";
    const [isLoading, setIsLoading] = useState(true);
    const [isValidated, setIsValidated] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const htmlElement = document.querySelector("html");
        if (htmlElement) {
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
    }, [location.pathname]);

    if (isLoading) {
        return <CircularProgress />;
    }

    if (isValidated && localStorage.getItem("rol") == "Estudiante") {
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

export default MenuEstudiantes;