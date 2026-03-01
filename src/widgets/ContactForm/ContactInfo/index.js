import React from "react";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import List from "@/components/List";
import { contactData } from "@/app/staticData/home";

const ContactInfo = () => {
    return (
        <div>
            <ScrollAnimatedSection delay={200}>
                <h3 className="text-H3 font-bold text-center mb-5 md:mb-20">What Happens Next?</h3>
            </ScrollAnimatedSection>
            <List lists={contactData} />
        </div>
    );
};

export default ContactInfo;
