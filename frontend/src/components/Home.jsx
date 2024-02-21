import React from 'react'
import Navbar from './Navbar'
import Center from './Center'
import Right from './Right'

const Home = () => {
  return (
    <div>
        <div className="row">
        <div className=" col-lg-2 col-md-2  left">
          <Navbar/> 
        </div>
        <div className="center col-lg-7 col-md-7">
            <Center/>
            </div>
            <div className="right col-lg-3 col-md-4">
                <Right/>
                </div>

        </div>
    </div>
  )
}

export default Home