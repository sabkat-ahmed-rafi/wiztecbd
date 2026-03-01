import React from "react";

import ScrollAnimatedSection from "../ScrollAnimationSection";
import ImageURL from "../ImageUrl";
import Image from "next/image";

const WorkProcess = ({ title, img, alt, imgMob }) => {
    return (
        <>
            <ScrollAnimatedSection>
                <h1 className="text-H1 font-bold mb-6 md:mb-12 text-center">{title}</h1>
            </ScrollAnimatedSection>
            <div className=" hidden md:flex justify-center items-center md:h-370  bg-transparent">
                <Image height={320} width={946} alt={alt} src={img} className=" max-w-full max-h-full w-auto h-auto" />
            </div>
            <div className="flex justify-center items-center md:h-370  bg-transparent md:hidden">
                <Image height={320} width={946} alt={alt} src={imgMob} className=" max-w-full max-h-full w-auto h-auto" />
            </div>
        </>
    );
};

export default WorkProcess;
