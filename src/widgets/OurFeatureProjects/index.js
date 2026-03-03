"use client";
import React from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import Button from "@/components/Button";
import List from "@/components/List";
import ImageURL from "@/components/ImageUrl";

const OurFeatureProjects = ({ ourFeatureProjectsData, reverse }) => {
    return (
        <>
            <div className={`flex flex-col-reverse md:gap-100 gap-6 md:items-center ${reverse ? " md:flex-row-reverse" : "md:flex-row"}`}>
                <div className=" w-full md:w-3/5">
                    <ScrollAnimatedSection>
                        <h5 className=" text-H5 font-bold md:pb-4 pb-2">{ourFeatureProjectsData.title}</h5>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={100}>
                        <p className="md:mb-6 mb-2 py-10px text-justify">{ourFeatureProjectsData.description}</p>
                    </ScrollAnimatedSection>
                    {ourFeatureProjectsData.tags && (
                        <div className=" flex items-center gap-4 overflow-x-scroll no-scrollbar  md:overflow-hidden mb-6 md:mb-12">
                            <p className=" text-subtitle1 font-medium">Expertise:</p>

                            {ourFeatureProjectsData.tags.map((item, index) => (
                                <Link key={index} href="#" className="capitalize cursor-pointer text-subtitle2  bg-success_light px-3  py-2 whitespace-nowrap">
                                    {item}
                                </Link>
                            ))}
                        </div>
                    )}
                    {ourFeatureProjectsData.lists && (
                        <div className="mb-6 md:mb-12">
                            <List lists={ourFeatureProjectsData.lists} />
                        </div>
                    )}
                    {ourFeatureProjectsData.buttonText && (
                        <ScrollAnimatedSection delay={700}>
                            <Link href={ourFeatureProjectsData.linkUrl || `/portfolio/${ourFeatureProjectsData.id}`}>
                                <Button>
                                    {ourFeatureProjectsData.buttonText}
                                    <GoArrowRight />
                                </Button>
                            </Link>
                        </ScrollAnimatedSection>
                    )}
                </div>
                <div className={`w-full md:w-2/5 mb-4 md:mb-0 flex ${reverse ? " md:justify-start justify-center" : "md:justify-end justify-center"}`}>
                    <div className={`flex h-370 z-0  md:ml-6 items-center`}>
                        <ImageURL height={370} width={370} alt={ourFeatureProjectsData.alt} image={ourFeatureProjectsData?.img} className=" rounded-xl rounded-br-75" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurFeatureProjects;
