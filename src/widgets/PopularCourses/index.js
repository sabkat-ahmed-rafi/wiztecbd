"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import { popularCourses } from "@/app/staticData/course";
import useEdgeScroll from "@/hooks/useEdgeScroll";
import useCourses from "@/hooks/useCourses";
import EnrollPop from "@/components/EnrolePop";
import Tabs from "@/components/Tabs";
import Course from "../Course";

const PopularCourses = () => {
    const [activeTab, setActiveTab] = useState(1);
    const scrollContainerRef1 = useEdgeScroll("horizontal", 5, 25);
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState("");
    const router = useRouter();

    const { courses, loading, error } = useCourses();

    const handlEnrole = (e, data) => {
        e.preventDefault();
        setIsOpen(true);
        setModalData(data);
    };

    // Tab 1 = all, other tabs filter by artical_id — API doesn't have artical_id so non-All tabs show empty
    const isActiveTabs = activeTab === 1 ? courses : [];

    const handleMainClick = (id) => {
        router.push(`/courses/${id}`);
    };

    return (
        <>
            <div className="md:mb-12 mb-6">
                <ScrollAnimatedSection>
                    <h1 className=" text-center  text-H1   font-bold mb-2">Popular Courses</h1>
                </ScrollAnimatedSection>
            </div>
            <Tabs tabs={popularCourses} isTab={activeTab} setIsTab={setActiveTab} />

            {loading ? (
                <div className=" h-256 flex items-center justify-center">
                    <p className="text-H6 text-center font-semibold text-black/50">Loading courses...</p>
                </div>
            ) : error ? (
                <div className=" h-256 flex items-center justify-center">
                    <p className="text-H6 text-center font-semibold text-black/50">Failed to load courses.</p>
                </div>
            ) : isActiveTabs.length > 0 ? (
                <div className="whitespace-nowrap md:scroll-container overflow-x-auto md:overflow-x-hidden no-scrollbar flex gap-4 mt-6 md:mt-12" ref={scrollContainerRef1}>
                    {isActiveTabs.map((data) => (
                        <div onClick={() => handleMainClick(data.id)} key={data.id} className=" cursor-pointer">
                            <Course
                                id={data.id}
                                img={data.image}
                                alt={data.title}
                                title={data.title}
                                seats={data.seats}
                                houre={data.hour}
                                classes={data.classes}
                                status={data.course_type}
                                handlEnrole={handlEnrole}
                                classTime={null}
                                link={data.apply_link || null}
                                linkText={"Register Now"}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className=" h-256 flex items-center justify-center">
                    <h6 className=" text-H6 text-center font-semibold text-black/50">Course Not Available</h6>
                </div>
            )}
            <EnrollPop title={"Course Summary"} isOpen={isOpen} onClose={() => setIsOpen(false)} modalData={modalData} />
        </>
    );
};

export default PopularCourses;
