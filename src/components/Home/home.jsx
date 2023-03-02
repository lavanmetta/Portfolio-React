import React, { Component } from 'react'
import './home.css'
import BackgroundImg from './backgroundImg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { getLinks } from '../Data/data';
import uuid from 'react-uuid';
import Intro from './intro';

class Home extends Component {
    state = {
        isNavbarOpen: false
      };

      toggleNavbar = () => {
        this.setState({ isNavbarOpen: !this.state.isNavbarOpen });
      };


    render() { 
        return (
            <React.Fragment>
                <div className="home-container">
                     <BackgroundImg/>
                     <div className="navbar">
                        <div className="nav-logo">
                            <h2>Metta Lavan</h2>
                        </div>
                        <button
                            className="nav-toggle"
                            onClick={this.toggleNavbar}
                        >
                        <i className="ri-menu-line nvt"></i>
                        </button>
                        <div
                            className={`nav-links ${
                            !this.state.isNavbarOpen ? "nav-links-close" : "nav-link-a"
                            }`}
                        >
                            {getLinks().map((link) => (
                            <AnchorLink key={uuid()} href={link.nav}>
                                {link.name}
                            </AnchorLink>
                            ))}
                        </div>
                        </div>
                     
                     <Intro/>

                </div>
            </React.Fragment>
        );
    }
}
 
export default Home;