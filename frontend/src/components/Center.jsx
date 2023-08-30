import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import  { Navigation, Pagination,  Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Center = () => {
  
    const[popular, setPopular] = useState([]);
    const[popularHindi, setPopularHindi] = useState([]);
    const[topRated, setTopRated] = useState([]);
    const[nowPlaying, setNowPlaying] = useState([]);
    const[tvPopular, setTvPopular]= useState([]);


const POPULAR = 'https://api.themoviedb.org/3/movie/popular?api_key=3b813a8cad6a0e292c66f061d98d42a8&language=en-US&page=1'
const POPULAR_HINDI = 'https://api.themoviedb.org/3/movie/popular?api_key=3b813a8cad6a0e292c66f061d98d42a8&language=hi&page=1'
const TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?api_key=3b813a8cad6a0e292c66f061d98d42a8&language=en-US&page=1'

const NOW_PLAYING = 'https://api.themoviedb.org/3/movie/now_playing?api_key=3b813a8cad6a0e292c66f061d98d42a8&language=en-US&page=1'
const TV_POPULAR = 'https://api.themoviedb.org/3/tv/popular?api_key=3b813a8cad6a0e292c66f061d98d42a8&language=en-US&page=1'





const getPopular = async () => {
    const response = await fetch(POPULAR);
    const data = await response.json();
    setPopular(data.results);
    console.log(popular);
}
useEffect(() => {
    getPopular();
}
, [])

const getPopularHindi = async () => {
    const response = await fetch(POPULAR_HINDI);
    const data = await response.json();
    setPopularHindi(data.results);
    console.log(popularHindi);
}
useEffect(() => {
    getPopularHindi();
}
, [])

const getTopRated = async () => {
    const response = await fetch(TOP_RATED);
    const data = await response.json();
    setTopRated(data.results);
    console.log(topRated);
}
useEffect(() => {
    getTopRated();
}
, [])

const getNowPlaying = async () => {
    const response = await fetch(NOW_PLAYING);
    const data = await response.json();
    setNowPlaying(data.results);
    console.log(nowPlaying);
}
useEffect(() => {
    getNowPlaying();
}
, [])

const getTvPopular = async () => {
    const response = await fetch(TV_POPULAR);
    const data = await response.json();
    setTvPopular(data.results);
    console.log(popular);
}
useEffect(() => {
    getTvPopular();
}
, [])






  return (
    <div>
        <div className="top mt-2 pt-1">
        <Link to=''><button className='btn btn-outline-secondary text-white'>Movies</button></Link>
           <Link to=''><button className='btn btn-outline-secondary text-white mx-4'>TV</button></Link>
           </div>     
           
        <div className="main container">
<div className='mt-4'>

<Swiper className='swap'
         modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
       
        autoplay={{ delay: 2000, disableOnInteraction: false }}
       

      
    >
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${nowPlaying[10]?.poster_path}`} height={380} className="card-img-top rounded-3 " alt="..."/>
       
        <div className='d-flex mx-2' style={{marginTop:'-45px'}} >
        <button className='btn btn-outline-light rounded-0 border-2' >{nowPlaying[10]?.release_date}</button>
        <button className='btn btn-outline-light rounded-0  border-2 mx-3'  >{nowPlaying[10]?.vote_average}</button>
        </div>
       
       
       
        
        </SwiperSlide>
        
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${nowPlaying[1]?.poster_path}`} height={380} className="card-img-top rounded-3 " alt="..."/>
        <div className='d-flex mx-2' style={{marginTop:'-85px'}}>
        <button className='btn btn-outline-light rounded-0 border-2'  >{nowPlaying[1]?.release_date}</button>
        <button className='btn btn-outline-light rounded-0  border-2 mx-3'  >{nowPlaying[1]?.vote_average}</button>
        </div>
        </SwiperSlide>

        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${nowPlaying[12]?.poster_path}`} height={380} className="card-img-top rounded-3 " alt="..."/>
        <div className='d-flex mx-2' style={{marginTop:'-85px'}}>
        <button className='btn btn-outline-light rounded-0 border-2'  >{nowPlaying[12]?.release_date}</button>
        <button className='btn btn-outline-light rounded-0  border-2 mx-3'  >{nowPlaying[12]?.vote_average}</button>
        </div>
       </SwiperSlide>
        
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${nowPlaying[13]?.poster_path}`} height={380} className="card-img-top rounded-3 " alt="..."/>
        
        <div className='d-flex mx-2' style={{marginTop:'-85px'}}>
        <button className='btn btn-outline-light rounded-0 border-2'  >{nowPlaying[13]?.release_date}</button>
        <button className='btn btn-outline-light rounded-0  border-2 mx-3'  >{nowPlaying[13]?.vote_average}</button>
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${nowPlaying[14]?.poster_path}`} height={380} className="card-img-top rounded-3 " alt="..."/>
        <div className='d-flex mx-2' style={{marginTop:'-85px'}}>
        <button className='btn btn-outline-light rounded-0 border-2'  >{nowPlaying[14]?.release_date}</button>
        <button className='btn btn-outline-light rounded-0  border-2 mx-3'  >{nowPlaying[14]?.vote_average}</button>
        </div>
       </SwiperSlide>

   
    </Swiper>

   {/* display trending[0] */}
    
   

</div>

<div className="mt-3">
<h3 className='mt-2   p-1'>Popular Movies</h3>
<Swiper className=''
         modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={15}
        navigation
        pagination={{ clickable: true }}
       
        // autoplay={{ delay: 2000, disableOnInteraction: false }}
       breakpoints={{
    // when window width is >= 640px
    300: {
      width: 300,
      slidesPerView: 2,
    },
    640: {
      width: 640,
      slidesPerView: 3,
    },
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 4,
    },
  }}

    >
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${popular[2]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>
       </SwiperSlide>
        
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${popular[3]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>
      
     
        </SwiperSlide>

        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${popularHindi[4]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>
        </SwiperSlide>
        
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${popularHindi[5]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>

       </SwiperSlide>
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${popularHindi[6]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>

       </SwiperSlide>
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${popularHindi[7]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>

       </SwiperSlide>
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${popularHindi[8]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>

       </SwiperSlide>

   
    </Swiper>
</div>

<div className="mt-3">
<h3 className='mt-2   p-1'>Top Rated Movies</h3>
<Swiper className=''
         modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={15}
    
        navigation
        pagination={{ clickable: true }}
       
        // autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          // when window width is >= 640px
          300: {
            width: 300,
            slidesPerView: 2,
          },
          640: {
            width: 640,
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 4,
          },
        }}

     
    >
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${topRated[0]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>
      </SwiperSlide>
        
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${topRated[1]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>
      
       
        </SwiperSlide>

        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${topRated[2]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>
      </SwiperSlide>
        
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${topRated[3]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>

      </SwiperSlide>
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${topRated[4]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>

     </SwiperSlide>
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${topRated[5]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>

      </SwiperSlide>
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${topRated[6]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>

       </SwiperSlide>
        </Swiper>
</div>
<div className="mt-3 mb-5">
<h3 className='mt-2   p-1'>Popular TV Series</h3>
<Swiper className=''
         modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={15}
      
        navigation
        pagination={{ clickable: true }}
       
        // autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          // when window width is >= 640px
          300: {
            width: 300,
            slidesPerView: 2,
          },
          640: {
            width: 640,
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 4,
          },
        }}

     
    >
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${tvPopular[0]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>
        <p style={{marginTop:'-25px'}} className='text-white mx-2 fw-bold' >{tvPopular[0]?.release_date}</p></SwiperSlide>
        
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${tvPopular[1]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>
      
        <p style={{marginTop:'-25px'}} className='text-white mx-2 fw-bold' >{tvPopular[1]?.release_date}</p>
        </SwiperSlide>

        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${tvPopular[2]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>
        <p style={{marginTop:'-25px'}} className='text-white mx-2 fw-bold' >{tvPopular[2]?.release_date}</p></SwiperSlide>
        
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${tvPopular[3]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>

        <p style={{marginTop:'-25px'}} className='text-white mx-2 fw-bold' >{tvPopular[3]?.release_date}</p></SwiperSlide>
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${tvPopular[4]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>

        <p style={{marginTop:'-25px'}} className='text-white mx-2 fw-bold' >{tvPopular[4]?.release_date}</p></SwiperSlide>
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${tvPopular[5]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>

        <p style={{marginTop:'-25px'}} className='text-white mx-2 fw-bold' >{tvPopular[5]?.release_date}</p></SwiperSlide>
        <SwiperSlide><img src={`https://image.tmdb.org/t/p/original/${tvPopular[6]?.poster_path}`} height={220} className="card-img-top rounded-3 " alt="..."/>

        <p style={{marginTop:'-25px'}} className='text-white mx-2 fw-bold' >{tvPopular[6]?.release_date}</p></SwiperSlide>
        </Swiper>
</div>
</div>
       
    </div>
  )
}

export default Center