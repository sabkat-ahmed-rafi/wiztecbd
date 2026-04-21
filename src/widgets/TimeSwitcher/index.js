"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import api from "@/config/api";

const TimeSwitcher = () => {
    const pathname = usePathname();
    const lastSegment = pathname.replace(/\/+$/, "").split("/").pop();

    const capitalizedPathname = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

    const [webTitleText, setWebTitleText] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await api.get("/api/get-home");
                if (response.data && response.data.home && response.data.home.webTitleText) {
                    setWebTitleText(response.data.home.webTitleText);
                }
            } catch (error) {
                console.error("Error fetching popup image:", error);
            }
        };
        fetchImage();
    }, []);

    useEffect(() => {
        const defaultTitle = pathname == "/" ? "WiztechBD - A Celestial Software House." : `${capitalizedPathname} - WiztechBD - A Celestial Software House.`;

        const alternateTitle = `${webTitleText ?? "WiztechBD"}`;
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
    }, [capitalizedPathname, webTitleText]);

    return null;
};

export default TimeSwitcher;
