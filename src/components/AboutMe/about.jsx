import React from 'react'
import './about.css';
import { useEffect, useState } from 'react';
import { getAboutMe } from '../Data/data';
import { Link } from 'react-router-dom'

const About = () =>  {
const [about, setAbout] = useState('')

    useEffect(() => {
        setAbout(getAboutMe());
        console.log('about')
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
            <div className='skill-buttons'>
            <a href={about.resume} download ><button>Download CV</button></a>
            <Link to="/journey"><button>My Journey</button></Link>
            </div>
            
            
         </div>
         <div className='my-image'>
            <img src={about.img} alt="img" />
          </div>
      </div>
    </div>
  )
}

export default About;
