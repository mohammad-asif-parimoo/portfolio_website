import "../styles/WorkCardStyles.css";
import React from 'react'

const WorkCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgSrc} alt="pic" />
            <h2 className="project-title">{props.title}</h2>
            <div className="project-details">
                <p>{props.text}</p>
                <div className="project-buttons">
                    <a href={props.sourceCode} className="my-btn buttons" target="_blank" rel="noopener noreferrer">SOURCE CODE</a>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
