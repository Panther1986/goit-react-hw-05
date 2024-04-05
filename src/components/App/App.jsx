import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import NotFoundPage from "../../pages/NotFoundPage";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import Reviews from "../../pages/MovieDetailsPage/Reviews";
import Cast from "../../pages/MovieDetailsPage/Cast";

function App() {
  const [loadind, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]);

  // useEffect(() => {
  //   if (query === "") return;
  //   async function fetchArticles() {
  //     try {
  //       const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=489ee39069cdd6ebb9b9edb124e8d4aa`;

  //       const options = {
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODllZTM5MDY5Y2RkNmViYjliOWVkYjEyNGU4ZDRhYSIsInN1YiI6IjY2MGM1ZjcwOWM5N2JkMDE3Y2E1NzlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C5GCyJnD3id - ojK0JfV0Hv6YdftvbhJvPg073sYnsrE",
  //         },
  //       };
  //       const response = await axios.get(url, options);
  //       console.log(response);
  //       const normalizedData = response.data.results.map(
  //         ({ poster_path, id, title, overview }) => {}
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchArticles();
  // }, [query]);

  const handleSearch = (query) => {
    setQuery(query);
  };
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* <SearchBar onSubmit={handleSearch} /> */}
    </div>
  );
}

export default App;
