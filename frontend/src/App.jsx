import './App.css';
import { BrowserRouter  , Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Center from './components/Center';
import Right from './components/Right';
import PopularMovie from './components/PopularMovie';
import Movie from './components/Movie';
import UpcomingMovie from './components/UpcomingMovie';
import NowPlaying from './components/NowPlaying';
import TopRatedMovies from './components/TopRatedMovies';


function App() {
return (
    <div className='bg '> 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/navbar" element={<Navbar/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/center" element={<Center/>} />
    <Route path="/right" element={<Right/>} />
    <Route path="/popularmovie" element={<PopularMovie/>} />
    <Route path="/upcomingmovie" element={<UpcomingMovie/>} />
    <Route path="/nowplaying" element={<NowPlaying/>} />
    <Route path="/toprated" element={<TopRatedMovies/>} />
    <Route path="/movie/:id" element={<Movie/>} />

    </Routes>
    </BrowserRouter>

    </div>
    
  );
}

export default App;