import React from 'react';
import "../styles/FooterStyles.css";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <h4 className="text-center">How to Reach Me?</h4>
                    <div className="location">
                        <FaHome size={25} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Lane No. 2A, Gulshan Abad, Zakura, Srinagar, Jammu and Kashmir, 190006, India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />+91-9596066836</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />mohammadasifparimoo@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4 className="text-center">About Me</h4>
                    <p>I'm Mohammad Asif Parimoo, currently working as a DevOps Engineer, and previously as a skilled Full Stack Developer. I create visually stunning and highly functional websites using cutting-edge technologies. With my expertise, I aim to bring your ideas to life and provide innovative solutions that meet the highest standards of quality and reliability.</p>
                    <div className="social">
                        <a href="https://www.instagram.com/mohammad_asif_parimoo/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} className="instagram-icon" />
                        </a>
             
                        <a href="https://github.com/mohammad-asif-parimoo" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} className="github-icon" />
                        </a>
    
                        <a href="https://www.facebook.com/mohammadasifparimoo/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} className="facebook-icon" />
                        </a>
    
                        <a href="https://twitter.com/Mohammad_Asif__" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} className="twitter-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
