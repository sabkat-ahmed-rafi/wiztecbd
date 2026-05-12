import React from "react";

import CourseDetails from "../CourseDetails";
import CourseForm from "../CourseForm";

const CourseOverview = ({ courseID, course_overview, facilities, status, link, linkText, price }) => {
    return (
        <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3 w-full">
                <CourseDetails course_overview={course_overview} />
            </div>
            <div className="md:w-1/3  w-full">
                <CourseForm courseID={courseID} facilities={facilities} status={status} link={link} linkText={linkText} price={price} />
            </div>
        </div>
    );
};

export default CourseOverview;
