import { fetchMovieCast } from "./MovieApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await fetchMovieCast(moviesId);
        setCast(castData);
        setLoading(false);
      } catch (error) {
        setError("Ooooops something went wrong, please reload the page 😞");
        setLoading(false);
      }
    };
    fetchCast();
  }, [moviesId]);

  if (loading) {
    return <div>Loading, please wait 🤔</div>;
  }
  return (
    <div>
      <h2>Movie Cast</h2>
      {cast.length > 0 ? (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                  width="130"
                />
              ) : (
                <div>No Image Available</div>
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available.</p>
      )}
    </div>
  );
};

export default MovieCast;
