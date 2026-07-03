import React from "react";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";

/* ---- Inline icon components (no external library needed) ---- */
const IconCode = (props) => (
    <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

const IconArrowUpRight = (props) => (
    <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);

const IconDownload = (props) => (
    <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const IconGithub = (props) => (
    <svg viewBox="0 0 24 24" width={props.size || 22} height={props.size || 22} fill="currentColor">
        <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-1.95c-3.16.69-3.83-1.52-3.83-1.52-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.31-5.19 5.59.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
    </svg>
);

const IconLinkedin = (props) => (
    <svg viewBox="0 0 24 24" width={props.size || 22} height={props.size || 22} fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
);

const IconMail = (props) => (
    <svg viewBox="0 0 24 24" width={props.size || 22} height={props.size || 22} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="22 6 12 13 2 6" />
    </svg>
);

/**
 * Dynamic Hero section.
 * Pass your own data as props — nothing is hardcoded except the layout/design.
 *
 * Example:
 * <Hero
 *   firstName="Monish"
 *   lastName="Chhuttani"
 *   role="Frontend Developer"
 *   description="I build fast, responsive and user-friendly web applications with clean code and modern design."
 *   photoSrc="/monish-photo.jpg"
 *   cvUrl="/monish-cv.pdf"
 *   githubUrl="https://github.com/your-username"
 *   linkedinUrl="https://linkedin.com/in/your-username"
 *   email="you@example.com"
 * />
 */
export default function Hero({
    firstName = "MONISH",
    lastName = "CHHUTTANI",
    role = "Frontend Developer",
    description = "I build fast, responsive, and user-friendly web applications with clean, scalable code and modern design principles. Focused on creating seamless digital experiences that combine performance and functionality. ",
    photoSrc = "",              // <-- put path to YOUR photo here, e.g. "/monish-photo.jpg"
    photoAlt = "",
    cvUrl = "/cv.pdf",
    workUrl = "#work",
    githubUrl = "https://github.com/",
    linkedinUrl = "https://linkedin.com/",
    email = "hello@example.como",
    codeSnippet = null,          // optional: override the floating code card lines
}) {
    const fullName = `${firstName} ${lastName}`;
    const snippet = codeSnippet || [
        { key: "name", value: firstName },
        { key: "role", value: role },
        { key: "passion", value: "Building Web Experiences" },
    ];

    return (
        <section className="hero">
            {/* background decorations */}
            <span className="deco deco-sphere deco-sphere--purple" aria-hidden="true" />
            <span className="deco deco-sphere deco-sphere--blue" aria-hidden="true" />
            <span className="deco deco-dots" aria-hidden="true">
                {Array.from({ length: 16 }).map((_, i) => (
                    <span key={i} />
                ))}
            </span>

            <div className="hero__inner">
                {/* LEFT: text content */}
                <div className="hero__content">
                    <span className="hero__badge">
                        <span className="hero__badge-emoji" role="img" aria-label="waving hand">
                            👋
                        </span>
                        Hi, I&apos;m
                    </span>

                    <a className="hero__name">
                        {firstName} <span>{lastName}</span>
                    </a>

                    <div className="hero__role">
                        <IconCode size={18} />
                        <span>{role}</span>
                    </div>

                    <TypeAnimation
                        sequence={[
                            description,
                            1000,
                        ]}
                        speed={40}
                        cursor={true}
                        repeat={0}
                        wrapper="p"
                        className="hero__desc"
                    />

                    <div className="hero__cta">
                        <a href={workUrl} className="btn btn--primary">
                            View My Work <IconArrowUpRight size={18} />
                        </a>
                        <a href={cvUrl} className="btn btn--secondary" download>
                            <IconDownload size={18} /> Download CV
                        </a>
                    </div>

                    <div className="hero__socials">
                        <a href={githubUrl} target="_blank" rel="noreferrer" className="social">
                            <span className="social__icon social__icon--github">
                                <IconGithub size={22} />
                            </span>
                            <span className="social__label">GitHub</span>
                        </a>
                        <a href={linkedinUrl} target="_blank" rel="noreferrer" className="social">
                            <span className="social__icon social__icon--linkedin">
                                <IconLinkedin size={22} />
                            </span>
                            <span className="social__label">LinkedIn</span>
                        </a>
                        <a href={`mailto:${email}`} className="social">
                            <span className="social__icon social__icon--gmail">
                                <IconMail size={22} />
                            </span>
                            <span className="social__label">Gmail</span>
                        </a>
                    </div>
                </div>

                {/* RIGHT: portrait + floating cards */}
                <div className="hero__visual">
                    <span className="floating-chip" aria-hidden="true">
                        <IconCode size={26} />
                    </span>

                    <div className="portrait">
                        <div className="portrait__ring" />
                        <div className="portrait__photo">
                            {/* {photoSrc ? (
                                <img src={photoSrc} alt={photoAlt || fullName} />
                            ) : (
                                <span className="portrait__initials">
                                    {firstName[0]}
                                    {lastName[0]}
                                </span>
                            )} */}
                            <img src="./images/profile.png" alt="" />
                        </div>
                        <div className="portrait__base" />
                    </div>

                    <div className="code-card">
                        {/* <div className="code-card__bar">
                            <span className="dot dot--red" />
                            <span className="dot dot--yellow" />
                            <span className="dot dot--green" />
                        </div> */}
                        <pre className="code-card__body">
                            <span>const developer = {"{"}</span>
                            {snippet.map((line, i) => (
                                <span key={line.key} className="code-card__line">
                                    {"  "}
                                    {line.key}: <span className="tok-string">&quot;{line.value}&quot;</span>
                                    {i < snippet.length - 1 ? "," : ""}
                                </span>
                            ))}
                            <span>{"};"}</span>
                        </pre>
                    </div>

                    <span className="floating-cube" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}