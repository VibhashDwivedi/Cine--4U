import './App.css';
import { BrowserRouter  , Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Center from './components/Center';
import Right from './components/Right';


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

    </Routes>
    </BrowserRouter>

    </div>
    
  );
}

export default App;