import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODllZTM5MDY5Y2RkNmViYjliOWVkYjEyNGU4ZDRhYSIsInN1YiI6IjY2MGM1ZjcwOWM5N2JkMDE3Y2E1NzlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C5GCyJnD3id-ojK0JfV0Hv6YdftvbhJvPg073sYnsrE";

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [movies, setMovie] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchTrendingMovieById() {
      try {
        const url = `https://api.themoviedb.org/3/movie/${moviesId}`;

        const options = {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        };
        const response = await axios.get(url, options);
        setMovie(response.data);
        console.log(response);
        setError(false);
      } catch (error) {
        setError("Ooooops something went wrong, please reload the page 😞");
      }
    }
    fetchTrendingMovieById();
  }, [moviesId]);

  return (
    <div>
      {movies && (
        <div>
          <div>
            <img src={movies.backdrop_path} />
            <p>
              {movies.title} ({movies.release_date})
            </p>
            <p>Genres {movies.genres.map((genre) => genre.name).join(",")}</p>
            <p>Overview: {movies.tagline}</p>
          </div>
          <div>
            <p>Additional Information</p>
            <Link to="/cast">
              <p>Cast </p>
            </Link>
            <Link to="/reviews">
              <p>Reviews {movies.overview}</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default MovieDetailsPage;
