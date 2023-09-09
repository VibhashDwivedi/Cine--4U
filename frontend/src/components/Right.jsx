import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Right = () => {

    const [upcoming, setUpcoming] = useState([]);
    const [upcomingHindi, setUpcomingHindi] = useState([]);

    const UPCOMING_ENG = 'https://api.themoviedb.org/3/movie/upcoming?api_key=3b813a8cad6a0e292c66f061d98d42a8&page=1&with_original_language=en'
    const UPCOMING_HINDI = 'https://api.themoviedb.org/3/movie/upcoming?api_key=3b813a8cad6a0e292c66f061d98d42a8&page=1&with_original_language=hi'

    const getUpcomingHindi = async () => {
        const response = await fetch(UPCOMING_HINDI);
        const data = await response.json();
        console.log(data);
        setUpcomingHindi(data.results);
        console.log(upcomingHindi);
    }
    useEffect(() => {
        getUpcomingHindi();
    }, [])

    const getUpcomingEng = async () => {
        const response = await fetch(UPCOMING_ENG);
        const data = await response.json();
        setUpcoming(data.results);
        console.log(upcoming);
    }
    useEffect(() => {
        getUpcomingEng();
    }, [])

    

  return (
    <div>
       

        <h2 className='mt-2 mx-2 pt-2 p-1'>Upcoming</h2>
            <div className="container mt-3">
     <div className="row">
            <div className="col-lg-6 col-md-6">
                 <Link to={`/movie/${upcoming[11]?.id}`}>
            <img src={`https://image.tmdb.org/t/p/original/${upcoming[11]?.poster_path}`} height={250} className="card-img-top rounded-3 " alt="..."/>
                     </Link>   
                        <p style={{marginTop:'-25px'}} className='text-white mx-2 fw-bold' >{upcoming[11]?.release_date}</p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                        <Link to={`/movie/${upcoming[13]?.id}`}>
                        <img src={`https://image.tmdb.org/t/p/original/${upcoming[13]?.poster_path}`} height={250} className="card-img-top rounded-3 " alt="..."/>
                        </Link>
                        <p style={{marginTop:'-25px'}} className='text-white mx-2 fw-bold' >{upcoming[13]?.release_date}</p>
                        </div>
         </div>

         <div className="row mt-3">
            <div className="col-lg-6 col-md-6">
                    <Link to={`/movie/${upcomingHindi[0]?.id}`}>
            <img src={`https://image.tmdb.org/t/p/original/${upcomingHindi[0]?.poster_path}`} height={250} className="card-img-top rounded-3 " alt="..."/>

                    </Link>     
                         <p style={{marginTop:'-25px'}} className='text-white mx-2 fw-bold' >{upcomingHindi[0]?.release_date}</p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                        <Link to={`/movie/${upcomingHindi[1]?.id}`}>
                        <img src={`https://image.tmdb.org/t/p/original/${upcomingHindi[1]?.poster_path}`} height={250} className="card-img-top rounded-3 " alt="..."/>
                        </Link>
                        <p style={{marginTop:'-25px'}} className='text-white mx-2 fw-bold' >{upcomingHindi[1]?.release_date}</p>
                        </div>
         </div>
                   
                      
                   
                   
              
                
       </div>

    </div>
  )
}

export default Right