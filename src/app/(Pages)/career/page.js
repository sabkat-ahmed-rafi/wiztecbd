import React from "react";

import CurrentOpenings from "@/widgets/CurrentOpenings";
import Benefits from "@/widgets/Benefits";
import FindBest from "@/widgets/FindBest";
import { RootSection, Section } from "@/components/Section";
import { benifits } from "@/app/staticData/course";
import MiniBanner from "@/components/MiniBanner";
import { dreamJob1, dreamJob2 } from "@/app/staticData/career";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import OurFeatureProjects from "@/widgets/OurFeatureProjects";

const Career = () => {
    return (
        <RootSection>
            <Section id="careerBanner">
                <MiniBanner title=" Your Career, Our Mission" subtitle="Be Part of a Team That Builds Tomorrow" description="Join a Culture That Values Innovation, Teamwork, and Success" BannerImage="/assets/images/miniBanner/Career.webp" />
            </Section>
            <Section id="project1" bgColor="#63a077">
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ScrollAnimatedSection delay={200}>
                        <div className=" md:mb-12 mb-6">
                            <h1 className=" text-center text-H1  font-bold mb-2">Find Your Dream Job</h1>
                        </div>
                    </ScrollAnimatedSection>
                    <OurFeatureProjects ourFeatureProjectsData={dreamJob1} />
                </div>
            </Section>
            <Section id="project2" bgColor="#17afb0">
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects reverse ourFeatureProjectsData={dreamJob2} />
                </div>
            </Section>
            <Section id="findBest-career" bgColor={"bg-peas_dark"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <FindBest />
                </div>
            </Section>
            <Section id="aboutBenifit" bgColor="#17a2b8">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Benefits benifits={benifits} title={"The Benefits of Becoming a Part of WiztecBD"} />
                </div>
            </Section>
            <Section id="openings" bgColor="rgba(69, 144, 214, 0.253)">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <CurrentOpenings />
                </div>
            </Section>
        </RootSection>
    );
};

export default Career;
