import React from 'react'
import './skills.css';
import { getMySkills } from '../Data/data';
import { getAboutMe } from '../Data/data';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

const Skills = () => {
    const [skill, setSkill] = useState([])
    const [about, setAbout] = useState('')

    useEffect(() => {
        setSkill(getMySkills())
        setAbout(getAboutMe());
    }, [])

  return (
    <div className='skills-container'>
       <div className='skill-heading'>
        <h2>My Skills</h2>
       </div>
       <div className='skill-logo-container'>
        <div className='logos-container'>
            {
                skill.map(each => 

                    <img key={uuid()} src={each} alt="logo" />
                   
                    )
            }
        </div>
        <div className='skill-para-container'>
            <h2>{about.heading}</h2>
            <p>{about.skillPara}</p>
        </div>
       </div>
    </div>
  )
}

export default Skills