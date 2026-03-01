import React from "react";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import ImageURL from "@/components/ImageUrl";

const Problems = ({ description, img, alt }) => {
    return (
        <div className=" flex flex-col-reverse md:flex-row">
            <div className=" mb-5 md:w-1/2 md:pr-8">
                <ScrollAnimatedSection>
                    <h3 className=" text-H3 font-bold  pb-6 text-center md:text-start">The Problem </h3>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={200}>
                    <p className=" py-10px md:pr-8 text-justify">{description}</p>
                </ScrollAnimatedSection>
            </div>
            <div className={` flex md:w-1/2 md:h-350  justify-center items-center overflow-hidden mb-4 md:mb-0 `}>
                <ImageURL height={350} width={350} alt={alt} image={img} className="w-auto max-w-full max-h-full h-auto object-cover rounded-xl rounded-br-75" />
            </div>
        </div>
    );
};

export default Problems;
