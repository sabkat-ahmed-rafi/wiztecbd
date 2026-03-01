"use client";
import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Button from "@/components/Button";
import OurFeatureProjects from "../OurFeatureProjects";
import { dremjobData1, dremjobData2, dremjobData3 } from "@/app/staticData/service/ecomerce";

const DreamjobEcom = () => {
    return (
        <>
            <h1 className="text-H1  font-bold mb-16 text-center">Our E-commerce Platform Development Services</h1>
            <div className=" flex flex-col gap-6 md:gap-12">
                <OurFeatureProjects ourFeatureProjectsData={dremjobData1} />
                <OurFeatureProjects reverse ourFeatureProjectsData={dremjobData2} />
                <OurFeatureProjects ourFeatureProjectsData={dremjobData3} />
            </div>
        </>
    );
};

export default DreamjobEcom;
