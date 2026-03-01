"use client";
import React from "react";

const Button = ({ children, size = "medium", bg = "bg-primary", fullWidth = false, disabled = false, className, onClick = () => {}, type = "submit" }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type={type}
            className={`${className} ${fullWidth ? " w-full" : "w-auto"} z-0 capitalize  hover-bg-left-to-right hover:text-primary cursor-pointer ${bg} text-white flex justify-center items-center ${size == "large" ? "md:px-12 md:py-5 px-8 py-3" : size == "small" ? "md:px-6 md:py-2 px-6 py-2" : size == "medium" ? "md:px-8 md:py-3 px-6 py-3" : ""} transition-all duration-500`}
        >
            <span className="flex items-center gap-4">{children}</span>
        </button>
    );
};

export default Button;
