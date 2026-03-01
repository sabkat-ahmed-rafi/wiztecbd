import React from "react";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import Benefit from "@/components/Benefit";

const Benefits = ({ title, benifits }) => {
    return (
        <>
            <ScrollAnimatedSection>
                <h2 className="text-H1 font-bold md:mb-12 mb-6 text-center capitalize">{title}</h2>
            </ScrollAnimatedSection>
            <div className=" grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
                {benifits.map((benifit) => {
                    return (
                        <ScrollAnimatedSection key={benifit.id} delay={benifit.delay}>
                            <Benefit title={benifit.title} alt={benifit.alt} icon={benifit.icon} description={benifit.description} />
                        </ScrollAnimatedSection>
                    );
                })}
            </div>
        </>
    );
};

export default Benefits;
