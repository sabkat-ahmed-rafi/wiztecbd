import React from "react";
import Image from "next/image";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";

const MarkatingPlyer = () => {
    return (
        <div className=" flex flex-col-reverse md:justify-center md:flex-row items-center gap-8">
            <div className="md:w-1/2 flex flex-col justify-center ">
                <ScrollAnimatedSection>
                    <p className="  py-10px text-justify">So many other agencies rely on a one-size-fits-all approach, many times offering you the same strategy and cookie-cutter website as your competitor down the street.</p>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={100}>
                    <p className="  py-10px text-justify">
                        Thrive works with you to produce customized internet marketing services and a plan that aligns with your unique business needs. We become an extension of your team, a partner that understands your market and goals, rather than just an agency that executes strategies blindly. Unlike so many other agencies that use glitz and glamor to close sales and then fail
                    </p>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={200}>
                    <p className="  py-10px text-justify"> to execute, Thrive focuses on client relationships and results. We always deliver substance, not false promises, ensuring we maximize your budget, so you get the most return on investment (ROI).</p>
                </ScrollAnimatedSection>
                <ScrollAnimatedSection delay={300}>
                    <p className="  py-10px text-justify">Our reviews and testimonials speak volumes. We earn your business every day with month-to-month contracts. Take a look below at the wide variety of digital marketing services Thrive offers. Contact us today to learn more about how we can help your business!</p>
                </ScrollAnimatedSection>
            </div>
            <div className=" md:w-1/2">
                <div className={` flex h-350 justify-center items-center overflow-hidden`}>
                    <Image height={500} width={970} alt="blog" src="/assets/images/Digital Marketing Image/Digital Marketing Image 1.webp" className="w-auto max-w-full max-h-full h-auto object-cover" />
                </div>
            </div>
        </div>
    );
};

export default MarkatingPlyer;
