import { useContext} from 'react';
import DataContext from './DataContext';
import List from './List';

const Body = () => {
  const {searchResult} = useContext(DataContext);

  return (
    <main className='notes-container'>
        {
          searchResult && searchResult.length ? (
          searchResult.map(note => (
            <List key={note.id} note={note} />
          ))
        ): <p style={{marginTop: '20px', fontSize: '30px', textAlign: 'center'}}>No notes here</p>
        }
    </main>
  )
}

export default Body