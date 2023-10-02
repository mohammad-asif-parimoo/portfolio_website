import React, { useState } from 'react';
import "../styles/NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color === true ? "header header-bg" : "header"}>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}><h1>Portfolio</h1></Link>
            <ul className={click === true ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>Projects</Link>
                </li>
                <li>
                    <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                </li>
            </ul>

            <div className="hamburger" onClick={handleClick}>
                {click === true ? <FaTimes size={20} style={{ color: "#fff" }} /> : <FaBars size={20} style={{ color: "#fff" }} />}
            </div>

        </div>
    )
}

export default Navbar;