import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter search movie 😉");
      return;
    }
    onSubmit(query);
    setQuery("");
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Toaster position={"top-right"} />
    </header>
  );
};
export default SearchBar;
