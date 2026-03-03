"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import Button from "@/components/Button";
import Project from "../Project";
import { fetchCaseStudies } from "@/utilities/api";
import { transformCaseStudiesToPortfolio } from "@/utilities/dataTransform";

const OurCaseStudies = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPortfolio = async () => {
            try {
                const data = await fetchCaseStudies();
                if (data.status === 200 && data.caseStudies) {
                    const transformedPortfolio = transformCaseStudiesToPortfolio(data.caseStudies);
                    setPortfolio(transformedPortfolio);
                }
            } catch (error) {
                console.error('Error loading portfolio:', error);
            } finally {
                setLoading(false);
            }
        };

        loadPortfolio();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <div className="text-center">Loading...</div>
            </div>
        );
    }

    return (
        <>
            <ScrollAnimatedSection delay={200}>
                <div className=" md:mb-12 mb-6">
                    <h2 className=" text-center text-H1 font-bold mb-2">Our Case Studies</h2>
                </div>
            </ScrollAnimatedSection>
            <div className=" flex flex-col lg:flex-row md:gap-8 gap-4">
                <div className=" lg:w-1/3 h-full md:sticky lg:top-28">
                    <ScrollAnimatedSection delay={300}>
                        <h4 className=" text-H4 text-center md:text-start font-bold md:mb-6 mb-3">A Portfolio of Our Flagship Projects</h4>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={400}>
                        <p className=" text-center md:text-start py-10px pr-8 md:mb-5 mb-2">We thrive on challenges because they fuel our creativity to innovate. Our case studies showcase how we have partnered with forward-thinking clients to tackle complex problems and create cutting-edge solutions.</p>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={500}>
                        <Link href={"/portfolio"} className=" inline-flex justify-center md:justify-start items-center md:mt-12">
                            <Button>
                                View Case Study
                                <BsArrowRight className=" transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                            </Button>
                        </Link>
                    </ScrollAnimatedSection>
                </div>
                <div className="lg:w-2/3 lg:flex flex-col gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {portfolio.map((card) => (
                        <Project key={card.id} id={card.id} title={card.title} description={card.description} img={card.img} alt={card.alt} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default OurCaseStudies;
