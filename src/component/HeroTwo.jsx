import React from 'react'
import '../styles/hero.css'
import TRY from '../assets/Try Postit..svg'
import { Link } from 'react-router-dom'

const HeroTwo = () => {
  return (
    <div className='bg-light long'>
    <div className='container mark text-center'>
    <div className='pt-5 fs-4'>
    <img src={TRY} alt="TRY" />
    <p>Do you want to write or discover stories from writers on any topic?</p>
    <div className='d-flex align-items-center justify-content-center'>
    <input type="text"placeholder='Enter Email Address' className='border-6 rounded-pill' />
    <button className="" style={{ backgroundColor: "#0086B0" }}>
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
  )
}

export default HeroTwo