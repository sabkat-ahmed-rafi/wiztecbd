import React from "react";

const Steper = ({ position = "down", title, description, step }) => {
    return (
        <div className={` flex ${position == "down" ? " flex-col" : position == "up" ? "flex-col-reverse" : "flex-col"} group`}>
            <div className={`flex items-center justify-center ${position == "down" ? " flex-col" : position == "up" ? "flex-col-reverse" : "flex-col"} mb-2 transform group-hover:scale-110 transition-transform duration-300`}>
                <div className=" md:p-3 p-2 border-2 border-white rounded-full inline-block">
                    <div className=" rounded-full bg-white md:h-20 md:w-20 h-14 w-14 flex justify-center items-center">
                        <span className=" text-center  font-bold">
                            Step <br /> {step}
                        </span>
                    </div>
                </div>
                <div className=" md:h-6 h-4 w-0.5 bg-white"></div>
                <div className=" md:h-4 rounded-full inline-block md:w-4 h-2 w-2 bg-white"></div>
            </div>
            <div>
                <h4 className="  text-subtitle1 text-center font-bold mb-2 capitalize"> {title}</h4>
                <p className="text-center text-subtitle2 mb-4 px-4 line-clamp-2 md:line-clamp-none">{description}</p>
            </div>
        </div>
    );
};

export default Steper;
