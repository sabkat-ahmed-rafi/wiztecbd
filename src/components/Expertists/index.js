import Image from "next/image";
import React from "react";

const Expertists = ({ option, onSelect = () => {}, select, onCount = () => {}, count }) => {
    const { label, value, icon, active_icon } = option;
    const isSelected = select.includes(value);

    const techIcon = isSelected ? active_icon : icon;

    return (
        <div className="flex flex-col gap-2">
            <div onClick={() => onSelect(value)} className={`flex flex-col items-center justify-center border border-success_main p-4 rounded cursor-pointer transition-colors ${isSelected ? "bg-black text-white" : "bg-white hover:bg-gray-50"} transform hover:scale-110 transition-transform duration-300`}>
                <Image src={techIcon} alt={label} height={100} width={100} className="h-14 w-14 mb-2" />
                <p className="font-semibold text-center line-clamp-1">{label}</p>
            </div>
            {isSelected && <input value={count} onChange={(e) => onCount(e.target.value)} autoFocus placeholder="Count" type="number" min="1" className="px-2 py-1 w-full bg-transparent placeholder:text-body2 text-body2 input-no-arrows outline-none border font-light border-success_main rounded-md focus:ring-1 focus:ring-success_main" />}
        </div>
    );
};

export default Expertists;
