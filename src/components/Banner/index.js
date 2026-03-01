import React from "react";

import ScrollAnimatedSection from "../ScrollAnimationSection";
import ImageURL from "../ImageUrl";
import Slider from "../Slider";

const Banner = ({ title, subTitle, description, img, alt, sliderImage, status }) => {
    return (
        <div className=" flex items-center flex-col-reverse md:flex-row justify-center gap-6">
            <div className=" flex-col justify-center items-center md:w-3/5 w-full">
                {subTitle && (
                    <ScrollAnimatedSection>
                        <h6 className="text-H6 font-semibold mb-10px text-center capitalize">{subTitle}</h6>
                    </ScrollAnimatedSection>
                )}
                <ScrollAnimatedSection delay={200}>
                    <h1 className=" text-H1 font-bold mb-8 text-center capitalize">{title}</h1>
                </ScrollAnimatedSection>
                {description && (
                    <ScrollAnimatedSection delay={400}>
                        <p className="  text-center ">{description}</p>
                    </ScrollAnimatedSection>
                )}
            </div>
            {img && (
                <div className={` flex justify-center md:justify-end h-300 items-center overflow-hidden md:w-2/5 w-full`}>
                    <ImageURL height={300} width={480} alt={alt || "banner"} image={img} />
                </div>
            )}

            {sliderImage && (
                <div className="md:w-1/2 w-full">
                    <Slider images={sliderImage} />
                </div>
            )}
        </div>
    );
};

export default Banner;
