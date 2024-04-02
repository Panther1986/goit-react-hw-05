import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import axios from "axios";
import NotFoundPage from "../../pages/NotFoundPage";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  const [loadind, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (query === "") return;
    async function fetchArticles() {
      try {
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=489ee39069cdd6ebb9b9edb124e8d4aa`;

        const options = {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODllZTM5MDY5Y2RkNmViYjliOWVkYjEyNGU4ZDRhYSIsInN1YiI6IjY2MGM1ZjcwOWM5N2JkMDE3Y2E1NzlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C5GCyJnD3id - ojK0JfV0Hv6YdftvbhJvPg073sYnsrE",
          },
        };
        const response = await axios.get(url, options);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArticles();
  }, [query]);

  const handleSearch = (query) => {
    setQuery(query);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>

      // <Routes>
      //   <Route path="/" element={<Home />} />
      //   <Route path="/about" element={<About />} />
      //   <Route path="/products" element={<Products />} />
      //   <Route path="/products/:productId" element={<ProductDetails />} />
      //   {/* <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
