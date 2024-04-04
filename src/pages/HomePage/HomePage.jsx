import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODllZTM5MDY5Y2RkNmViYjliOWVkYjEyNGU4ZDRhYSIsInN1YiI6IjY2MGM1ZjcwOWM5N2JkMDE3Y2E1NzlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C5GCyJnD3id-ojK0JfV0Hv6YdftvbhJvPg073sYnsrE";

const HomePage = () => {
  const [movies, setMovie] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchTrendingMovie() {
      try {
        const url = "https://api.themoviedb.org/3/trending/movie/day";

        const options = {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        };
        const response = await axios.get(url, options);
        setMovie(response.data.results);
        setError(false);
      } catch (error) {
        setError("Ooooops something went wrong, please reload the page 😞");
      }
    }
    fetchTrendingMovie();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <div>
        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <li>
                  <p>{movie.title}</p>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePage;
