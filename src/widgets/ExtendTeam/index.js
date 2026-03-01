import React from "react";
import Image from "next/image";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import ImageURL from "@/components/ImageUrl";

const ExtendTeam = () => {
    return (
        <>
            <div>
                <ScrollAnimatedSection delay={300}>
                    <h3 className="text-H3 font-bold text-center pb-6">The extended team that is part of your team</h3>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={300}>
                    <p className=" py-10px text-center  ">Wizard Software & Technology Bangladesh Ltd. is a developing service provider for online-based applications. The Company has been promoted by professionals who are dedicated to providing total IT resolutions under one roof.</p>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={400}>
                    <p className=" py-10px text-center  ">
                        It possesses not only the latest technology gadgets but also the well-informed minds and experienced hands to offer the most user-friendly customized solutions. From the start, WizTecBD has carved a niche for itself in the IT industry and has expanded its reach by acquiring some major domestic projects. Undoubtedly the company has been able to make a name for itself in a
                        short period. Our designing teams help our clients through the digital design and strategy maze.
                    </p>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection>
                    <p className=" py-10px text-center  ">
                        Subsequently, we created a detailed project plan for the development of the cloud-based document management software. This plan outlined the technical tasks, the iterative phases of development, and clear milestones so that progress remained transparent, and the client had ample opportunities to provide feedback throughout the development lifecycle.
                    </p>
                </ScrollAnimatedSection>
            </div>
            <div className={` flex md:h-562 h-300 justify-center items-center overflow-hidden pt-12`}>
                <ImageURL height={562} width={1100} alt="blog" image="/assets/images/about/About image 1.webp" className="w-full max-w-full max-h-full h-auto object-cover" />
            </div>
        </>
    );
};

export default ExtendTeam;
