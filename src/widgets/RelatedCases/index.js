"use client";
import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import Button from "@/components/Button";
import Blog from "../blog";

const RelatedCases = ({ relatedCaseStudies = [] }) => {
    return (
        <div>
            <ScrollAnimatedSection>
                <h1 className="text-H1  font-bold md:mb-12 mb-6 text-center">Explore More Case Studies</h1>
            </ScrollAnimatedSection>

            <div className=" grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-12">
                {relatedCaseStudies.map((card) => (
                    <Link key={card.id} href={`/portfolio/${card.id}`}>
                        <Blog img={card.img} button={"Case studies"} title={card.title} description={card.description} />
                    </Link>
                ))}
            </div>
            {/* <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/portfolio/case-studies">
                    <Blog img="/assets/images/download (1).png" title={"AI-based Learning Platform"} study description="Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" />
                </Link>
                <Link href="/portfolio/case-studies">
                    <Blog img="/assets/images/download (1).png" title={"AI-based Learning Platform"} study description="Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" />
                </Link>
                <Link href="/portfolio/case-studies">
                    <Blog img="/assets/images/download (1).png" title={"AI-based Learning Platform"} study description="Learn how we developed MyCurrency, the first and the only mobile " />
                </Link>
            </div> */}
            <Link href={"/portfolio"} className=" flex items-center justify-center md:mt-12 mt-6">
                <Button>
                    View All Case Stuides
                    <BsArrowRight />
                </Button>
            </Link>
        </div>
    );
};

export default RelatedCases;
