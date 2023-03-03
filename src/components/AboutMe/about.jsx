import React from 'react'
import './about.css';
import { useEffect, useState } from 'react';
import { getAboutMe } from '../Data/data';

const About = () =>  {
const [about, setAbout] = useState('')

    useEffect(() => {
        setAbout(getAboutMe());
    }, [])
    
    

  return (
    <div className='about-container' id="about">
      <div className='about-heading'>
      <h2>About Me</h2>
      </div>
      <div className='para-picture-container'>
         <div className='para-container'>
            <h2>{about.about}</h2>
            <p>{about.aboutMe}</p>
            <button>Download CV</button>
            
         </div>
         <div className='my-image'>
            <img src={about.img} alt="img" />
          </div>
      </div>
    </div>
  )
}

export default About;
