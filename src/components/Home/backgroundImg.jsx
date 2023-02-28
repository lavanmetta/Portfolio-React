import React, { Component } from 'react'
import './home.css'
import backgroundImgA from '../Assets/backgroundImageB.jpg'


class BackgroundImg extends Component {
   
    render() { 
        return (
            <img src={backgroundImgA} alt="background" /> 
        );
    }
}
 
export default BackgroundImg;