"use client";
import Image from "next/image";

const RoleSelect = ({ title, selectedValue, onSelect }) => {
    const isSelected = selectedValue === title.toLowerCase();

    return (
        <div 
            className={`w-64 p-4 cursor-pointer border border-success_main rounded ${isSelected ? " bg-black text-white" : "bg-white text-black"} transform hover:scale-105 transition-transform duration-300`} 
            onClick={() => onSelect(title.toLowerCase())}
        >
            <h6 className="text-subtitle1 font-bold text-center">{title}</h6>
            <p className="mt-2 text-center text-subtitle2">{isSelected ? "Selected" : "Click to select"}</p>
        </div>
    );
};

export default RoleSelect;
