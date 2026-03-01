import React from "react";

import { masterSkills } from "@/app/staticData/course";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import ServiceCard from "../ServiceCard";

const MasterSkills = () => {
    return (
        <div>
            <ScrollAnimatedSection>
                <h1 className="text-H1 font-bold md:mb-12 mb-6 text-center">Master the Skills You Need to Excel in Career</h1>
            </ScrollAnimatedSection>
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-4">
                {masterSkills.map((data, index) => {
                    return (
                        <div key={index}>
                            <ServiceCard more={false} title={data.title} description={data.description} id={data.id} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MasterSkills;
