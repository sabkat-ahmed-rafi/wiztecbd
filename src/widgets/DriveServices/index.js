"use client";
import React from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import ServiceCard from "../ServiceCard";
import Button from "@/components/Button";

const DriveServices = ({ driveServicesData }) => {
    return (
        <div>
            <div className="md:mb-12 mb-6">
                <ScrollAnimatedSection>
                    <h1 className=" text-center  text-H1   font-bold mb-2">Thrive’s Digital Marketing Services</h1>
                </ScrollAnimatedSection>
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-4 md:mb-12 mb-6">
                {driveServicesData.map((data, index) => {
                    return (
                        <div key={index}>
                            <ServiceCard title={data.title} icon={data.icon} description={data.description} id={data.id} />
                        </div>
                    );
                })}
            </div>
            <Link href="/contact">
                <Button>
                    Contact Us
                    <GoArrowRight />
                </Button>
            </Link>
        </div>
    );
};

export default DriveServices;
