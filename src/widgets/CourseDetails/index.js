import React from "react";
import Image from "next/image";

import AutoSwiper from "@/components/AutoSwipper";
import Benefit from "@/components/Benefit";
import ServiceCard from "../ServiceCard";
import List from "@/components/List";
import useArraySplit from "@/hooks/useArraySplit";

const STATIC_COURSE_LAB_IMAGES = [
    "/assets/images/Cources/digital marketing/DM/WhatsApp Image 2025-03-11 at 11.32.33_ffe9922c.jpg",
    "/assets/images/Cources/digital marketing/DM/WhatsApp Image 2025-03-11 at 11.32.46_9590129c.jpg",
    "/assets/images/Cources/digital marketing/DM/WhatsApp Image 2025-03-11 at 11.32.46_fefd34aa.jpg",
    "/assets/images/Cources/digital marketing/DM/WhatsApp Image 2025-03-11 at 11.32.47_6cdf1685.jpg",
    "/assets/images/Cources/Artificial int/AI/WhatsApp Image 2025-03-11 at 11.32.37_1abe3f91.jpg",
    "/assets/images/Cources/Artificial int/AI/WhatsApp Image 2025-03-11 at 11.33.01_9b081da3.jpg",
];

const CourseDetails = ({ course_overview }) => {
    const [firstHalf, secondHalf] = useArraySplit(course_overview.curriculum?.lists || []);

    const [firstjob, second_job] = useArraySplit(course_overview.open_job?.list || []);

    return (
        <div className="">
            <div className=" md:mb-12 mb-6">
                <h2 className="text-H1  font-bold pb-6">{course_overview.title}</h2>
                <p className="">{course_overview.overview}</p>
            </div>
            {course_overview.curriculum && (
                <div className="md:mb-12 mb-6 md:p-6 ">
                    <h3 className="text-H3 text-center md:text-start font-bold pb-6">{course_overview.curriculum.title}</h3>
                    <div className=" flex flex-col xs:flex-row gap-4">
                        <List lists={firstHalf} />
                        <List lists={secondHalf} />
                    </div>
                </div>
            )}
            {course_overview.software_learn && (
                <div className="md:mb-12 mb-6 md:p-6 ">
                    <h3 className="text-H3 font-bold pb-6 text-center md:text-start">{course_overview.software_learn.title}</h3>
                    <div className=" grid sm:grid-cols-2 grid-cols-1 gap-4">
                        {course_overview.software_learn.list.map((benifit) => {
                            return <Benefit key={benifit.id} title={benifit.title} alt={benifit.alt} icon={benifit.icon} description={benifit.description} />;
                        })}
                    </div>
                </div>
            )}

            {course_overview.designed && (
                <div className="md:mb-12 mb-6 md:p-6 ">
                    <h3 className="text-H3 font-bold pb-6 text-center md:text-start">{course_overview.designed.title}</h3>
                    <div className=" grid  md:grid-cols-2 grid-cols-2 sm:grid-cols-2 gap-4">
                        {course_overview.designed.list.map((data, index) => {
                            return <ServiceCard key={index} title={data.title} icon={data.icon} id={data.id} more={false} />;
                        })}
                    </div>
                </div>
            )}
            {course_overview.opportunities && (
                <div className="md:mb-12 mb-6 md:p-6">
                    <h3 className="text-H3 font-bold pb-6 text-center md:text-start">{course_overview.opportunities.title}</h3>
                    <div className=" grid  md:grid-cols-2 grid-cols-2 sm:grid-cols-2 gap-4">
                        {course_overview.opportunities.list.map((data, index) => {
                            return <ServiceCard key={index} seeMore description={data.description} icon={data.icon} id={data.id} more={false} />;
                        })}
                    </div>
                </div>
            )}

            {course_overview.open_job && (
                <div className="md:mb-12 mb-6 md:p-6 ">
                    <h3 className="text-H3 font-bold pb-6 text-center md:text-start">{course_overview.open_job.title}</h3>
                    <div className=" flex flex-col md:flex-row gap-4">
                        <List lists={firstjob} />
                        <List lists={second_job} />
                    </div>
                </div>
            )}
            {course_overview.solutions && (
                <div className="md:mb-12 mb-6 md:p-6 ">
                    <h3 className="text-H3 text-center md:text-start font-bold pb-6">{course_overview.solutions.title}</h3>
                    <div className=" grid  md:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-4">
                        {course_overview.solutions.list.map((data, index) => {
                            return <ServiceCard key={index} seeMore title={data.title} description={data.description} icon={data.icon} id={data.id} more={false} />;
                        })}
                    </div>
                </div>
            )}

            <div>
                <p className=" mb-2 text-center">Please ensure you meet the eligibility criteria before applying. For questions or additional support, feel free to contact for more details-</p>
                <div className=" flex flex-col items-center gap-1">
                    <p className=" font-semibold">
                        📞 Mobile:{" "}
                        <a href="tel:+8801600299169" className=" font-normal hover:text-success_main hover:underline">
                            8801600-299169
                        </a>
                    </p>
                    <p className=" font-semibold">
                        📧 Email:{" "}
                        <a href="mailto:wiztecbd@gmail.com" className=" font-normal hover:text-success_main hover:underline">
                            wiztecbd@gmail.com
                        </a>
                    </p>
                </div>
            </div>
            <div className="md:mb-12 mb-6 md:p-6 ">
                <AutoSwiper pauseOnClick titleClass={" !text-H3"} title={"Your Dream Career Awaits – Start Learning Today!"}>
                    {STATIC_COURSE_LAB_IMAGES.map((img, index) => (
                        <div key={index} className={` h-223 z-0 md:ml-6 justify-center items-center overflow-hidden`}>
                            <Image height={223} width={300} alt="training" loading="lazy" src={img} className=" max-w-full max-h-full h-auto w-auto object-cover" />
                        </div>
                    ))}
                </AutoSwiper>
            </div>
        </div>
    );
};

export default CourseDetails;
