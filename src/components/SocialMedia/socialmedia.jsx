import React from 'react'
import './socialmedia.css'
import { useState , useEffect } from 'react'
import { getSocialMedia } from '../Data/data'

export default function SocialMedia() {
  const [social, setSocial] = useState([]);

  useEffect(() => {
       setSocial(getSocialMedia())
  }, [])


  return (
    <div className='social-media'>

    {
        social.map(each => 
            <div className='social-media-container' key={each.name}>
                <a href={each.link}> <i className={each.remixIconClass}></i></a>
             </div>
            )
    }
    </div>
  )
}
