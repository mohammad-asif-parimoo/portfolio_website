import React, { useEffect, useRef, useState } from 'react';
import "../styles/ProgressBarStyles.css"; // Import the CSS file

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

        if (progressBarRef.current) {
            observer.observe(progressBarRef.current);
        }

        return () => {
            if (progressBarRef.current) {
                observer.unobserve(progressBarRef.current);
            }
            observer.disconnect();
        };
    }, []);

    // Skill Data Array
    const skills = [
        { name: "HTML", percentage: 80, className: "html" },
        { name: "CSS", percentage: 70, className: "css" },
        { name: "JavaScript", percentage: 75, className: "javascript" },
        { name: "Tailwind CSS", percentage: 70, className: "tailwind-css" },
        { name: "Bootstrap", percentage: 75, className: "bootstrap" },
        { name: "React JS", percentage: 70, className: "react-js" },
        { name: "Express JS", percentage: 60, className: "express-js" },
        { name: "Node JS", percentage: 70, className: "node-js" },
        { name: "MongoDB", percentage: 75, className: "mongo-db" },
        { name: "MySQL", percentage: 70, className: "mysql" },
        { name: "Docker", percentage: 85, className: "docker" },
        { name: "Jenkins", percentage: 80, className: "jenkins" },
        { name: "OWASP", percentage: 70, className: "owasp" },
        { name: "SonarQube", percentage: 75, className: "sonarqube" },
        { name: "Trivy", percentage: 70, className: "trivy" },
        { name: "Kubernetes", percentage: 85, className: "kubernetes" },
        { name: "ArgoCD", percentage: 75, className: "argocd" },
        { name: "Prometheus", percentage: 80, className: "prometheus" },
        { name: "Grafana", percentage: 75, className: "grafana" },
        { name: "AWS/EKS", percentage: 80, className: "aws_eks" }
    ];

    return (
        <div className="container">
            <h1 className="text-center">Skills</h1>
            <div className="row" ref={progressBarRef}>
                {isVisible && (
                    <div className="col-md-12">
                        {skills.map((skill, index) => (
                            <div key={index}>
                                <h3 className="progress-title">{skill.name}</h3>
                                <div className="progress">
                                    <div className={`progress-bar ${skill.className}`} style={{ width: `${skill.percentage}%` }}>
                                        <div className="progress-value">{skill.percentage}%</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProgressBar;
