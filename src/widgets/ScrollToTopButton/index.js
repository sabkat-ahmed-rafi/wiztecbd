"use client";
import { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Detect scroll position and show the button after scrolling
    const checkScrollPosition = () => {
        if (window.scrollY > 100) {
            // Button shows after scrolling 100px down
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scroll to top
        });
    };

    // Add event listener on component mount and remove it on unmount
    useEffect(() => {
        window.addEventListener("scroll", checkScrollPosition);
        return () => {
            window.removeEventListener("scroll", checkScrollPosition);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <div onClick={scrollToTop} className="button group flex items-center md:p-4 p-2 shadow-social justify-start  bg-white text-success_main rounded-full cursor-pointer  transition-all duration-300 ease-out  overflow-hidden">
                    <FaAngleDoubleUp />
                </div>
            )}
        </div>
    );
};

export default ScrollToTopButton;
