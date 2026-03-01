"use client";
import { useState } from "react";
import Image from "next/image";

const Benefit = ({ title, icon, description, alt }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleDescription = () => {
        setIsExpanded((prev) => !prev);
    };
    return (
        <div className=" px-30px py-5 bg-white h-full flex-col flex text-primary hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <div className="flex items-center gap-30px flex-1">
                <Image src={icon} height={42} width={42} alt={alt} className=" h-11 w-11" />
                <p className=" font-bold ">{title}</p>
            </div>
            {description && (
                <>
                    <p onClick={toggleDescription} className={`text-subtitle2 mt-4 ${isExpanded ? "line-clamp-none" : "line-clamp-2"}`}>
                        {description}
                    </p>
                    {description.length > 90 && (
                        <div>
                            <button onClick={toggleDescription} className={`hover:underline hover:text-success_main text-subtitle2`}>
                                {isExpanded ? "See less" : "Show More"}
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Benefit;
