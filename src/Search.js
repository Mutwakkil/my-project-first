import { FaSearch } from "react-icons/fa";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const notes = useStoreState((state) => state.notes);
  const setSearchResult = useStoreActions((actions) => actions.setSearchResult);
  useEffect(() => {
    if (notes) {
      const filteredNote = notes.filter(
        (note) =>
          note.text.toLowerCase().includes(search.toLowerCase()) ||
          note.title.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResult(filteredNote);
    }
  }, [search, notes]);
  return (
    <div>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <FaSearch className="search-icon" type="submit" />
        <input
          type="text"
          placeholder="Search"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
