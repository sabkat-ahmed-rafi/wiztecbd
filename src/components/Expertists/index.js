import Image from "next/image";
import React from "react";

const Expertists = ({ option, onSelect = () => {}, select, onCount = () => {}, count }) => {
    const { label, value, icon, active_icon } = option;
    const isSelected = select.includes(value);

    const techIcon = isSelected ? active_icon : icon;

    const handleIncrement = () => {
        const newCount = Math.min((count || 1) + 1, 10); // Max 10 developers per role
        onCount(newCount);
    };

    const handleDecrement = () => {
        const newCount = Math.max((count || 1) - 1, 1); // Min 1 developer per role
        onCount(newCount);
    };

    return (
        <div className="flex flex-col gap-2">
            <div onClick={() => onSelect(value)} className={`flex flex-col items-center justify-center border border-success_main p-4 rounded cursor-pointer transition-colors ${isSelected ? "bg-black text-white" : "bg-white hover:bg-gray-50"} transform hover:scale-110 transition-transform duration-300`}>
                <Image src={techIcon} alt={label} height={100} width={100} className="h-14 w-14 mb-2" />
                <p className="font-semibold text-center line-clamp-1">{label}</p>
            </div>
            {isSelected && (
                <div className="flex items-center justify-center gap-2 bg-transparent border border-success_main rounded-md px-2 py-1">
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDecrement();
                        }}
                        className="w-6 h-6 flex items-center justify-center bg-success_main text-white rounded hover:bg-success_main/80 transition-colors text-sm font-bold"
                    >
                        -
                    </button>
                    <span className="text-sm font-semibold min-w-[20px] text-center">{count || 1}</span>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleIncrement();
                        }}
                        className="w-6 h-6 flex items-center justify-center bg-success_main text-white rounded hover:bg-success_main/80 transition-colors text-sm font-bold"
                    >
                        +
                    </button>
                </div>
            )}
        </div>
    );
};

export default Expertists;
