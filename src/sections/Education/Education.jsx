import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
    return (
        <section className="education-section" id="education">
            <div className="education-card">

                <div className="education-left">

                    <h2 className="education-heading">
                        EDUCATION
                    </h2>

                    <div className="timeline">

                        <div className="timeline-item">
                            <div className="timeline-icon">
                                <FaGraduationCap />
                            </div>

                            <div className="timeline-content">
                                <h3>Bachelor of Computer Application (BCA)</h3>

                                <p>Savitribai Phule Pune University (SPPU)</p>

                                <div className="edu-details">
                                    <span>2022 - 2025</span>
                                    <span className="cgpa">
                                        CGPA: 7.17
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-icon">
                                <FaGraduationCap />
                            </div>

                            <div className="timeline-content">
                                <h3>Higher Secondary Certificate (HSC)</h3>

                                <p>Pemraj Sarda College</p>

                                <div className="edu-details">
                                    <span>2020 - 2021</span>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-icon">
                                <FaGraduationCap />
                            </div>

                            <div className="timeline-content">
                                <h3>Secondary School Certificate (SSC)</h3>

                                <p>Dnyansarita Vidyalaya</p>

                                <div className="edu-details">
                                    <span>2018 - 2019</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="education-right">
                    <img
                        src="/images/edu_sticker.png"
                        alt="Monish"
                        className="education-image"
                    />
                </div>

            </div>
        </section>
    );
}

export default Education;