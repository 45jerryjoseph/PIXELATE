import './App.css';
import Addfilm from './pages/AddFilm/Addfilm';
import Adduser from './pages/AddUser/Adduser';
import Catalog from './pages/Catalog/Catalog';
import Comments from './pages/Comments/Comments';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Tvshows from './pages/TvShows/Tvshows';
import Users from './pages/Users/Users';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Users  /> */}
      {/* <Catalog /> */}
      {/* <Comments /> */}
      {/* <Adduser /> */}
      {/* <Movies /> */}
      {/* <Tvshows /> */}
      <Addfilm />
    </div>
  );
}

export default App;
