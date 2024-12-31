import { useStoreState, useStoreActions } from "easy-peasy";
import { useHandleClicks } from "./hooks/useHandleClicks";

const AddNotes = () => {
  const newNote = useStoreState((state) => state.newNote);
  const newTitle = useStoreState((state) => state.newTitle);
  const setNewTitle = useStoreActions((actions) => actions.setNewTitle);
  const setNewNote = useStoreActions((actions) => actions.setNewNote);
  const { handleAdd } = useHandleClicks();

  return (
    <main className="add-notes-container">
      <>
        <p>Add a new note</p>
        <form
          className="form-notes-container"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            autoFocus
          />
          <textarea
            placeholder="Note"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
        </form>
        <button className="add-button" onClick={handleAdd}>
          Add
        </button>
      </>
    </main>
  );
};

export default AddNotes;
