import React from "react";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import ImageURL from "@/components/ImageUrl";
import List from "@/components/List";

const Encountered = ({ list, title, image }) => {
    return (
        <div className="md:p-100 p-6 gap-8 bg-primary text-white flex flex-col md:flex-row rounded-3xl group">
            <div className={`md:w-2/5 h-430 flex mb-4 md:mb-0 justify-center items-center overflow-hidden rounded-br-75`}>
                <ImageURL height={430} width={300} alt="blog" image={image} className="!w-full rounded-xl  group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="md:w-3/5">
                <ScrollAnimatedSection>
                    <h3 className="text-H3 font-bold  pb-6">Challenges Encountered</h3>
                </ScrollAnimatedSection>
                <List lists={list} bgBlack />
            </div>
        </div>
    );
};

export default Encountered;
