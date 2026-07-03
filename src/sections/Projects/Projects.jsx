import "./Projects.css";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function Projects() {
    const projects = [
        {
            image: "/images/sringar.png",
            title: "Jewellery Sales & Stock Tracker",
            badge: "Real-World Project",
            badgeClass: "purple",
            description:
                "Frontend application to manage daily sales entries, stock records and business reports.",
            link: "/jewellery-project"
        },
        {
            image: "/images/port-folio.png",
            title: "Personal Portfolio Website",
            badge: "Personal Project",
            badgeClass: "purple",
            description:
                "Modern responsive portfolio website built with React.js showcasing projects, skills, education, and contact information with mobile-friendly design.",
            link: "/portfolio-project"
        },
        {
            image: "/images/News-Portal.png",
            title: "Online News Application",
            badge: "College Project",
            badgeClass: "purple",
            description:
                "News platform to publish and manage news in real-time with categories.",
            link: "/news-project"
        },
        {
            image: "/images/agriculture.png",
            title: "Smart Agriculture Monitoring System",
            badge: "Class Project",
            badgeClass: "green",
            description:
                "System to manage farmers, crops, sales and tracking data in one place.",
            link: "/agriculture-project"
        }
    ];

    return (
        <section className="projects-section" id="projects">

            <div className="projects-header">

                <h2>PROJECTS</h2>

                {/* <a href="#" className="view-all">
                    View All Projects
                    <HiArrowRight />
                </a> */}

            </div>

            <div className="projects-grid">

                {projects.map((project, index) => (
                    <div className="project-card" key={index}>

                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />

                        <div className="project-content">

                            <h3>{project.title}</h3>

                            <span
                                className={`project-badge ${project.badgeClass}`}
                            >
                                {project.badge}
                            </span>

                            <p>{project.description}</p>

                            <Link
                                to={project.link}
                                className="project-link"
                            >
                                View Project
                                <HiArrowRight />
                            </Link>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Projects;