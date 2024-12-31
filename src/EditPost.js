import { useParams } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useHandleClicks } from "./hooks/useHandleClicks";
import { useEffect } from "react";
const EditPost = () => {
  const notes = useStoreState((state) => state.notes);
  const editTitle = useStoreState((state) => state.editTitle);
  const editNote = useStoreState((state) => state.editNote);

  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditNote = useStoreActions((actions) => actions.setEditNote);
  const getNoteId = useStoreState((state) => state.getNoteId);
  const { handleEdit } = useHandleClicks();
  const { id } = useParams();
  const note = getNoteId(id);

  useEffect(() => {
    setEditNote(note.text);
    setEditTitle(note.title);
  }, [notes]);

  return (
    <main className="add-notes-container">
      <p>Edit note</p>
      <form
        className="form-notes-container"
        onSubmit={(e) => e.preventDefault()}
      >
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
      <button className="add-button" onClick={() => handleEdit(note.id)}>
        Edit
      </button>
    </main>
  );
};

export default EditPost;
