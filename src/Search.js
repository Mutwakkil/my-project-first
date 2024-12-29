import { FaSearch } from "react-icons/fa";
import DataContext from "./DataContext";
import { useContext, useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState('');
  
  const {notes, searchResult, setSearchResult} = useContext(DataContext);
  
   useEffect(() => {
    if (notes) {
    const filteredNote = notes.filter(note => (note.text).toLowerCase().includes(search.toLowerCase()) || (note.title).toLowerCase().includes(search.toLowerCase()));
    setSearchResult(filteredNote); 
    console.log(searchResult)
    }
  }, [search, notes]); 
  return (
    <div>
      <form className='form' onSubmit={(e) => e.preventDefault()} >
        <FaSearch className='search-icon' type="submit"  />
        <input type="text"
               placeholder="Search"
               className='search'
               value={search}
               onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search