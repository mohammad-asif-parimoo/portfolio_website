import React from 'react';
import "../styles/HeroImg2Styles.css";

const HeroImg2 = (props) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.paragraph}</p>
      </div>
    </div>
  )
}

export default HeroImg2;