import { useEffect, useState } from "react";
import "./Loader.css";

function Loader() {

    const [progress, setProgress] = useState(0);

    const [status, setStatus] = useState("Initializing Experience...");

    useEffect(() => {

        const messages = [

            "Initializing Experience...",

            "Loading Portfolio Assets...",

            "Preparing Components...",

            "Optimizing Performance...",

            "Almost Ready..."

        ];

        let messageIndex = 0;

        const progressInterval = setInterval(() => {

            setProgress((prev) => {

                if (prev >= 100) {

                    clearInterval(progressInterval);

                    return 100;

                }

                return prev + 1;

            });

        }, 22);

        const textInterval = setInterval(() => {

            messageIndex++;

            if (messageIndex < messages.length) {

                setStatus(messages[messageIndex]);

            }

        }, 700);

        return () => {

            clearInterval(progressInterval);

            clearInterval(textInterval);

        };

    }, []);

    return (

        <section className="loader">

            {/* =============================
                Background
            ============================== */}

            <div className="background-layer">

                <div className="gradient-bg"></div>

                <div className="orb orb-one"></div>

                <div className="orb orb-two"></div>

                <div className="orb orb-three"></div>

                <div className="grid-overlay"></div>

                <div className="noise-layer"></div>

            </div>

            {/* =============================
                Decorative Elements
            ============================== */}

            <div className="floating-elements">

                <span className="dot dot1"></span>

                <span className="dot dot2"></span>

                <span className="dot dot3"></span>

                <span className="dot dot4"></span>

                <span className="dot dot5"></span>

                <span className="dot dot6"></span>

                <span className="dot dot7"></span>

                <span className="dot dot8"></span>

            </div>

            <div className="glass-border"></div>

            {/* =============================
                Main Content
            ============================== */}

            <div className="loader-content">

                {/* Glow */}

                <div className="logo-glow"></div>

                {/* Floating Rings */}

                <div className="ring ring1"></div>

                <div className="ring ring2"></div>

                <div className="ring ring3"></div>

                {/* Logo */}

                <div className="logo-wrapper">

                    <div className="logo-box">

                        <img

                            src="/images/logo.png"

                            alt="Logo"

                            className="loader-logo"

                        />

                    </div>

                </div>

                {/* Title */}

                <h1 className="loader-title">

                    MONISH

                    <span>

                        CHHUTTANI

                    </span>

                </h1>

                <p className="loader-role">

                    Frontend Developer

                </p>

                <div className="divider"></div>

                <p className="loader-status">

                    {status}

                </p>

                {/* Progress */}

                <div className="progress-area">

                    <div className="progress-track">

                        <div

                            className="progress-fill"

                            style={{

                                width: `${progress}%`

                            }}

                        >

                            <span className="progress-shine"></span>

                        </div>

                    </div>

                    <div className="progress-footer">

                        <span>

                            Building Amazing Experience

                        </span>

                        <strong>

                            {progress}%

                        </strong>

                    </div>

                </div>

            </div>

            {/* Bottom Wave */}

            <div className="wave-wrapper">

                <div className="wave wave1"></div>

                <div className="wave wave2"></div>

            </div>

        </section>

    );

}

export default Loader;