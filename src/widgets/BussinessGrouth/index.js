import React from "react";
import Image from "next/image";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import ImageURL from "@/components/ImageUrl";

const BussinessGrouth = ({ title, content1, content2, content3, content4, img, alt }) => {
    return (
        <div className="  flex flex-col md:flex-row md:gap-6 ">
            <div className={`md:w-1/2 h-370 flex mb-4 md:mb-0 justify-start items-center overflow-hidden`}>
                <ImageURL height={370} width={370} alt={alt} image={img} className=" rounded-xl rounded-br-75" />
            </div>
            <div className="md:w-1/2">
                <ScrollAnimatedSection>
                    <h3 className="text-H3 font-bold  pb-6">{title}</h3>
                </ScrollAnimatedSection>
                {content1 && (
                    <ScrollAnimatedSection delay={100}>
                        <p className="text-subtitle2 my-10px text-justify">{content1}</p>
                    </ScrollAnimatedSection>
                )}
                {content2 && (
                    <ScrollAnimatedSection delay={200}>
                        <p className="text-subtitle2 my-10px text-justify">{content2}</p>
                    </ScrollAnimatedSection>
                )}
                {content3 && (
                    <ScrollAnimatedSection delay={300}>
                        <p className="text-subtitle2 my-10px text-justify">{content3}</p>
                    </ScrollAnimatedSection>
                )}
                {content4 && (
                    <ScrollAnimatedSection delay={400}>
                        <p className="text-subtitle2 my-10px text-justify">{content4}</p>
                    </ScrollAnimatedSection>
                )}
            </div>
        </div>
    );
};

export default BussinessGrouth;
