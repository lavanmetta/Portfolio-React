import React, { Component } from 'react'
import './navbar.css'
import BackgroundImg from './backgroundImg';
import AnchorLink from "react-anchor-link-smooth-scroll";


class Navbar extends Component {
   
    render() { 
        return (
            <React.Fragment>
                <div className="home-container">
                     <BackgroundImg/>
                     <div className='navbar'>
                        <div className='nav-logo'>
                         <h2>Metta Lavan</h2>
                        </div> 
                        <div className='nav-links'>
                        <AnchorLink href='#course'>Home</AnchorLink>
                        <AnchorLink>About</AnchorLink>
                        <AnchorLink>Skills</AnchorLink>
                        <AnchorLink>Projects</AnchorLink>
                        <AnchorLink>Contact Me</AnchorLink>
                        </div>
                     </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Navbar;