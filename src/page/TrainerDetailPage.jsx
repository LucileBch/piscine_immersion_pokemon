import { useParams } from "react-router-dom";
import Header from "../componant/Header";

function TrainerDetailPage() {
  const trainers = [
    {
      id: 1,
      name: "Sasha du Bourg Palette",
      img: "https://fr.web.img3.acsta.net/r_654_368/newsv7/20/03/19/17/33/4454395.jpg",
      bio: "Je veux tous les attraper",
    },
    {
      id: 2,
      name: "Dwayne Johnson",
      img: "https://www.numerama.com/wp-content/uploads/2023/05/regis-pokemon.jpg",
      bio: "Je veux tous les soulever",
    },
    {
      id: 3,
      name: "Affida Turner",
      img: "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season06/season06_ep47_ss02.jpg",
      bio: "Je veux décéder",
    },
  ];

  const { trainerId } = useParams();

  const trainerToDisplay = trainers.find((trainer) => {
    return trainer.id == trainerId;
  });

  console.log(trainerToDisplay);

  return (
    <>
      <Header />
      <h2>Voici le détail sur l'entraineur sélectionné :</h2>
      <main>
        <h3>{trainerToDisplay.name}</h3>
        <img src={trainerToDisplay.img} alt={trainerToDisplay.name}></img>
        <p>Sa bio : "{trainerToDisplay.bio}"</p>
      </main>
    </>
  );
}

export default TrainerDetailPage;
