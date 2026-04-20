"use client";
import React from "react";
import { useParams } from "next/navigation";

import Banner from "@/components/Banner";
import { RootSection, Section } from "@/components/Section";
import IntroDesign from "@/widgets/IntroDesign";
import CourseOverview from "@/widgets/CourseOverview";
import useCourse from "@/hooks/useCourse";
import staticCourses from "/public/Json/courses.json";

/**
 * Maps a raw API course object into the nested shape expected by
 * Banner, IntroDesign, and CourseOverview / CourseDetails.
 */
const mapApiCourse = (course) => {
    // Supplement API data with static data for sections the API doesn't provide
    const staticCourse = staticCourses.find((c) => c.id === course.id);

    const facilities = {
        houre: course.hour,
        seats: course.seats,
        time: course.time,
        classes: course.classes,
        day: Array.isArray(course.days) ? course.days.join(", ") : (course.days || ""),
    };

    const introFacilities = [
        { name: "Duration", value: course.duration, type: "month" },
        { name: "Lectures", value: course.lectures },
        { name: "Projects", value: course.projects, type: "plus" },
    ];

    const curriculum =
        course.course_curriculum?.length > 0
            ? {
                  title: "Course Curriculum",
                  lists: course.course_curriculum.map((item, i) => ({ id: i + 1, content: item })),
              }
            : null;

    const software_learn =
        course.softwares_included?.length > 0
            ? {
                  title: "Softwares You'll Learn",
                  list: course.softwares_included.map((s) => ({
                      id: s.id,
                      title: s.name,
                      icon: s.image,
                      alt: s.name,
                  })),
              }
            : null;

    const designed =
        course.designed_for?.length > 0
            ? {
                  title: "This Course is Designed for",
                  list: course.designed_for.map((d) => ({
                      id: d.id,
                      title: d.name,
                      icon: d.image,
                  })),
              }
            : null;

    const opportunities =
        course.career_opportunities?.length > 0
            ? {
                  title: "Career Opportunities",
                  list: course.career_opportunities.map((c) => ({
                      id: c.id,
                      description: c.name,
                      icon: c.image,
                  })),
              }
            : null;

    const open_job =
        course.open_job_positions?.length > 0
            ? {
                  title: "Open Job Positions",
                  list: course.open_job_positions.map((item, i) => ({ id: i + 1, content: item })),
              }
            : null;

    // These two sections are not in the API — use static JSON data by matching course ID
    const solutions = staticCourse?.course_overview?.solutions || null;
    const sliderImage = staticCourse?.course_overview?.sliderImage || (course.image ? [course.image] : []);

    const course_overview = {
        title: "Course Overview",
        overview: course.overview_description,
        curriculum,
        software_learn,
        designed,
        opportunities,
        open_job,
        solutions,
        sliderImage,
    };

    const introData = {
        img: course.image,
        header: course.description,
        title: "Level Up Your Skills",
        sub_title: "Turn Your Passion into a Profession with WiztecBD Training!",
        facilities: introFacilities,
    };

    return {
        id: course.id,
        title: course.title,
        description: course.description,
        img: course.image,
        status: course.course_type,
        apply_link: course.apply_link || null,
        facilities,
        introData,
        course_overview,
    };
};

const CourseDetailsPage = () => {
    const params = useParams();
    const { course, loading, error } = useCourse(params?.id);

    if (loading) {
        return (
            <RootSection>
                <Section id="courseLoading">
                    <div className="container mx-auto px-4 max-w-xl py-32 flex items-center justify-center">
                        <p className="text-H5 font-semibold text-black/50">Loading course...</p>
                    </div>
                </Section>
            </RootSection>
        );
    }

    if (error || !course) {
        return (
            <RootSection>
                <Section id="courseNotFound">
                    <div className="container mx-auto px-4 max-w-xl py-32 flex items-center justify-center">
                        <p className="text-H5 font-semibold text-black/50">Course not found!</p>
                    </div>
                </Section>
            </RootSection>
        );
    }

    const courseData = mapApiCourse(course);

    return (
        <RootSection>
            <Section id={"courseBanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner
                        alt="banner"
                        status={courseData.status}
                        subTitle={courseData.introData.sub_title}
                        title={courseData.title}
                        description={courseData.description}
                        img={courseData.img}
                    />
                </div>
            </Section>
            <Section id={"courseIntroDesign"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <IntroDesign
                        img={courseData.introData.img}
                        header={courseData.introData.header}
                        title={courseData.introData.title}
                        subheader={courseData.introData.sub_title}
                        facilities={courseData.introData.facilities}
                        buttonText={courseData.apply_link ? "Register Now" : null}
                        link={courseData.apply_link}
                    />
                </div>
            </Section>
            <Section id={"CourseOverview"} bgColor="#EEEEEE">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <CourseOverview
                        courseID={courseData.id}
                        course_overview={courseData.course_overview}
                        facilities={courseData.facilities}
                        status={courseData.status}
                        link={courseData.apply_link}
                        linkText={courseData.apply_link ? "Register Now" : null}
                    />
                </div>
            </Section>
        </RootSection>
    );
};

export default CourseDetailsPage;
