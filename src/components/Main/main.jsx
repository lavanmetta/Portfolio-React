import React from 'react'
import Home from '../Home/home';
import About from '../AboutMe/about';
import Skills from '../MySkills/skills';
import Projects from '../Projects/projects';
import Contact from '../ContactMe/contact';
import Footer from '../Footer/footer';
const Main = () =>  {
  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Main;
