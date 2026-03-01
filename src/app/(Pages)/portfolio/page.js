"use client";
import React from "react";

import { RootSection, Section } from "@/components/Section";
import OurStats from "@/widgets/OurStats";
import Banner from "@/components/Banner";
import Cases from "@/widgets/Cases";
import { bannerImages } from "@/app/staticData/portfolio";

const Portfolio = () => {
    return (
        <RootSection>
            <Section id={"portfolioBanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner title={"Our Work, Your Inspiration"} subTitle={"A Legacy of Excellence"} description={"Scroll Down to Explore Proven Results Across Industries"} sliderImage={bannerImages} alt={"portfolio"} />
                </div>
            </Section>
            <Section bgColor="#EEEEEE" id={"ourStatas"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurStats />
                </div>
            </Section>
            <Section id={"cases"}>
                <div className=" container mx-auto px-4 max-w-xl md:pb-100 pb-12">
                    <Cases />
                </div>
            </Section>
        </RootSection>
    );
};

export default Portfolio;
