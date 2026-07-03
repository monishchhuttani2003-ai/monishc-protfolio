import { Link } from "react-router-dom";
import "./JewelleryProject.css";

function SmartAgricultureProject() {
    return (
        <section className="project-detail-page">

            <div className="project-container">

                <Link to="/" className="back-btn">
                    ← Back To Portfolio
                </Link>

                {/* Hero Section */}

                <div className="project-hero">

                    <div className="hero-icon">
                        🌱
                    </div>

                    <div className="hero-content">

                        <h1 className="project-title">
                            Smart Agriculture Monitoring System
                        </h1>

                        <p className="project-subtitle">
                            A smart agriculture platform designed to organize and
                            monitor farming-related information through a structured,
                            responsive and user-friendly interface.
                        </p>

                    </div>

                </div>

                {/* Project Information */}

                <section className="project-section">

                    <h2>📌 Project Information</h2>

                    <p>
                        Smart Agriculture Monitoring System is an academic project
                        developed to manage and organize agricultural information
                        through a centralized platform.
                    </p>

                    <p>
                        The system focuses on presenting farming-related information
                        in a structured manner, allowing users to access and manage
                        data efficiently.
                    </p>

                    <p>
                        The project was created to understand information management,
                        dashboard design and responsive user interface development.
                    </p>

                </section>

                {/* Screenshots */}

                <section className="project-section">

                    <h2>📷 Screenshots</h2>

                    <div className="screenshots-slider">

                        <img
                            src="/images/agriculture-1.png"
                            alt="Dashboard"
                        />

                        <img
                            src="/images/agriculture-2.png"
                            alt="Farm Information"
                        />

                        <img
                            src="/images/agriculture-3.png"
                            alt="Crop Details"
                        />

                        <img
                            src="/images/agriculture-4.png"
                            alt="Responsive View"
                        />

                    </div>

                </section>

                {/* Problem Statement */}

                <section className="project-section">

                    <h2>🚨 Problem Statement</h2>

                    <p>
                        Managing agricultural information manually can become
                        difficult as the amount of data increases.
                    </p>

                    <ul>
                        <li>Difficulty organizing farm information.</li>
                        <li>Managing crop-related records efficiently.</li>
                        <li>Tracking agricultural activities.</li>
                        <li>Accessing information quickly.</li>
                        <li>Maintaining structured records.</li>
                    </ul>

                </section>

                {/* Solution */}

                <section className="project-section">

                    <h2>💡 Solution</h2>

                    <p>
                        To address these challenges, a centralized agriculture
                        monitoring platform was designed.
                    </p>

                    <p>
                        The system provides a structured interface where users
                        can organize, monitor and access agricultural information
                        more efficiently.
                    </p>

                    <p>
                        The responsive design ensures a smooth experience across
                        desktop and mobile devices.
                    </p>

                </section>

                {/* Key Features */}

                <section className="project-section">

                    <h2>✨ Key Features</h2>

                    <div className="features-grid">

                        <div>Farm Information Management</div>
                        <div>Crop Information Display</div>
                        <div>Dashboard Interface</div>
                        <div>Data Organization</div>
                        <div>Responsive Design</div>
                        <div>Easy Navigation</div>
                        <div>Information Monitoring</div>
                        <div>User-Friendly Layout</div>

                    </div>

                </section>

                {/* Technologies Used */}

                <section className="project-section">

                    <h2>🛠 Technologies Used</h2>

                    <div className="tech-stack">

                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript</span>
                        <span>Responsive Design</span>
                        <span>UI Development</span>

                    </div>

                </section>

                {/* My Contribution */}

                <section className="project-section">

                    <h2>👨‍💻 My Contribution</h2>

                    <ul>
                        <li>Designed responsive user interface layouts.</li>
                        <li>Created dashboard and information display screens.</li>
                        <li>Organized content for better readability.</li>
                        <li>Built structured page layouts.</li>
                        <li>Improved navigation and user experience.</li>
                        <li>Worked on responsive design for multiple devices.</li>
                        <li>Tested interface functionality and usability.</li>
                    </ul>

                </section>

                {/* Project Outcome */}

                <section className="project-section">

                    <h2>🎯 Project Outcome</h2>

                    <p>
                        The project successfully demonstrated how agricultural
                        information can be organized through a centralized system.
                    </p>

                    <p>
                        It improved information accessibility, organization and
                        overall user experience through a structured interface.
                    </p>

                </section>

                {/* What I Learned */}

                <section className="project-section">

                    <h2>📚 What I Learned</h2>

                    <ul>
                        <li>User Interface Design Principles.</li>
                        <li>Responsive Web Design.</li>
                        <li>Dashboard Layout Development.</li>
                        <li>Information Organization Techniques.</li>
                        <li>Frontend Project Structure.</li>
                        <li>User Experience Improvement.</li>
                        <li>Content Presentation Methods.</li>
                    </ul>

                </section>

                {/* Project Links */}

                <section className="project-section">

                    <div className="project-buttons">

                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="demo-btn"
                        >
                            🚀 Live Demo
                        </a>

                        <a
                            href="#"
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

export default SmartAgricultureProject;