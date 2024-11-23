import React from 'react';
import "../styles/HeroImgStyles.css";
import IntroImg from "../assets/myImage.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>HI, I'M MOHAMMAD ASIF PARIMOO</p>
                <h1>DevOps Engineer</h1>
                <div>
                    <Link to="/projects" className="my-btn" onClick={() => window.scrollTo(0, 0)}>PROJECTS</Link>
                    <Link to="/contact" className="my-btn my-btn-light" onClick={() => window.scrollTo(0, 0)}>CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg;
