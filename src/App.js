import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import PokemonsPage from "./page/PokemonsPage";

function App() {
  return (
    // ROUTER pour avoir plusieurs pages
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
