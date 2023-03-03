import React, { Component } from 'react'
import './home.css'
import BackgroundImg from './backgroundImg';
import { getLinks } from '../Data/data';
import uuid from 'react-uuid';
import Intro from './intro';

import AnchorLink from "react-anchor-link-smooth-scroll";

class Home extends Component {
    state = {
        isNavbarOpen: false,
        bgColor : 'ntg'
      };

      toggleNavbar = () => {
        this.setState({ isNavbarOpen: !this.state.isNavbarOpen });
        
      };

      closeNavbar = () => {
        this.setState({ isNavbarOpen: !this.state.isNavbarOpen });
      }

      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    
      handleScroll = () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 0) {
          this.setState({ bgColor: "bg-change" });
        } else if (scrollTop === 0) {
          this.setState({ bgColor: "ntg" });
        }
      };


    render() { 
        
        return (
            <React.Fragment>
                <div className="home-container" id="home">
                     <BackgroundImg/>
                     <div className={`navbar click-text ${this.state.bgColor} ` }  >
                        <div className="nav-logo">
                            <h2>M.Design</h2>
                        </div>
                        <button
                        className={`nav-toggle ${
                            this.state.isNavbarOpen ? "nav-toggle-active" : ""
                            }`}
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
                            <AnchorLink key={uuid()} href={link.nav} onClick={this.closeNavbar}>
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