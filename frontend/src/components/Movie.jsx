import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Movie = () => {

    const {id} = useParams();
    const[details,setDetails]=useState([])

    const MOVIE = `https://api.themoviedb.org/3/movie/${id}?api_key=3b813a8cad6a0e292c66f061d98d42a8&language=en-US`

 const getMovie = async () => {
        const response = await fetch(MOVIE)
        const data = await response.json()
        setDetails(data)
        console.log(data)
    }

    useEffect(() => {
        getMovie()
    }
    , []);

    const genre = () => {
        if (details.genres === undefined) return null;
        else
        return details.genres.map((genre) => (
            <span className='badge bg-dark me-2 mt-1 p-2'>{genre.name}</span>
        ))
    }

    const productiondetails = () => {
        if (details.production_companies === undefined) return null;
        else
        return details.production_companies.map((production) => (
            <div className='d-flex '>
               
                <p className='text-dark'>{production.name}</p>
            </div>
        ))
    }

  return (
    <div>
        {/* display movie details */}
        <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className="card rounded-0 vw-100" style={{ height:'500px'}}>
        <div className='d-flex justify-content-center'>
        <div className="card monte-font m-3 mt-4" style={{maxWidth:'940px', border:'none'}}>
    <div className="row ">
        <div className="col-md-4">
        <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body text-dark">
            <h1 className="card-title text-dark fw-bolder">{details.title}</h1>
            <p className="card-text text-dark">{details.overview}</p>
            <p>{genre()}</p>
            <p className="card-text text-dark"><span className='fw-bold text-dark fs-5'>Status: </span>{details.status}</p>
            <p className="card-text text-dark"><small className="text-muted">{details.release_date}</small></p>
           <p className="card-text text-dark"><span className='fw-bold text-dark fs-5'>Rating: </span>{details.vote_average}</p>
        
           <Link to ={details.homepage} target='_blank'>
           <button className='btn btn-primary'>Watch Now</button></Link>

        </div>
        </div>

        </div>
        </div>
</div>
        </div>
        </div>
    </div>
  )
}

export default Movie