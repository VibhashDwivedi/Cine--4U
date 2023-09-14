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
import BrowseMovies from './components/BrowseMovies';
import PopularTV from './components/PopularTV';
import TV from './components/TV';
import AiringToday from './components/AiringToday';
import AiringTodayEng from './components/AiringTodayEng';
import OnTheAir from './components/OnTheAir';
import TopRatedTv from './components/TopRatedTv';
import BrowseTV from './components/BrowseTV';


function App() {
return (
    <div className='bg '> 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/navbar" element={<Navbar/>} />
    <Route path="/Cine--4U" element={<Home/>} />
    <Route path="/center" element={<Center/>} />
    <Route path="/right" element={<Right/>} />
    <Route path="/popularmovie" element={<PopularMovie/>} />
    <Route path="/upcomingmovie" element={<UpcomingMovie/>} />
    <Route path="/nowplaying" element={<NowPlaying/>} />
    <Route path="/toprated" element={<TopRatedMovies/>} />
    <Route path="/browsemovies" element={<BrowseMovies/>} />
    <Route path="/browsetv" element={<BrowseTV/>} />
    <Route path="/movie/:id" element={<Movie/>} />
    <Route path="/tv/:id" element={<TV/>} />
    <Route path="/populartv" element={<PopularTV />} />
    <Route path="/airingtoday" element={<AiringToday />} />
    <Route path="/airingtodayeng" element={<AiringTodayEng />} />
    <Route path="/ontheair" element={<OnTheAir />} />
    <Route path="/topratedtv" element={<TopRatedTv />} />

    </Routes>
    </BrowserRouter>

    </div>
    
  );
}

export default App;