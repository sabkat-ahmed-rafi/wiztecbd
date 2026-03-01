import React from "react";

import ScrollAnimatedSection from "../ScrollAnimationSection";
import ImageURL from "../ImageUrl";

const MiddleBlogCard = ({ index, title, description, img }) => {
    return (
        <section id={`section${index}`}>
            <ScrollAnimatedSection>
                <h2 className="text-H2 text-center md:text-start font-bold mb-5">{title} </h2>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection delay={100}>
                <p className=" mb-5 ">{description}</p>
            </ScrollAnimatedSection>
            {img && (
                <div className="flex justify-center items-center h-270">
                    <ImageURL height={270} width={669} alt="blog-add" image={img} />
                </div>
            )}
        </section>
    );
};

export default MiddleBlogCard;
