import { useParams, Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { useHandleClicks } from "./hooks/useHandleClicks";
import { useStoreState } from "easy-peasy";
const Notes = () => {
  const { id } = useParams();
  const { handleDelete } = useHandleClicks();
  const getNoteId = useStoreState((state) => state.getNoteId);
  const note = getNoteId(id);

  return (
    <section>
      {note && (
        <main className="note-container">
          <div className="name-container">
            <h1>{note.title}</h1>
            <p>{note.text}</p>
            <div>{note.date}</div>
          </div>
          <div className="svg-container">
            <Link to={`/edit/${note.id}`} className="edit-svg">
              <CiEdit role="button" className="svg-edit" />
            </Link>
            <FaTrashAlt
              role="button"
              className="trash-svg"
              onClick={() => handleDelete(note.id)}
            />
          </div>
        </main>
      )}
    </section>
  );
};

export default Notes;
