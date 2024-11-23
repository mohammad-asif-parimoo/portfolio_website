import React from 'react';
import "../styles/AboutContentStyles.css";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I'm Mohammad Asif Parimoo, currently working as a DevOps Engineer and previously as a skilled Full Stack Developer specializing in crafting aesthetically pleasing and high-performance websites. My passion lies in bringing innovative and dynamic ideas to life by harnessing my expertise in cutting-edge technologies. I am committed to providing my clients with comprehensive and reliable solutions that not only meet but exceed the highest standards of quality and user experience.</p>
                <Link to="/contact"><button className="my-btn" onClick={() => window.scrollTo(0, 0)}>CONTACT</button></Link>
            </div>
            <div className="right">
                <div className="image-container">
                    <div className="img-stack top">
                        <img src={React1} alt="Image1" className="image" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} alt="Image2" className="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;
