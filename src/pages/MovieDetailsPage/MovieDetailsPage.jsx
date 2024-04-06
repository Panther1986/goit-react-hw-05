import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { fetchMovieDetails } from "../../components/MovieApi";
import { MdArrowBack } from "react-icons/md";

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || "/");

  useEffect(() => {
    const detailsMovie = async () => {
      const details = await fetchMovieDetails(moviesId);
      setMovies(details);
    };

    detailsMovie();
  }, [moviesId]);

  console.log(movies);
  return (
    <div>
      <Link to={backLinkRef.current}>
        <MdArrowBack />
        Go back
      </Link>
      {movies && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            alt={movies.title}
            width="250"
          />
          <div>
            <h2>
              {movies.title} ({movies.release_date})
            </h2>
            <p>Genres {movies.genres.map((genre) => genre.name).join(",")}</p>
            <p>Overview: {movies.overview}</p>
          </div>
        </div>
      )}

      {movies && (
        <div>
          <h3>Additional Information</h3>
          <ul>
            <li>
              <Link to={`/movies/${moviesId}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`/movies/${moviesId}/reviews`}> Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
