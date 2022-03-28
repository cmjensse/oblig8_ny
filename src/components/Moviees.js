import { useState } from "react";
import { getMovies } from "../utils/movieServicee";
import Movie from "./Movie";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleClick = async () => {
    const movie = await getMovies();
    setMovies(movie);
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        Trykk for å se filmliste
      </button>
      <div className="App">
        {movies.map((movie, i) => (
          <Movie title={movie.title} actor={movie.actor} key={`mov-${i}`} />
        ))}
      </div>
    </>
  );
};

export default Movies;
