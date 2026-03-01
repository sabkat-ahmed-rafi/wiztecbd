import useEdgeScroll from "@/hooks/useEdgeScroll";
import React from "react";

const Tabs = ({ tabs, isTab, setIsTab }) => {
    const scrollContainerRef = useEdgeScroll("horizontal", 5, 25);
    return (
        <div className="pb-4 lg:pb-0 flex mb-10  whitespace-nowrap md:scroll-container overflow-x-auto lg:overflow-x-hidden no-scrollbar" ref={scrollContainerRef}>
            {tabs.map((service) => (
                <span key={service.id} onClick={() => setIsTab(service.id)} className={`py-3 px-4 md:px-5 capitalize cursor-pointer text-body1 transition-all duration-400 focus:outline-none  ${isTab == service.id ? "bg-primary text-white" : ` border-r ${"Consultancy" ? "border-transparent" : "border-divider"}`}`}>
                    <span>{service.label}</span>
                </span>
            ))}
        </div>
    );
};

export default Tabs;
