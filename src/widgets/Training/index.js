import React from "react";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import AutoSwiper from "@/components/AutoSwipper";
import ImageURL from "@/components/ImageUrl";
import Image from "next/image";

const Training = ({ title, organaization, trainees, duration, location, sliderIImg, subTitle }) => {
    return (
        <>
            <div className=" mb-4 container max-w-xl mx-auto px-4">
                <div className=" flex items-center flex-col-reverse md:flex-row justify-center gap-6">
                    <div className=" flex-col justify-center items-center md:w-3/4 w-full">
                        <ScrollAnimatedSection>
                            <h1 className=" text-H1  font-bold mb-5 text-center">{title}</h1>
                        </ScrollAnimatedSection>
                        <ScrollAnimatedSection delay={100}>
                            <p className="  md:mb-8 mb-4 text-center ">{subTitle}</p>
                        </ScrollAnimatedSection>
                    </div>
                </div>
                <div className=" flex flex-wrap  bg-success_light md:mt-12 mt-6">
                    <div className=" px-6 py-5 w-full md:w-1/2 lg:w-1/5 lg:border-r border-b md:border-b-0 border-divider flex flex-col justify-start items-center ">
                        <p className=" text-center pb-2 ">Organization</p>
                        <p className=" font-semibold text-center ">{organaization}</p>
                    </div>
                    <div className=" px-6 py-5 w-full md:w-1/2 lg:w-1/5 lg:border-r border-b md:border-b-0 border-divider  flex flex-col justify-start items-center ">
                        <p className=" text-center pb-2 ">Total Trainees</p>
                        <p className=" font-semibold text-center ">
                            {trainees}
                            {"+"}
                        </p>
                    </div>
                    <div className=" px-6 py-5 w-full md:w-1/2 lg:w-1/5 lg:border-r border-b md:border-b-0 border-divider flex flex-col justify-start items-center ">
                        <p className=" text-center pb-2 ">Duration</p>
                        <p className=" font-semibold text-center ">{duration} Months</p>
                    </div>

                    <div className=" px-6 py-5 w-full md:w-1/2 lg:w-2/5 flex flex-col justify-start items-center ">
                        <p className=" text-center pb-2 ">Location</p>
                        <p className=" font-semibold text-center ">
                            {location.length >= 70 ? location.slice(0, 70) : location}
                            {location.length >= 70 ? "..see more" : ""}
                        </p>
                    </div>
                </div>
            </div>
            <AutoSwiper pauseOnClick title={"Sneak peek of the training session"}>
                {sliderIImg.map((img, index) => (
                    <div key={index} className={` h-223 z-0 px-2 justify-center flex items-center overflow-hidden`}>
                        <Image height={223} width={300} alt="training" loading="lazy" src={img} className=" max-w-full max-h-full h-auto w-auto object-cover" />
                    </div>
                ))}
            </AutoSwiper>
        </>
    );
};

export default Training;
