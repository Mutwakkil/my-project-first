import { useParams } from "react-router-dom";
import DataContext from "./DataContext";
import { useContext, useEffect } from "react";
import { useHandleClicks } from "./hooks/useHandleClicks";
const EditPost = () => {
  const {notes, editTitle, setEditTitle, editNote, setEditNote} = useContext(DataContext);
  const {handleEdit} = useHandleClicks()
  const {id} = useParams();
  const note = notes.find(note => (note.id).toString() === id)
    useEffect(() => {
      setEditNote(note.text);
      setEditTitle(note.title);
    }, [notes]);

  return (
    <main className="add-notes-container">
      <p>Edit note</p>
      <form className="form-notes-container" onSubmit={(e) => e.preventDefault()}>
        <input
         placeholder="Title"
         value={editTitle}
         onChange={(e) => setEditTitle(e.target.value)}
         autoFocus
         />
        <textarea 
        placeholder="Note"
        value={editNote}
        onChange={(e) => setEditNote(e.target.value)}
        />
      </form>
      <button className="add-button" onClick={() => handleEdit(note.id)}>Edit</button>
    </main>
  )
}

export default EditPost