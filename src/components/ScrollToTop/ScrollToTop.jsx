import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";
import "./ScrollToTop.css";

function ScrollToTop() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

    return (
        <>
            {showButton && (
                <button
                    className="scroll-top-btn"
                    onClick={scrollToTop}
                    aria-label="Scroll To Top"
                >
                    <HiArrowUp />
                </button>
            )}
        </>
    );
}

export default ScrollToTop;