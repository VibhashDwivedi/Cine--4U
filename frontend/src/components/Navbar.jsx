import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black  bg-nav'>
      <div className="container py-3" style={{ marginLeft:'10px'}}>
      <Link to="/home" style={{textDecoration:'none'}}> <div>
      <h1 style={{display:'inline', marginTop:'30px',paddingTop:'20px'}} className='text-white'>CINE</h1>
      <p style={{display:'inline', color:'rgba(171, 149, 243, 0.672)'}} className='fs-4 fw-bold for-u'>4U</p>
      </div></Link> 

    
       <h6 className='mt-4 text-white fw-light'>MENU</h6>
       <hr className='me-3'/>
       
       <i class="fa-solid fa-house icons"></i>
         <Link className='link' to="/home"><p className='para'> Home</p></Link>
         <br />
       
         
       <i class="fa-solid fa-stopwatch icons mt-2"></i>
         <Link className='link' to="/upcomingmovie"><p className='para'> Upcoming</p></Link>
         <br />
         
       <i class="fa-solid fa-globe icons mt-2 "></i>
         <Link className='link' to="/browsemovies"><p className='para'> Browse</p></Link>
         <br  />

         <h6 className='mt-4 text-white fw-light'>Movies</h6>
       <hr className='me-3'/>
       <i class="fa-solid fa-fire"></i>
         <Link className='link' to="/popularmovie"><p className='para'>Popular</p></Link>
         <br />
         <i class="fa-solid fa-circle-play"></i>
         <Link className='link' to="/nowplaying"><p className='para'>Now Playing</p></Link>
         <br />
         <i class="fa-solid fa-stopwatch icons mt-2"></i>
         <Link className='link' to="/upcomingmovie"><p className='para'>Upcoming</p></Link>
         <br />
         <i class="fa-regular fa-sun"></i>
         <Link className='link' to="/toprated"><p className='para'>Top Rated</p></Link>
         <br />
        

         <h6 className='mt-4 text-white fw-light'>TV</h6>
       <hr className='me-3'/>
       <i class="fa-solid fa-fire"></i>
         <Link className='link' to="/populartv"><p className='para'>Popular</p></Link>
         <br />
         <i class="fa-solid fa-circle-play"></i>
         <Link className='link' to="/airingtodayeng"><p className='para'>Airing Today</p></Link>
         <br />
         <i class="fa-solid fa-circle-play"></i>
         <Link className='link' to="/ontheair"><p className='para'>On The Air</p></Link>
         <br />
         <i class="fa-regular fa-sun"></i>
         <Link className='link' to="/topratedtv"><p className='para'>Top Rated</p></Link>
         <br />
         <i class="fa-solid fa-globe icons mt-2 switch-btn2"></i>
         <Link className='link' to="/browsetv"><p className='para switch-btn2'> Browse</p></Link>
         <br className='switch-btn2' />
      
</div>
{/* </nav> */}
      </div>
      
      
    
  )
}

export default Navbar