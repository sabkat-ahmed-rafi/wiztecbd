"use client";
import React from "react";
import HTMLContentDisplay from "@/components/HTMLContentDisplay";

const RecruitmentNotice = ({ vacanciData }) => {
    return (
        <>
            {vacanciData ? (
                <HTMLContentDisplay content={vacanciData} />
            ) : (
                <p className="text-gray-500 italic">No content available</p>
            )}
        </>
    );
};

export default RecruitmentNotice;
