import React from "react";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import ImageURL from "@/components/ImageUrl";

const FamillyGroup = () => {
    return (
        <div>
            <div className=" mb-6 md:mb-12">
                <ScrollAnimatedSection>
                    <h1 className="text-H1 text-center font-bold mb-6 capitalize max-w-lg mx-auto w-full"> take a vital look At Our Application working</h1>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection>
                    <p className={` font-light max-w-562 mx-auto w-full text-center`}> More than two decades of consistent performance has enabled us to claim our rightful place, and this is just the beginning.</p>
                </ScrollAnimatedSection>
            </div>
            <div className=" md:h-256 h-197 flex items-center justify-center overflow-hidden">
                <ImageURL image={"/assets/images/miniBanner/About.webp"} height={256} width={1920} alt="familly" />
            </div>
        </div>
    );
};

export default FamillyGroup;
