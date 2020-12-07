import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text header">
        We know more than ever about wellbeing in the world. 
      </div>
      <div className="hero__title header">
        What are we <span className="highlighted">doing</span> about it?
      </div>
    </div>
  )
}

export default Hero
