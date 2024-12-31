import { useEffect } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStoreState, useStoreActions } from "easy-peasy";

export function useHandleClicks() {
  const notes = useStoreState((state) => state.notes);
  const newTitle = useStoreState((state) => state.newTitle);
  const newNote = useStoreState((state) => state.newNote);
  const editTitle = useStoreState((state) => state.editTitle);
  const editNote = useStoreState((state) => state.editNote);
  const setNotes = useStoreActions((actions) => actions.setNotes);
  const setNewNote = useStoreActions((actions) => actions.setNewNote);
  const setNewTitle = useStoreActions((actions) => actions.setNewTitle);

  const navigate = useNavigate();
  /*  axios.defaults.baseURL = "http://localhost:1500";
   */
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  async function handleAdd() {
    const id = notes.length ? notes[notes.length - 1].id + 1 : 1;
    const date = format(new Date(), "h:mm a, MMMM d, yyyy.");
    try {
      if (!newTitle && !newNote) return;
      /* const response = await axios.post('/notes', {id, title: newTitle, text: newNote, date}); */
      const myNote = [...notes, { id, title: newTitle, text: newNote, date }];
      setNotes(myNote);
      setNewNote("");
      setNewTitle("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  async function handleEdit(id) {
    const date = format(new Date(), "h:mm a, MMMM d, yyyy.");
    /* const response = await axios.put(`/notes/${id}`, updatedNote); */
    try {
      const note = notes.map((note) =>
        note.id === id
          ? { ...note, title: editTitle, text: editNote, date }
          : note
      );
      setNotes(note);
      setNewNote("");
      setNewTitle("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  async function handleDelete(id) {
    /* await axios.delete(`/notes/${id}`); */
    const deleteNote = notes.filter((note) => note.id !== id);
    setNotes(deleteNote);
    navigate("/");
  }

  return { handleAdd, handleEdit, handleDelete };
}
