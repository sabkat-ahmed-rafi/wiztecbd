"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

import Button from "@/components/Button";
import ImageURL from "@/components/ImageUrl";

const Project = ({ title, description, img, alt, id }) => {
    const [isExpandedDes, setIsExpandedDes] = useState(false);
    const toggleDescription = (event) => {
        event.preventDefault();
        setIsExpandedDes((prev) => !prev);
    };

    return (
        <div className="p-4 flex flex-col lg:flex-row items-center border border-white/80 group">
            <div className="flex items-center bg-white/90  justify-center flex-shrink-0 h-197  overflow-hidden mb-4 md:mb-0 max-w-300 w-full ">
                <ImageURL height={223} width={223} alt={alt} image={img} className=" group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className=" md:px-4">
                <h6 className=" text-H6 font-bold mb-10px group-hover:text-success_main group-hover:underline transition-all duration-300 ease-in-out">{title}</h6>
                {description && (
                    <p onClick={toggleDescription}>
                        {isExpandedDes == false && description.length > 110 ? description.substring(0, 110) : description}
                        {isExpandedDes == false && description.length > 110 && <span className={`underline text-success_main text-subtitle2 font-medium`}>...Show More</span>}
                    </p>
                )}
                <Link href={`/portfolio/${id}`} className="group flex items-center mt-5 gap-4 ">
                    <Button size="small">
                        Explore More
                        <div className="p-1 rounded-full border transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                            <GoArrowRight />
                        </div>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Project;
