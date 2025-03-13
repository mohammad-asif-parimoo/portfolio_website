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
                <p>I’m Mohammad Asif Parimoo, a DevOps Engineer passionate about automation, scalability, and optimizing infrastructure for high-performance applications. With expertise in CI/CD, cloud-native technologies, containerization, and Infrastructure as Code, I focus on building resilient, secure, and efficient systems that drive innovation. I started my journey as a Full Stack Developer, crafting high-performance, visually engaging websites and applications. Over time, my fascination with streamlining deployments and enhancing system reliability led me to DevOps. Now, I bridge the gap between development and operations, ensuring seamless workflows, high-availability deployments, and robust system architectures.</p>
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
