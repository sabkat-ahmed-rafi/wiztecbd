import React from "react";
import Image from "next/image";
import Link from "next/link";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import ImageURL from "@/components/ImageUrl";

const BlogBanner = ({ title, expertist, img, alt, catagory, publish }) => {
    return (
        <div className=" flex flex-col-reverse md:flex-row items-center gap-4">
            <div className="md:w-1/2 w-full">
                <ScrollAnimatedSection>
                    <p className="   font-medium text-success_main capitalize">{catagory}</p>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={100}>
                    <p className="text-subtitle2 text-gray600 mb-4">Published: {publish}</p>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={200}>
                    <h2 className="text-H1 font-bold md:mb-6 mb-4">{title}</h2>
                </ScrollAnimatedSection>
                {expertist && (
                    <div className=" flex items-center gap-4 overflow-x-scroll no-scrollbar  md:overflow-hidden mb-6 md:mb-12">
                        <p className=" text-subtitle1 font-medium mb-4 md:mb-0">Expertise:</p>

                        {expertist.map((item, index) => (
                            <Link key={index} href="#" className="capitalize cursor-pointer text-subtitle2 mb-4 md:mb-0 bg-success_light px-3  py-2 whitespace-nowrap">
                                {item}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <div className="md:w-1/2 mb-4 md:mb-0">
                <div className={` flex md:h-562 h-80 justify-center items-center overflow-hidden`}>
                    <ImageURL height={400} width={600} alt={alt} image={img} />
                </div>
            </div>
        </div>
    );
};

export default BlogBanner;
