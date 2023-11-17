import { Link } from "react-router-dom";
import Header from "./Header";

function TeamList() {
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

  return (
    <>
      <h2>Les entrainteurs</h2>

      {trainers.map((trainer) => {
        return (
          <Link to={`/trainers/${trainer.id}/details`}>
            <article>
              <h2>{trainer.name}</h2>
            </article>
          </Link>
        );
      })}
    </>
  );
}

export default TeamList;
