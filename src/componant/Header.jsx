// Composant Header qui sera appelé dans l'App
import { Link } from "react-router-dom";

import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="logo pokemon"
          className="header-logo"
        />
      </Link>
      <h1 className="main-title">
        Le meilleur pokedex pour devenir le meilleur dresseur.e
      </h1>
      <nav>
        <ul className="header-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokemons">Pokemons' List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
