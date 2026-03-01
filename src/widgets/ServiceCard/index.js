"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import ImageURL from "@/components/ImageUrl";
import Image from "next/image";

const ServiceCard = ({ title, description, icon, more = false, url = "#", seeMore = false }) => {
    const [isExpandedDes, setIsExpandedDes] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleTitle = () => {
        setIsExpanded((prev) => !prev);
    };
    const toggleDescription = (event) => {
        event.preventDefault();
        setIsExpandedDes((prev) => !prev);
    };
    return (
        <div className=" bg-transparent h-full flex flex-col group">
            {icon && (
                <div className="flex items-center w-full   flex-shrink-0  md:mb-5 mb-2">
                    <Image height={100} width={100} src={icon} alt="icon" className={" h-16 w-16"} />
                </div>
            )}
            <div className="flex-1 flex flex-col gap-3">
                {title && (
                    <ScrollAnimatedSection delay={200}>
                        <h5 onClick={toggleTitle} className={`text-H6 font-bold mb-auto   transition-all duration-300 ease-in-out`}>
                            {title}
                        </h5>
                    </ScrollAnimatedSection>
                )}
                {description && (
                    <ScrollAnimatedSection delay={400}>
                        <p
                        //  onClick={toggleDescription}
                        >
                            {description}
                            {/* {isExpandedDes == false && description.length > 110 ? description.substring(0, 110) : description}
                            {isExpandedDes == false && description.length > 110 && <span className={` text-subtitle2 font-medium`}>...</span>} */}
                        </p>
                    </ScrollAnimatedSection>
                )}

                {more && (
                    <ScrollAnimatedSection delay={600}>
                        <Link href={url} className=" group flex items-center gap-4 hover:text-success_main hover:underline">
                            <p className="font-semibold">Explore More</p>
                            <div className="p-1 rounded-full border transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                                <GoArrowRight className=" text-success_main" />
                            </div>
                        </Link>
                    </ScrollAnimatedSection>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;
