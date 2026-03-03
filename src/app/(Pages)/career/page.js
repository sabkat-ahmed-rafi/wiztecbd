"use client";
import React, { useEffect, useState } from "react";

import CurrentOpenings from "@/widgets/CurrentOpenings";
import Benefits from "@/widgets/Benefits";
import FindBest from "@/widgets/FindBest";
import { RootSection, Section } from "@/components/Section";
import { benifits } from "@/app/staticData/course";
import MiniBanner from "@/components/MiniBanner";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import OurFeatureProjects from "@/widgets/OurFeatureProjects";
import api from "@/config/api";

const Career = () => {
    const [featuredCareers, setFeaturedCareers] = useState([]);
    const [loading, setLoading] = useState(true);

    const stripHtml = (html) => {
        if (!html) return "";
        return html.replace(/<[^>]*>?/gm, "").substring(0, 250) + "...";
    };

    useEffect(() => {
        const fetchFeaturedCareers = async () => {
            try {
                const response = await api.get("/api/get-careers");
                if (response.data && response.data.careers) {
                    // Map the first two careers to the format expected by OurFeatureProjects
                    const mapped = response.data.careers.slice(0, 2).map((job) => ({
                        id: job.id,
                        title: job.title,
                        description: stripHtml(job.details),
                        img: job.image,
                        alt: job.title,
                        buttonText: "view details",
                        linkUrl: `/career/${job.id}`,
                        tags: job.categories || [],
                    }));
                    setFeaturedCareers(mapped);
                }
            } catch (error) {
                console.error("Error fetching featured careers:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFeaturedCareers();
    }, []);

    return (
        <RootSection>
            <Section id="careerBanner">
                <MiniBanner title=" Your Career, Our Mission" subtitle="Be Part of a Team That Builds Tomorrow" description="Join a Culture That Values Innovation, Teamwork, and Success" BannerImage="/assets/images/miniBanner/Career.webp" />
            </Section>

            {!loading && featuredCareers[0] && (
                <Section id="project1" bgColor="#63a077">
                    <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                        <ScrollAnimatedSection delay={200}>
                            <div className=" md:mb-12 mb-6">
                                <h1 className=" text-center text-H1  font-bold mb-2">Find Your Dream Job</h1>
                            </div>
                        </ScrollAnimatedSection>
                        <OurFeatureProjects ourFeatureProjectsData={featuredCareers[0]} />
                    </div>
                </Section>
            )}

            {!loading && featuredCareers[1] && (
                <Section id="project2" bgColor="#17afb0">
                    <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                        <OurFeatureProjects reverse ourFeatureProjectsData={featuredCareers[1]} />
                    </div>
                </Section>
            )}

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
