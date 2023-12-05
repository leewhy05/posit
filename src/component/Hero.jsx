import React from 'react'
import '../styles/hero.css'
import Section from '../assets/Sectiontech.svg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
   <div>
     <div className='dash'>
       <div className='container'>
      <div className='space'>
      <h1 className='fw-bold fs-1'>Stay Curious.</h1>
       <h4 className='line pt-4'>Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas massa velit aliquam. Molestim bibendum hnt ipsum orci, platea aliquam id ut.</h4>
       <div className='pt-4'>
       <button className="btn btn" style={{ backgroundColor: "#0086B0" }}>
                    <Link
                      to="/SignUp"
                      className="text-decoration-none text-light"
                    >
                      <h4>Get Started</h4>
                    </Link>
                  </button>
       </div>
      </div>
      </div>
      
    </div>
    
   </div>
  )
}

export default Hero