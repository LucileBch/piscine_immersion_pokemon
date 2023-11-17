import Header from "../componant/Header";
import PokemonsTeam from "../componant/PokemonsTeam";

function HomePage() {
  return (
    // balise vide (= un fragement) pour entourer car ils ont besoin d'un parent
    // Si pas besoin que le HTML consièdre une div, ou article... on utilise ce fragment
    <>
      <Header />
      <PokemonsTeam />
    </>
  );
}

export default HomePage;
