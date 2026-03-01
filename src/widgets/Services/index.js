import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";

const Services = ({ title, description, service }) => {
    return (
        <>
            <div className=" flex flex-col md:flex-row md:gap-8 gap-4">
                <div className=" md:w-2/5 h-full md:sticky md:top-28">
                    <ScrollAnimatedSection>
                        <h3 className="text-H3 font-bold  pb-6 text-center md:text-start">{title}</h3>
                    </ScrollAnimatedSection>
                    {description && (
                        <ScrollAnimatedSection delay={100}>
                            <p className=" py-10px md:pr-8 text-justify">{description}</p>
                        </ScrollAnimatedSection>
                    )}
                </div>
                <div className="md:w-3/5 flex flex-col md:gap-8 gap-2">
                    {service.map((data) => (
                        <div key={data.id} className={`flex  md:pb-6 pb-2 pt-1 ${data.id !== service.length ? "border-b border-divider" : "border-none"}`}>
                            <span className=" mt-1 mr-2">
                                <FaArrowRightLong size={19} className=" text-success_main" />
                            </span>
                            <div>
                                <Link href="#" className="  text-H5 font-semibold">
                                    {data.title}
                                </Link>
                                <p className="  py-10px text-justify">{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
