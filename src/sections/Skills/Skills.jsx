import "./Skills.css";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaBootstrap,
    FaGitAlt,
    FaGithub,
    FaCode
} from "react-icons/fa";

import {
    SiVercel,
    SiNetlify
} from "react-icons/si";

function Skills() {
    return (
        <section className="skills" id="skills">

            <div className="skills-container">

                {/* Technical Skills */}

                <div className="skills-box">

                    <h2 className="skills-heading">
                        TECHNICAL SKILLS
                    </h2>

                    <div className="skills-grid">

                        <div className="skill-card">
                            <FaHtml5 className="html" />
                            <p>HTML5</p>
                        </div>

                        <div className="skill-card">
                            <FaCss3Alt className="css" />
                            <p>CSS3</p>
                        </div>

                        <div className="skill-card">
                            <FaJs className="js" />
                            <p>JavaScript (ES6+)</p>
                        </div>

                        <div className="skill-card">
                            <FaReact className="react" />
                            <p>React.js</p>
                        </div>

                        <div className="skill-card">
                            <FaBootstrap className="bootstrap" />
                            <p>Bootstrap</p>
                        </div>

                    </div>

                </div>

                {/* Tools */}

                <div className="skills-box">

                    <h2 className="skills-heading">
                        TOOLS & TECHNOLOGIES
                    </h2>

                    <div className="tools-grid">

                        <div className="tool-card">
                            <FaGitAlt className="git" />
                            <p>Git</p>
                        </div>

                        <div className="tool-card">
                            <FaGithub className="github" />
                            <p>GitHub</p>
                        </div>

                        <div className="tool-card">
                            <img
                                src="/images/vscode.png"
                                alt="VS Code"
                            />
                            <p>VS Code</p>
                        </div>

                        <div className="tool-card">
                            <SiVercel className="vercel" />
                            <p>Vercel</p>
                        </div>

                        <div className="tool-card">
                            <img
                                src="/images/render.png"
                                alt="Render"
                            />
                            <p>Render</p>
                        </div>

                        <div className="tool-card">
                            <img
                                src="/images/neon.jpg"
                                alt="Neon"
                            />
                            <p>Neon</p>
                        </div>

                        <div className="tool-card">
                            <SiNetlify className="netlify" />
                            <p>Netlify</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Skills;