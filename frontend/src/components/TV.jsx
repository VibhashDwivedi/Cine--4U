import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar';

const TV = () => {

    const {id} = useParams();
    const[details,setDetails]=useState([])

    const MOVIE = `https://api.themoviedb.org/3/tv/${id}?api_key=3b813a8cad6a0e292c66f061d98d42a8&language=en-US`

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

    const year = () => {
        if (details.first_air_date === undefined) return null;
        else
        return details.first_air_date.slice(0,4)
    }

    const watch = () => {
        if (details.homepage === "") return null;
        else{
            return <Link to ={details.homepage} target='_blank'>
           <button className='btn btn-primary'>Watch Now</button></Link> 
        }
    }
    

  return (

    <div className='bg '>
    <div className="row">
    <div className=" col-lg-2 col-md-2  left">
      <Navbar/>
      </div>
        <div className="center col-lg-10 col-md-10 ">
            
        <div>
        {/* display movie details */}
        <div className='d-flex justify-content-center mt-4 vh-100'>
        <div className="card rounded-0 mb-3 bg-movie"  style={{ height:'600px', width:'980px'}}>
        <div className='d-flex justify-content-center'>
        <div className="card monte-font m-3 mt-4  " style={{maxWidth:'940px', border:'none'}}>
    <div className="row ">
        <div className="col-md-4 ">
        <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} className="img-fluid rounded-start  " alt="..."/>
        </div>
        <div className="col-md-8 ">
        <div className="card-body  text-dark">
            <h1 className="card-title text-dark fw-bolder">{details.name} 
               ({year()})

                </h1>
            <p className="card-text text-dark" >
            {details.overview}</p>
               
            <p>{genre()}</p>
            <p className="card-text text-dark"><span className='fw-bold text-dark fs-5'>Status: </span>{details.status}</p>
            <div className="d-flex">
           
            <p className="card-text text-dark "><span className='fw-bold text-dark fs-5'>First Air Date: </span><small className="text-muted">{details.first_air_date}</small></p>
            <p className="card-text text-dark ms-4"><span className='fw-bold text-dark fs-5'>Last Air Date: </span><small className="text-muted">{details.last_air_date}</small></p>
            </div>
           
            <div className="d-flex">
           
            <p className="card-text text-dark "><span className='fw-bold text-dark fs-5'>No. Of Seasons: </span>{details.number_of_seasons}</p>
            <p className="card-text text-dark ms-4"><span className='fw-bold text-dark fs-5 '>No. Of Episodes: </span>{details.number_of_episodes}</p>
            </div>
            <p className="card-text text-dark "><span className='fw-bold text-dark fs-5'>Languages: </span>{details.spoken_languages?.map((lang) => (
                <span className='badge bg-dark me-2 mt-1 p-2'>{lang.english_name}</span> 
            ))}</p>
            
           <p className="card-text text-dark"><span className='fw-bold text-dark fs-5'>Rating: </span>{details.vote_average}</p>
             <p>{watch()}</p>
        
        </div>
        </div>

        </div>
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

export default TV