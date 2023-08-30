import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black  bg-nav'>
      <div className="container py-3" style={{ marginLeft:'10px'}}>
      <h1 style={{display:'inline', marginTop:'30px',paddingTop:'20px'}} className='text-white'>CINE</h1>
      <p style={{display:'inline', color:'rgba(171, 149, 243, 0.672)'}} className='fs-4'>4U</p>
      {/* <nav class="navbar navbar-expand-lg "> */}
      {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button> */}

    
       <h6 className='mt-4 text-white fw-light'>MENU</h6>
       <hr className='me-3'/>
       
       <i class="fa-solid fa-house icons"></i>
         <Link className='link' to=""><p className='para'> Home</p></Link>
         <br />
       
         
       <i class="fa-solid fa-stopwatch icons mt-2"></i>
         <Link className='link' to=""><p className='para'>Upcoming</p></Link>
         <br />
         
       <i class="fa-solid fa-globe icons mt-2"></i>
         <Link className='link' to=""><p className='para'> Browse</p></Link>
         <br />

         <h6 className='mt-4 text-white fw-light'>Trending</h6>
       <hr className='me-3'/>
       <i class="fa-solid fa-globe icons mt-2"></i>
         <Link className='link' to=""><p className='para'> Movies</p></Link>
         <br />
         <i class="fa-solid fa-globe icons mt-2"></i>
         <Link className='link' to=""><p className='para'> TV</p></Link>
         <br />

         <h6 className='mt-4 text-white fw-light'>Top Rated</h6>
       <hr className='me-3'/>
       <i class="fa-solid fa-globe icons mt-2"></i>
         <Link className='link' to=""><p className='para'> Movies</p></Link>
         <br />
         <i class="fa-solid fa-globe icons mt-2"></i>
         <Link className='link' to=""><p className='para'> TV</p></Link>
         <br />
      
</div>
{/* </nav> */}
      </div>
      
      
    
  )
}

export default Navbar