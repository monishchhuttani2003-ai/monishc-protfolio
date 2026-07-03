import { Link } from "react-router-dom";
import "./JewelleryProject.css";

function PortfolioProject() {
    return (
        <section className="project-detail-page">

            <div className="project-container">

                <Link to="/" className="back-btn">
                    ← Back To Portfolio
                </Link>

                {/* Hero Section */}

                <div className="project-hero">

                    <div className="hero-icon">
                        💻
                    </div>

                    <div className="hero-content">

                        <h1 className="project-title">
                            Personal Portfolio Website
                        </h1>

                        <p className="project-subtitle">
                            A modern and responsive portfolio website built to showcase
                            my skills, projects, education, and contact information with
                            a clean user experience and professional design.
                        </p>

                    </div>

                </div>

                {/* Project Information */}

                <section className="project-section">

                    <h2>📌 Project Information</h2>

                    <p>
                        Personal Portfolio Website is a professional web application
                        developed to present my technical skills, projects, education,
                        and achievements in a structured and visually appealing format.
                    </p>

                    <p>
                        The website serves as my online portfolio and helps recruiters
                        and clients quickly understand my background and work experience.
                    </p>

                </section>

                {/* Screenshots */}

                <section className="project-section">

                    <h2>📷 Screenshots</h2>

                    <div className="screenshots-slider">

                        <img src="/images/port-folio.png" alt="Home Page" />
                        <img src="/images/portfolio-about.png" alt="About Section" />
                        <img src="/images/portfolio-projects.png" alt="Projects Section" />
                        <img src="/images/portfolio-contact.png" alt="Contact Section" />

                    </div>

                </section>

                {/* Problem Statement */}

                <section className="project-section">

                    <h2>🚨 Problem Statement</h2>

                    <p>
                        Recruiters and clients often need a quick way to evaluate
                        a developer’s skills, projects, and experience.
                    </p>

                    <ul>
                        <li>No centralized place to showcase projects.</li>
                        <li>Difficult to share skills and achievements professionally.</li>
                        <li>Traditional resumes cannot demonstrate UI/UX capabilities.</li>
                        <li>Limited visibility of technical expertise.</li>
                    </ul>

                </section>

                {/* Solution */}

                <section className="project-section">

                    <h2>💡 Solution</h2>

                    <p>
                        To solve these challenges, a personal portfolio website was
                        developed that highlights my projects, skills, education,
                        and contact information in a professional and interactive format.
                    </p>

                </section>

                {/* Features */}

                <section className="project-section">

                    <h2>✨ Key Features</h2>

                    <div className="features-grid">

                        <div>Responsive Design</div>
                        <div>Project Showcase</div>
                        <div>Education Section</div>
                        <div>Skills Section</div>
                        <div>Contact Information</div>
                        <div>Mobile Friendly UI</div>
                        <div>Modern Animations</div>
                        <div>Professional Layout</div>

                    </div>

                </section>

                {/* Technologies */}

                <section className="project-section">

                    <h2>🛠 Technologies Used</h2>

                    <div className="tech-stack">

                        <span>React.js</span>
                        <span>JavaScript</span>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>React Icons</span>
                        <span>Vite</span>
                        <span>Git</span>
                        <span>GitHub</span>

                    </div>

                </section>

                {/* Contribution */}

                <section className="project-section">

                    <h2>👨‍💻 My Contribution</h2>

                    <ul>
                        <li>Designed complete UI/UX of the portfolio.</li>
                        <li>Developed responsive layouts for desktop and mobile.</li>
                        <li>Implemented project showcase pages.</li>
                        <li>Built reusable React components.</li>
                        <li>Created smooth navigation and user interactions.</li>
                        <li>Optimized the website for performance and responsiveness.</li>
                    </ul>

                </section>

                {/* Outcome */}

                <section className="project-section">

                    <h2>🎯 Project Outcome</h2>

                    <p>
                        The portfolio successfully provides a professional online
                        presence and allows recruiters to quickly understand my
                        technical background, projects, and capabilities.
                    </p>

                </section>

                {/* Learning */}

                <section className="project-section">

                    <h2>📚 What I Learned</h2>

                    <ul>
                        <li>Building complete React applications.</li>
                        <li>Responsive web design techniques.</li>
                        <li>Component-based architecture.</li>
                        <li>UI/UX design principles.</li>
                        <li>Portfolio presentation strategies.</li>
                        <li>Performance optimization.</li>
                    </ul>

                </section>

                {/* Links */}

                <section className="project-section">

                    <div className="project-buttons">

                        <a
                            href="https://your-portfolio-link.com"
                            target="_blank"
                            rel="noreferrer"
                            className="demo-btn"
                        >
                            🚀 Live Demo
                        </a>

                        <a
                            href="https://github.com/your-repository"
                            target="_blank"
                            rel="noreferrer"
                            className="github-btn"
                        >
                            💻 GitHub Repository
                        </a>

                    </div>

                </section>

            </div>

        </section>
    );
}

export default PortfolioProject;