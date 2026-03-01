import React from "react";

import CourseDetails from "../CourseDetails";
import CourseForm from "../CourseForm";

const CourseOverview = ({ course_overview, facilities, status, link, linkText }) => {
    return (
        <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3 w-full">
                <CourseDetails course_overview={course_overview} />
            </div>
            <div className="md:w-1/3  w-full">
                <CourseForm facilities={facilities} status={status} link={link} linkText={linkText} />
            </div>
        </div>
    );
};

export default CourseOverview;
