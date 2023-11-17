import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import PokemonsPage from "./page/PokemonsPage";
import PokemonDetailPage from "./page/PokemonDetailPage";

function App() {
  return (
    // ROUTER pour avoir plusieurs pages
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonsPage />} />
        <Route
          path="/pokemons/:pokemonId/details"
          element={<PokemonDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
