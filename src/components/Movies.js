import Actor from "./Actor.js";

import Button from "./Button.js";

const movieList = [
  { id: 1, actor: "Leocarp", title: "Shutter", genre: "horror", year: "2001" },
  {
    id: 2,
    actor: "twilight",
    title: "the batman",
    genre: "drama",
    year: "2022",
  },
];

export default function Movies() {
  return (
    <div className="App">
      {movieList.map((product) => (
        <Actor
          key={product.id}
          actor={product.actor}
          title={product.title}
          genre={product.genre}
          year={product.year}
        />
      ))}
      <Button />
    </div>
  );
}
