import { useParams } from "react-router-dom";
import Header from "../componant/Header";

function TrainerDetailPage() {
  const trainers = [
    {
      id: 1,
      name: "Sasha du Bourg Palette",
      bio: "Je veux tous les attraper",
    },
    {
      id: 2,
      name: "Dwayne Johnson",
      bio: "Je veux tous les soulever",
    },
    { id: 3, name: "Affida Turner", bio: "Je veux décéder" },
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
        <p>Sa bio : "{trainerToDisplay.bio}"</p>
      </main>
    </>
  );
}

export default TrainerDetailPage;
