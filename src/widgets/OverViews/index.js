import React from "react";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import { overViewData } from "@/app/staticData/home";
import OverViewCard from "../OverViewCard";

const OverViews = () => {
    return (
        <>
            <ScrollAnimatedSection delay={0}>
                <div className=" mb-12">
                    <h2 className=" text-center text-H1 font-bold mb-2">Company Overview</h2>
                </div>
            </ScrollAnimatedSection>
            <div className="container mx-auto max-w-xl px-4 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-6">
                {overViewData.map((data) => (
                    <ScrollAnimatedSection key={data.id} delay={data.id * 200}>
                        <OverViewCard year={data.year} target={data.target} initialCount={data.initialCount} label={data.label} duration={data.duration} />
                    </ScrollAnimatedSection>
                ))}
            </div>
        </>
    );
};

export default OverViews;
