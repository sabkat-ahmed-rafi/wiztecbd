import React from "react";

import ScrollAnimatedSection from "../ScrollAnimationSection";

const Statement = ({ title, description }) => {
    return (
        <div className="md:py-100 p-4 bg-success_light border border-divider flex  flex-col">
            <div className=" container mx-auto max-w-xl">
                <ScrollAnimatedSection>
                    <h3 className="  text-H3  text-center font-bold md:mb-6 mb-4">Product Development Manager’s Statement-</h3>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={200}>
                    <p className="text-center relative">
                        <span className=" text-subtitle1 text-success_main text-4xl font-bold inline-block  absolute -top-4 -left-1">{`"`}</span>
                        {description}
                        <span className=" text-subtitle1 text-success_main text-4xl font-bold  absolute -bottom-2 ">{`"`}</span>
                    </p>
                </ScrollAnimatedSection>
            </div>
        </div>
    );
};

export default Statement;
