import React from "react";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import Steper from "@/components/Steper";

const FindBest = () => {
    return (
        <>
            <ScrollAnimatedSection>
                <h1 className="text-H1  font-bold mb-16 text-center">We Find The Best In You</h1>
            </ScrollAnimatedSection>
            <div className=" grid lg:grid-cols-5 grid-cols-2">
                <ScrollAnimatedSection>
                    <Steper title={"Review"} description={"Applicants are evaluated to verify that they are a good fit"} step={"01"} />
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={200}>
                    <Steper position="up" step={"02"} title={"Test"} description={"A test to determine your strengths for the team you’ve applied for"} />
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={400}>
                    <Steper step={"03"} title={"Get To Know"} description={"We’de like to get to know you a little better"} />
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={600}>
                    <Steper position="up" step={"04"} title={"Final Interview"} description={"This interview is conducted by the team leads to recruit our next best candidate"} />
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={800}>
                    <Steper step={"05"} title={"On Board"} description={"Rediscover Yourself into the future of unlimited possibilities"} />
                </ScrollAnimatedSection>
            </div>
        </>
    );
};

export default FindBest;
