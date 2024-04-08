import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigations from "../NavBar/Navigations";
import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const Cast = lazy(() => import("../MovieCast"));
const Reviews = lazy(() => import("../MovieReviews"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
function App() {
  return (
    <div className={css.container}>
      <Suspense fallback={<div>Loading... 🤔</div>}>
        <Navigations />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviesId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
