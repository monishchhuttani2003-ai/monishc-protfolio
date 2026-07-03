import { Link } from "react-router-dom";
import "./JewelleryProject.css";

function NewsProject() {
    return (
        <section className="project-detail-page">

            <div className="project-container">

                <Link to="/" className="back-btn">
                    ← Back To Portfolio
                </Link>

                {/* Hero Section */}

                <div className="project-hero">

                    <div className="hero-icon">
                        📰
                    </div>

                    <div className="hero-content">

                        <h1 className="project-title">
                            Online News Portal
                        </h1>

                        <p className="project-subtitle">
                            A responsive news platform designed to organize and
                            present news articles in a clean, structured and
                            user-friendly interface across desktop and mobile devices.
                        </p>

                    </div>

                </div>

                {/* Project Information */}

                <section className="project-section">

                    <h2>📌 Project Information</h2>

                    <p>
                        Online News Portal is a web-based platform created to
                        display news articles in an organized and easy-to-read format.
                    </p>

                    <p>
                        The project focuses on presenting news content through
                        structured layouts, category-based organization and a
                        responsive user experience.
                    </p>

                    <p>
                        It was developed as an academic project to understand
                        website structure, content organization and frontend design.
                    </p>

                </section>

                {/* Screenshots */}

                <section className="project-section">

                    <h2>📷 Screenshots</h2>

                    <div className="screenshots-slider">

                        <img src="/images/news-1.png" alt="News Home" />
                        <img src="/images/news-2.png" alt="News Categories" />
                        <img src="/images/news-3.png" alt="News Details" />
                        <img src="/images/news-4.png" alt="Responsive View" />

                    </div>

                </section>

                {/* Problem Statement */}

                <section className="project-section">

                    <h2>🚨 Problem Statement</h2>

                    <p>
                        Users often struggle to find relevant news quickly when
                        information is not organized properly.
                    </p>

                    <ul>
                        <li>Unorganized content structure.</li>
                        <li>Difficult navigation between categories.</li>
                        <li>Poor mobile reading experience.</li>
                        <li>Lack of clean content presentation.</li>
                        <li>Difficulty accessing articles efficiently.</li>
                    </ul>

                </section>

                {/* Solution */}

                <section className="project-section">

                    <h2>💡 Solution</h2>

                    <p>
                        To improve content accessibility, a structured news portal
                        was designed with organized layouts, category-based sections,
                        and responsive pages.
                    </p>

                    <p>
                        The platform provides a cleaner reading experience and
                        improves navigation across different news topics.
                    </p>

                </section>

                {/* Key Features */}

                <section className="project-section">

                    <h2>✨ Key Features</h2>

                    <div className="features-grid">

                        <div>News Article Pages</div>
                        <div>Category-Based Layout</div>
                        <div>Responsive Design</div>
                        <div>Clean Navigation</div>
                        <div>Organized Content Structure</div>
                        <div>Mobile Friendly Interface</div>
                        <div>Modern UI Layout</div>
                        <div>Easy Article Browsing</div>

                    </div>

                </section>

                {/* Technologies */}

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

                {/* Contribution */}

                <section className="project-section">

                    <h2>👨‍💻 My Contribution</h2>

                    <ul>
                        <li>Designed and developed responsive user interfaces.</li>
                        <li>Created news listing and article pages.</li>
                        <li>Built mobile-friendly layouts.</li>
                        <li>Improved user experience and navigation.</li>
                        <li>Worked on content presentation and page structure.</li>
                        <li>Tested and optimized UI components.</li>
                    </ul>

                </section>

                {/* Outcome */}

                <section className="project-section">

                    <h2>🎯 Project Outcome</h2>

                    <p>
                        The project successfully demonstrated how news content
                        can be organized and presented through a structured and
                        user-friendly interface.
                    </p>

                    <p>
                        It improved content readability, navigation and overall
                        user experience across different devices.
                    </p>

                </section>

                {/* Learning */}

                <section className="project-section">

                    <h2>📚 What I Learned</h2>

                    <ul>
                        <li>Responsive web design principles.</li>
                        <li>UI layout structuring.</li>
                        <li>Content presentation techniques.</li>
                        <li>Navigation and user experience design.</li>
                        <li>Frontend project organization.</li>
                        <li>Cross-device compatibility.</li>
                    </ul>

                </section>

                {/* Links */}

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

export default NewsProject;