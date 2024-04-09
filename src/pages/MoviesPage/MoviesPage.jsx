import React, { useState, useEffect } from "react";
import { searchMovies } from "../../components/MovieApi/MovieApi";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const queryParam = searchParams.get("query");
        const results = await searchMovies(queryParam);
        if (results.length === 0) {
          setError("Ooooops something went wrong, please reload the page 😞");
          return;
        }
        setMovies(results);
        setError(null);
      } catch (error) {
        console.log(error);
        setError("Ooooops something went wrong, please reload the page 😞");
      }
    };
    if (searchParams.has("query")) {
      fetchMovies();
    }
  }, [searchParams]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    setSearchParams({ query });
  };
  return (
    <div className={css.container}>
      <h2>Search Movies</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="query"
          defaultValue={searchParams.get("query") || ""}
          placeholder="Search for a movie..."
          className={css.inputMovies}
        />
        <button type="submit" className={css.btnMovies}>
          Search
        </button>
      </form>

      {error && <p>{error}</p>}

      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
