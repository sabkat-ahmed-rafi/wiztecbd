"use client";
import { useState } from "react";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import Collaps from "@/components/Collaps";

const FaqHome = ({ faqItems = [] }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleCollaps = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div>
            <div className=" md:mb-12 mb-6">
                <ScrollAnimatedSection>
                    <h1 className=" text-center text-H1 font-bold mb-2 uppercase text-black">Faq</h1>
                </ScrollAnimatedSection>
            </div>
            <div className="flex flex-col gap-4">
                {faqItems.length > 0 ? (
                    faqItems.map((item, index) => (
                        <ScrollAnimatedSection key={index} delay={Number(index) * 100}>
                            <Collaps title={item.title} description={item.description} multiDescription={item.multiDescription} isOpen={openIndex === index} onToggle={() => toggleCollaps(index)} />
                        </ScrollAnimatedSection>
                    ))
                ) : (
                    <div className=" h-32 flex items-center justify-center">
                        <h6 className=" text-H6 text-center font-semibold text-black/50">Faq Not Available</h6>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FaqHome;
