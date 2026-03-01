import React from "react";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import ImageURL from "@/components/ImageUrl";

const Product = ({ revers, title, description, img, alt }) => {
    return (
        <div className={`flex flex-col-reverse items-center justify-between  ${revers ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <div className={`mb-5 md:w-1/2  flex justify-center it flex-col ${revers ? "md:pl-8 " : "md:pr-8"}`}>
                <ScrollAnimatedSection>
                    <h3 className={`text-H3 font-bold text-center md:text-start md:pb-6 pb-2`}>{title}</h3>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={100}>
                    <p className=" py-10px text-justify">{description}</p>
                </ScrollAnimatedSection>
            </div>
            <div className={` flex md:h-256 h-200 justify-center mb-4 md:mb-0 items-center overflow-hidden`}>
                <ImageURL height={256} width={562} alt={alt || "product"} image={img} />
            </div>
        </div>
    );
};

export default Product;
