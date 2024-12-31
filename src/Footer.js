import { useStoreState } from "easy-peasy";

const Footer = () => {
  const notes = useStoreState((state) => state.notes);
  const note = notes && notes.length === 1 ? "note" : "notes";
  return (
    <div className="footer">
      {notes ? `${notes.length} ${note}` : <p>0 notes</p>}
    </div>
  );
};

export default Footer;
