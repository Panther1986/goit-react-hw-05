import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NavBar from "../NavBar/NavBar";
import NotFoundPage from "../../pages/NotFoundPage";
import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const Cast = lazy(() => import("../Cast"));
const Reviews = lazy(() => import("../Reviews"));
function App() {
  return (
    <div className={css.container}>
      <Suspense fallback={<div>Loading... 🤔</div>}>
        <NavBar />

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
