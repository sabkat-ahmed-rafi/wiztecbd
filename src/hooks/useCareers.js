"use client";
import { useState, useEffect } from "react";

import api from "@/config/api";

const useCareers = () => {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get("/api/get-careers")
            .then((res) => {
                setCareers(res.data.careers || []);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { careers, loading, error };
};

export default useCareers;
