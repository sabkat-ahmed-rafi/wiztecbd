import React from "react";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import { processData } from "@/app/staticData/home";
import Steper from "@/components/Steper";

const OurProcess = () => {
    return (
        <>
            <ScrollAnimatedSection>
                <h2 className="text-H1  font-bold mb-16 text-center">Our Development Process</h2>
            </ScrollAnimatedSection>
            <div className=" grid lg:grid-cols-6 md:grid-cols-2 grid-cols-2">
                {processData.map((data) => (
                    <ScrollAnimatedSection key={data.id} delay={data.id * 200}>
                        <Steper title={data.title} description={data.description} step={data.step} position={data.position} />
                    </ScrollAnimatedSection>
                ))}
            </div>
        </>
    );
};

export default OurProcess;
