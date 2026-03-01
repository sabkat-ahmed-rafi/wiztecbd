import React from "react";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import ImageURL from "@/components/ImageUrl";

const ProjectTarget = ({ description, img, alt }) => {
    return (
        <div>
            <div>
                <ScrollAnimatedSection>
                    <h3 className="text-H3 font-bold text-center pb-6">Project Targets</h3>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={200}>
                    <p className=" py-10px text-center">{description}</p>
                </ScrollAnimatedSection>
            </div>
            <div className={` flex md:h-430 h-300 justify-center items-center overflow-hidden md:pt-12 pt-6`}>
                <ImageURL height={430} width={860} alt={alt} image={img} />
            </div>
        </div>
    );
};

export default ProjectTarget;
