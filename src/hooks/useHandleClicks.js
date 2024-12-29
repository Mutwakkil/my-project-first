import DataContext from "../DataContext";
import { useContext, useEffect} from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function useHandleClicks() {
  const{notes, setNotes, newTitle, setNewTitle, newNote, setNewNote, editTitle, editNote} = useContext(DataContext);
  const navigate = useNavigate();
  axios.defaults.baseURL = 'http://localhost:1500';

    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]); 
  
   async function handleAdd() {
      const id = notes.length ? notes[notes.length -1].id + 1 : 1;
      const date= format(new Date(), 'h:mm a, MMMM d, yyyy.');
      try{
      if (!newTitle && !newNote) return;
      /* const response = await axios.post('/notes', {id, title: newTitle, text: newNote, date}); */  
      const myNote = [...notes, {id, title: newTitle, text: newNote, date}]; 
      setNotes(myNote);
      setNewNote('');
      setNewTitle('');
      navigate('/');
      } catch(err) {
        console.log(err.message);
      }
    }

    async function handleEdit(id) {
      const date= format(new Date(), 'h:mm a, MMMM d, yyyy.');
      /* const response = await axios.put(`/notes/${id}`, updatedNote); */
      const note= notes.map(note => note.id === id ? {...note,  title: editTitle, text: editNote, date } : note);
      setNotes(note);
      setNewNote('');
      setNewTitle('');
      navigate('/');
    }

    async function handleDelete(id) {
      /* await axios.delete(`/notes/${id}`); */ 
      const deleteNote = notes.filter(note => note.id !== id); 
      setNotes(deleteNote);
      navigate('/'); 
    }

  return {handleAdd, handleEdit, handleDelete};
}