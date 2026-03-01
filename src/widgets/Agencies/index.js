import React from "react";

import ContactButton from "@/components/contactbutton";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import Blog from "../blog";

const Agencies = () => {
    return (
        <div>
            <div className="grid md:grid-cols-3 grid-cols-1 xs:grid-cols-2 gap-4 mb-6 md:mb-12 text-primary">
                <Blog incress={{ ratioName: "Top 5 Keyword Rankings", ratio: 226, ranking: "Monthly Leads", rankingRatio: 122 }} img="/assets/images/Digital Marketing Image/Digital Marketing Image 3.webp" title={"Multiple-Location Orthodontic Practice Group"} description="Conversion Rate Optimization (CRO)" />
                <Blog incress={{ ratioName: "Conversion Rate", ratio: 566, ranking: "Live Chat", rankingRatio: 11400 }} img="/assets/images/Digital Marketing Image/Digital Marketing Image 4.webp" title={"Business Factors"} description="SEO and Pay-Per_Click (PPC) Marketing" />
                <Blog incress={{ ratioName: "Sales Volume", ratio: 350.26, ranking: "Unite Sales", rankingRatio: 451 }} img="/assets/images/Digital Marketing Image/Digital Marketing Image 5.webp" title={"Image 3D"} description="Amazon Advertising" />
            </div>
            <ScrollAnimatedSection>
                <p className=" my-6 md:my-12 text-center">Our digital marketing agency follows a systematic approach to ensure all our online marketing efforts deliver profitable results. Leverage Thrive’s internet marketing services today and let us help you boost your customer acquisition and retention rates.</p>
            </ScrollAnimatedSection>
        </div>
    );
};

export default Agencies;
