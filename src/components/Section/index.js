"use client";
import React from "react";

import { useScrollBackground } from "@/hooks/useScrollBackground";

export const Section = ({ id, bgColor, children, className }) => {
    return (
        <section id={id} data-bg={bgColor} className={`${className} transition-colors duration-700 ease-in-out`}>
            {children}
        </section>
    );
};

export const RootSection = ({ children }) => {
    const bgColor = useScrollBackground();
    return (
        <div className={`transition-colors duration-700 ease-in-out`} style={{ backgroundColor: bgColor }}>
            {children}
        </div>
    );
};
