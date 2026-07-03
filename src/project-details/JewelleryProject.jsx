import { Link } from "react-router-dom";
import "./JewelleryProject.css";

function JewelleryProject() {
    return (
        <section className="project-detail-page">

            <div className="project-container">

                <Link to="/" className="back-btn">
                    ← Back To Portfolio
                </Link>

                {/* Hero Section */}

                <div className="project-hero">

                    <div className="hero-icon">
                        💎
                    </div>

                    <div className="hero-content">

                        <h1 className="project-title">
                            Jewellery Sales & Stock Tracker
                        </h1>

                        <p className="project-subtitle">
                            A business-oriented web application designed to manage
                            jewellery sales records, stock information and daily
                            business activities through a modern and responsive interface.
                        </p>

                    </div>

                </div>

                {/* Project Information */}

                <section className="project-section">

                    <h2>📌 Project Information</h2>

                    <p>
                        Jewellery Sales & Stock Tracker is a business-oriented web
                        application developed to digitize the process of maintaining
                        jewellery sales records, stock information, and daily business activities.
                    </p>

                    <p>
                        The application was designed to provide a structured and
                        user-friendly system where users can manage records efficiently
                        without relying on traditional manual methods.
                    </p>

                </section>

                {/* Screenshots */}

                <section className="project-section">

                    <h2>📷 Screenshots</h2>

                    <div className="screenshots-slider">

                        {/* Desktop View */}

                        <img
                            src="/projects/jewellery/DesktopView.png"
                            alt="Desktop View"
                        />

                        <img
                            src="/projects/jewellery/HomeD.png"
                            alt="Home Desktop"
                        />

                        <img
                            src="/projects/jewellery/DashboardD.png"
                            alt="Dashboard Desktop"
                        />

                        <img
                            src="/projects/jewellery/EntryD.png"
                            alt="Sales Entry Desktop"
                        />

                        <img
                            src="/projects/jewellery/StockD.png"
                            alt="Stock Desktop"
                        />

                        <img
                            src="/projects/jewellery/StockDashD.png"
                            alt="Stock Dashboard Desktop"
                        />

                        <img
                            src="/projects/jewellery/salesDashD.png"
                            alt="Sales Dashboard Desktop"
                        />

                        <img
                            src="/projects/jewellery/ReportD.png"
                            alt="Reports Desktop"
                        />

                        <img
                            src="/projects/jewellery/LoginD.png"
                            alt="Login Desktop"
                        />

                        {/* Mobile View */}

                        <img
                            src="/projects/jewellery/mobile view.png"
                            alt="Mobile View"
                        />

                        <img
                            src="/projects/jewellery/HomeM.png"
                            alt="Home Mobile"
                        />

                        <img
                            src="/projects/jewellery/DashM.png"
                            alt="Dashboard Mobile"
                        />

                        <img
                            src="/projects/jewellery/EntryM.png"
                            alt="Sales Entry Mobile"
                        />

                        <img
                            src="/projects/jewellery/EntryDashM.png"
                            alt="Sales Dashboard Mobile"
                        />

                        <img
                            src="/projects/jewellery/StockEntryM.png"
                            alt="Stock Entry Mobile"
                        />

                        <img
                            src="/projects/jewellery/StockDashM.png"
                            alt="Stock Dashboard Mobile"
                        />

                        <img
                            src="/projects/jewellery/ReportM.png"
                            alt="Reports Mobile"
                        />

                        <img
                            src="/projects/jewellery/LoginM.png"
                            alt="Login Mobile"
                        />

                    </div>

                </section>

                {/* Problem Statement */}

                <section className="project-section">
                    <h2>🚨 Problem Statement</h2>

                    <p>
                        Many jewellery businesses maintain sales and stock information
                        manually in registers or notebooks.
                    </p>

                    <ul>
                        <li>Difficulties in maintaining records accurately</li>
                        <li>Time-consuming manual updates</li>
                        <li>Searching old records becomes difficult</li>
                        <li>Higher chances of human error</li>
                        <li>Limited visibility of stock and sales information</li>
                    </ul>

                </section>

                {/* Solution */}

                <section className="project-section">

                    <h2>💡 Solution</h2>

                    <p>
                        To solve these challenges, a centralized web application
                        was developed that allows users to manage sales entries,
                        stock records and reports from a single platform.
                    </p>

                </section>

                {/* Key Features */}

                <section className="project-section">

                    <h2>✨ Key Features</h2>

                    <div className="features-grid">

                        <div>Sales Entry Management</div>
                        <div>Stock Tracking</div>
                        <div>Search & Filter Records</div>
                        <div>Responsive Data Tables</div>
                        <div>Report Management</div>
                        <div>User-Friendly Dashboard</div>
                        <div>Mobile Responsive Interface</div>

                    </div>

                </section>

                {/* Technologies */}

                <section className="project-section">

                    <h2>🛠 Technologies Used</h2>

                    <div className="tech-stack">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>React.js</span>
                        <span>Tailwind CSS</span>
                        <span>Git</span>
                        <span>GitHub</span>
                        <span>Vercel</span>
                        <span>Render</span>
                        <span>Neon</span>

                    </div>

                </section>

                {/* My Contribution */}

                <section className="project-section">

                    <h2>👨‍💻 My Contribution</h2>

                    <ul>
                        <li>Developed responsive frontend interfaces using React.</li>
                        <li>Designed sales entry and stock tracking screens.</li>
                        <li>Built reusable UI components.</li>
                        <li>Implemented search and filtering functionality.</li>
                        <li>Worked with Git and GitHub.</li>
                    </ul>

                </section>

                {/* Outcome */}

                <section className="project-section">

                    <h2>🎯 Project Outcome</h2>

                    <p>
                        The project successfully transformed manual record keeping
                        into a structured digital process.
                    </p>

                </section>

                {/* Learning */}

                <section className="project-section">

                    <h2>📚 What I Learned</h2>

                    <ul>
                        <li>Business requirement analysis.</li>
                        <li>React component development.</li>
                        <li>Version control using Git.</li>
                        <li>Deployment workflow using Vercel.</li>
                    </ul>

                </section>

                {/* Buttons Last */}

                <section className="project-section">

                    <div className="project-buttons">

                        <a
                            href="https://sringar-frontend.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="demo-btn"
                        >
                            🚀 Live Demo
                        </a>

                        <a
                            href="https://github.com/"
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

export default JewelleryProject;