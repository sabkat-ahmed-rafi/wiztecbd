"use client";
import React from "react";

const RecruitmentNotice = ({ vacanciData }) => {
    return <>{vacanciData ? <div dangerouslySetInnerHTML={{ __html: vacanciData }} /> : <p>No content available</p>}</>;
};

export default RecruitmentNotice;
