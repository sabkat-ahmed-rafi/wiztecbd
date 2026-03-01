"use client";
import useCountOnScroll from "@/hooks/useCountOnScroll";

const OverViewCard = ({ target, label, initialCount, duration, year, icon }) => {
    const { count, elementRef } = useCountOnScroll(target, duration, initialCount);

    return (
        <div ref={elementRef} className="flex flex-col hover-bg-left-to-right z-0 items-center bg-custom-gradient 2xl:py-6 p-4 shadow-xl transform transition duration-500 hover:-translate-y-10px">
            {icon && <span className="h-10 w-10">{icon}</span>}
            <div className="hover-content">
                <h3 className="text-H3 text-primary text-center font-bold mb-2 ">
                    {count}
                    {!year && "+"}
                </h3>
                <p className="text-center text-body1 text-secondary capitalize">{label}</p>
            </div>
        </div>
    );
};

export default OverViewCard;
