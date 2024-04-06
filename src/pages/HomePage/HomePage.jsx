import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieList from "../../components/MovieList";
import { fetchTrendingMovies } from "../../components/MovieApi";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setMovies(movies);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        setError(
          toast.error("Ooooops something went wrong, please reload the page 😞")
        );
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <p>Loading... 🤔</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Trending Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
