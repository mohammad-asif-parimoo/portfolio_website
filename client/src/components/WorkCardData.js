import Project1Image from "../assets/project1.jpg";
import Project2Image from "../assets/project2.jpg";
import Project3Image from "../assets/project3.jpg";
import Project4Image from "../assets/project4.png";
import Project5Image from "../assets/project5.jpg";

const ProjectCardData = [
    {
        imgSrc: Project1Image,
        title: "Zomato DevOps",
        text: "Zomato DevOps is a CI/CD pipeline designed to automate the deployment of the Zomato app. This project integrates Jenkins for automation, SonarQube for code quality checks, and Docker for containerization, along with security tools like OWASP and Trivy. Kubernetes handles orchestration, with ArgoCD enabling GitOps workflows, while Prometheus and Grafana provide monitoring and observability. The deployment was initially managed on Amazon EKS before being transitioned. This project highlights my expertise in DevOps automation, cloud-native technologies, and infrastructure as code.",
        view: "https://github.com/mohammad-asif-parimoo/zomato_devops.git"
    },

    {
        imgSrc: Project2Image,
        title: "Netflix DevOps",
        text: "Netflix DevOps is a fully automated CI pipeline designed to streamline the build and testing of a Netflix clone. It integrates Docker for containerization, Jenkins for automation, and SonarQube, Trivy, and OWASP for security scanning. Prometheus and Grafana provide monitoring and observability, ensuring system health and performance. This project highlights my expertise in modern DevOps practices and cloud-native development.",
        view: "https://github.com/mohammad-asif-parimoo/netflix_devops.git"
    },
    {
        imgSrc: Project3Image,
        title: "Portfolio Website",
        text: "Welcome to my portfolio website, which showcases my skills and expertise in Full Stack Web Development. I've designed and developed this website using HTML, CSS, JavaScript, Bootstrap, React JS, Express JS, Node JS, and MongoDB to emphasize my commitment to delivering high-quality work, with a focus on responsive design and optimized performance.",
        view: "https://portfolio-website-mohammad-asif-parimoo.vercel.app/"
    },

    {
        imgSrc: Project4Image,
        title: "Nike Website",
        text: "Exploring the Nike Website reveals the harmonious marriage of sports heritage and futuristic design. A curated collection of Nike products represents the epitome of style and functionality, inviting you to envision a future where innovation and fashion walk hand in hand.",
        view: "https://nike-website-mohammad-asif-parimoo.vercel.app/"
    },

    {
        imgSrc: Project5Image,
        title: "Ecomzy Website",
        text: "Ecomzy is a dynamic and user-friendly e-commerce website that brings you a seamless online shopping experience. Built using the power of React JS, Ecomzy showcases a wide range of products that you can explore and add to your cart. Elevate your shopping journey today.",
        view: "https://ecomzy-website-mohammad-asif-parimoo.vercel.app/"
    }
]

export default ProjectCardData;
