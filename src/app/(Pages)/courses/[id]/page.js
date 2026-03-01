import React from "react";

import Banner from "@/components/Banner";
import { RootSection, Section } from "@/components/Section";
import IntroDesign from "@/widgets/IntroDesign";
import CourseOverview from "@/widgets/CourseOverview";
import courses from "/public/Json/courses.json";
import { DetailsFilter } from "@/utilities/detailsFilter";

const CourseDetails = ({ params }) => {
    const courseDetailsData = DetailsFilter(courses, params.id);

    if (!courseDetailsData) {
        return <p>Blog not found!</p>;
    }

    return (
        <RootSection>
            <Section id={"courseBanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner alt="banner" status={courseDetailsData.status} subTitle={courseDetailsData.sub_title} title={courseDetailsData.title} description={courseDetailsData.description} img={courseDetailsData.img} />
                </div>
            </Section>
            <Section id={"courseIntroDesign"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <IntroDesign img={courseDetailsData.introData.img} header={courseDetailsData.introData.header} title={courseDetailsData.introData.title} subheader={courseDetailsData.introData.sub_title} facilities={courseDetailsData.introData.facilities} buttonText={courseDetailsData.link_text} link={courseDetailsData.doc_link} />
                </div>
            </Section>
            <Section id={"CourseOverview"} bgColor="#EEEEEE">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <CourseOverview course_overview={courseDetailsData.course_overview} facilities={courseDetailsData.facilities} status={courseDetailsData.status} link={courseDetailsData.doc_link} linkText={courseDetailsData.link_text} />
                </div>
            </Section>
        </RootSection>
    );
};

export default CourseDetails;
