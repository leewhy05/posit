import React from 'react'
import HomeTwo from './HomeTwo'
import Group from '../assets/Group350.svg'

const AllStories = () => {
  return (
    <div>
      <div>
        <HomeTwo/>
      </div>
      <div className='container' >
      <img src={Group} alt="" />
      </div>
    </div>
  )
}

export default AllStories