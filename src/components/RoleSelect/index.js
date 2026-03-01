"use client";
import Image from "next/image";
import { useState } from "react";

const RoleSelect = ({ title, options, selectedValue, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={`relative w-64 p-4 cursor-pointer border border-success_main rounded ${selectedValue ? " bg-black text-white" : "bg-white text-black"} transform hover:scale-105 transition-transform duration-300`} onClick={() => setIsOpen(!isOpen)}>
                <h6 className=" text-subtitle1 font-bold text-center">{title}</h6>
                <p className="mt-2 text-center text-subtitle2">{selectedValue || "Select enviroment..."}</p>
                {isOpen && (
                    <>
                        {isOpen && <div className="fixed inset-0 z-20 " onClick={() => setIsOpen(false)}></div>}
                        <div
                            className={` ${isOpen ? "h-32 shadow-social" : "h-0"} absolute top-full left-0 mt-2 z-30 w-full bg-white text-black opacity-100
                                cursor-pointer overflow-hidden transition-max-height duration-500`}
                        >
                            {options.map((option, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2"
                                    onClick={() => {
                                        onSelect(option);
                                        setIsOpen(false); // Close dropdown after selection
                                    }}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default RoleSelect;
