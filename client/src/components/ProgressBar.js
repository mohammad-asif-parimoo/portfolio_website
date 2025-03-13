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

        observer.observe(progressBarRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">Skills</h1>
            <div className="row" ref={progressBarRef}>
                {isVisible && (
                    <div className="col-md-12">
                        <Skill name="HTML" percentage={80} className="html" />
                        <Skill name="CSS" percentage={70} className="css" />
                        <Skill name="JavaScript" percentage={75} className="javascript" />
                        <Skill name="Tailwind CSS" percentage={70} className="tailwind-css" />
                        <Skill name="Bootstrap" percentage={75} className="bootstrap" />
                        <Skill name="React JS" percentage={70} className="react-js" />
                        <Skill name="Express JS" percentage={60} className="express-js" />
                        <Skill name="Node JS" percentage={70} className="node-js" />
                        <Skill name="MongoDB" percentage={75} className="mongo-db" />
                        <Skill name="MySQL" percentage={70} className="mysql" />
                        <Skill name="Docker" percentage={85} className="docker" />
                        <Skill name="Jenkins" percentage={80} className="jenkins" />
                        <Skill name="OWASP" percentage={70} className="owasp" />
                        <Skill name="SonarQube" percentage={75} className="sonarqube" />
                        <Skill name="Trivy" percentage={70} className="trivy" />
                        <Skill name="Kubernetes" percentage={85} className="kubernetes" />
                        <Skill name="ArgoCD" percentage={75} className="argocd" />
                        <Skill name="Prometheus" percentage={80} className="prometheus" />
                        <Skill name="Grafana" percentage={75} className="grafana" />
                        <Skill name="AWS/EKS" percentage={80} className="aws_eks" />
                    </div>
                )}
            </div>
        </div>
    );
};

const Skill = ({ name, percentage, className }) => (
    <>
        <h3 className="progress-title">{name}</h3>
        <div className="progress">
            <div className={`progress-bar ${className}`} style={{ width: `${percentage}%` }}>
                <div className="progress-value">{percentage}%</div>
            </div>
        </div>
    </>
);

export default ProgressBar;
