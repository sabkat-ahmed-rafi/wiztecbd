"use client";
import React, { useState } from "react";

import Button from "@/components/Button";
import ImageURL from "@/components/ImageUrl";

const Blog = ({ img, artical, date, title, description, button, incress }) => {
    const [isExpandedDes, setIsExpandedDes] = useState(false);

    const toggleDescription = (event) => {
        event.preventDefault();
        setIsExpandedDes((prev) => !prev);
    };

    return (
        <div className="border bg-white border-divider flex flex-col h-full group">
            <div className="relative flex-shrink-0">
                <div className={`h-223 flex justify-center bg-black/5 items-center overflow-hidden`}>
                    <ImageURL height={223} width={374} alt="blog" image={img} className="group-hover:scale-105 transition-transform duration-300" />
                </div>
            </div>
            <div className=" p-4 flex-1 flex flex-col">
                <div className="mb-auto">
                    {artical && (
                        <div className="flex items-center gap-1 mb-2">
                            <p className="text-subtitle2 uppercase text-success_main font-medium">Article</p>
                            <p className="capitalize font-medium text-gray600 ">| In {artical}</p>
                        </div>
                    )}
                    {title && <h6 className={`text-H6 font-semibold line-clamp-2 group-hover:text-success_main group-hover:underline transition-all duration-300 ease-in-out`}>{title}</h6>}
                    {description && (
                        <p onClick={toggleDescription} className={`text-secondary`}>
                            {isExpandedDes == false && description.length > 110 ? description.substring(0, 110) : description}
                            {isExpandedDes == false && description.length > 110 && <span className={`text-subtitle2 font-medium`}>...</span>}
                        </p>
                    )}
                </div>
                <p className="text-end text-subtitle2 text-gray600 mt-4">{date}</p>
                {button && (
                    <Button size="small">
                        <span>{button}</span>
                    </Button>
                )}
                {incress && (
                    <div className=" flex items-center justify-between gap-2">
                        <div className="p-1 py-2 border border-success_main max-w-150 w-full">
                            <h6 className="  text-subtitle2 font-semibold text-center">+{incress.ratio}%</h6>
                            <p className=" text-caption text-secondary text-center">{incress.ratioName}</p>
                        </div>
                        <div className="p-1 py-2 border border-success_main max-w-150 w-full">
                            <h6 className="  text-subtitle2 font-semibold text-center">+{incress.rankingRatio}%</h6>
                            <p className=" text-caption text-secondary text-center">{incress.ranking}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
