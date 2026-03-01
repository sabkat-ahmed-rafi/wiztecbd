import React from "react";

import IncresNumber from "@/components/IncresNumber";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";

const CompaniOverview = () => {
    return (
        <>
            <div className=" mb-6 md:mb-12">
                <ScrollAnimatedSection>
                    <h3 className="text-H3 font-bold text-center pb-6">Company Overview</h3>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={100}>
                    <p className=" py-10px text-center  ">
                        <span className=" font-semibold">Wizard Software & Technology Bangladesh Ltd.</span> is a software house that provides services in digital, technology, and computer-based operations. It has been started in January 2017. The segments of this software house include domain & hosting, web design & development, graphics design, search engine optimization, android application,
                        software development (ERPs), custom software development, etc. It offers an array of services including digital marketing, data analysis, maintenance of IT systems, and other solutions that provide clients with software, services, platforms, and content. It also delivers online support to its clients.
                    </p>
                </ScrollAnimatedSection>
            </div>
            <div className=" grid md:grid-cols-4 grid-cols-1 gap-8 mb-6 md:mb-12">
                <IncresNumber parsent target={66} duration={300} content="Developers" />
                <IncresNumber parsent target={10} duration={300} content="Program management office" />
                <IncresNumber parsent target={11} duration={300} content="QA automation engneers" />
                <IncresNumber parsent target={13} duration={300} content="Quality Engneers" />
            </div>
        </>
    );
};

export default CompaniOverview;
