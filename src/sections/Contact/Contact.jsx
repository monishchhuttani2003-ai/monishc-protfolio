import "./Contact.css";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
    const handleEmailClick = () => {

        const isMobile =
            /Android|iPhone|iPad|iPod/i.test(
                navigator.userAgent
            );

        if (isMobile) {

            window.location.href =
                "mailto:monishchhuttani2003@gmail.com";

        } else {

            window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=monishchhuttani2003@gmail.com",
                "_blank"
            );

        }
    };

    return (
        <section className="contact-section" id="contact">

            <h2 className="contact-heading">
                CONTACT INFORMATION
            </h2>

            <div className="contact-card">

                <a
                    href="tel:+917888256747"
                    className="contact-row"
                >
                    <div className="contact-icon">
                        <FaPhoneAlt />
                    </div>

                    <span className="contact-label">
                        Contact No
                    </span>

                    <span className="contact-value">
                        +91-7888256747
                    </span>
                </a>

                <div
                    className="contact-row"
                    onClick={handleEmailClick}
                    style={{ cursor: "pointer" }}
                >

                    <div className="contact-icon">
                        <FaEnvelope />
                    </div>

                    <span className="contact-label">
                        Mail
                    </span>

                    <span className="contact-value">
                        monishchhuttani2003@gmail.com
                    </span>

                </div>

                <a
                    href="https://www.linkedin.com/in/monish-chhuttani-846923265/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-row"
                >
                    <div className="contact-icon">
                        <FaLinkedin />
                    </div>

                    <span className="contact-label">
                        LinkedIn
                    </span>

                    <span className="contact-value">
                        linkedin.com/in/monish-chhuttani
                    </span>
                </a>

                <a
                    href="https://github.com/monishchhuttani2003-ai"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-row"
                >
                    <div className="contact-icon">
                        <FaGithub />
                    </div>

                    <span className="contact-label">
                        GitHub
                    </span>

                    <span className="contact-value">
                        github.com/Monish2003
                    </span>
                </a>

                <a className="contact-row location-row">

                    <div className="contact-icon">
                        <FaMapMarkerAlt />
                    </div>

                    <span className="contact-label">
                        Location
                    </span>

                    <span className="contact-value">
                        Ahilyanagar, Maharashtra, India
                    </span>

                </a>

            </div>

        </section>
    );
}

export default Contact;