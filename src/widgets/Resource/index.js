import React from "react";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import ImageURL from "@/components/ImageUrl";

const Resource = () => {
    return (
        <>
            <div className="  flex flex-col md:flex-row items-center  mb-6 md:mb-12">
                <div className={` h-370 md:w-1/2 flex mb-4 md:mb-0 md:justify-start justify-center items-center overflow-hidden`}>
                    <ImageURL height={370} width={370} alt="blog" image={"/assets/images/about/About image 2.webp"} className=" rounded-xl rounded-br-75" />
                </div>
                <div className="md:w-1/2">
                    <ScrollAnimatedSection>
                        <h3 className="text-H3 font-bold  pb-6">The Resources:</h3>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={100}>
                        <p className="text-subtitle2 mb-4 text-justify">
                            A highly skilled management team and experienced Board of Directors manage the affairs of the software house. All projects are managed and controlled by a strong project management team consisting of a Project Director, Technical Director, Project Manager, and Coordinator. In addition to the members of the Board, the management is being assisted by a combination of
                            adroit IT, administration, research, and business development staff members.
                        </p>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={200}>
                        <p className="text-subtitle2 text-justify">
                            <span className=" font-semibold">Wizard Software & Technology Bangladesh Ltd.</span> continuously updates its resources on the latest instruments and technologies. Most of the members of <span className=" font-semibold">Wizard Software & Technology Bangladesh Ltd.</span> have the aptitude and talent to maintain the high standards of information & technology of present
                            times.
                        </p>
                    </ScrollAnimatedSection>
                </div>
            </div>
            <div className="  flex flex-col-reverse md:flex-row  ">
                <div className="md:w-1/2">
                    <ScrollAnimatedSection>
                        <h3 className="text-H3 font-bold  pb-6">Business Focus:</h3>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={100}>
                        <p className="text-subtitle2 mb-4 text-justify">
                            <span className=" font-semibold">Wizard Software & Technology Bangladesh Ltd.</span> is working under three integrated and different areas of Information Technology: ICT Services, Application Development, and IT Education. We believe that to fulfill the ever-increasing demands for IT services of our overseas clients and to have a sensible growth in the IT industry of
                            Bangladesh we need to focus on these three different areas.
                        </p>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={200}>
                        <p className="text-subtitle2 mb-4 text-justify">
                            To match the present requirement <span className=" font-semibold">Wizard Software & Technology Bangladesh Ltd.</span> is preparing IT experts with training and is engaged in developing the IT workforce. We believe that IT Education is directly linked to our areas of business of ICT Services and Application development. Besides, our clients can implement the Application
                            Products developed by <span className=" font-semibold">Wizard Software & Technology Bangladesh Ltd.</span>
                            Our clients are assisted by our ICT services and our post-implementation services to ensure the definitive and smooth operation of their businesses.
                        </p>
                    </ScrollAnimatedSection>
                </div>
                <div className={` h-370 md:w-1/2 flex mb-4 md:mb-0 md:justify-end justify-center items-center overflow-hidden`}>
                    <ImageURL height={370} width={370} alt="blog" image={"/assets/images/about/About image 3.webp"} className=" rounded-xl rounded-br-75" />
                </div>
            </div>
        </>
    );
};

export default Resource;
