import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './HomeBanner.css';
import Banner from '../assets/banner-image.png';

const HomeBanner = () => {
    return(
        <div className="home-banner">
            <div className="home-left-banner">
                <img src={Banner}/>
            </div>
            <div className="home-right-banner">
                <p id="home-whatsapp-text">WHATSAPP</p>
            </div>
        </div>
    )
}

export default HomeBanner;