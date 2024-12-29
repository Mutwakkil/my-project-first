import { useParams, Link } from "react-router-dom";
import DataContext from "./DataContext";
import { useContext } from "react";
import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { useHandleClicks } from "./hooks/useHandleClicks";
const Notes = () => {
  const {id} = useParams();
  const {handleDelete} = useHandleClicks();
  const {notes} = useContext(DataContext);

  const note = notes.find(note => (note.id).toString() === id);

  return (
    <section >
     { note &&
      <main className="note-container">
        <div className="name-container">
          <h1>{note.title}</h1>
          <p>{note.text}</p>
          <div>{note.date}</div>
        </div>
        <div className="svg-container">
          <Link to={`/edit/${note.id}`}>
            <CiEdit role="button" />
          </Link>
          <FaTrashAlt role="button" onClick={() => handleDelete(note.id)}/>
        </div>
      </main>
}
    </section>
  )
}

export default Notes