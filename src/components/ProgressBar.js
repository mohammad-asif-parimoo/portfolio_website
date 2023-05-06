import React, { useEffect, useRef, useState } from 'react';
import "../styles/ProgressBarStyles.css";

const ProgressBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const progressBarRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });
        observer.observe(progressBarRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="container" ref={progressBarRef}>
            <h1 className="text-center">Skills</h1>
            {isVisible && (
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="progress-title">HTML</h3>
                        <div className="progress">
                            <div className="progress-bar html" style={{ width: "80%" }}>
                                <div className="progress-value">80%</div>
                            </div>
                        </div>
                        <h3 className="progress-title">CSS</h3>
                        <div className="progress">
                            <div className="progress-bar css" style={{ width: "70%" }}>
                                <div className="progress-value">70%</div>
                            </div>
                        </div>
                        <h3 className="progress-title">JavaScript</h3>
                        <div className="progress">
                            <div className="progress-bar javaScript" style={{ width: "75%" }}>
                                <div className="progress-value">75%</div>
                            </div>
                        </div>
                        <h3 className="progress-title">Bootstrap</h3>
                        <div className="progress">
                            <div className="progress-bar bootstrap" style={{ width: "80%" }}>
                                <div className="progress-value">80%</div>
                            </div>
                        </div>
                        <h3 className="progress-title">React JS</h3>
                        <div className="progress">
                            <div className="progress-bar react-js" style={{ width: "70%" }}>
                                <div className="progress-value">70%</div>
                            </div>
                        </div>
                        <h3 className="progress-title">React Native</h3>
                        <div className="progress">
                            <div className="progress-bar react-native" style={{ width: "60%" }}>
                                <div className="progress-value">60%</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProgressBar;