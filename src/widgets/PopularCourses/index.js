"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import { popularCourses } from "@/app/staticData/course";
import useEdgeScroll from "@/hooks/useEdgeScroll";
import courses from "/public/Json/courses.json";
import EnrollPop from "@/components/EnrolePop";
import Tabs from "@/components/Tabs";
import Course from "../Course";

const PopularCourses = () => {
    const [activeTab, setActiveTab] = useState(1);
    const scrollContainerRef1 = useEdgeScroll("horizontal", 5, 25); // First instance
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState("");

    const router = useRouter();

    const handlEnrole = (e, data) => {
        e.preventDefault();
        setIsOpen(true);
        setModalData(data);
    };

    const isActiveTabs = activeTab == 1 ? courses : courses.filter((service) => service.artical_id == activeTab);
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

            {isActiveTabs.length > 0 ? (
                <div className="whitespace-nowrap md:scroll-container overflow-x-auto md:overflow-x-hidden no-scrollbar flex gap-4 mt-6 md:mt-12" ref={scrollContainerRef1}>
                    {isActiveTabs.map((data) => (
                        <div onClick={() => handleMainClick(data.id)} key={data.id} className=" cursor-pointer">
                            <Course img={data.img} alt={data.alt} title={data.title} seats={data.facilities.seats} houre={data.facilities.houre} classes={data.facilities.class} status={data.status} handlEnrole={handlEnrole} classTime={data.facilities.class} link={data.doc_link} linkText={data.link_text} />
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
