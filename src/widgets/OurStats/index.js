import React from "react";
import useCountOnScroll from "@/hooks/useCountOnScroll";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import SelectFilter from "../SelectFilter/index.js";

const OurStats = () => {
    const { count: count1, elementRef: ref1 } = useCountOnScroll(12, 1000); // Example for 'Made it in the Top Charts'
    const { count: count2, elementRef: ref2 } = useCountOnScroll(24, 1000); // Example for 'Projects Successfully Completed'
    const { count: count3, elementRef: ref3 } = useCountOnScroll(36, 1000); // Example for 'Screens Created in Adobe XD'
    const { count: count4, elementRef: ref4 } = useCountOnScroll(10, 1000); // Example for 'Yearly Trips Arranged'

    return (
        <div>
            <div className="md:mb-12 mb-6">
                <ScrollAnimatedSection>
                    <h1 className="text-H1  font-bold mb-6 text-center">We are Defined by Our Stats</h1>
                </ScrollAnimatedSection>
                <div className=" grid md:grid-cols-4 grid-cols-1 md:gap-8 gap-4">
                    <ScrollAnimatedSection delay={200}>
                        <div ref={ref1}>
                            <h1 className="text-H1  font-bold mb-10px text-center">{count1}</h1>
                            <div className=" border-t w-full border-divider"></div>
                            <p className=" text-body2 mt-10px text-center">Made it in the Top Charts</p>
                        </div>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={400}>
                        <div ref={ref2}>
                            <h1 className="text-H1  font-bold mb-10px text-center">{count2}</h1>
                            <div className=" border-t w-full border-divider"></div>
                            <p className=" text-body2 mt-10px text-center">Projects Successfully Completed Since the Inception</p>
                        </div>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={600}>
                        <div ref={ref3}>
                            <h1 className="text-H1  font-bold mb-10px text-center">{count3}</h1>
                            <div className=" border-t w-full border-divider"></div>
                            <p className=" text-body2 mt-10px text-center">Screens Created in Adobe XD</p>
                        </div>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={800}>
                        <div ref={ref4}>
                            <h1 className="text-H1  font-bold mb-10px text-center">{count4}</h1>
                            <div className=" border-t w-full border-divider"></div>
                            <p className=" text-body2 mt-10px text-center">Yearly Trips Arranged</p>
                        </div>
                    </ScrollAnimatedSection>
                </div>
            </div>
            <ScrollAnimatedSection>
                <h1 className="text-H1  font-bold mb-6">Case Studies</h1>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection delay={200}>
                <p className=" text-secondary mb-4">A picture is worth a thousands word.</p>
            </ScrollAnimatedSection>
            {/* <SelectFilter /> */}
        </div>
    );
};

export default OurStats;
// Define options arrays
