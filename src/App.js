import './App.css';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      {/* <h1>Movieapp</h1> */}

      <Navbar/>
      <MovieList/>
    </div>
  );
}

export default App;
