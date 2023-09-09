import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import PopularMovie from './PopularMovie';

const BrowseMovies = () => {

    const [movieList, setmovieList] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const getMovies = async () => {
       
    
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3b813a8cad6a0e292c66f061d98d42a8&query=${searchQuery}`);
        if (res.status === 200) {
            const data = await res.json();
            console.log(movieList)
            setmovieList(data.results);
        }
    }

    useEffect(() => {
      getMovies();
    }, [])
    

    const displayMovies = () => {
        if(movieList.length===0){
            return null;
        }
        
        return movieList.map((movie) => (
            <div className="me-4">
            <div className="card mb-4 " style={{border:'none'}}>
                <Link to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} height={270} className="card-img-top" alt="..."/></Link>
             <div className="card-body" style={{height:'110px'}}>
            <h5 className="text-dark " >{movie.title}</h5>
            {/* release dATE */}
            <p className=" text-info" style={{marginTop:'-10px'}} >{movie.release_date}</p>
            {/* vote average */}
            <p className=" text-dark" style={{marginTop:'-20px'}}><span className='fw-bold text-dark'>Rating:</span> {movie.vote_average}</p>
            {/* <p className="card-text">{popularmovie.overview}</p> */}
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>
            </div>
        ))
    }
return(
    <div className='bg vh-200' >
    <div className="row">
    <div className=" col-lg-2 col-md-2  left">
      <Navbar/>
      </div>
        <div className="center col-lg-10 col-md-10 ">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <h1 className='text-center m-4'>Browse Movies</h1>
            </div>
            <div className="col-md-4">
                <Link to='/browsetv' className='ms-auto'>
                <button className="btn btn-primary m-4 float-end">TV</button>
                </Link>
            </div>
         </div>  
       
        <div className="d-flex justify-content-center align-items-center mb-4 mx-auto">
            <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        getMovies(); // Call the getMovies function on Enter key press
                    }
                }}
                className="form-control w-50 me-3 px-3 py-2"
            />
            <button className='btn btn-danger fw-bold fs-6' onClick={getMovies}>Search</button>
        </div>

            <div className='parent'>
      
       { displayMovies()}
       

            </div>



            </div>
            </div>

            
            </div>
          )  
  







}

export default BrowseMovies