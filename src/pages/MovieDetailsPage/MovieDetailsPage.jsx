import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, Suspense } from "react";
import { fetchMovieDetails } from "../../components/MovieApi/MovieApi";
import { MdArrowBack } from "react-icons/md";
import css from "./MovieDetailsPage.module.css";

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
    <div className={css.container}>
      <Link to={backLinkRef.current}>
        <MdArrowBack />
        Go back
      </Link>
      {movies && (
        <div className={css.containerMovie}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            alt={movies.title}
            width="250"
          />
          <div className={css.containerMovieText}>
            <h2>
              {movies.title} ({movies.release_date})
            </h2>
            <p className={css.containerMovieTextGenres}>
              Genres: {movies.genres.map((genre) => genre.name).join(",")}
            </p>
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
          <Suspense fallback={<div>Loading... 🥵</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
