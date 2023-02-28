import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {

  return (
    <div className='intro-container'>
        <h4>Hello 👋 I'm</h4>
        <h1>Metta Lavan</h1> 
        <div>
        <span className='iam'>I am a</span>
        <TypeAnimation
        sequence={[
        ' Software Developer',
        1000,
        ' React Js Developer',
        1000,
        ' Enthusiastic',
        1000,
        ' Optimistic',
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