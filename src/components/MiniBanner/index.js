import React from "react";

import ScrollAnimatedSection from "../ScrollAnimationSection";

const MiniBanner = ({ title, subtitle, description, BannerImage }) => {
    return (
        <div
            className={`relative w-full flex items-center justify-center bg-cover bg-center -z-50`}
            style={{
                backgroundImage: `url(${BannerImage})`,
                aspectRatio: "5/1",
            }}
        >
            <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center"></div>
            <div className="relative z-10 text-center max-w-4xl w-full px-4 py-10 md:py-0">
                {subtitle && (
                    <h6 className="font-semibold mb-10px">
                        <ScrollAnimatedSection>{subtitle}</ScrollAnimatedSection>
                    </h6>
                )}
                <ScrollAnimatedSection delay={100}>
                    <h1 className="text-H1 text-center font-bold mb-4">{title}</h1>
                </ScrollAnimatedSection>
                {description && (
                    <ScrollAnimatedSection delay={200}>
                        <p className=" text-center">{description}</p>
                    </ScrollAnimatedSection>
                )}
            </div>
        </div>
    );
};

export default MiniBanner;
