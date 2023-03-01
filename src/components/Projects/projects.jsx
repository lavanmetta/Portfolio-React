import React from 'react'
import './projects.css'
import { getMyProject } from '../Data/data'
import { useState, useEffect } from 'react'

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(getMyProject())
    }, [])

    

  return (
    <div className='projects-container'>
       <div className='project-heading'>
         <h2>Projects I have done</h2>
       </div>
       <div className='projects'>

       {
            projects.map(each => 
                <div className='project-box' key={each.id}>
               <img src={each.projectImg} alt="img" />
               <h3>{each.projectName}</h3>
               <p>{each.projectDescribe}</p>
              </div>
                )}
           
       </div>
    </div>
  )
}
