"use client";
import { useState } from "react";

import Button from "@/components/Button";
import ImageURL from "@/components/ImageUrl";

const LeaderShip = ({ reverse, name, description, img, alt, education, experience, designation }) => {
    const [isTab, setIsTab] = useState("education");
    return (
        <div className={`flex justify-between ${reverse ? "md:flex-row-reverse flex-col-reverse" : "md:flex-row flex-col-reverse"}`}>
            <div className=" md:w-1/2">
                <h5 className="text-H5 font-bold mb-1">{name}</h5>
                <p className=" text-subtitle1 font-medium mb-4 text-secondary">{designation}</p>
                <p className={`text-secondary font-light text-justify`}>{description}</p>
                <div className=" border-t border-divider my-4"></div>
                <div>
                    <div className=" flex items-center gap-4 mb-4">
                        <Button onClick={() => setIsTab("education")} size="small" className={`${isTab == "education" ? " bg-primary" : "bg-transparent !text-secondary font-medium !border-none"} capitalize`}>
                            education
                        </Button>
                        <Button onClick={() => setIsTab("experience")} size="small" className={`${isTab == "experience" ? " bg-primary" : "bg-transparent !text-secondary font-medium !border-none"} capitalize`}>
                            experience
                        </Button>
                    </div>
                    <div>
                        {isTab == "education" && <p className={`text-secondary font-light`}>{education}</p>}
                        {isTab == "experience" && <p className={`text-secondary font-light`}>{experience}</p>}
                    </div>
                </div>
            </div>
            <div className="lg:w-1/3 md:w-2/5  my-6 md:my-0 group ">
                <div className="relative group-hover:scale-105 transition-transform duration-300">
                    <div className="h-300 w-300 bg-leader relative rounded-20 mx-6 flex"></div>
                    <div className="absolute h-430 md:left-0 right-0 -bottom-10 flex items-end justify-center w-full ">
                        <ImageURL image={img} alt={alt} height={430} width={430} className="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderShip;
