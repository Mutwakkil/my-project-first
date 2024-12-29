import { useState, createContext, useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";

const DataContext = createContext();

export function DataProvider ({children}) {
  const[notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes'))||[]);
  const [newNote, setNewNote] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editNote, setEditNote] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const url = 'http://localhost:1500/notes';
  const {data} = useAxiosFetch(url);
  

  /* useEffect(() => {
   if(data) setNotes(data);
  }, [data]);
  */
return(
<DataContext.Provider value={
  {
    notes, setNotes, newNote,
    setNewNote, newTitle, setNewTitle,
    editTitle, setEditTitle, editNote,
    setEditNote, searchResult, setSearchResult
  }
}>
    {children}
</DataContext.Provider>
);
}

export default DataContext;