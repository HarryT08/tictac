import { Menu, NotFound } from "@/layout";
import { Login } from "@/features/auth/pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/login/estudiantes/:opcion" element={<Login />} />
      <Route path="/login/directivos/:opcion" element={<Login />} />
      <Route path="/login/directivos/:opcion" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
