import { useState } from "react";

interface useMostrarPasswordProps {
  password: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  mostrarPassword: boolean;
  toggleMostrarPassword: () => void;
}

export const useMostrarPassword = (): useMostrarPasswordProps => {
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const toggleMostrarPassword = () => {
    setMostrarPassword(!mostrarPassword);
  };

  return {
    mostrarPassword,
    toggleMostrarPassword,
    handleChange,
    password,
  };
};
