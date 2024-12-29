import {Link} from 'react-router-dom';

const List = ({note}) => {
  return (
    <div className='list-container'>
      {note ?
      <>
        <Link to ={`/notes/${note.id}`} className='note-link' >
          <h2 >{note.title}</h2>
          <p>{note.text}</p>
          <div>{note.date}</div>
        </Link>
      </>
      : <p style={{marginTop: '20px'}}>No notes available</p>
}
    </div>
  )
}

export default List