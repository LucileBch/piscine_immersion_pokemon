import { Link } from "react-router-dom";
import Header from "./Header";

import "./TeamList.scss";

function TeamList() {
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

  return (
    <>
      <h2>Les entrainteurs : </h2>
      <div className="trainer-list">
        {trainers.map((trainer) => {
          return (
            <Link to={`/trainers/${trainer.id}/details`}>
              <article className="trainer-article">
                <h2>{trainer.name}</h2>
                <img src={trainer.img} alt={trainer.name}></img>
              </article>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default TeamList;
