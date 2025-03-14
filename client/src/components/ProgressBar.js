import React, { useEffect, useRef, useState } from "react";
import "../styles/ProgressBarStyles.css";

const skills = [
    { name: "Linux", percentage: 80, className: "linux" },
    { name: "Docker", percentage: 85, className: "docker" },
    { name: "Jenkins", percentage: 80, className: "jenkins" },
    { name: "OWASP", percentage: 70, className: "owasp" },
    { name: "SonarQube", percentage: 75, className: "sonarqube" },
    { name: "Trivy", percentage: 70, className: "trivy" },
    { name: "Kubernetes", percentage: 85, className: "kubernetes" },
    { name: "ArgoCD", percentage: 75, className: "argocd" },
    { name: "Prometheus", percentage: 80, className: "prometheus" },
    { name: "Grafana", percentage: 75, className: "grafana" },
    { name: "AWS", percentage: 80, className: "aws" },
    { name: "GCP", percentage: 75, className: "gcp" },
    { name: "Git", percentage: 90, className: "git" },
    { name: "Jira", percentage: 85, className: "jira" },
    { name: "Groovy", percentage: 70, className: "groovy" },
    { name: "Shell", percentage: 80, className: "shell" },
    { name: "HTML", percentage: 90, className: "html" },
    { name: "CSS", percentage: 85, className: "css" },
    { name: "JavaScript", percentage: 80, className: "javascript" },
    { name: "Tailwind CSS", percentage: 75, className: "tailwind-css" },
    { name: "Bootstrap", percentage: 80, className: "bootstrap" },
    { name: "React.js", percentage: 85, className: "react-js" },
    { name: "Express.js", percentage: 70, className: "express-js" },
    { name: "Node.js", percentage: 75, className: "node-js" },
    { name: "MongoDB", percentage: 80, className: "mongo-db" },
    { name: "MySQL", percentage: 75, className: "mysql" },
];

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

        return () => observer.disconnect();
    }, []);

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
                                    <div
                                        className={`progress-bar ${skill.className}`}
                                        style={{ width: `${skill.percentage}%` }}
                                    >
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
