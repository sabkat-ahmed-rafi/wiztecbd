import React from "react";

import Banner from "@/components/Banner";

const CaseStudiesBanner = ({ title, description, img, alt, intro }) => {
    return (
        <>
            <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                <Banner title={title} description={description} img={img} alt={alt} />
            </div>
            <div className=" flex flex-wrap  bg-success_light mt-16">
                <div className=" px-6 py-5 w-full md:w-1/2 lg:w-1/5 lg:border-r border-b md:border-b-0 border-divider flex flex-col justify-start items-center h-32">
                    <p className=" text-secondary text-center pb-2 ">Industry</p>
                    <p className=" font-semibold text-center ">{intro.industry}</p>
                </div>
                <div className=" px-6 py-5 w-full md:w-1/2 lg:w-1/5 lg:border-r border-b md:border-b-0 border-divider  flex flex-col justify-start items-center h-32">
                    <p className=" text-secondary text-center pb-2 ">Country</p>
                    <p className=" font-semibold text-center ">{intro.country}</p>
                </div>
                <div className=" px-6 py-5 w-full md:w-1/2 lg:w-1/5 lg:border-r border-b md:border-b-0 border-divider flex flex-col justify-start items-center h-32">
                    <p className=" text-secondary text-center pb-2 ">Team Composition</p>
                    <p className=" font-semibold text-center ">{intro.team}</p>
                </div>
                <div className=" px-6 py-5 w-full md:w-1/2 lg:w-1/5 lg:border-r border-b md:border-b-0 border-divider  flex flex-col justify-start items-center h-32">
                    <p className=" text-secondary text-center pb-2 ">Key Technologies</p>
                    <p className=" font-semibold text-center ">{intro.technologies}</p>
                </div>
                <div className=" px-6 py-5 w-full md:w-1/2 lg:w-1/5 flex flex-col justify-start items-center h-32">
                    <p className=" text-secondary text-center pb-2 ">Project Duration</p>
                    <p className=" font-semibold text-center ">{intro.duration} Months</p>
                </div>
            </div>
        </>
    );
};

export default CaseStudiesBanner;
