import React from "react";

import RecruitmentNotice from "@/widgets/RecruitmentNotice";
import { DetailsFilter } from "@/utilities/detailsFilter";
import { vacanciData } from "@/app/staticData/career";
import MiniBanner from "@/components/MiniBanner";
import AllJobs from "/public/Json/career.json";
import JobSummary from "@/widgets/JobSummary";

const Vacancies = ({ params }) => {
    const job_post = DetailsFilter(AllJobs, params.id);

    if (!job_post) {
        return <p>Job not found!</p>;
    }
    return (
        <>
            <section>
                <MiniBanner title={"Executive, Internal Audit"} subtitle={"Explined our Vacancies"} BannerImage="/assets/images/miniBanner/Career.webp" />
            </section>
            <section id={"contentVac"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 md:flex md:space-x-16 space-y-16 md:space-y-0">
                    <div className=" md:w-2/3 w-full">
                        <RecruitmentNotice vacanciData={job_post.summary} />
                    </div>
                    <div className=" md:w-1/3 w-full ">
                        <JobSummary location={job_post.address} vacancies={job_post.vacancies} jobType={job_post.job_type} workingday={job_post.workingday} deadline={job_post.deadline} salary={vacanciData.companiesBanifit.salary} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Vacancies;
