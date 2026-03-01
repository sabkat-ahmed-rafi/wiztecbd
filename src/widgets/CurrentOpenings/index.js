"use client";
import { useState } from "react";
import Link from "next/link";
import { TbCurrentLocation } from "react-icons/tb";

import VacanciesTable from "@/components/VacanciesTable";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import { options } from "@/app/staticData/career";
import AllJobs from "/public/Json/career.json";
import Select from "@/components/Select";

const CurrentOpenings = () => {
    const [fieldValue, setFieldValue] = useState("");
    return (
        <div>
            <ScrollAnimatedSection>
                <h1 className="text-H1  font-bold md:mb-16 mb-6 text-center">Current Openings</h1>
            </ScrollAnimatedSection>
            <div>
                <div className="flex items-center justify-center md:justify-start gap-2 md:mb-6 mb-4">
                    <span>
                        <TbCurrentLocation size={24} className="text-success_main" />
                    </span>
                    <h5 className=" text-H5 font-semibold">16 open job vacancies</h5>
                </div>
                <form className="flex flex-col md:flex-row items-center justify-between pb-4 border-b border-divider">
                    <h5 className=" text-H5 font-semibold mb-4 md:mb-0 ">Current Openings</h5>

                    <Select options={options} value={fieldValue} multipleValu={false} onChange={setFieldValue} inputClass={"focus:ring-1 w-64 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input px-4 h-9 flex items-center bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main focus:border-success_main"} />
                </form>
                <div className=" py-9 flex flex-col md:gap-6 gap-4 w-full">
                    {AllJobs?.map((data) => {
                        return (
                            <ScrollAnimatedSection key={data.id} delay={`${Number(data.id + "00")}`}>
                                <Link href={`career/${data.id}`}>
                                    <VacanciesTable name={data.name} deadline={data.deadline} vacancies={data.vacancies} />
                                </Link>
                            </ScrollAnimatedSection>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CurrentOpenings;
