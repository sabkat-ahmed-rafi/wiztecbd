"use client";
import React from "react";

import useCountOnScroll from "@/hooks/useCountOnScroll";

const IncresNumber = ({ content, target, initialCount = 0, duration, year = false, parsent = false, up }) => {
    const { count, elementRef } = useCountOnScroll(target, duration, initialCount);
    return (
        <div ref={elementRef}>
            <h1 className=" text-H1 font-bold mb-10px text-center">
                {count}
                {parsent && "%"}
                {up && "+"}
            </h1>
            <div className=" border-t w-full border-divider text-center"></div>
            <p className=" text-body2 mt-10px text-center">{content}</p>
        </div>
    );
};

export default IncresNumber;
