import React from 'react'
import Home from '../Home/home';
import About from '../AboutMe/about';
import Skills from '../MySkills/skills';
import Projects from '../Projects/projects';
const Main = () =>  {
  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default Main;
