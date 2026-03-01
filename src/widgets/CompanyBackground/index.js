import React from "react";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";

const CompanyBackground = ({ description }) => {
    return (
        <div className="  flex flex-col md:flex-row">
            <div className=" pb-6 md:w-1/2 md:pr-8 md:pb-6">
                <ScrollAnimatedSection>
                    <h3 className=" text-H3 font-bold  text-center md:text-start">Company Background</h3>
                </ScrollAnimatedSection>
            </div>
            <div className=" md:w-1/2 md:border-l md:pl-8 border-divider">
                <ScrollAnimatedSection>
                    <p className=" py-10px md:pr-8 text-justify">{description}</p>
                </ScrollAnimatedSection>
            </div>
        </div>
    );
};

export default CompanyBackground;
