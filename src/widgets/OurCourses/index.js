"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import { courseList } from "@/app/staticData/course";
import useEdgeScroll from "@/hooks/useEdgeScroll";
import courses from "/public/Json/courses.json";
import EnrollPop from "@/components/EnrolePop";
import Course from "../Course";
import { useRouter } from "next/navigation";

const OurCourses = () => {
    const [tab, setTab] = useState(courses[1].id);
    const scrollContainerRef = useEdgeScroll("horizontal", 5, 25);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const [modalData, setModalData] = useState("");

    const handlEnrole = (e, data) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(true);
        setModalData(data);
    };

    const isActiveTabs = courses.filter((service) => service.status_id == tab);

    const tab_data = courseList.filter((data) => data.id == tab);

    const handleMainClick = (id) => {
        router.push(`/courses/${id}`);
    };

    return (
        <div>
            <div className=" md:mb-12 mb-6">
                <h1 className=" text-center  text-H1   font-bold mb-2">Our Courses</h1>
            </div>
            <div className="md:gap-6 gap-4 md:scroll-container overflow-x-auto md:overflow-x-hidden no-scrollbar flex whitespace-nowrap md:justify-center">
                {courseList.map((list) => (
                    <ScrollAnimatedSection key={list.id} delay={400}>
                        <div onClick={() => setTab(list.id)} className={`flex flex-col z-0 items-center cursor-pointer  hover-bg-left-to-right ${tab == list.id ? "bg-primary text-white" : "bg-white"}  md:p-6 p-4 shadow-xl transform transition duration-500 hover:-translate-y-10px`}>
                            <Image src={list.image1} height={48} width={48} alt="all" className={`${tab == list.id ? "hidden" : "inline"} md:h-12 md:w-12 h-8 w-8  hover-content transform transition duration-500 `} />
                            <Image src={list.image2} height={48} width={48} alt="all" className={`${tab == list.id ? " inline text-white" : "hidden"} md:h-12 md:w-12 h-8 w-8 hover-content transform transition duration-500 `} />
                            <h3 className="md:text-xl  text-center font-bold md:mt-4 mt-2  z-10 capitalize">{list.status} Courses</h3>
                        </div>
                    </ScrollAnimatedSection>
                ))}
            </div>
            {isActiveTabs.length > 0 ? (
                <div className="whitespace-nowrap md:scroll-container overflow-x-auto md:overflow-x-hidden no-scrollbar flex gap-4 mt-6 md:mt-12" ref={scrollContainerRef}>
                    {isActiveTabs.map((data) => (
                        <div onClick={() => handleMainClick(data.id)} key={data.id} className=" cursor-pointer">
                            <Course img={data.img} alt={data.alt} title={data.title} seats={data.facilities.seats} houre={data.facilities.houre} time={data.facilities.time} classes={data.facilities.classes} status={data.status} handlEnrole={handlEnrole} classTime={data.facilities.class} link={data.doc_link} linkText={data.link_text} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className=" h-32 flex items-center justify-center">
                    <h6 className=" text-H6 text-center font-semibold text-black/50 capitalize">{tab_data[0].status} Course Not Available</h6>
                </div>
            )}
            <EnrollPop title={"Course Summary"} isOpen={isOpen} onClose={() => setIsOpen(false)} modalData={modalData} />
        </div>
    );
};

export default OurCourses;
