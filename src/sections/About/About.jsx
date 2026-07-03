import "./About.css";

import {
    FaCode,
    FaMobileAlt,
    FaBolt,
    FaUser
} from "react-icons/fa";

function About() {
    return (
        <section className="about" id="about">

            <div className="about-container">

                <div className="about-left">

                    <h4>ABOUT ME</h4>

                    <h2>I'm a Frontend Developer</h2>

                    <p>
                        I enjoy turning ideas into real-world web applications
                        that provide great user experience and performance.
                    </p>

                    <p>
                        I work with modern technologies and focus on writing
                        clean, maintainable code.
                    </p>

                </div>

                <div className="about-right">

                    <div className="about-card">
                        <div className="icon purple">
                            <FaCode />
                        </div>

                        <div>
                            <h3>Clean Code</h3>
                            <p>
                                Writing maintainable and scalable code.
                            </p>
                        </div>
                    </div>

                    <div className="about-card">
                        <div className="icon green">
                            <FaMobileAlt />
                        </div>

                        <div>
                            <h3>Responsive</h3>
                            <p>
                                Building fully responsive web applications.
                            </p>
                        </div>
                    </div>

                    <div className="about-card">
                        <div className="icon yellow">
                            <FaBolt />
                        </div>

                        <div>
                            <h3>Performance</h3>
                            <p>
                                Optimizing for speed and better performance.
                            </p>
                        </div>
                    </div>

                    <div className="about-card">
                        <div className="icon violet">
                            <FaUser />
                        </div>

                        <div>
                            <h3>User Focused</h3>
                            <p>
                                Creating smooth and intuitive user experiences.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;