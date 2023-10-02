import React from 'react';
import "../styles/WorkCardStyles.css";

const WorkCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgSrc} alt="pic" />
            <h2 className="project-title">{props.title}</h2>
            <div className="project-details">
                <p>{props.text}</p>
                <div className="project-buttons">
                    <a href={props.view} className="my-btn buttons" target="_blank" rel="noopener noreferrer">VIEW</a>
                </div>
            </div>
        </div>
    )
}

export default WorkCard;