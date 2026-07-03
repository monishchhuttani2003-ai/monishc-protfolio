import { useState, useEffect } from "react";

import {
    HiOutlineDownload,
    HiOutlineMenuAlt3,
    HiHome,
    HiUser,
    HiCode,
    HiBriefcase,
    HiAcademicCap,
    HiPhone,
    HiChevronRight,
} from "react-icons/hi";

import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("projects");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            setScrolled(window.scrollY > 40);

            const sections = [
                "home",
                "about",
                "skills",
                "projects",
                "education",
                "contact",
            ];

            const scrollPosition = window.scrollY + window.innerHeight / 3;

            sections.forEach((id) => {
                const section = document.getElementById(id);

                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        setActiveSection(id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">

                <a href="#home" className="logo-area">
                    <img
                        src="/images/logo.png"
                        alt="Monish Logo"
                        className="logo-image"
                    />

                    <h2 className="logo-text">
                        <span>MONISH</span> CHHUTTANI
                    </h2>
                </a>

                <ul className="nav-links">

                    <li className={activeSection === "home" ? "active" : ""}>
                        <a href="#home">Home</a>
                    </li>

                    <li className={activeSection === "about" ? "active" : ""}>
                        <a href="#about">About</a>
                    </li>

                    <li className={activeSection === "skills" ? "active" : ""}>
                        <a href="#skills">Skills</a>
                    </li>

                    <li className={activeSection === "projects" ? "active" : ""}>
                        <a href="#projects">Projects</a>
                    </li>

                    <li className={activeSection === "education" ? "active" : ""}>
                        <a href="#education">Education</a>
                    </li>

                    <li className={activeSection === "contact" ? "active" : ""}>
                        <a href="#contact">Contact</a>
                    </li>

                </ul>

                <div className="right-section">
                    <a
                        href="/monish_resume.pdf"
                        download="Monish_Resume.pdf"
                        className="cv-btn"
                    >
                        <HiOutlineDownload />
                        <span>My CV</span>
                    </a>

                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <HiOutlineMenuAlt3 />
                    </button>
                </div>

            </div>

            {menuOpen && (

                <div className="mobile-menu">

                    <a
                        href="#home"
                        className={`mobile-link ${activeSection === "home" ? "active-mobile" : ""}`}
                        onClick={() => {
                            setActiveSection("home");
                            setMenuOpen(false);

                        }}
                    >

                        <div className="mobile-left">

                            <div className="mobile-icon">

                                <HiHome />

                            </div>

                            <span>Home</span>

                        </div>

                        <HiChevronRight className="mobile-arrow" />

                    </a>


                    <a
                        href="#about"
                        className={`mobile-link ${activeSection === "about" ? "active-mobile" : ""}`}
                        onClick={() => {
                            setActiveSection("about");
                            setMenuOpen(false);

                        }}
                    >

                        <div className="mobile-left">

                            <div className="mobile-icon">

                                <HiUser />

                            </div>

                            <span>About</span>

                        </div>

                        <HiChevronRight className="mobile-arrow" />

                    </a>


                    <a
                        href="#skills"
                        className={`mobile-link ${activeSection === "skills" ? "active-mobile" : ""}`}
                        onClick={() => {
                            setActiveSection("skills");
                            setMenuOpen(false);

                        }}
                    >

                        <div className="mobile-left">

                            <div className="mobile-icon">

                                <HiCode />

                            </div>

                            <span>Skills</span>

                        </div>

                        <HiChevronRight className="mobile-arrow" />

                    </a>


                    <a
                        href="#projects"
                        className={`mobile-link ${activeSection === "projects" ? "active-mobile" : ""}`}
                        onClick={() => {
                            setActiveSection("projects");
                            setMenuOpen(false);

                        }}
                    >

                        <div className="mobile-left">

                            <div className="mobile-icon">

                                <HiBriefcase />

                            </div>

                            <span>Projects</span>

                        </div>

                        <HiChevronRight className="mobile-arrow" />

                    </a>


                    <a
                        href="#education"
                        className={`mobile-link ${activeSection === "education" ? "active-mobile" : ""}`}
                        onClick={() => {
                            setActiveSection("education");
                            setMenuOpen(false);
                        }}
                    >

                        <div className="mobile-left">

                            <div className="mobile-icon">

                                <HiAcademicCap />

                            </div>

                            <span>Education</span>

                        </div>

                        <HiChevronRight className="mobile-arrow" />

                    </a>


                    <a
                        href="#contact"
                        className={`mobile-link ${activeSection === "contact" ? "active-mobile" : ""}`}
                        onClick={() => {
                            setActiveSection("contact");
                            setMenuOpen(false);

                        }}
                    >

                        <div className="mobile-left">

                            <div className="mobile-icon">

                                <HiPhone />

                            </div>

                            <span>Contact</span>

                        </div>

                        <HiChevronRight className="mobile-arrow" />

                    </a>

                </div>

            )}

        </header>
    );
}

export default Navbar;