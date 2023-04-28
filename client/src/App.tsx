import { Menu, NotFound, SecondMenu } from "@/layout";
import { Login } from "@/features/auth/pages";
import { Home } from "@/features/home/pages";
import { Herramientas } from "@/features/directivos/pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/login/estudiantes/:opcion" element={<Login />} />
      <Route path="/login/directivos/:opcion" element={<Login />} />
      <Route path="/login/directivos/:opcion" element={<Login />} />
      <Route path="/menu-principal" element={<SecondMenu />} />
      <Route path="/herramientas/*" element={<Herramientas />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
