"use client";
import React from "react";

import useCountOnScroll from "@/hooks/useCountOnScroll";

const Result = ({ type, content, value }) => {
    const { count, elementRef } = useCountOnScroll(value, 1000); // Example for 'Made it in the Top Charts'

    return (
        <div ref={elementRef}>
            <h1 className="text-H1  font-bold mb-10px text-center">
                {type == "$" && type}
                {count}
                {type == "$" ? "K+" : type == "%" ? type : type == "+" ? "+" : ""}
            </h1>
            <div className=" border-t w-full border-divider"></div>
            <p className=" text-body2 mt-10px text-center">{content}</p>
        </div>
    );
};

export default Result;
