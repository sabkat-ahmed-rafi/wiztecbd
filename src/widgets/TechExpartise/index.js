"use client";
import { useState } from "react";
import Image from "next/image";
import useEdgeScroll from "@/hooks/useEdgeScroll";

const TechExpartise = ({ expertistData, defaultTech }) => {
    const [activeTab, setActiveTab] = useState(defaultTech || expertistData.tabs[0]?.id);

    const scrollContainerRef1 = useEdgeScroll("horizontal", 5, 25); // First instance
    const scrollContainerRef2 = useEdgeScroll("horizontal", 5, 25);

    return (
        <div>
            {/* Tab Headers */}
            <div className={`pb-4 lg:pb-0 md:scroll-container overflow-x-auto md:overflow-x-hidden no-scrollbar ${expertistData.tabs.length >= 9 ? "justify-start" : " md:justify-center"} mb-6 md:mb-12 flex whitespace-nowrap`} ref={scrollContainerRef1}>
                {expertistData.tabs.map((tab, index) => (
                    <span key={tab.id} onClick={() => setActiveTab(tab.id)} className={`p-3 capitalize px-4 md:px-5 cursor-pointer text-subtitle1 transition-all duration-400 focus:outline-none border-r  ${activeTab === tab.id ? "bg-primary text-white" : `text-primary hover:text-success_main  ${index === expertistData.tabs.length - 1 ? "border-transparent" : "border-divider"}`}`}>
                        {tab.label}
                    </span>
                ))}
            </div>

            {/* Tab Content */}
            {expertistData.tabs.map((tab) => {
                if (tab.id !== activeTab) return null;
                return (
                    <div key={tab.id} className={`pb-4 lg:pb-0 md:scroll-container overflow-x-auto md:overflow-x-hidden no-scrollbar flex  gap-4 md:gap-1 ${expertistData[tab.id].length >= 9 ? "justify-start" : expertistData[tab.id].length <= 2 ? " justify-center" : "md:justify-center"}  whitespace-nowrap`} ref={scrollContainerRef2}>
                        {expertistData[tab.id]?.map((item, index) => (
                            <div key={index} className=" md:hover:bg-white bg-white md:bg-transparent p-3 hover:shadow-xl flex flex-col items-center justify-center transform transition duration-400">
                                <div className="flex items-center flex-shrink-0 justify-center md:h-14 h-10 md:w-14 w-10">
                                    <Image height={75} width={75} src={item.icon} alt={item.alt} className="w-auto max-w-full max-h-full h-auto object-cover" />
                                </div>
                                <p className="text-center  pt-2 w-100">{item.name}</p>
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default TechExpartise;
