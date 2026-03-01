"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const TimeSwitcher = () => {
    const pathname = usePathname();
    const lastSegment = pathname.replace(/\/+$/, "").split("/").pop();

    const capitalizedPathname = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

    useEffect(() => {
        const defaultTitle = pathname == "/" ? "WiztechBD - A Celestial Software House." : `${capitalizedPathname} - WiztechBD - A Celestial Software House.`;

        const alternateTitle = "✨ Your Icon Title";
        document.title = defaultTitle;

        const titleToggle = () => {
            setTimeout(() => {
                document.title = alternateTitle;
                setTimeout(() => {
                    document.title = defaultTitle;
                }, 500);
            }, 500);
        };

        const interval = setInterval(titleToggle, 2000);

        return () => clearInterval(interval);
    }, [capitalizedPathname]);

    return null;
};

export default TimeSwitcher;
