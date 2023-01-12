import Home from './pages/Home/Home';
import './App.css';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Contact from './pages/Contact/Contact';
import Watch from './pages/Watch/Watch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  // For the user passing it as a prop is a work load hence when dealing with backend use context API
  const user = false;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {user ? ( 
            <Route path="/" element={<Dashboard user={user}/>} />
          ):(
            <Route path="/" element={<Home user={user}/>}/>
          )}
          {!user ? (
            <>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/contact" element={<Contact />} />
            </>
          ):(
            <>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/watch" element={<Watch />}/>
            </>
          )}

        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
