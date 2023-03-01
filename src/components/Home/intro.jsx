import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { getAboutMe } from '../Data/data';
const Intro = () => {

  return (
    <div className='intro-container'>
        <h4>Hello 👋 I'm</h4>
        <h1>{getAboutMe().name}</h1> 
        <div>
        <span className='iam'>I am a </span>
        <TypeAnimation
        sequence={[
        getAboutMe().type1,
        1000,
        getAboutMe().type2,
        1000,
        getAboutMe().type3,
        1000,
        getAboutMe().type4,
        1000,
        ]}
    speed={50} 
    style={{ fontSize: '2em', color:"crimson", fontWeight: "600" }}
    wrapper="span" 
    repeat={Infinity}
  />
        </div>
    </div>
  )
}

export default Intro;