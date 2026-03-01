import React from "react";
import Marquee from "react-fast-marquee";

import ScrollAnimatedSection from "../ScrollAnimationSection";

const AutoSwiper = ({ title, children, speed = 50, pauseOnHover, pauseOnClick, titleClass }) => {
    return (
        <div>
            {title && (
                <ScrollAnimatedSection delay={200}>
                    <div className=" md:mb-12 mb-6">
                        <h2 className={`text-center text-H1 font-bold mb-2 ${titleClass}`}>{title}</h2>
                    </div>
                </ScrollAnimatedSection>
            )}
            <ScrollAnimatedSection delay={300}>
                <Marquee autoFill speed={speed} pauseOnClick={pauseOnClick} pauseOnHover={pauseOnHover}>
                    {children}
                </Marquee>
            </ScrollAnimatedSection>
        </div>
    );
};

export default AutoSwiper;
