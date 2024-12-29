import DataContext from "./DataContext";
import { useContext } from "react";

const Footer = () => {
  const {notes} = useContext(DataContext);
  const note = notes && notes.length === 1 ? 'note' : 'notes';
  return (
    <div className="footer">
      {notes ? `${notes.length} ${note}` : <p>0 notes</p>}
    </div>

  )
}

export default Footer