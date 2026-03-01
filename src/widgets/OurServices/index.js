"use client";
import { useState } from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

import { services } from "@/app/staticData/home";
import useEdgeScroll from "@/hooks/useEdgeScroll";
import Button from "@/components/Button";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import ServiceCard from "../ServiceCard";
import Tabs from "@/components/Tabs";

const OurServices = () => {
    const [isTab, setIsTab] = useState(services[0].id);

    const activeTabs = services.filter((service) => service.id === isTab);
    return (
        <div className=" ">
            <ScrollAnimatedSection delay={200}>
                <div className="md:mb-12 mb-6">
                    <h2 className=" text-center text-H1 font-bold mb-2">What We Offer</h2>
                </div>
            </ScrollAnimatedSection>
            <div className=" mb-6 md:mb-12 ">
                <div>
                    <div>
                        <Tabs tabs={services} isTab={isTab} setIsTab={setIsTab} />
                        {activeTabs.map((service) => (
                            <div key={service.id} className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.subMenu.map((data, index) => {
                                    return (
                                        <Link href={`${data.url}`} key={index}>
                                            <ServiceCard title={data.title} icon={data.icon} description={data.description} id={data.id} />
                                        </Link>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Link href="/services">
                <Button>
                    All services
                    <span className="p-1 rounded-full border border-white group-hover:border-black transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                        <GoArrowRight />
                    </span>
                </Button>
            </Link>
        </div>
    );
};

export default OurServices;
