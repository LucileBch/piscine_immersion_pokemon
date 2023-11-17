import Header from "../componant/Header";

function HomePage() {
  const pokemons = [
    {
      id: 1,
      name: "bulbasaur",
      types: ["poison", "grass"],
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      isInTeam: true,
    },
    {
      id: 2,
      name: "ivysaur",
      types: ["poison", "grass"],
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      isInTeam: true,
    },
    {
      id: 3,
      name: "venusaur",
      types: ["poison", "grass"],
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      isInTeam: false,
    },
    {
      id: 4,
      name: "charmander",
      types: ["fire"],
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      isInTeam: true,
    },
    {
      id: 5,
      name: "charmeleon",
      types: ["fire"],
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      isInTeam: false,
    },
    {
      id: 6,
      name: "charizard",
      types: ["flying", "fire"],
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      isInTeam: true,
    },
    {
      id: 7,
      name: "squirtle",
      types: ["water"],
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      isInTeam: true,
    },
    {
      id: 8,
      name: "wartortle",
      types: ["water"],
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      isInTeam: false,
    },
    {
      id: 9,
      name: "blastoise",
      types: ["water"],
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      isInTeam: true,
    },
  ];

  const pokemonsInTeam = pokemons.filter((pokemon) => {
    return pokemon.isInTeam == true;
  });

  return (
    // balise vide (= un fragement) pour entourer car ils ont besoin d'un parent
    // Si pas besoin que le HTML consièdre une div, ou article... on utilise ce fragment
    <>
      <Header />
      <main>
        {pokemonsInTeam.map((pokemon) => {
          return (
            <article>
              <h2> {pokemon.name} </h2>
            </article>
          );
        })}
      </main>
    </>
  );
}

export default HomePage;
