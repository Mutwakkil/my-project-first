import Header from './Header';
import Search from './Search';
import Body from './Body';
import Notes from './Notes';
import AddNotes from './AddNotes';
import Footer from './Footer';
import EditPost from './EditPost';
import { DataProvider } from './DataContext';
import {Routes, Route, useLocation} from 'react-router-dom';
import Add from './Add';



function App() {
  const location = useLocation();
  const routes = ['/add', '/notes', '/edit'];
  const hideSearchAndAdd = routes.some(route => location.pathname.startsWith(route));
  return (
    <div className="App">
      <DataProvider>
        <div className='header'>
          <Header title="Notes" />
          {!hideSearchAndAdd && <Search />}
        </div>
        
          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/notes/:id' element={<Notes />} />
            <Route path='/edit/:id' element={<EditPost />} />
            <Route path='/add' element={<AddNotes />} />
          </Routes>
        
        {!hideSearchAndAdd && <Add />}
        <Footer />
      </DataProvider>
      
    </div>
  );
}

export default App;
