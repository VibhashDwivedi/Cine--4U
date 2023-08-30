import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const UpcomingMovie = () => {
    const[popularmovie,setPopularMovie]=useState([])

    // const POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=3b813a8cad6a0e292c66f061d98d42a&language=en-US&page=1`
    const POPULAR = 'https://api.themoviedb.org/3/movie/upcoming?api_key=3b813a8cad6a0e292c66f061d98d42a8&&page=1'
    const getPopularMovie = async () => {
        const response = await fetch(POPULAR)
        const data = await response.json()
        setPopularMovie(data.results)
        
    }

    useEffect(() => {
        getPopularMovie()
    }
    , []);

    console.log(popularmovie)
    const displayPopular = () => {
        if (popularmovie.length ===0) return null;
        else
        return popularmovie.map((popularmovie) => (
            <div className="me-4">
            <div className="card mb-4 " style={{border:'none'}}>
                <Link to={`/movie/${popularmovie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${popularmovie.poster_path}`} height={270} className="card-img-top" alt="..."/></Link>
             <div className="card-body" style={{height:'110px'}}>
            <h5 className="text-dark " >{popularmovie.title}</h5>
            {/* release dATE */}
            <p className=" text-info" style={{marginTop:'-10px'}} >{popularmovie.release_date}</p>
            {/* vote average */}
            <p className=" text-dark" style={{marginTop:'-20px'}}><span className='fw-bold text-dark'>Rating:</span> {popularmovie.vote_average}</p>
            {/* <p className="card-text">{popularmovie.overview}</p> */}
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>
            </div>
        ))
    }

    // use grids to display 5 cards in each row

   


  return (
    <div className='bg'>
        <div className="row">
        <div className=" col-lg-2 col-md-2  left">
          <Navbar/>
          </div>
            <div className="center col-lg-10 col-md-10 ">
                
             <h1 className='text-center monte-font m-4'> Upcoming Movies</h1>

                <div className='parent'>
          
           { displayPopular()}
           

                </div>



                </div>
                </div>

                
                </div>
                
      

    
  )
}

export default UpcomingMovie