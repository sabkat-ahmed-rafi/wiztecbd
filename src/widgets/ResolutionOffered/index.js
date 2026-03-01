import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";

const ResolutionOffered = ({ offers, description }) => {
    return (
        <div className=" flex flex-col md:flex-row md:gap-8 gap-4 ">
            <div className=" md:w-2/5 h-full md:sticky md:top-28">
                <ScrollAnimatedSection>
                    <h3 className="text-H3 font-bold  md:pb-6 pb-3 text-center md:text-start">Resolutions Offered </h3>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={100}>
                    <p className=" py-10px md:pr-8 text-justify">{description}</p>
                </ScrollAnimatedSection>
            </div>
            <div className="md:w-3/5 flex flex-col md:gap-8 gap-4">
                {offers.map((offer) => (
                    <div key={offer.id} className=" flex border-b border-divider md:pb-6 pb-3 pt-1">
                        <span className=" mt-1 mr-2">
                            <FaArrowRightLong size={19} className=" text-success_main" />
                        </span>
                        <div>
                            <h5 className="  text-H5 font-semibold">{offer.title}</h5>
                            <p className="  py-10px">{offer.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResolutionOffered;
