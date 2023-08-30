import React, { useEffect, useState } from 'react'

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
        <div className='mt-2 mx-2 pt-1'>
            <input type="text" className='form-control ms-auto w-75 rounded-5'/>
        </div>

        <h3 className='mt-2 mx-2  p-1'>Upcoming</h3>
            <div className="container">
     <div className="row">
            <div className="col-lg-6 col-md-6">
            <img src={`https://image.tmdb.org/t/p/original/${upcoming[11]?.poster_path}`} height={250} className="card-img-top rounded-3 " alt="..."/>
                        
                        <p style={{marginTop:'-25px'}} className='text-white mx-2 fw-bold' >{upcoming[11]?.release_date}</p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                        <img src={`https://image.tmdb.org/t/p/original/${upcoming[13]?.poster_path}`} height={250} className="card-img-top rounded-3 " alt="..."/>

                        <p style={{marginTop:'-25px'}} className='text-white mx-2 fw-bold' >{upcoming[13]?.release_date}</p>
                        </div>
         </div>

         <div className="row">
            <div className="col-lg-6 col-md-6">
            <img src={`https://image.tmdb.org/t/p/original/${upcomingHindi[0]?.poster_path}`} height={250} className="card-img-top rounded-3 " alt="..."/>
                        
                        <p style={{marginTop:'-25px'}} className='text-white mx-2 fw-bold' >{upcomingHindi[0]?.release_date}</p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                        <img src={`https://image.tmdb.org/t/p/original/${upcomingHindi[3]?.poster_path}`} height={250} className="card-img-top rounded-3 " alt="..."/>

                        <p style={{marginTop:'-25px'}} className='text-white mx-2 fw-bold' >{upcomingHindi[3]?.release_date}</p>
                        </div>
         </div>
                   
                      
                   
                   
              
                
       </div>

    </div>
  )
}

export default Right