import React from "react";

import Benefit from "@/components/Benefit";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";

const Soluation = ({ solution }) => {
    return (
        <>
            <h1 className="text-H1  font-bold md:mb-12 mb-6 text-center">{solution.title}</h1>
            <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
                {solution.benifits.map((benifit) => (
                    <ScrollAnimatedSection key={benifit.id} delay={benifit.id * 200}>
                        <Benefit title={benifit.title} icon={benifit.icon} alt={benifit.alt} />
                    </ScrollAnimatedSection>
                ))}
            </div>
        </>
    );
};

export default Soluation;
